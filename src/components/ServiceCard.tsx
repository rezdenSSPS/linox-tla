
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
    <Card className="group hover:shadow-md transition-all duration-200 border border-primary/20 hover:border-primary/40">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary-foreground" />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        
        <p className="text-sm text-muted-foreground">{description}</p>
        
        <Link to={link}>
          <Button size="sm" className="w-full">
            Pozrieť
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
