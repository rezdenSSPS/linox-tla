
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, Send, CheckCircle, FileImage } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Cennik = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    description: '',
    quantity: '',
    format: '',
    deadline: ''
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { value: 'knihtlac', label: 'Kníhtlač' },
    { value: 'ofset', label: 'Ofsetová tlač' },
    { value: 'sietotlac', label: 'Sieťotlač' },
    { value: 'knihviazacstvo', label: 'Kníhviazačstvo' },
    { value: 'reklama', label: 'Reklama' },
    { value: 'grafika', label: 'Grafické štúdio' },
    { value: 'peciatky', label: 'Pečiatky a razítka' },
    { value: 'ine', label: 'Iné služby' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Požiadavka odoslaná!",
        description: "Vaša požiadavka na cenovú ponuku bola úspešne odoslaná. Odpovieme vám do 24 hodín.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        description: '',
        quantity: '',
        format: '',
        deadline: ''
      });
      setFiles([]);
    } catch (error) {
      toast({
        title: "Chyba",
        description: "Nastala chyba pri odosielaní. Skúste to prosím znovu.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Cenník a cenová ponuka</h1>
          <div className="w-20 h-1 bg-indigo-600 rounded mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pošlite nám podrobnosti vašej objednávky a my vám pripravíme individuálnu cenovú ponuku na mieru
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Price Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Prečo si vybrať nás?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">✓ 30+ rokov skúseností</h4>
                  <p className="text-sm text-gray-600">Dlhoročná tradícia a spoľahlivosť</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">✓ Moderné technológie</h4>
                  <p className="text-sm text-gray-600">Digitálny ofset a najnovšie vybavenie</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">✓ Kvalitné materiály</h4>
                  <p className="text-sm text-gray-600">Používame len overené a kvalitné materiály</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">✓ Konkurenčné ceny</h4>
                  <p className="text-sm text-gray-600">Najlepší pomer cena/kvalita</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rýchly kontakt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600">
                  Pre rýchlu odpoveď nás môžete kontaktovať aj priamo:
                </p>
                <div className="space-y-2 text-sm">
                  <div><strong>Telefón:</strong> +421 XXX XXX XXX</div>
                  <div><strong>Email:</strong> info@li-nox.sk</div>
                  <div><strong>Otváracie hodiny:</strong> Po-Pi 8:00-16:00</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Požiadavka na cenovú ponuku</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Meno a priezvisko *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        placeholder="Vaše celé meno"
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
                        placeholder="vas@email.sk"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefón</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+421 XXX XXX XXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Kategória služby *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Vyberte kategóriu" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat.value} value={cat.value}>
                              {cat.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Počet kusov</Label>
                      <Input
                        id="quantity"
                        value={formData.quantity}
                        onChange={(e) => handleInputChange('quantity', e.target.value)}
                        placeholder="napr. 100 ks"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="format">Formát</Label>
                      <Input
                        id="format"
                        value={formData.format}
                        onChange={(e) => handleInputChange('format', e.target.value)}
                        placeholder="napr. A4, A5, vlastný"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deadline">Termín dodania</Label>
                      <Input
                        id="deadline"
                        type="date"
                        value={formData.deadline}
                        onChange={(e) => handleInputChange('deadline', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Podrobný popis objednávky *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      required
                      rows={4}
                      placeholder="Popíšte čo presne potrebujete - typ tlače, farby, papier, dokončovanie, atď..."
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-4">
                    <Label>Prílohy (obrázky, návrhy, dokumenty)</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-400 transition-colors">
                      <input
                        type="file"
                        multiple
                        accept="image/*,.pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600">Kliknite pre nahranie súborov</p>
                        <p className="text-sm text-gray-400 mt-1">
                          Podporované formáty: JPG, PNG, PDF, DOC (max. 10MB každý)
                        </p>
                      </label>
                    </div>

                    {/* Uploaded Files */}
                    {files.length > 0 && (
                      <div className="space-y-2">
                        {files.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                            <div className="flex items-center space-x-2">
                              <FileImage className="w-4 h-4 text-gray-500" />
                              <span className="text-sm font-medium">{file.name}</span>
                              <span className="text-xs text-gray-500">
                                ({(file.size / 1024 / 1024).toFixed(2)} MB)
                              </span>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                              className="text-red-600 hover:text-red-700"
                            >
                              Odstrániť
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-indigo-600 hover:bg-indigo-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Odosielam...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Odoslať požiadavku
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    * Povinné polia. Odpovieme vám do 24 hodín na váš email.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cennik;
