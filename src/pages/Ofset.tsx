
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Printer, Cog, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Ofset = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
            <Printer className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Ofsetová tlač</h1>
          <div className="w-20 h-1 bg-indigo-600 rounded mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vysokoqualitná ofsetová tlač pre veľké náklady s digitálnym ofsetovým strojom
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cog className="w-5 h-5 text-indigo-600" />
                  <span>Digitálny ofsetový stroj</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Od roku 2008 používame moderný digitálny ofsetový stroj, ktorý nám umožňuje 
                  poskytovať vysokokvalitné tlačové služby s presnosťou a rýchlosťou.
                </p>
                <div className="space-y-2">
                  {[
                    "Presná reprodukcia farieb",
                    "Vysoké rozlíšenie tlače", 
                    "Rýchla výroba",
                    "Konzistentná kvalita",
                    "Ekonomické pre veľké náklady"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-indigo-600" />
                  <span>Čo tlačíme</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Farebné plagáty",
                    "Firemné tlačivá",
                    "Katalógy a brožúry",
                    "Hlavičkové papiere",
                    "Reklamné materiály",
                    "Poštové poukážky",
                    "Kalendáre",
                    "Letáky a oznamy"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
              alt="Ofsetová tlač"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Prečo ofsetová tlač?</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Ofsetová tlač je ideálna pre veľké náklady, kde je potrebná vysoká kvalita 
                  a konzistentnosť výsledku. Náš digitálny ofsetový stroj kombinuje tradičnú 
                  kvalitu ofsetu s rýchlosťou digitálnych technológií.
                </p>
                <p>
                  Dokážeme spracovať náročné farebné objednávky rôzneho charakteru na výkonných 
                  počítačoch novej generácie s prídavnými zariadeniami.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Finishing Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Dokončovacie služby</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Laminácia", desc: "Ochranná laminátová fólia" },
              { title: "Zlatenie", desc: "Luxusné zlaté a strieborné efekty" },
              { title: "Výsek", desc: "Tvarovanie podľa vašich požiadaviek" },
              { title: "Flokácia", desc: "Zamatový povrch pre luxusný vzhľad" }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900">Potrebujete ofsetovú tlač?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kontaktujte nás pre konzultáciu a cenovú ponuku prispôsobenú vašim potrebám
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cennik">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Získať cenovú ponuku
              </Button>
            </Link>
            <Link to="/kontakt">
              <Button size="lg" variant="outline">
                Kontaktovať nás
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Ofset;
