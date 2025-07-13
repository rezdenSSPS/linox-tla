import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Printer, ArrowRight, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Printer className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">LI-NOX</div>
                <div className="text-sm text-gray-400">Tlačiarne a vydavateľstvo</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Váš spoľahlivý partner pre všetky druhy tlačových služieb od roku 1990. 
              Špecializujeme sa na kvalitné a profesionálne riešenia.
            </p>
            <div className="flex items-center space-x-2 text-sm text-primary/80">
              <Star className="w-4 h-4" />
              <span>Viac ako 30 rokov tradície a kvality</span>
            </div>
          </div>

          {/* Site Overview Links (Consolidated) */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Prehľad stránky</h3>
            <ul className="space-y-3 text-gray-300 grid grid-cols-2">
              {[
                { to: "/historia", label: "O nás" },
                { to: "/knihtlac", label: "Kníhtlač" },
                { to: "/ofset", label: "Ofsetová tlač" },
                { to: "/sietotlac", label: "Sieťotlač" },
                { to: "/knihviazacstvo", label: "Kníhviazačstvo" },
                { to: "/reklama", label: "Reklama" },
                { to: "/grafika", label: "Grafické štúdio" },
                { to: "/cennik", label: "Cenník" },
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.to} 
                    className="hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium">Adresa</div>
                  <div className="text-sm">Sedliacka 44, 979 01 Rimavská Sobota</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium">Telefón</div>
                  <div className="text-sm">+421 (0)47 58 11 444</div>
                  <div className="text-sm">+421 905 274 652</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm">
                    <a href="mailto:linoxrs@gmail.com" className="text-primary hover:underline">
                      linoxrs@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium">Otváracie hodiny</div>
                  <div className="text-sm">Po-Pi: 8:00 - 16:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} LI-NOX Tlačiarne a vydavateľstvo. Všetky práva vyhradené.
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Založené v roku 1990</span>
              <span>•</span>
              <span>Ladislav LINDIS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
