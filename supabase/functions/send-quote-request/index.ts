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
      ${quoteData.file_urls && quoteData.file_urls.length > 0 ? 
        `<p><strong>Súbory:</strong><br>${quoteData.file_urls.map(url => `<a href="${url}">${url}</a>`).join('<br>')}</p>` 
        : ""
      }
      <hr>
      <p><small>Žiadosť ID: ${data.id}</small></p>
    `;

    const emailResponse = await resend.emails.send({
      from: "Li-nox Cenové ponuky <onboarding@resend.dev>",
      to: ["rezdencsgo@gmail.com"],
      subject: `Nová cenová ponuka od ${quoteData.name}`,
      html: emailContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        id: data.id,
        message: "Cenová ponuka bola úspešne odoslaná"
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