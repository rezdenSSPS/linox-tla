
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, User } from 'lucide-react';
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-indigo-600" />
                  <span>Kontaktné údaje</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Adresa</h3>
                    <p className="text-gray-600">
                      LI-NOX Tlačiarne a vydavateľstvo<br />
                      Rimavská Sobota<br />
                      Slovenská republika
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefón</h3>
                    <p className="text-gray-600">+421 XXX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@li-nox.sk</p>
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

            <Card>
              <CardHeader>
                <CardTitle>Vlastník firmy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-indigo-600" />
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
            <Card>
              <CardHeader>
                <CardTitle>Kde nás nájdete</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <p className="text-gray-500">Mapa - Rimavská Sobota</p>
                </div>
                <p className="text-gray-600">
                  Naša tlačiareň sa nachádza v centre Rimavskej Soboty vo vlastných 
                  priestoroch v prestavanom rodinnom dome. Dom prešiel úplnou rekonštrukciou
                  a boli dostavané nové prevádzkové a skladové priestory.
                </p>
              </CardContent>
            </Card>

            <Card>
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
                    Zavolajte nám počas pracovných hodín alebo napíšte email
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Osobná návšteva:</h4>
                  <p className="text-gray-600">
                    Vítame vás v našich priestoroch po predchádzajúcom telefonickom dohovore
                  </p>
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
