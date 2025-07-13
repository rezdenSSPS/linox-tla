import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import dragonLogo from '@/assets/dragon-logo.png'; // Import the new dragon logo

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const primaryLinks = [
    { path: '/historia', label: 'O nás' },
    { path: '/grafika', label: 'Grafické štúdio' },
    { path: '/kontakt', label: 'Kontakt' },
  ];

  const serviceLinks = [
    { path: '/knihtlac', label: 'Kníhtlač' },
    { path: '/ofset', label: 'Ofsetová tlač' },
    { path: '/sietotlac', label: 'Sieťotlač' },
    { path: '/knihviazacstvo', label: 'Kníhviazačstvo' },
    { path: '/reklama', label: 'Reklama' },
    { path: '/papier', label: 'Predaj papiera' },
    { path: '/peciatky', label: 'Pečiatky-razítka' },
    { path: '/vydavatelstvo', label: 'Vydavateľstvo' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Dragon Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={dragonLogo} alt="LI-NOX Dragon Logo" className="h-14 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {primaryLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-secondary text-secondary-foreground'
                    : 'text-foreground/70 hover:bg-secondary/80 hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-3 py-2 text-sm font-medium">
                  Služby <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {serviceLinks.map((item) => (
                   <Link key={item.path} to={item.path}>
                    <DropdownMenuItem className="cursor-pointer">
                      {item.label}
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex">
             <Link to="/cennik">
              <Button>
                Cenová ponuka
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-secondary/80"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              {primaryLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-secondary text-secondary-foreground'
                      : 'text-foreground/70 hover:bg-secondary/80 hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t pt-2 mt-2">
                <p className="px-3 text-sm font-semibold text-muted-foreground mb-1">Služby</p>
                {serviceLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-secondary text-secondary-foreground'
                        : 'text-foreground/70 hover:bg-secondary/80 hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="pt-4">
                 <Link to="/cennik" className="w-full" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">
                    Cenová ponuka
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
