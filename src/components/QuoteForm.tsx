import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    quantity: '',
    paper_type: '',
    format: '',
    description: ''
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    'Kníhtlač',
    'Ofsetová tlač',
    'Sieťotlač',
    'Kníhviazačstvo',
    'Reklama',
    'Predaj papiera',
    'Pečiatky-razítka',
    'Grafické studio',
    'Vydavateľstvo'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const uploadFiles = async (): Promise<string[]> => {
    const uploadedUrls: string[] = [];
    
    for (const file of files) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random()}.${fileExt}`;
      
      const { data, error } = await supabase.storage
        .from('quote-files')
        .upload(fileName, file);

      if (error) {
        console.error('File upload error:', error);
        throw new Error(`Chyba pri nahrávaní súboru: ${file.name}`);
      }

      const { data: urlData } = supabase.storage
        .from('quote-files')
        .getPublicUrl(fileName);
      
      uploadedUrls.push(urlData.publicUrl);
    }
    
    return uploadedUrls;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.service) {
      toast({
        title: "Chyba",
        description: "Vyplňte prosím všetky povinné polia (meno, email, služba)",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      let fileUrls: string[] = [];
      
      if (files.length > 0) {
        fileUrls = await uploadFiles();
      }

      const { data, error } = await supabase.functions.invoke('send-quote-request', {
        body: {
          ...formData,
          file_urls: fileUrls
        }
      });

      if (error) throw error;

      toast({
        title: "Úspech!",
        description: "Vaša cenová ponuka bola úspešne odoslaná. Budeme vás kontaktovať čoskoro.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        quantity: '',
        paper_type: '',
        format: '',
        description: ''
      });
      setFiles([]);
      
      // Reset file input
      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error: any) {
      console.error('Submit error:', error);
      toast({
        title: "Chyba",
        description: error.message || "Nastala chyba pri odosielaní formulára. Skúste to prosím znovu.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-lg border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-blue-900">
          Požiadavka na cenovú ponuku
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Meno *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Telefón</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Firma</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Služba *</Label>
            <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Vyberte službu" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quantity">Množstvo</Label>
              <Input
                id="quantity"
                placeholder="napr. 100 ks"
                value={formData.quantity}
                onChange={(e) => handleInputChange('quantity', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="paper_type">Typ papiera</Label>
              <Input
                id="paper_type"
                placeholder="napr. 80g biel"
                value={formData.paper_type}
                onChange={(e) => handleInputChange('paper_type', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="format">Formát</Label>
              <Input
                id="format"
                placeholder="napr. A4"
                value={formData.format}
                onChange={(e) => handleInputChange('format', e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Popis požiadavky</Label>
            <Textarea
              id="description"
              placeholder="Opíšte detailne vašu požiadavku..."
              rows={4}
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="file-upload">Priložiť súbory</Label>
            <div className="flex items-center gap-2">
              <Input
                id="file-upload"
                type="file"
                multiple
                onChange={handleFileChange}
                className="flex-1"
              />
              <Upload className="w-5 h-5 text-blue-600" />
            </div>
            {files.length > 0 && (
              <div className="text-sm text-gray-600">
                Vybrané súbory: {files.map(f => f.name).join(', ')}
              </div>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              'Odosielam...'
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Odoslať požiadavku
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuoteForm;