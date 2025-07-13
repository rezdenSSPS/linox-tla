-- Create table for quote requests
CREATE TABLE public.quote_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service TEXT NOT NULL,
  quantity TEXT,
  paper_type TEXT,
  format TEXT,
  description TEXT,
  file_urls TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting quote requests (anyone can submit)
CREATE POLICY "Anyone can insert quote requests" 
ON public.quote_requests 
FOR INSERT 
WITH CHECK (true);

-- Create policy for viewing quote requests (only for authenticated users if needed)
CREATE POLICY "Anyone can view quote requests" 
ON public.quote_requests 
FOR SELECT 
USING (true);

-- Create storage bucket for quote files
INSERT INTO storage.buckets (id, name, public) VALUES ('quote-files', 'quote-files', true);

-- Create storage policies for quote files
CREATE POLICY "Anyone can upload quote files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'quote-files');

CREATE POLICY "Anyone can view quote files" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'quote-files');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_quote_requests_updated_at
BEFORE UPDATE ON public.quote_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();