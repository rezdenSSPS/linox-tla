
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Award, Cog, Building } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Historia = () => {
  const timeline = [
    {
      year: "1990",
      title: "Založenie firmy",
      description: "Ladislav LINDIS zakladá tlačiareň LI-NOX v Rimavskej Sobote",
      icon: Building
    },
    {
      year: "1995",
      title: "Rozšírenie služieb",
      description: "Pridanie kníhviazačstva a rozšírenie ofsetovej tlače",
      icon: Award
    },
    {
      year: "2000",
      title: "Nové priestory",
      description: "Prestba rodinného domu a rozšírenie výrobných priestorov",
      icon: Building
    },
    {
      year: "2008",
      title: "Digitálna technológia",
      description: "Zavedenie tlače digitálnym ofsetovým strojom",
      icon: Cog
    },
    {
      year: "2010",
      title: "Sieťotlač",
      description: "Rozšírenie o prevádzku sieťotlače na textil a plastové materiály",
      icon: Award
    },
    {
      year: "2020",
      title: "Modernizácia",
      description: "Úplná rekonštrukcia priestorov a dostavba nových skladov",
      icon: Building
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold text-gray-900">História firmy</h1>
          <div className="w-20 h-1 bg-indigo-600 rounded mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Viac ako 30 rokov tradície, kvality a spoľahlivosti v oblasti tlačových služieb
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Náš príbeh</h2>
              <div className="w-16 h-1 bg-indigo-600 rounded"></div>
            </div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Tlačiarne a vydavateľstvo LI-NOX bolo založené v roku 1990 pánom Ladislavom LINDISOM 
                s víziou poskytovať kvalitné tlačové služby v regióne Rimavská Sobota.
              </p>
              <p>
                Začínali sme ako malá rodinná firma so základným vybavením, ale s veľkými ambíciami 
                a odhodlaním poskytovať našim zákazníkom tie najlepšie služby.
              </p>
              <p>
                Postupne sme rozširovali naše služby a investovali do moderných technológií. 
                V roku 2008 sme zaviedli digitálny ofsetový stroj, čo nám umožnilo ponúknuť 
                ešte kvalitnejšie a rýchlejšie služby.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
              alt="Historická tlačiareň"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-indigo-600">30+</div>
                <div className="text-sm text-gray-600">Rokov skúseností</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-indigo-600">1990</div>
                <div className="text-sm text-gray-600">Rok založenia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Míľniky našej histórie</h2>
          <div className="w-20 h-1 bg-indigo-600 rounded mx-auto"></div>
        </div>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-indigo-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-2xl font-bold text-indigo-600">{item.year}</span>
                      <div className="flex-grow h-px bg-gray-200"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Future Plans */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Plány do budúcnosti</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Neustále sa snažíme inovovať a rozširovať naše služby, aby sme mohli 
            našim zákazníkom ponúknuť ešte lepšie riešenia
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="space-y-2">
              <h3 className="font-semibold">Flokovanie tlače</h3>
              <p className="text-sm opacity-80">Rozšírenie o nové dokončovacie techniky</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Moderná digitálna technika</h3>
              <p className="text-sm opacity-80">Investície do najnovších tlačových technológií</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Ekologické riešenia</h3>
              <p className="text-sm opacity-80">Papierové tašky a tradičná väzba do kože</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Historia;
