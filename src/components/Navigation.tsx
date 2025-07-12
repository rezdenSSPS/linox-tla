import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Printer, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: '/', label: 'Úvod' },
    { path: '/knihtlac', label: 'Kníhtlač' },
    { path: '/ofset', label: 'Ofsetová tlač' },
    { path: '/sietotlac', label: 'Sieťotlač' },
    { path: '/knihviazacstvo', label: 'Kníhviazačstvo' },
    { path: '/reklama', label: 'Reklama' },
    { path: '/papier', label: 'Predaj papiera' },
    { path: '/peciatky', label: 'Pečiatky-razítka' },
    { path: '/grafika', label: 'Grafické štúdio' },
    { path: '/vydavatelstvo', label: 'Vydavateľstvo' },
    { path: '/cennik', label: 'Cenník' },
    { path: '/kontakt', label: 'Kontakt' },
    { path: '/historia', label: 'História' }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-indigo-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Printer className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">
                LI-NOX
              </div>
              <div className="text-sm text-gray-500">Tlačiarne a vydavateľstvo</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-indigo-100 text-indigo-700 shadow-sm'
                    : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to="/kontakt">
              <Button variant="outline" size="sm" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                <Phone className="w-4 h-4 mr-2" />
                Kontakt
              </Button>
            </Link>
            <Link to="/cennik">
              <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 shadow-lg">
                <Mail className="w-4 h-4 mr-2" />
                Cenník
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-indigo-50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-indigo-100 bg-white/95 backdrop-blur-md">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex space-x-2 pt-2 border-t border-indigo-100">
              <Link to="/kontakt" className="flex-1" onClick={() => setIsOpen(false)}>
                <Button variant="outline" size="sm" className="w-full border-indigo-200 text-indigo-600">
                  <Phone className="w-4 h-4 mr-2" />
                  Kontakt
                </Button>
              </Link>
              <Link to="/cennik" className="flex-1" onClick={() => setIsOpen(false)}>
                <Button size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Cenník
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;