
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToMovies = () => {
    const element = document.getElementById('movies');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-kannada-black/70"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-xl mx-auto md:mx-0">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in">
            <span className="text-kannada-gold">ಕನ್ನಡ</span> Stories <br />
            Through Cinema & Words
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-md animate-fade-in" style={{animationDelay: "0.2s"}}>
            Exploring Karnataka's rich cultural heritage through compelling short films and immersive storytelling.
          </p>
          <div className="space-x-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button 
              onClick={scrollToMovies}
              className="bg-kannada-red hover:bg-kannada-red/80 text-white border-none"
            >
              Explore Works
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-kannada-gold" size={36} />
      </div>
    </section>
  );
};

export default Hero;
