
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Award, Book, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Knihviazacstvo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
            <Book className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Kníhviazačstvo</h1>
          <div className="w-20 h-1 bg-indigo-600 rounded mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tradičné kníhviazačstvo vrátane luxusných kroník a diplomových prác
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-indigo-600" />
                  <span>Pamätné kroniky</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Špecializujeme sa na väzbu pamätných kroník pre mestá a obce. 
                  Kroniky viažeme tradične ručne do zamatových a koženkových obalov.
                </p>
                <div className="space-y-2">
                  {[
                    "Mestské kroniky",
                    "Obecné kroniky", 
                    "Firemné pamätné knihy",
                    "Rodinné kroniky",
                    "Historické dokumenty"
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
                  <FileText className="w-5 h-5 text-indigo-600" />
                  <span>Štandardná väzba</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    "Diplomové práce",
                    "Bakalárske práce",
                    "Dizertačné práce", 
                    "Firemné doklady",
                    "Triedne knihy",
                    "Časopisy a periodiká"
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
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
              alt="Kníhviazačstvo"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Tradičné remeslo</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Naše kníhviazačstvo má dlhú tradíciu a skúsenosti s väzbou najrôznejších 
                  typov publikácií. Používame kvalitné materiály a tradičné techniky.
                </p>
                <p>
                  Počas fungovania bola zdokonalená kníhviazačská výroba, hlavne väzba 
                  pamätných kroník pre mestá a obce.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Binding */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Typy väzby</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Tvrdá väzba", desc: "Luxusná a odolná väzba pre dôležité dokumenty" },
              { title: "Mäkká väzba", desc: "Ekonomická väzba pre bežné publikácie" },
              { title: "Spirálová väzba", desc: "Praktická väzba pre pracovné materiály" },
              { title: "Šitá väzba", desc: "Tradičná a najpevnejšia väzba" }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Book className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Plans */}
        <div className="mb-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Plán do budúcnosti</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Plánujeme zavedenie tradičnej väzby do kože, čo rozšíri naše možnosti 
              o ešte luxusnejšie a prestížnejšie riešenia pre vaše najdôležitejšie dokumenty.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900">Potrebujete kníhviazačstvo?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kontaktujte nás pre konzultáciu o najvhodnejšom type väzby pre váš projekt
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

export default Knihviazacstvo;
