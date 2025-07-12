
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Printer } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Printer className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">LI-NOX</div>
                <div className="text-sm text-gray-400">Tlačiarne a vydavateľstvo</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Váš spoľahlivý partner pre všetky druhy tlačových služieb od roku 1990. 
              Špecializujeme sa na kvalitné a profesionálne riešenia.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Služby</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/knihtlac" className="hover:text-indigo-400 transition-colors">Kníhtlač</Link></li>
              <li><Link to="/ofset" className="hover:text-indigo-400 transition-colors">Ofsetová tlač</Link></li>
              <li><Link to="/sietotlac" className="hover:text-indigo-400 transition-colors">Sieťotlač</Link></li>
              <li><Link to="/knihviazacstvo" className="hover:text-indigo-400 transition-colors">Kníhviazačstvo</Link></li>
              <li><Link to="/reklama" className="hover:text-indigo-400 transition-colors">Reklama</Link></li>
              <li><Link to="/grafika" className="hover:text-indigo-400 transition-colors">Grafické štúdio</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Rýchle odkazy</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/cennik" className="hover:text-indigo-400 transition-colors">Cenník</Link></li>
              <li><Link to="/kontakt" className="hover:text-indigo-400 transition-colors">Kontakt</Link></li>
              <li><Link to="/historia" className="hover:text-indigo-400 transition-colors">História</Link></li>
              <li><Link to="/papier" className="hover:text-indigo-400 transition-colors">Predaj papiera</Link></li>
              <li><Link to="/peciatky" className="hover:text-indigo-400 transition-colors">Pečiatky</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span>Rimavská Sobota, Slovensko</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span>+421 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span>info@li-nox.sk</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span>Po-Pi: 8:00-16:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LI-NOX Tlačiarne a vydavateľstvo. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
