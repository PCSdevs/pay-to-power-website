import { useState } from 'react';
import { Check } from 'lucide-react';
import { theme } from '../theme';

interface PricingSectionProps {
  onOrderClick: (plan: 'Standard' | 'Pro') => void;
}

const PricingSection = ({ onOrderClick }: PricingSectionProps) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const standardFeatures = [
    "Hardware module",
    "Dashboard access",
    "Real-time device status monitoring",
    "Subscription management",
    "Basic analytics",
    "Email support"
  ];

  const proFeatures = [
    ...standardFeatures,
    "API integration",
    "Custom subscription models",
    "Advanced analytics",
    "Priority support",
    "White-label option"
  ];

  return (
    <section id="pricing" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#121212] z-0"></div>
      
      {/* Red accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#FF3333] to-transparent z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: theme.fonts.heading }}
          >
            Subscription <span className="text-[#FF3333]">Pricing</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your business needs and start transforming one-time sales into recurring revenue.
          </p>
          
          <div className="mt-8 inline-flex items-center p-1 bg-[#222222] rounded-full">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${!isAnnual ? 'bg-[#FF3333] text-white' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${isAnnual ? 'bg-[#FF3333] text-white' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setIsAnnual(true)}
            >
              Annual <span className="text-xs">(Save 15%)</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Standard Plan */}
          <div className="bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#333333] hover:border-[#FF3333] transition-colors shadow-lg">
            <div className="p-6 border-b border-[#333333]">
              <h3 
                className="text-2xl font-bold text-white"
                style={{ fontFamily: theme.fonts.heading }}
              >
                Standard
              </h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-white">₹{isAnnual ? '679' : '799'}</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              {isAnnual && (
                <div className="text-sm text-[#FF3333] mt-2">Billed annually (₹8,148/year)</div>
              )}
              <p className="mt-4 text-gray-400">
                Hardware + Dashboard
              </p>
              <button
                onClick={() => onOrderClick('Standard')}
                className="mt-6 w-full py-3 bg-[#FF3333] text-white rounded-md hover:bg-[#FF5555] transition-colors font-medium"
              >
                Order Now
              </button>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {standardFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="text-[#FF3333] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#FF3333] shadow-lg relative">
            <div className="absolute top-0 right-0 bg-[#FF3333] text-white text-xs font-bold px-3 py-1 uppercase">
              Popular
            </div>
            <div className="p-6 border-b border-[#333333]">
              <h3 
                className="text-2xl font-bold text-white"
                style={{ fontFamily: theme.fonts.heading }}
              >
                Pro
              </h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-white">₹{isAnnual ? '1,019' : '1,199'}</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              {isAnnual && (
                <div className="text-sm text-[#FF3333] mt-2">Billed annually (₹12,228/year)</div>
              )}
              <p className="mt-4 text-gray-400">
                Hardware + Dashboard + API Integration
              </p>
              <button
                onClick={() => onOrderClick('Pro')}
                className="mt-6 w-full py-3 bg-[#FF3333] text-white rounded-md hover:bg-[#FF5555] transition-colors font-medium"
              >
                Order Now
              </button>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {proFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="text-[#FF3333] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Need a custom solution for large-scale deployment?</p>
          <a 
            href="https://calendly.com/nilesh-pay2power/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-md border-2 border-[#FF3333] text-white hover:bg-[#FF3333] transition-colors font-medium inline-block"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
