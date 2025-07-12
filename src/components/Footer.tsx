import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Printer, ArrowRight, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center">
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
            <div className="flex items-center space-x-2 text-sm text-indigo-400">
              <Star className="w-4 h-4" />
              <span>30+ rokov tradície a kvality</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Služby</h3>
            <ul className="space-y-3 text-gray-300">
              {[
                { to: "/knihtlac", label: "Kníhtlač" },
                { to: "/ofset", label: "Ofsetová tlač" },
                { to: "/sietotlac", label: "Sieťotlač" },
                { to: "/knihviazacstvo", label: "Kníhviazačstvo" },
                { to: "/reklama", label: "Reklama" },
                { to: "/grafika", label: "Grafické štúdio" }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.to} 
                    className="hover:text-indigo-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Rýchle odkazy</h3>
            <ul className="space-y-3 text-gray-300">
              {[
                { to: "/cennik", label: "Cenník" },
                { to: "/kontakt", label: "Kontakt" },
                { to: "/historia", label: "História" },
                { to: "/papier", label: "Predaj papiera" },
                { to: "/peciatky", label: "Pečiatky" },
                { to: "/vydavatelstvo", label: "Vydavateľstvo" }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.to} 
                    className="hover:text-indigo-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-medium">Adresa</div>
                  <div className="text-sm">Rimavská Sobota, Slovensko</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Phone className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-medium">Telefón</div>
                  <div className="text-sm">+421 XXX XXX XXX</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm">info@li-nox.sk</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Clock className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-medium">Otváracie hodiny</div>
                  <div className="text-sm">Po-Pi: 8:00-16:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              &copy; 2024 LI-NOX Tlačiarne a vydavateľstvo. Všetky práva vyhradené.
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