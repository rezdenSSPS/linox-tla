
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium">Od roku 1990</p>
              <h1 className="text-4xl font-bold">
                LI-NOX Tlačiarne a vydavateľstvo
              </h1>
              <p className="text-lg max-w-2xl mx-auto">
                Tlačiarne a vydavateľstvo LI-NOX bolo založené v roku 1990. Majiteľom je Ladislav LINDIS. 
                Sídli vo vlastných priestoroch v prestavanom rodinnom dome v Rimavskej Sobote.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/cennik">
                <Button>Získať cenovú ponuku</Button>
              </Link>
              <Link to="/kontakt">
                <Button variant="secondary">Kontakt</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8">Naše služby</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
            <ServiceCard 
              title="Predaj papiera"
              description="Široký sortiment papiera"
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
      <section className="py-8 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-6">Čo vyrábame</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-sm">
            {[
              "Plagáty", "Knihy", "Brožúry", "Vizitky", "Hlavičkové papiere", "Reklamné tlačivá",
              "Poštové poukážky", "Samolepiace etikety", "PE tašky", "Textilné etikety", 
              "Potlačené textílie", "Firemné tabule", "Diplomové práce", "Časopisy", "Pamätné kroniky"
            ].map((product, index) => (
              <div key={index} className="text-center p-3 bg-secondary rounded">
                <span className="font-medium">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-2xl font-bold">Potrebujete cenovú ponuku?</h2>
          <p className="opacity-90">
            Pošlite nám podrobnosti vašej objednávky a my vám pripravíme individuálnu cenovú ponuku
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/cennik">
              <Button variant="secondary">
                <Mail className="w-4 h-4 mr-2" />
                Získať ponuku
              </Button>
            </Link>
            <Link to="/kontakt">
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="w-4 h-4 mr-2" />
                Zavolať
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
