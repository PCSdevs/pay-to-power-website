import { BarChart4, ChevronRight, CircuitBoard, Clock, Code, Cpu, Lock, PlugZap, WifiOff, Zap } from 'lucide-react';
import { theme } from '../theme';
import { useEffect, useState } from 'react';

const ProductSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Add animation after component mounts
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <Clock size={32} className="text-[#FF3333]" />,
      title: "Time-based Access",
      description: "Automatically disable devices when subscription periods end, enforcing payment for continued usage."
    },
    {
      icon: <PlugZap size={32} className="text-[#FF3333]" />,
      title: "Remote Power Control",
      description: "Remotely enable or disable device functionality based on payment status and subscription terms."
    },
    {
      icon: <BarChart4 size={32} className="text-[#FF3333]" />,
      title: "Real-time Dashboard",
      description: "Monitor all your deployed devices with comprehensive analytics on usage, subscription status, and revenue."
    },
    {
      icon: <Lock size={32} className="text-[#FF3333]" />,
      title: "Tamper-lock Protection",
      description: "Advanced security features prevent unauthorized access or hardware modification attempts."
    },
    {
      icon: <WifiOff size={32} className="text-[#FF3333]" />,
      title: "Offline Capability",
      description: "Continue enforcing subscription terms even when devices are disconnected from the internet."
    },
    {
      icon: <Cpu size={32} className="text-[#FF3333]" />,
      title: "Custom Payment Models",
      description: "Configure flexible payment schemes including pay-per-use, time-based access, and feature-based tiers for your hardware."
    }
  ];

  return (
    <section id="product" className="py-20 relative">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-[#161616] z-0"></div>
      
      {/* Red accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF3333] to-transparent z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: theme.fonts.heading }}
          >
            Hardware-Enforced <span className="text-[#FF3333]">Subscription Model</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our smart hardware module seamlessly integrates with your devices to enforce subscription-based access, 
            transforming one-time sales into recurring revenue streams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#1A1A1A] rounded-lg p-6 border border-[#333333] hover:border-[#FF3333] transition-colors shadow-lg hover:shadow-xl group"
            >
              <div className="mb-4 p-3 bg-[#222222] inline-block rounded-lg group-hover:bg-[#FF3333]/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            style={{ fontFamily: theme.fonts.heading }}
          >
            How It <span className="text-[#FF3333]">Works</span>
          </h3>
          
          {/* CircuitBoard Board Tech Design */}
          <div className="bg-[#141414] rounded-lg p-8 border border-[#333333] relative overflow-hidden">
            {/* CircuitBoard patterns */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-[#FF3333]"></div>
              <div className="absolute top-[40%] left-0 right-0 h-[1px] bg-[#FF3333]"></div>
              <div className="absolute top-[60%] left-0 right-0 h-[1px] bg-[#FF3333]"></div>
              <div className="absolute top-[80%] left-0 right-0 h-[1px] bg-[#FF3333]"></div>
              
              <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-[#FF3333]"></div>
              <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[#FF3333]"></div>
              <div className="absolute left-[75%] top-0 bottom-0 w-[1px] bg-[#FF3333]"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
              {/* Steps section - taking 3 columns */}
              <div className="lg:col-span-3 space-y-8">
                {/* Step 1 */}
                <div className={`transition-all duration-700 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '100ms' }}>
                  <div className="flex items-start relative">
                    <div className="flex-shrink-0 relative">
                      <div className="bg-[#222222] w-12 h-12 rounded-lg flex items-center justify-center border border-[#444444] relative z-10">
                        <Cpu size={24} className="text-[#FF3333]" />
                      </div>
                      <div className="absolute top-12 bottom-0 left-1/2 w-[2px] h-16 bg-gradient-to-b from-[#FF3333] to-transparent z-0"></div>
                    </div>
                    <div className="ml-6">
                      <div className="flex items-center mb-2">
                        <div className="bg-[#FF3333] text-white text-xs font-bold px-2 py-1 rounded mr-3">STEP 01</div>
                        <h4 className="text-white font-bold">Hardware Integration</h4>
                      </div>
                      <p className="text-gray-400 border-l-2 border-[#333333] pl-4 ml-1">
                        Integrate our compact hardware module into your device during manufacturing. 
                        The module is designed for easy installation with minimal footprint.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className={`transition-all duration-700 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '200ms' }}>
                  <div className="flex items-start relative">
                    <div className="flex-shrink-0 relative">
                      <div className="bg-[#222222] w-12 h-12 rounded-lg flex items-center justify-center border border-[#444444] relative z-10">
                        <PlugZap size={24} className="text-[#FF3333]" />
                      </div>
                      <div className="absolute top-12 bottom-0 left-1/2 w-[2px] h-16 bg-gradient-to-b from-[#FF3333] to-transparent z-0"></div>
                    </div>
                    <div className="ml-6">
                      <div className="flex items-center mb-2">
                        <div className="bg-[#FF3333] text-white text-xs font-bold px-2 py-1 rounded mr-3">STEP 02</div>
                        <h4 className="text-white font-bold">Power System Connection</h4>
                      </div>
                      <p className="text-gray-400 border-l-2 border-[#333333] pl-4 ml-1">
                        Connect the module to your device's power system using our simple integration guide.
                        The module acts as a gatekeeper to your device's functionality.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className={`transition-all duration-700 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '300ms' }}>
                  <div className="flex items-start relative">
                    <div className="flex-shrink-0 relative">
                      <div className="bg-[#222222] w-12 h-12 rounded-lg flex items-center justify-center border border-[#444444] relative z-10">
                        <Code size={24} className="text-[#FF3333]" />
                      </div>
                      <div className="absolute top-12 bottom-0 left-1/2 w-[2px] h-16 bg-gradient-to-b from-[#FF3333] to-transparent z-0"></div>
                    </div>
                    <div className="ml-6">
                      <div className="flex items-center mb-2">
                        <div className="bg-[#FF3333] text-white text-xs font-bold px-2 py-1 rounded mr-3">STEP 03</div>
                        <h4 className="text-white font-bold">Configuration & Setup</h4>
                      </div>
                      <p className="text-gray-400 border-l-2 border-[#333333] pl-4 ml-1">
                        Configure subscription plans and payment terms through our dashboard.
                        Define access rules, trial periods, and subscription tiers.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className={`transition-all duration-700 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '400ms' }}>
                  <div className="flex items-start relative">
                    <div className="flex-shrink-0 relative">
                      <div className="bg-[#222222] w-12 h-12 rounded-lg flex items-center justify-center border border-[#444444] relative z-10">
                        <Zap size={24} className="text-[#FF3333]" />
                      </div>
                      <div className="absolute top-12 bottom-0 left-1/2 w-[2px] h-16 bg-gradient-to-b from-[#FF3333] to-transparent z-0"></div>
                    </div>
                    <div className="ml-6">
                      <div className="flex items-center mb-2">
                        <div className="bg-[#FF3333] text-white text-xs font-bold px-2 py-1 rounded mr-3">STEP 04</div>
                        <h4 className="text-white font-bold">Deployment</h4>
                      </div>
                      <p className="text-gray-400 border-l-2 border-[#333333] pl-4 ml-1">
                        Deploy your devices to customers with subscription access built-in.
                        Each device is automatically registered in your management dashboard.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className={`transition-all duration-700 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '500ms' }}>
                  <div className="flex items-start relative">
                    <div className="flex-shrink-0">
                      <div className="bg-[#222222] w-12 h-12 rounded-lg flex items-center justify-center border border-[#444444] relative z-10">
                        <BarChart4 size={24} className="text-[#FF3333]" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <div className="flex items-center mb-2">
                        <div className="bg-[#FF3333] text-white text-xs font-bold px-2 py-1 rounded mr-3">STEP 05</div>
                        <h4 className="text-white font-bold">Revenue Collection</h4>
                      </div>
                      <p className="text-gray-400 border-l-2 border-[#333333] pl-4 ml-1">
                        Collect recurring revenue as the module enforces subscription terms.
                        Monitor performance and revenue through comprehensive analytics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tech visualization - taking 2 columns */}
              <div className="lg:col-span-2 flex items-center justify-center">
                <div className={`bg-[#191919] rounded-lg border border-[#333333] p-6 w-full max-w-sm h-80 relative overflow-hidden transition-all duration-1000 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  {/* CircuitBoard board visualization */}
                  <div className="absolute inset-0 p-4">
                    {/* Horizontal lines */}
                    <div className="absolute top-[20%] left-4 right-4 h-[1px] bg-[#333333]"></div>
                    <div className="absolute top-[40%] left-4 right-4 h-[1px] bg-[#333333]"></div>
                    <div className="absolute top-[60%] left-4 right-4 h-[1px] bg-[#333333]"></div>
                    <div className="absolute top-[80%] left-4 right-4 h-[1px] bg-[#333333]"></div>
                    
                    {/* Vertical lines */}
                    <div className="absolute left-[33%] top-4 bottom-4 w-[1px] bg-[#333333]"></div>
                    <div className="absolute left-[66%] top-4 bottom-4 w-[1px] bg-[#333333]"></div>
                    
                    {/* CircuitBoard nodes */}
                    <div className="absolute top-[20%] left-[33%] w-3 h-3 rounded-full bg-[#222222] border border-[#FF3333] transform -translate-x-1.5 -translate-y-1.5"></div>
                    <div className="absolute top-[40%] left-[66%] w-3 h-3 rounded-full bg-[#222222] border border-[#FF3333] transform -translate-x-1.5 -translate-y-1.5"></div>
                    <div className="absolute top-[60%] left-[33%] w-3 h-3 rounded-full bg-[#222222] border border-[#FF3333] transform -translate-x-1.5 -translate-y-1.5"></div>
                    <div className="absolute top-[80%] left-[66%] w-3 h-3 rounded-full bg-[#222222] border border-[#FF3333] transform -translate-x-1.5 -translate-y-1.5"></div>
                    
                    {/* Active node with pulse */}
                    <div className="absolute top-[40%] left-[33%] transform -translate-x-1.5 -translate-y-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#FF3333] z-10"></div>
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#FF3333] animate-ping opacity-75"></div>
                    </div>
                  </div>
                  
                  {/* CPU chip visualization */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#222222] rounded-md border border-[#444444] flex flex-col items-center justify-center shadow-lg">
                    <Cpu size={32} className="text-[#FF3333] mb-2" />
                    <div className="text-xs text-[#FF3333] font-bold">PAY2POWER</div>
                    <div className="text-xs text-gray-400">v1.0.3</div>
                    <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-[#FF3333] animate-pulse"></div>
                  </div>
                  
                  {/* Status indicators */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#222222] rounded p-3 border border-[#333333]">
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-400">STATUS</div>
                      <div className="text-xs text-[#FF3333]">SUBSCRIPTION ACTIVE</div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="text-xs text-gray-400">DEVICE ID</div>
                      <div className="text-xs text-white">P2P-X1200</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
