import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'; // Import the new component
import Index from "./pages/Index";
import Cennik from "./pages/Cennik";
import Kontakt from "./pages/Kontakt";
import Historia from "./pages/Historia";
import Knihtlac from "./pages/Knihtlac";
import Ofset from "./pages/Ofset";
import Sietotlac from "./pages/Sietotlac";
import Knihviazacstvo from "./pages/Knihviazacstvo";
import Reklama from "./pages/Reklama";
import Papier from "./pages/Papier";
import Peciatky from "./pages/Peciatky";
import Grafika from "./pages/Grafika";
import Vydavatelstvo from "./pages/Vydavatelstvo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* Add this component here */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cennik" element={<Cennik />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/knihtlac" element={<Knihtlac />} />
          <Route path="/ofset" element={<Ofset />} />
          <Route path="/sietotlac" element={<Sietotlac />} />
          <Route path="/knihviazacstvo" element={<Knihviazacstvo />} />
          <Route path="/reklama" element={<Reklama />} />
          <Route path="/papier" element={<Papier />} />
          <Route path="/peciatky" element={<Peciatky />} />
          <Route path="/grafika" element={<Grafika />} />
          <Route path="/vydavatelstvo" element={<Vydavatelstvo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
