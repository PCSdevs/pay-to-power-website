import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { theme } from '../theme';

interface FooterSectionProps {
  onOrderClick: () => void;
}

const FooterSection = ({ onOrderClick }: FooterSectionProps) => {
  return (
    <footer className="bg-[#111111] pt-16 pb-8 relative" id="footer">
      {/* Red accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent to-[#FF3333] z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-white font-bold text-2xl" style={{ fontFamily: theme.fonts.heading }}>
                Pay<span className="text-[#FF3333]">2</span>Power
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Transform your hardware business with subscription-based revenue models that maximize lifetime value.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#FF3333] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF3333] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF3333] transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/#product" className="text-gray-400 hover:text-[#FF3333] transition-colors">Features</Link></li>
              <li><Link to="/#pricing" className="text-gray-400 hover:text-[#FF3333] transition-colors">Pricing</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF3333] transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF3333] transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF3333] transition-colors">Integration</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#FF3333] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF3333] transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF3333] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF3333] transition-colors">Rental Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF3333] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="text-[#FF3333] mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">inquire@pay2power.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-[#FF3333] mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">UAE: +971525696228<br />India: +919510573174</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-[#FF3333] mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Dubai, UAE<br /><br />
                  Ahmedabad, Gujarat, India
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-8 border-t border-[#222222] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <button 
              onClick={onOrderClick}
              className="px-6 py-2 bg-[#FF3333] text-white rounded-md hover:bg-[#FF5555] transition-colors"
            >
              Order Now
            </button>
            <a 
              href="https://calendly.com/nilesh-pay2power/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-[#333333] text-white rounded-md hover:border-[#FF3333] transition-colors"
            >
              Book a Demo
            </a>
          </div>
          
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Pay2Power. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
