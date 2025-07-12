
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image, Shirt, Package, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Sietotlac = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
            <Image className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Sieťotlač</h1>
          <div className="w-20 h-1 bg-indigo-600 rounded mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Špecializovaná sieťotlač na textil, plastové materiály a neštandardné povrchy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shirt className="w-5 h-5 text-indigo-600" />
                  <span>Tlač na textil</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Sieťotlač je ideálna pre potlačenie textilných materiálov. Farby sú odolné 
                  voči praniu a zachovávajú si sviežosť aj po dlhom používaní.
                </p>
                <div className="space-y-2">
                  {[
                    "Tričká a mikiny", 
                    "Pracovné odevy",
                    "Športové dresy",
                    "Textilné etikety",
                    "Tašky a batohy",
                    "Čiapky a šiltovky"
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
                  <Package className="w-5 h-5 text-indigo-600" />
                  <span>Iné materiály</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    "Plastové materiály",
                    "Kovové povrchy", 
                    "Sklenené predmety",
                    "Keramika",
                    "Drevené výrobky",
                    "Samolepiace fólie"
                  ].map((material, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{material}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80"
              alt="Sieťotlač proces"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Výhody sieťotlače</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sieťotlač umožňuje tlač na rôzne materiály a povrchy, ktoré nie sú vhodné 
                  pre tradičnú tlač. Výsledok je odolný a dlhotrvajúci.
                </p>
                <p>
                  Táto technika je ideálna pre malé aj veľké série, kde potrebujete 
                  vysokokvalitný a odolný výsledok.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Využitie sieťotlače</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Firemná identita",
                items: ["Pracovné odevy", "Firemné tašky", "Promocijné predmety"],
                icon: Package
              },
              {
                title: "Športové tímy", 
                items: ["Dresy", "Tréningové oblečenie", "Fanúšikovské predmety"],
                icon: Shirt
              },
              {
                title: "Osobné účely",
                items: ["Darčekové predmety", "Jedinečné tričká", "Rodinné oblečenie"],
                icon: Image
              }
            ].map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <category.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="text-gray-600">{item}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900">Potrebujete sieťotlač?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kontaktujte nás s vašimi nápadmi a my vám poradíme najlepšie riešenie
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

export default Sietotlac;
