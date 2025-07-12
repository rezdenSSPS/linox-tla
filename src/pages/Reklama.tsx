
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Megaphone, Building, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Reklama = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
            <Megaphone className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Reklama</h1>
          <div className="w-20 h-1 bg-indigo-600 rounded mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reklamné tlačivá, plagáty, firemné tabule a vonkajšia reklama pre váš biznis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-indigo-600" />
                  <span>Reklamné tlačivá</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Vytvárame efektívne reklamné materiály, ktoré pomôžu vašej firme 
                  získať pozornosť zákazníkov a zvýšiť predaj.
                </p>
                <div className="space-y-2">
                  {[
                    "Farebné plagáty",
                    "Letáky a brošúry", 
                    "Vizitky",
                    "Katalógy produktov",
                    "Reklamné noviny",
                    "Pozvánky na akcie"
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
                  <Building className="w-5 h-5 text-indigo-600" />
                  <span>Firemná identita</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    "Firemné tabule",
                    "Hlavičkové papiere",
                    "Obálky s logom", 
                    "Pečiatky a razítka",
                    "Firemné kalendáre",
                    "Prezentačné materiály"
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
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
              alt="Reklamné materiály"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Prečo je reklama dôležitá?</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Kvalitné reklamné materiály sú základom úspešného marketingu. 
                  Pomáhajú budovať povedomie o značke a prilákať nových zákazníkov.
                </p>
                <p>
                  Naše reklamné tlačivá sú vytvorené s dôrazom na kvalitu, ktorá 
                  reprezentuje profesionalitu vašej firmy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Naše reklamné služby</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Vonkajšia reklama",
                items: ["Billboardy", "Banéry", "Výkladné skrine"],
                icon: Building
              },
              {
                title: "Tlačená reklama", 
                items: ["Plagáty", "Letáky", "Brožúry"],
                icon: Award
              },
              {
                title: "Firemné materiály",
                items: ["Vizitky", "Hlavičky", "Obálky"],
                icon: Megaphone
              },
              {
                title: "Akciové materiály",
                items: ["Pozvánky", "Programy", "Vstupne"],
                icon: Award
              },
              {
                title: "POS materiály",
                items: ["Cenníky", "Stojany", "Wobblery"],
                icon: Building
              },
              {
                title: "Špeciálne tlače",
                items: ["Nálepky", "Magnety", "Podložky"],
                icon: Megaphone
              }
            ].map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <category.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
                  <div className="space-y-1">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="text-sm text-gray-600">{item}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Výhody našich služieb</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Rýchla dodávka",
              "Konkurenčné ceny", 
              "Vysoká kvalita",
              "Profesionálny prístup"
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  ✓
                </div>
                <p className="font-medium text-gray-900">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900">Potrebujete reklamu?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pomôžeme vám vytvoriť efektívne reklamné materiály, ktoré prilákajú zákazníkov
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

export default Reklama;
