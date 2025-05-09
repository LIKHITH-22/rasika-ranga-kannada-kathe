
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
      {/* Background pattern with Kannada style overlay */}
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-kannada-black/80 to-kannada-blue/70"></div>
      
      {/* Decorative Kannada symbols */}
      <div className="absolute top-20 left-10 opacity-20 hidden lg:block">
        <div className="text-9xl font-heading text-kannada-gold rotate-12">ಕ</div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 hidden lg:block">
        <div className="text-9xl font-heading text-kannada-gold -rotate-12">ನ್ನ</div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-xl mx-auto md:mx-0">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-kannada-gold rounded-full flex items-center justify-center border-4 border-white/30">
              <span className="text-4xl md:text-5xl font-bold text-kannada-black font-heading">ಚಿ</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in text-center md:text-left">
              <span className="text-kannada-gold">ಕನ್ನಡ</span> Stories <br />
              <span className="relative">
                Through Cinema & Words
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-kannada-red"></span>
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-md animate-fade-in" style={{animationDelay: "0.2s"}}>
            Exploring Karnataka's rich cultural heritage through compelling <span className="text-kannada-gold">ಚಿತ್ರ</span> (films) and immersive <span className="text-kannada-gold">ಕಥೆ</span> (stories).
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button 
              onClick={scrollToMovies}
              className="bg-kannada-red hover:bg-kannada-red/80 text-white border-none flex items-center gap-2"
              size="lg"
            >
              <Film size={18} />
              ಚಿತ್ರ Films
            </Button>
            
            <Button 
              onClick={scrollToStories}
              className="bg-kannada-gold hover:bg-kannada-gold/80 text-kannada-black border-none flex items-center gap-2"
              size="lg"
            >
              <BookOpen size={18} />
              ಕಥೆ Stories
            </Button>
          </div>
        </div>
      </div>
      
      {/* Traditional Kannada rangoli pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-kannada-black/50 backdrop-blur-sm border-t border-kannada-gold/30">
        <div className="h-full flex items-center justify-center">
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
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-kannada-gold" size={36} />
      </div>
    </section>
  );
};

export default Hero;
