import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CultureSection from './components/CultureSection';
import TourismSection from './components/TourismSection';
import EventsSection from './components/EventsSection';
import ActivitiesSection from './components/ActivitiesSection';
import NearbyCitiesSection from './components/NearbyCitiesSection';
import SecuritySection from './components/SecuritySection';
import GallerySection from './components/GallerySection';
import CTASection from './components/CTASection';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Cultura', href: '#cultura' },
    { name: 'Turismo', href: '#turismo' },
    { name: 'Eventos', href: '#eventos' },
  ];

  return (
    <div className="min-h-screen flex flex-col w-full relative">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="#inicio" className="flex items-center gap-2 group">
            <span className={`text-2xl font-display font-bold transition-colors ${isScrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
              Belo <span className="text-brand-yellow group-hover:text-brand-orange transition-colors">Jardim</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-semibold tracking-wide hover:text-brand-yellow transition-colors ${isScrolled ? 'text-white' : 'text-white drop-shadow-md'}`}
              >
                {link.name}
              </a>
            ))}
            <a href="#contato" className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-2 rounded-full font-semibold transition-transform hover:scale-105 shadow-lg">
              Visite-nos
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white drop-shadow-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl text-white font-display font-semibold hover:text-brand-yellow transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato" 
            onClick={() => setMobileMenuOpen(false)}
            className="bg-brand-orange text-white px-8 py-3 rounded-full text-xl font-semibold mt-4"
          >
            Visite-nos
          </a>
        </div>
      )}

      {/* Main Content Areas */}
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <CultureSection />
        <TourismSection />
        <EventsSection />
        <ActivitiesSection />
        <NearbyCitiesSection />
        <SecuritySection />
        <GallerySection />
        <CTASection />
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12 border-t border-brand-dark/20">
        <div className="container mx-auto px-4 md:px-8 text-center text-sm text-gray-400">
          <p className="mb-2">Material desenvolvido no código sem fronteiras:</p>
          <p className="mb-2">Desenvolvimento web com IA.</p>
          <p className="mb-2">Instrutor: Eliakim Rocha</p>
          <p>Data: 18/03/2026</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
