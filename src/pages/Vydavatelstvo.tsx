
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Vydavatelstvo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
            <BookOpen className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Vydavateľstvo</h1>
          <div className="w-20 h-1 bg-indigo-600 rounded mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Komplexné vydavateľské služby od rukopisu po hotovú knihu
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                  <span>Vydavateľské služby</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Poskytujeme komplexné vydavateľské služby od spracovania rukopisu 
                  až po distribúciu hotových kníh.
                </p>
                <div className="space-y-2">
                  {[
                    "Spracovanie rukopisov",
                    "Redakčné služby", 
                    "Korektúry a jazykové úpravy",
                    "Grafické spracovanie",
                    "Tlač a väzba",
                    "Distribúcia"
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
                  <span>Typy publikácií</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    "Regionálne publikácie",
                    "Historické knihy",
                    "Firemné publikácie", 
                    "Básnické zbierky",
                    "Odborné publikácie",
                    "Pamätné knihy"
                  ].map((type, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{type}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80"
              alt="Vydavateľstvo"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Naša misia</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Ako vydavateľstvo sa zameriavame na regionálne tlačoviny a publikácie, 
                  ktoré majú význam pre našu oblasť a komunitu.
                </p>
                <p>
                  Podporujeme lokálnych autorov a pomáhame im priviesť ich diela 
                  k čitateľom v profesionálnej podobe.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Publishing Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Proces vydania knihy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Konzultácia", desc: "Stretnutie s autorom a hodnotenie rukopisu" },
              { step: "2", title: "Príprava", desc: "Redakčné spracovanie a grafický návrh" },
              { step: "3", title: "Výroba", desc: "Tlač, väzba a dokončovacie práce" },
              { step: "4", title: "Distribúcia", desc: "Dodanie a distribúcia hotovej knihy" }
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

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Naše špecializácie</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Regionálne tlačoviny",
                desc: "Publikácie týkajúce sa histórie a kultúry nášho regiónu",
                icon: Users,
                items: ["Mestské kroniky", "Historické knihy", "Kultúrne publikácie"]
              },
              {
                title: "Firemné publikácie", 
                desc: "Prezentačné a informačné materiály pre firmy",
                icon: FileText,
                items: ["Výročné správy", "Prezentačné knihy", "Firemné histórie"]
              },
              {
                title: "Osobné projekty",
                desc: "Jedinečné knihy pre súkromných klientov",
                icon: BookOpen,
                items: ["Rodinné kroniky", "Pamätné knihy", "Básnické zbierky"]
              }
            ].map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <category.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.desc}</p>
                  <div className="space-y-1">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="text-sm text-gray-500">• {item}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900">Máte rukopis na vydanie?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kontaktujte nás a spoločne premeniame váš rukopis na profesionálnu publikáciu
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

export default Vydavatelstvo;
