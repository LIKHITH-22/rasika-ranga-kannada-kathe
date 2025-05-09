
import { Button } from "@/components/ui/button";
import { ArrowDown, BookOpen, Film } from "lucide-react";

const Hero = () => {
  const scrollToMovies = () => {
    const element = document.getElementById('movies');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStories = () => {
    const element = document.getElementById('stories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background with Karnataka flag-inspired design */}
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-kannada-black/90 to-kannada-red/80"></div>
      
      {/* Karnataka flag-inspired wave pattern */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-kannada-gold/20"></div>
      
      {/* Decorative Kannada symbols */}
      <div className="absolute top-20 left-10 opacity-30 hidden lg:block animate-float">
        <div className="text-9xl font-heading text-kannada-gold rotate-12">ಕ</div>
      </div>
      <div className="absolute bottom-40 right-10 opacity-30 hidden lg:block animate-float" style={{animationDelay: "2s"}}>
        <div className="text-9xl font-heading text-kannada-gold -rotate-12">ನ್ನ</div>
      </div>
      <div className="absolute top-40 right-20 opacity-20 hidden lg:block animate-float" style={{animationDelay: "3s"}}>
        <div className="text-8xl font-heading text-kannada-gold rotate-6">ಡ</div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-xl mx-auto md:mx-0">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-8">
            <div className="w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-kannada-gold to-yellow-500 rounded-full flex items-center justify-center border-4 border-white/30 shadow-lg animate-pulse">
              <span className="text-5xl md:text-6xl font-bold text-kannada-black font-heading">ಚಿ</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in text-center md:text-left">
              <span className="text-kannada-gold">ಕನ್ನಡದ</span> ಕಥೆಗಳು <br />
              <span className="relative">
                <span className="text-white/80">Cinema & Stories</span>
                <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-kannada-red"></span>
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-lg animate-fade-in" style={{animationDelay: "0.2s"}}>
            ಕರ್ನಾಟಕದ ಸಮೃದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯನ್ನು <span className="text-kannada-gold">ಚಿತ್ರ</span> (films) ಮತ್ತು <span className="text-kannada-gold">ಕಥೆ</span> (stories) ಮೂಲಕ ಅನ್ವೇಷಿಸುತ್ತಾ.
          </p>
          
          <div className="flex flex-wrap gap-6 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button 
              onClick={scrollToMovies}
              className="bg-kannada-red hover:bg-kannada-red/80 text-white border-none flex items-center gap-2 rounded-full shadow-lg px-6 transform transition-transform hover:scale-105"
              size="lg"
            >
              <Film size={18} />
              ಚಿತ್ರಗಳು (Films)
            </Button>
            
            <Button 
              onClick={scrollToStories}
              className="bg-kannada-gold hover:bg-kannada-gold/80 text-kannada-black border-none flex items-center gap-2 rounded-full shadow-lg px-6 transform transition-transform hover:scale-105"
              size="lg"
            >
              <BookOpen size={18} />
              ಕಥೆಗಳು (Stories)
            </Button>
          </div>
        </div>
      </div>
      
      {/* Traditional Kannada rangoli pattern - footer wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,213.2,56.44Z" className="fill-kannada-gold/20"></path>
          </svg>
        </div>
        <div className="h-full flex items-center justify-center relative z-10">
          <div className="flex items-center gap-4">
            <span className="text-kannada-gold">•</span>
            <span className="text-kannada-gold text-2xl">❋</span>
            <span className="text-kannada-gold">•</span>
            <span className="text-kannada-gold text-2xl">❋</span>
            <span className="text-kannada-gold">•</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-kannada-gold" size={36} />
      </div>
    </section>
  );
};

export default Hero;
