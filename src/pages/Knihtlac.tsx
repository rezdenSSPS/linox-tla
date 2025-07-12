
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText, Palette, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Knihtlac = () => {
  const services = [
    "Knihy všetkých formátov",
    "Brožúry a katalógy", 
    "Časopisy a periodiká",
    "Diplomové a záverečné práce",
    "Firemné brožúry",
    "Technické manuály",
    "Školské učebnice",
    "Literárne diela"
  ];

  const advantages = [
    "Vysoká kvalita tlače",
    "Rôzne formáty papiera",
    "Farebná i čiernobiela tlač",
    "Rýchle dodanie",
    "Konkurenčné ceny",
    "Profesionálne spracovanie"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
            <BookOpen className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Kníhtlač</h1>
          <div className="w-20 h-1 bg-indigo-600 rounded mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesionálna tlač kníh, brožúr a periodík všetkých formátov s využitím moderných technológií
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Services */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-indigo-600" />
                  <span>Čo tlačíme</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Palette className="w-5 h-5 text-indigo-600" />
                  <span>Naše výhody</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{advantage}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Image and Description */}
          <div className="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Kníhtlač proces"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">O našej kníhtlači</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Naša kníhtlačovňa je vybavená modernými strojmi, ktoré nám umožňují tlačiť 
                  knihy a brožúry vo všetkých štandardných aj nestandardných formátoch.
                </p>
                <p>
                  Používame kvalitné papiere a farby, ktoré zabezpečujú dlhú životnosť 
                  a profesionálny vzhľad vašich publikácií.
                </p>
                <p>
                  Špecializujeme sa na malé aj veľké náklady, od jediného kusu až po tisíce exemplárov.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Proces tlače</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Konzultácia", desc: "Dohodneme si podrobnosti vašej objednávky" },
              { step: "2", title: "Príprava", desc: "Pripravíme podklady pre tlač a vytvoríme náhľad" },
              { step: "3", title: "Tlač", desc: "Realizujeme tlač na našich moderných strojoch" },
              { step: "4", title: "Dodanie", desc: "Dodáme hotový produkt v dohodnutom termíne" }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
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
          <h2 className="text-3xl font-bold text-gray-900">Potrebujete kníhtlač?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kontaktujte nás pre individuálnu cenovú ponuku alebo konzultáciu
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

export default Knihtlac;
