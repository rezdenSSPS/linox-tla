
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Printer } from 'lucide-react';

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
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Printer className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">LI-NOX</div>
              <div className="text-sm text-gray-500">Tlačiarne a vydavateľstvo</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="grid grid-cols-2 gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
