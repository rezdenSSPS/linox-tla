
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const ServiceCard = ({ title, description, icon: Icon, link }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
      <CardContent className="p-8 text-center space-y-6">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
        
        <Link to={link}>
          <Button 
            variant="ghost" 
            className="group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors"
          >
            Viac informácií
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
