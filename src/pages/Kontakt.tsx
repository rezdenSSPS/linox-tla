import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, User, Globe, Building } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Kontakt</h1>
          <div className="w-20 h-1 bg-indigo-600 rounded mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Neváhajte nás kontaktovať pre akékoľvek otázky alebo informácie o našich službách
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="w-5 h-5 text-indigo-600" />
                  <span>Li-nox s. r. o. - Tlačiareň</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Adresa</h3>
                    <p className="text-gray-600">
                      Sedliacka 44<br />
                      979 01 Rimavská Sobota<br />
                      Slovakia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefón</h3>
                    <div className="text-gray-600 space-y-1">
                      <p><strong>Pevná linka:</strong> +421 (0)47 58 11 444</p>
                      <p><strong>Mobil:</strong> +421 905 274 652</p>
                      <p><strong>Mobil:</strong> +421 949 493 971</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:linoxrs@gmail.com" className="text-indigo-600 hover:underline">
                        linoxrs@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Web</h3>
                    <p className="text-gray-600">
                      <a href="http://www.li-nox.sk" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                        www.li-nox.sk
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Otváracie hodiny</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Pondelok - Piatok: 8:00 - 16:00</p>
                      <p>Sobota - Nedeľa: Zatvorené</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Vlastník firmy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Ladislav LINDIS</h3>
                    <p className="text-gray-600">Majiteľ a zakladateľ</p>
                    <p className="text-sm text-gray-500 mt-1">Založenie firmy: 1990</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Kde nás nájdete</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4 shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2654.123456789!2d20.0123456!3d48.3789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSedliacka%2044%2C%20979%2001%20Rimavsk%C3%A1%20Sobota%2C%20Slovakia!5e0!3m2!1sen!2ssk!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Li-nox s.r.o. - Mapa"
                  ></iframe>
                </div>
                <p className="text-gray-600">
                  Naša tlačiareň sa nachádza na ulici Sedliacka 44 v Rimavskej Sobote. 
                  Priestory sú umiestnené vo vlastnom objekte, ktorý prešiel úplnou rekonštrukciou
                  a boli dostavané nové prevádzkové a skladové priestory.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Ako nás kontaktovať</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Pre cenovú ponuku:</h4>
                  <p className="text-gray-600">
                    Najrychlejším sposobom je vyplnenie formulára na stránke 
                    <a href="/cennik" className="text-indigo-600 hover:underline ml-1">Cenník</a>
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Pre rýchle otázky:</h4>
                  <p className="text-gray-600">
                    Zavolajte nám na <a href="tel:+421905274652" className="text-indigo-600 hover:underline">+421 905 274 652</a> počas pracovných hodín 
                    alebo napíšte email na <a href="mailto:linoxrs@gmail.com" className="text-indigo-600 hover:underline">linoxrs@gmail.com</a>
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Osobná návšteva:</h4>
                  <p className="text-gray-600">
                    Vítame vás v našich priestoroch po predchádzajúcom telefonickom dohovore
                  </p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-indigo-900 mb-2">Rýchly kontakt</h4>
                  <div className="space-y-1 text-sm text-indigo-700">
                    <p>📞 <a href="tel:+421905274652" className="hover:underline">+421 905 274 652</a></p>
                    <p>📧 <a href="mailto:linoxrs@gmail.com" className="hover:underline">linoxrs@gmail.com</a></p>
                    <p>🌐 <a href="http://www.li-nox.sk" target="_blank" rel="noopener noreferrer" className="hover:underline">www.li-nox.sk</a></p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Kontakt;