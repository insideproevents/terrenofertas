import { useState, useEffect } from 'react';
import { Menu, X, Mountain } from 'lucide-react';

interface NavbarProps {
  onShowRiveraCoigues?: (show: boolean) => void;
  onShowMañihuales?: (show: boolean) => void;
  onShowRioBlanco?: (show: boolean) => void;
  onShowSantuarioRioCondor?: (show: boolean) => void;
  onShowHome?: (show: boolean) => void;
}

const Navbar = ({ onShowRiveraCoigues, onShowMañihuales, onShowRioBlanco, onShowSantuarioRioCondor, onShowHome }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Destacados', href: '#catalogo' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const scrollToSection = (href: string) => {
    // Check if it's a special link for Rivera Coigues
    if (href === '/rivera-coigues/' || href === '#rivera-coigues') {
      if (onShowRiveraCoigues) {
        onShowRiveraCoigues(true);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      return;
    }
    // Check if it's a special link for Mañihuales
    if (href === '/mañihuales/' || href === '#mañihuales') {
      if (onShowMañihuales) {
        onShowMañihuales(true);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      return;
    }
    // Check if it's a special link for Rio Blanco
    if (href === '/rio-blanco/' || href === '#rio-blanco') {
      if (onShowRioBlanco) {
        onShowRioBlanco(true);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      return;
    }
    // Check if it's a special link for Santuario Rio Condor
    if (href === '/santuario-rio-condor/' || href === '#santuario-rio-condor') {
      if (onShowSantuarioRioCondor) {
        onShowSantuarioRioCondor(true);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      return;
    }
    // Check if it's the home link
    if (href === '#inicio') {
      if (onShowHome) {
        onShowHome(false);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      return;
    }
    // Check if it's the catalog/destacados link - go to main page first
    if (href === '#catalogo') {
      if (onShowHome) {
        onShowHome(false);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Wait for state to update, then scroll to catalog
      setTimeout(() => {
        const element = document.querySelector('#catalogo');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      setIsMobileMenuOpen(false);
      return;
    }
    // Check if it's an external link
    if (href.startsWith('/')) {
      window.location.href = href;
      setIsMobileMenuOpen(false);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0a3d4a]/95 backdrop-blur-md py-4 shadow-lg'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#inicio');
              }}
              className="flex items-center gap-3 group"
            >
              <Mountain
                className={`w-8 h-8 transition-all duration-300 ${
                  isScrolled ? 'text-[#5bc0de]' : 'text-white'
                } group-hover:scale-110`}
              />
              <span
                className={`font-display text-xl font-medium tracking-wider transition-colors duration-300 ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}
              >
                TERRENOFERTAS
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`nav-link text-sm tracking-[0.15em] uppercase font-light transition-colors duration-300 ${
                    isScrolled
                      ? 'text-white/90 hover:text-white'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#0a3d4a]/98 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-white text-2xl font-display tracking-wider hover:text-[#5bc0de] transition-colors duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isMobileMenuOpen
                  ? 'fadeInUp 0.5s ease forwards'
                  : 'none',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
