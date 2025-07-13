
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface QuoteRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  quantity?: string;
  paper_type?: string;
  format?: string;
  description?: string;
  file_urls?: string[];
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    );

    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    const quoteData: QuoteRequest = await req.json();

    // Save to database
    const { data, error } = await supabaseClient
      .from("quote_requests")
      .insert([quoteData])
      .select()
      .single();

    if (error) {
      console.error("Database error:", error);
      throw new Error("Failed to save quote request");
    }

    // Prepare file attachments if any
    let attachments: any[] = [];
    if (quoteData.file_urls && quoteData.file_urls.length > 0) {
      console.log("Processing file attachments:", quoteData.file_urls);
      
      for (const fileUrl of quoteData.file_urls) {
        try {
          // Extract filename from URL
          const urlParts = fileUrl.split('/');
          const filename = urlParts[urlParts.length - 1];
          
          // Fetch the file content
          const fileResponse = await fetch(fileUrl);
          if (fileResponse.ok) {
            const fileBuffer = await fileResponse.arrayBuffer();
            const base64Content = btoa(String.fromCharCode(...new Uint8Array(fileBuffer)));
            
            attachments.push({
              filename: filename,
              content: base64Content,
              content_type: fileResponse.headers.get('content-type') || 'application/octet-stream'
            });
          } else {
            console.error("Failed to fetch file:", fileUrl, fileResponse.status);
          }
        } catch (fileError) {
          console.error("Error processing file:", fileUrl, fileError);
        }
      }
    }

    // Send email notification
    const emailContent = `
      <h2>Nová cenová ponuka</h2>
      <p><strong>Meno:</strong> ${quoteData.name}</p>
      <p><strong>Email:</strong> ${quoteData.email}</p>
      ${quoteData.phone ? `<p><strong>Telefón:</strong> ${quoteData.phone}</p>` : ""}
      ${quoteData.company ? `<p><strong>Firma:</strong> ${quoteData.company}</p>` : ""}
      <p><strong>Služba:</strong> ${quoteData.service}</p>
      ${quoteData.quantity ? `<p><strong>Množstvo:</strong> ${quoteData.quantity}</p>` : ""}
      ${quoteData.paper_type ? `<p><strong>Typ papiera:</strong> ${quoteData.paper_type}</p>` : ""}
      ${quoteData.format ? `<p><strong>Formát:</strong> ${quoteData.format}</p>` : ""}
      ${quoteData.description ? `<p><strong>Popis:</strong> ${quoteData.description}</p>` : ""}
      ${attachments.length > 0 ? 
        `<p><strong>Počet príloh:</strong> ${attachments.length}</p>` 
        : ""
      }
      <hr>
      <p><small>Žiadosť ID: ${data.id}</small></p>
    `;

    const emailPayload: any = {
      from: "Li-nox Cenové ponuky <onboarding@resend.dev>",
      to: ["rezdencsgo@gmail.com"],
      subject: `Nová cenová ponuka od ${quoteData.name}`,
      html: emailContent,
    };

    // Add attachments if any
    if (attachments.length > 0) {
      emailPayload.attachments = attachments;
    }

    const emailResponse = await resend.emails.send(emailPayload);

    console.log("Email sent successfully:", emailResponse);
    console.log("Attachments processed:", attachments.length);

    return new Response(
      JSON.stringify({ 
        success: true, 
        id: data.id,
        message: "Cenová ponuka bola úspešne odoslaná",
        attachments_processed: attachments.length
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-quote-request function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
