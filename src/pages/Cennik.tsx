import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';

const Cennik = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Cenník</h1>
          <div className="w-20 h-1 bg-blue-600 rounded mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pre individuálnu cenovú ponuku vyplňte formulár nižšie
          </p>
        </div>
        
        <QuoteForm />
      </div>

      <Footer />
    </div>
  );
};

export default Cennik;