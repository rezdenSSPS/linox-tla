
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Stamp, Award, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Peciatky = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
            <Stamp className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Pečiatky a razítka</h1>
          <div className="w-20 h-1 bg-indigo-600 rounded mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kvalitné pečiatky a razítka pre firmy, úrady a súkromné účely
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Stamp className="w-5 h-5 text-indigo-600" />
                  <span>Typy pečiatok</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Vyrábame všetky typy pečiatok a razítok podľa vašich požiadaviek 
                  s rýchlym dodaním a profesionálnym spracovaním.
                </p>
                <div className="space-y-2">
                  {[
                    "Firemné pečiatky",
                    "Okrúhle razítka", 
                    "Dátumové pečiatky",
                    "Automatické pečiatky",
                    "Číslové pečiatky",
                    "Špeciálne tvary"
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
                  <span>Využitie</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    "Firmy a živnostníci",
                    "Úrady a inštitúcie",
                    "Školy a školky", 
                    "Neziskové organizácie",
                    "Lekári a advokáti",
                    "Súkromné účely"
                  ].map((usage, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{usage}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
              alt="Pečiatky a razítka"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Rýchla výroba</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Naša výroba pečiatok je rýchla a spoľahlivá. Väčšinu objednávok 
                  dokážeme pripraviť do 24-48 hodín.
                </p>
                <p>
                  Používame kvalitné materiály, ktoré zaručujú dlhú životnosť 
                  a ostrý odtlačok vašich pečiatok.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stamp Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Druhy pečiatok</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Firemná pečiatka",
                size: "Rôzne veľkosti",
                price: "Od 15€",
                delivery: "2-3 dni"
              },
              {
                title: "Okrúhle razítko",
                size: "Ø 25-50mm", 
                price: "Od 12€",
                delivery: "1-2 dni"
              },
              {
                title: "Dátumová pečiatka",
                size: "Štandardná",
                price: "Od 25€",
                delivery: "3-5 dní"
              },
              {
                title: "Automatická pečiatka",
                size: "Rôzne typy",
                price: "Od 30€",
                delivery: "3-5 dní"
              },
              {
                title: "Číslová pečiatka",
                size: "Rôzne číslice",
                price: "Od 20€",
                delivery: "2-3 dni"
              },
              {
                title: "Špeciálny tvar",
                size: "Podľa návrhu",
                price: "Na vyžiadanie",
                delivery: "5-7 dní"
              }
            ].map((stamp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">{stamp.title}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div><strong>Veľkosť:</strong> {stamp.size}</div>
                      <div className="text-indigo-600 font-medium">{stamp.price}</div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{stamp.delivery}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Proces objednávky</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Konzultácia", desc: "Určíme typ a veľkosť pečiatky" },
              { step: "2", title: "Návrh", desc: "Pripravíme návrh a ukážeme náhľad" },
              { step: "3", title: "Výroba", desc: "Vyrobíme pečiatku s presnosťou" },
              { step: "4", title: "Odovzdanie", desc: "Pečiatka je pripravená na odber" }
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
          <h2 className="text-3xl font-bold text-gray-900">Potrebujete pečiatku?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kontaktujte nás a my vám pomôžeme vybrať správny typ pečiatky
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

export default Peciatky;
