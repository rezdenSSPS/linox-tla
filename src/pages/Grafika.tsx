import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, Monitor, Image, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Grafika = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <Palette className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">Grafické štúdio</h1>
          <div className="w-20 h-1 bg-primary rounded mx-auto"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kompletný grafický dizajn a príprava tlačových podkladov
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Monitor className="w-5 h-5 text-primary" />
                  <span>Moderné technológie</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
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
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Image className="w-5 h-5 text-primary" />
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
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {/* TODO: Replace with your aunt's image */}
            <img 
              src="/src/assets/graphic-studio.jpg"
              alt="Grafické štúdio"
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Komplexné riešenia</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
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
        
        {/* CTA */}
        <div className="text-center space-y-6 bg-white rounded-lg p-12 border">
          <h2 className="text-3xl font-bold text-foreground">Potrebujete grafický dizajn?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kontaktujte nás a spoločne vytvoríme dizajn, ktorý bude reprezentovať vašu značku
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cennik">
              <Button size="lg">
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
