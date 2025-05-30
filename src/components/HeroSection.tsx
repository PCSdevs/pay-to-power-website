import { useState } from 'react';
import OrderForm from './OrderForm';
import { theme } from '../theme';

const HeroSection = () => {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden" id="hero">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#121212] to-[#222222] z-0"></div>
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-10 z-0"></div>
      
      {/* Red accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF3333] to-transparent z-10"></div>

      <div className="container mx-auto px-4 z-10 text-center lg:text-left">
        <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: theme.fonts.heading }}
            >
              Control the Power. <br />
              <span className="text-[#FF3333]">Control the Profit.</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Shift from one-time sales to lifetime revenue with hardware-enforced subscription models.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="https://calendly.com/nilesh-pay2power/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-md border-2 border-[#FF3333] text-white hover:bg-[#FF3333] transition-colors font-medium inline-block"
              >
                Book a Demo
              </a>
              
              <button 
                onClick={() => setIsOrderFormOpen(true)}
                className="px-8 py-3 rounded-md bg-[#FF3333] text-white hover:bg-[#FF5555] transition-colors font-medium inline-block"
              >
                Order Now
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl border border-[#333333]">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Pay2Power Hardware Module" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#FF3333] text-sm font-semibold mb-1">SUBSCRIPTION ACTIVE</div>
                    <div className="text-white font-bold">Device ID: P2P-X1200</div>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-[#FF3333] animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Floating tech elements */}
            <div className="absolute -top-4 -right-4 bg-[#1A1A1A] p-3 rounded-lg shadow-lg border border-[#333333] transform rotate-3">
              <div className="text-xs text-[#FF3333]">SUBSCRIPTION STATUS</div>
              <div className="text-white font-bold">ACTIVE</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-[#1A1A1A] p-3 rounded-lg shadow-lg border border-[#333333] transform -rotate-3">
              <div className="text-xs text-[#FF3333]">REVENUE</div>
              <div className="text-white font-bold">+₹24,500/mo</div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Form Modal */}
      <OrderForm 
        isOpen={isOrderFormOpen} 
        onClose={() => setIsOrderFormOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;
