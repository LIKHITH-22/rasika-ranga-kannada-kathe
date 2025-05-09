
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-kannada-ivory/95 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold font-heading text-kannada-red">
            ಚಿತ್ರಕಥೆ
            <span className="text-sm block text-kannada-blue font-body">Chithrakathe</span>
          </h1>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-kannada-black hover:text-kannada-red transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('movies')} 
            className="text-kannada-black hover:text-kannada-red transition-colors"
          >
            Movies
          </button>
          <button 
            onClick={() => scrollToSection('stories')} 
            className="text-kannada-black hover:text-kannada-red transition-colors"
          >
            Stories
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-kannada-black hover:text-kannada-red transition-colors"
          >
            About
          </button>
        </div>
        
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-kannada-black hover:text-kannada-red hover:bg-transparent"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-kannada-ivory py-4 px-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-kannada-black hover:text-kannada-red transition-colors py-2 border-b border-kannada-gold/20"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('movies')} 
              className="text-kannada-black hover:text-kannada-red transition-colors py-2 border-b border-kannada-gold/20"
            >
              Movies
            </button>
            <button 
              onClick={() => scrollToSection('stories')} 
              className="text-kannada-black hover:text-kannada-red transition-colors py-2 border-b border-kannada-gold/20"
            >
              Stories
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-kannada-black hover:text-kannada-red transition-colors py-2"
            >
              About
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
