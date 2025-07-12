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
  Calendar,
  ArrowRight,
  Star,
  Users,
  Clock
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

  const stats = [
    { number: "30+", label: "Rokov skúseností", icon: Calendar },
    { number: "1000+", label: "Spokojných zákazníkov", icon: Users },
    { number: "24h", label: "Rýchla odpoveď", icon: Clock },
    { number: "100%", label: "Kvalita", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-blue-600/10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                <Calendar className="w-4 h-4 mr-2" />
                Tradícia od roku 1990
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                LI-NOX
                <span className="block text-3xl md:text-4xl text-indigo-600 mt-2">
                  Tlačiarne a vydavateľstvo
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Viac ako 30 rokov poskytujeme kvalitné tlačové služby v Rimavskej Sobote. 
                Od tradičnej tlače až po moderné digitálne technológie.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cennik">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Mail className="w-5 h-5 mr-2" />
                  Získať cenovú ponuku
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/kontakt">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 hover:bg-indigo-50 transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Kontakt
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Photos Gallery */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Naše priestory a služby</h2>
            <div className="w-20 h-1 bg-indigo-600 rounded mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
                  alt="Ofsetový tlačový stroj v prevádzke"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Ofsetová tlač</h3>
                  <p className="text-sm opacity-90">Moderné tlačové stroje</p>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                  alt="Kníhviazačská dielňa"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Kníhviazačstvo</h3>
                  <p className="text-sm opacity-90">Tradičné remeslo</p>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                  alt="Grafické štúdio"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Grafické štúdio</h3>
                  <p className="text-sm opacity-90">Kreatívne riešenia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80"
                  alt="Sieťotlač"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Sieťotlač</h3>
                  <p className="text-sm opacity-90">Tlač na textil</p>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Sklad papiera"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Predaj papiera</h3>
                  <p className="text-sm opacity-90">Široký sortiment</p>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80"
                  alt="Vydavateľstvo"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Vydavateľstvo</h3>
                  <p className="text-sm opacity-90">Regionálne publikácie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Naše služby</h2>
            <div className="w-20 h-1 bg-indigo-600 rounded mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Poskytujeme komplexné tlačové služby pre firmy aj súkromných klientov
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
            <ServiceCard 
              title="Predaj papiera"
              description="Široký sortiment kvalitného papiera"
              icon={FileText}
              link="/papier"
            />
            <ServiceCard 
              title="Pečiatky"
              description="Výroba pečiatok a razítok"
              icon={Award}
              link="/peciatky"
            />
            <ServiceCard 
              title="Vydavateľstvo"
              description="Publikovanie kníh a časopisov"
              icon={BookOpen}
              link="/vydavatelstvo"
            />
          </div>
        </div>
      </section>

      {/* What we make */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Čo vyrábame</h2>
            <div className="w-20 h-1 bg-indigo-600 rounded mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Plagáty", "Knihy", "Brožúry", "Vizitky", "Hlavičkové papiere", 
              "Reklamné tlačivá", "Poštové poukážky", "Samolepiace etikety", 
              "PE tašky", "Textilné etikety", "Potlačené textílie", "Firemné tabule", 
              "Diplomové práce", "Časopisy", "Pamätné kroniky"
            ].map((product, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-all duration-300 group-hover:bg-indigo-50 border border-indigo-100">
                  <span className="font-medium text-gray-700 group-hover:text-indigo-700 transition-colors">
                    {product}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Potrebujete cenovú ponuku?</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Pošlite nám podrobnosti vašej objednávky a my vám pripravíme 
                individuálnu cenovú ponuku do 24 hodín
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cennik">
                <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-4 shadow-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Získať ponuku
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/kontakt">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Zavolať
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm opacity-80">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Odpoveď do 24h
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2" />
                Bezplatná konzultácia
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                1000+ spokojných zákazníkov
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;