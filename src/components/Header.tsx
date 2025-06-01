import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { theme } from '../theme';

const Header = ({setIsOrderFormOpen}:any) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#121212]/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-white font-bold text-2xl" style={{ fontFamily: theme.fonts.heading }}>
            Pay<span className="text-[#FF3333]">2</span>Power
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-[#FF3333] transition-colors"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >Home</Link>
          <Link to="/#product" className="text-white hover:text-[#FF3333] transition-colors">Product</Link>
          <Link to="/#pricing" className="text-white hover:text-[#FF3333] transition-colors">Pricing</Link>
          {/* <Link to="/#about" className="text-white hover:text-[#FF3333] transition-colors">About</Link> */}
          <button
            className="px-4 py-2 rounded bg-[#FF3333] text-white hover:bg-[#FF5555] transition-colors"
            onClick={() => setIsOrderFormOpen(true)}
          >
            Order Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121212] absolute top-full left-0 right-0 p-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-[#FF3333] transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/#product" className="text-white hover:text-[#FF3333] transition-colors" onClick={() => setMobileMenuOpen(false)}>Product</Link>
            <Link to="/#pricing" className="text-white hover:text-[#FF3333] transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link to="/#about" className="text-white hover:text-[#FF3333] transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <button
              className="px-4 py-2 rounded bg-[#FF3333] text-white hover:bg-[#FF5555] transition-colors text-left"
              onClick={() => {
                window.location.href = "/#order";
                setMobileMenuOpen(false);
              }}
            >
              Order Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
