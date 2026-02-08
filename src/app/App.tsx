import { useState, useEffect } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { HeroSection } from '@/app/components/HeroSection';
import { ValueProposition } from '@/app/components/ValueProposition';
import { ProductMatrix } from '@/app/components/ProductMatrix';
import { DeveloperExperience } from '@/app/components/DeveloperExperience';
import { TrustSection } from '@/app/components/TrustSection';
import { Footer } from '@/app/components/Footer';
import { AirBitApisPage } from '@/app/components/AirBitApisPage';
import { AirBitEipsPage } from '@/app/components/AirBitEipsPage';
import { AirBitAIGatewayPage } from '@/app/components/AirBitAIGatewayPage';
import { AirBitMCPGatewayPage } from '@/app/components/AirBitMCPGatewayPage';
import { AirBitGuardrailsPage } from '@/app/components/AirBitGuardrailsPage';
import { AirBitAIOPage } from '@/app/components/AirBitAIOPage';

import { ContactPage } from '@/app/components/ContactPage';

export default function App() {
  const [route, setRoute] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      // Scroll to top on route change
      window.scrollTo(0, 0);
    };

    // Set initial route
    setRoute(window.location.hash);

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div 
      className="min-h-screen antialiased" 
      style={{ 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      }}
    >
      <Navigation />
      
      {route === '#/airbit-apis' ? (
        // AirBit Apis Page
        <AirBitApisPage />
      ) : route === '#/airbit-eips' ? (
        // AirBit Eips Page
        <AirBitEipsPage />
      ) : route === '#/airbit-ai-gateway' ? (
        // AirBit AI Gateway Page
        <AirBitAIGatewayPage />
      ) : route === '#/airbit-mcp-gateway' ? (
        // AirBit MCP Gateway Page
        <AirBitMCPGatewayPage />
      ) : route === '#/airbit-guardrails' ? (
        // AirBit Guardrails Page
        <AirBitGuardrailsPage />
      ) : route === '#/airbit-aio' ? (
        // AirBit AIO Page
        <AirBitAIOPage />
      ) : route === '#/contact' ? (
        // Contact Page
        <ContactPage />
      ) : (
        // Home Page
        <>
          <HeroSection />
          <ValueProposition />
          <ProductMatrix />
          <DeveloperExperience />
          <TrustSection />
        </>
      )}
      
      <Footer />
    </div>
  );
}
