import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
}

const ServiceCard = ({ title, description, icon: Icon, link }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border bg-card hover:border-primary/50">
      <CardContent className="p-6 space-y-4 text-left">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-all duration-300">
            <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        
        <Link to={link} className="block">
          <Button 
            size="sm" 
            variant="ghost"
            className="w-full justify-start p-0 h-auto text-primary hover:text-primary/90"
          >
            Pozrieť službu
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
