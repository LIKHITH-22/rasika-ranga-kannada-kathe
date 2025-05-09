
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Youtube, Twitter } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-kannada-black py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-heading text-kannada-gold mb-2">ಚಿತ್ರಕಥೆ</h2>
            <p className="text-gray-400">Kannada Storytelling Portfolio</p>
          </div>
          
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-kannada-gold hover:bg-gray-800">
              <Instagram size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-kannada-gold hover:bg-gray-800">
              <Youtube size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-kannada-gold hover:bg-gray-800">
              <Twitter size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-kannada-gold hover:bg-gray-800">
              <Mail size={20} />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="flex flex-wrap justify-center md:justify-start gap-6 mb-6 md:mb-0">
              <a href="#home" className="text-gray-400 hover:text-kannada-gold transition-colors">Home</a>
              <a href="#movies" className="text-gray-400 hover:text-kannada-gold transition-colors">Movies</a>
              <a href="#stories" className="text-gray-400 hover:text-kannada-gold transition-colors">Stories</a>
              <a href="#about" className="text-gray-400 hover:text-kannada-gold transition-colors">About</a>
            </nav>
            
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} ಚಿತ್ರಕಥೆ (Chithrakathe). All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
