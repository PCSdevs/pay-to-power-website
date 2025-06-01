import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import PricingSection from './components/PricingSection';
import FooterSection from './components/FooterSection';
import OrderForm from './components/OrderForm';
import ScrollToHashElement from './components/ScrollToHashElement';

export function App() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'Standard' | 'Pro'>('Standard');

  useEffect(() => {
    // Load fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const openOrderForm = (plan: 'Standard' | 'Pro' = 'Standard') => {
    setSelectedPlan(plan);
    setIsOrderFormOpen(true);
  };

  return (
    <Router>
      <div className="bg-[#121212] min-h-screen text-white">
        <Header  setIsOrderFormOpen={setIsOrderFormOpen}/>
        <ScrollToHashElement />
        
        <Routes>
          <Route path="/" element={
            <main>
              <HeroSection />
              <ProductSection />
              <PricingSection onOrderClick={openOrderForm} />
              <FooterSection onOrderClick={() => setIsOrderFormOpen(true)} />
            </main>
          } />
        </Routes>

        <OrderForm 
          isOpen={isOrderFormOpen} 
          onClose={() => setIsOrderFormOpen(false)} 
          selectedPlan={selectedPlan}
        />
      </div>
    </Router>
  );
}

export default App;
