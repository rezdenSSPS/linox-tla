
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, Monitor, Image, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Grafika = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
            <Palette className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Grafické štúdio</h1>
          <div className="w-20 h-1 bg-indigo-600 rounded mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kompletný grafický dizajn a príprava tlačových podkladov
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Monitor className="w-5 h-5 text-indigo-600" />
                  <span>Moderné technológie</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Všetky náročné farebné objednávky spracovávame na výkonných počítačoch 
                  novej generácie s prídavnými zariadeniami.
                </p>
                <div className="space-y-2">
                  {[
                    "Profesionálny softvér",
                    "Vysokorýchlostné počítače", 
                    "Farebná laserová tlačiareň",
                    "Vosková tlačiareň pre náhľady",
                    "Širokoformátová tlač",
                    "Skenovanie a digitalizácia"
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
                  <Image className="w-5 h-5 text-indigo-600" />
                  <span>Naše služby</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    "Tvorba grafických návrhov",
                    "Úprava existujúcich návrhov",
                    "Príprava tlačových podkladov", 
                    "Farebné korekcie",
                    "Sadzba textov",
                    "Náhľady na farebnej tlačiarni"
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
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Grafické štúdio"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Komplexné riešenia</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Naše grafické štúdio poskytuje kompletné služby od návrhu po prípravu 
                  tlačových podkladov. Spolupracujeme s klientmi na vytvorení jedinečných dizajnov.
                </p>
                <p>
                  Spracovávame aj práce dielčie bez dokončovacieho procesu pre klientov, 
                  ktorí si dokončenie zabezpečia inde.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Čo navrhujeme</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Firemná identita",
                items: ["Logá", "Vizitky", "Hlavičkové papiere"],
                icon: Monitor
              },
              {
                title: "Reklamné materiály", 
                items: ["Letáky", "Brožúry", "Plagáty"],
                icon: Image
              },
              {
                title: "Tlačoviny",
                items: ["Knihy", "Časopisy", "Katalógy"],
                icon: Palette
              },
              {
                title: "Webové grafiky",
                items: ["Bannery", "Sociálne siete", "Prezentácie"],
                icon: Monitor
              },
              {
                title: "Obalový dizajn",
                items: ["Etikety", "Obaly", "Nálepky"],
                icon: Image
              },
              {
                title: "Špeciálne projekty",
                items: ["Výstavy", "Kalendáre", "Pohľadnice"],
                icon: Palette
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

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Náš proces</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Briefing", desc: "Dohodneme si požiadavky a ciele" },
              { step: "2", title: "Návrh", desc: "Vytvoríme grafický návrh" },
              { step: "3", title: "Revízia", desc: "Upravíme podľa vašich pripomienok" },
              { step: "4", title: "Finalizácia", desc: "Pripravíme finálne súbory" }
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
          <h2 className="text-3xl font-bold text-gray-900">Potrebujete grafický dizajn?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kontaktujte nás a spoločne vytvoríme dizajn, ktorý bude reprezentovať vašu značku
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

export default Grafika;
