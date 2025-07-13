import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Printer, 
  BookOpen, 
  Image as ImageIcon,
  Palette, 
  FileText, 
  Award,
  Mail,
  Phone,
  ArrowRight,
  Star,
  Users,
  Clock,
  Calendar
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import dragonLogo from '@/assets/dragon-logo.png'; // Import the dragon emblem

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
      icon: ImageIcon,
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
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* New Hero Section */}
      <section className="relative py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-12">
            
            {/* Dragon Logo */}
            <div className="flex-shrink-0">
              <img src={dragonLogo} alt="LI-NOX Dragon Emblem" className="h-40 w-auto animate-fade-in" />
            </div>

            {/* Text content */}
            <div className="space-y-4">
                 <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                    LI-NOX
                </h1>
                <p className="text-2xl text-primary font-medium">
                    Tlačiarne a vydavateľstvo
                </p>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                    Viac ako 30 rokov poskytujeme kvalitné tlačové služby v Rimavskej Sobote. Od tradičnej tlače až po moderné digitálne technológie.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link to="/cennik">
                        <Button size="lg" className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                            <Mail className="w-5 h-5 mr-2" />
                            Získať cenovú ponuku
                        </Button>
                    </Link>
                    <Link to="/kontakt">
                        <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 transition-all duration-300">
                            <Phone className="w-5 h-5 mr-2" />
                            Kontakt
                        </Button>
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-slate-100/80 border-t border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Naše služby</h2>
            <div className="w-20 h-1 bg-primary rounded mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Poskytujeme komplexné tlačové služby pre firmy aj súkromných klientov
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
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
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4 shadow-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Získať ponuku
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/kontakt">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Zavolať
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
