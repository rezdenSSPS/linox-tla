
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Package, ShoppingCart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Papier = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
            <FileText className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Predaj papiera</h1>
          <div className="w-20 h-1 bg-indigo-600 rounded mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Široký sortiment kvalitného papiera pre všetky vaše potreby
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="w-5 h-5 text-indigo-600" />
                  <span>Typy papiera</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Ponúkame široký výber papierov rôznych gramáží, formátov a typov 
                  pre profesionálne aj súkromné použitie.
                </p>
                <div className="space-y-2">
                  {[
                    "Kancelársky papier A4, A3",
                    "Kartón rôznych gramáží", 
                    "Farebný papier",
                    "Fotografický papier",
                    "Špeciálne papiere",
                    "Samolepiace etikety"
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
                  <ShoppingCart className="w-5 h-5 text-indigo-600" />
                  <span>Pre koho</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    "Firmy a kancelárie",
                    "Školy a vzdelávacie inštitúcie",
                    "Tlačiarne a copy centrá", 
                    "Grafické štúdiá",
                    "Súkromné osoby",
                    "Umelci a dizajnéri"
                  ].map((customer, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{customer}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              alt="Papier a kancelárske potreby"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Kvalitný papier</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Predávame len overené značky papiera, ktoré zaručujú spoľahlivosť 
                  a kvalitu pre vaše tlačové potreby.
                </p>
                <p>
                  Máme na sklade rôzne formáty a gramáže, takže si určite nájdete 
                  presne to, co potrebujete.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Paper Types Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Sortiment papiera</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Kancelársky papier",
                weight: "80g/m²",
                formats: ["A4", "A3", "A5"],
                price: "Od 3€/balenie"
              },
              {
                title: "Kartón",
                weight: "160-300g/m²", 
                formats: ["A4", "A3", "A2"],
                price: "Od 8€/balenie"
              },
              {
                title: "Farebný papier",
                weight: "80-120g/m²",
                formats: ["A4", "A3"],
                price: "Od 5€/balenie"
              },
              {
                title: "Fotografický papier",
                weight: "200-300g/m²",
                formats: ["A4", "10x15"],
                price: "Od 15€/balenie"
              },
              {
                title: "Samolepiace etikety",
                weight: "Rôzne",
                formats: ["A4", "custom"],
                price: "Od 2€/list"
              },
              {
                title: "Špeciálne papiere",
                weight: "Podľa typu",
                formats: ["Rôzne"],
                price: "Na vyžiadanie"
              }
            ].map((paper, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">{paper.title}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div><strong>Gramáž:</strong> {paper.weight}</div>
                      <div><strong>Formáty:</strong> {paper.formats.join(", ")}</div>
                      <div className="text-indigo-600 font-medium">{paper.price}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Prečo nakupovať u nás?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Kvalitné značky", desc: "Len overení výrobcovia" },
              { title: "Skladom", desc: "Rýchla dostupnosť" },
              { title: "Veľkoobchodné ceny", desc: "Výhodné pre firmy" },
              { title: "Osobný odber", desc: "Priamo v Rimavskej Sobote" }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900">Potrebujete papier?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kontaktujte nás pre informácie o dostupnosti a cenách
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cennik">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Informácie o cenách
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

export default Papier;
