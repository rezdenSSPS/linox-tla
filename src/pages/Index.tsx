
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Printer, 
  BookOpen, 
  Image, 
  Palette, 
  FileText, 
  Award,
  Mail,
  Phone,
  MapPin,
  Calendar
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';

const Index = () => {
  const services = [
    {
      title: "Kníhtlač",
      description: "Profesionálna tlač kníh, brožúr a časopisov všetkých formátov",
      icon: BookOpen,
      link: "/knihtlac"
    },
    {
      title: "Ofsetová tlač",
      description: "Vysokoqualitná ofsetová tlač pre veľké náklady",
      icon: Printer,
      link: "/ofset"
    },
    {
      title: "Sieťotlač",
      description: "Sieťotlač na textil, plastové materiály a neštandardné povrchy",
      icon: Image,
      link: "/sietotlac"
    },
    {
      title: "Kníhviazačstvo",
      description: "Tradičné kníhviazačstvo vrátane luxusných kroník",
      icon: FileText,
      link: "/knihviazacstvo"
    },
    {
      title: "Reklama",
      description: "Reklamné tlačivá, plagáty, firemné tabule a vonkajšia reklama",
      icon: Award,
      link: "/reklama"
    },
    {
      title: "Grafické štúdio",
      description: "Kompletný grafický dizajn a príprava tlačových podkladov",
      icon: Palette,
      link: "/grafika"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-indigo-600">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-medium">Od roku 1990</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  LI-NOX
                  <span className="block text-3xl lg:text-4xl text-indigo-600 mt-2">
                    Tlačiarne a vydavateľstvo
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Váš spoľahlivý partner pre všetky druhy tlačových služieb. 
                  Špecializujeme sa na kníhtlač, ofsetovú tlač, kníhviazačstvo a reklamu.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/cennik">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4">
                    Získať cenovú ponuku
                  </Button>
                </Link>
                <Link to="/kontakt">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-indigo-200 hover:bg-indigo-50">
                    Kontaktovať nás
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80"
                  alt="Moderná tlačiareň"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="mt-6 space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">Moderné technológie</h3>
                  <p className="text-gray-600">Digitálny ofsetový stroj a najnovšie vybavenie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">O nас</h2>
                <div className="w-20 h-1 bg-indigo-600 rounded"></div>
              </div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Tlačiarne a vydavateľstvo LI-NOX bolo založené v roku 1990. Majiteľom je Ladislav LINDIS. 
                  Sídli vo vlastných priestoroch v prestavanom rodinnom dome v Rimavskej Sobote.
                </p>
                <p>
                  Dom prešiel počas posledných rokách úplnou rekonštrukciou a boli dostavané nové 
                  prevádzkové a skladové priestory. Firma má kníhtlačovú a ofsetovú strojáreň, 
                  prevádzku kníhviazačstva a sieťotlače.
                </p>
                <p>
                  V roku 2008 bola zavedená tlač digitálnym ofsetovým strojom. Firma vyrába všetkými 
                  technikami polygrafie. Chod firmy zabezpečujú odborníci.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-indigo-50 rounded-lg">
                  <div className="text-3xl font-bold text-indigo-600">30+</div>
                  <div className="text-sm text-gray-600">Rokov skúseností</div>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-lg">
                  <div className="text-3xl font-bold text-indigo-600">2008</div>
                  <div className="text-sm text-gray-600">Digitálny ofset</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
                alt="Tlačiareň priestory"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80"
                  alt="Tlačové stroje"
                  className="w-full h-32 object-cover rounded-xl"
                />
                <img 
                  src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=400&q=80"
                  alt="Kníhviazačstvo"
                  className="w-full h-32 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Naše služby</h2>
            <div className="w-20 h-1 bg-indigo-600 rounded mx-auto"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ponúkame kompletnú škálu tlačových služieb od malých kusových objednávok 
              až po veľké náklady s najvyššou kvalitou
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Čo vyrábame</h2>
            <div className="w-20 h-1 bg-indigo-600 rounded mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Plagáty a brožúry",
              "Vizitky a hlavičkové papiere", 
              "Reklamné tlačivá",
              "Poštové poukážky",
              "Samolepiace etikety",
              "Farebné PE tašky",
              "Textilné etikety", 
              "Potlačené textílie",
              "Firemné tabule",
              "Diplomové práce",
              "Časopisy a knihy",
              "Pamätné kroniky"
            ].map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{product}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl font-bold">Potrebujete cenovú ponuku?</h2>
          <p className="text-xl opacity-90">
            Pošlite nám podrobnosti vašej objednávky a my vám pripravíme individuálnu cenovú ponuku
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cennik">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Mail className="w-5 h-5 mr-2" />
                Získať ponuku
              </Button>
            </Link>
            <Link to="/kontakt">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-indigo-600">
                <Phone className="w-5 h-5 mr-2" />
                Zavolať nám
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
