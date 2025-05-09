
import { Button } from "@/components/ui/button";
import { Book, Film, Mail } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-kannada-ivory">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://source.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="Director at work" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-kannada-gold p-5 rounded-lg shadow-lg hidden md:block">
                <p className="font-heading text-kannada-black text-lg">
                  ಕನ್ನಡ ಸಾಹಿತ್ಯದ ಮೂಲಕ <br />
                  <span className="text-sm">"Through Kannada literature"</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-kannada-black">
              <span className="text-kannada-red">About</span> The Creator
            </h2>
            <div className="h-1 w-20 bg-kannada-gold mb-6"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Namaskara! I am a filmmaker and storyteller deeply rooted in the rich cultural 
              heritage of Karnataka. My passion lies in exploring and preserving Kannada 
              traditions, folklore, and contemporary narratives through visual and written 
              mediums.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              With over 10 years of experience in creating short films and writing stories, 
              I strive to bridge the gap between traditional storytelling and modern cinema.
              My work has been featured in various film festivals across South India, and
              my stories have been published in leading Kannada literary magazines.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-kannada-red/10 rounded-full">
                  <Film className="text-kannada-red h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-kannada-black">12+</h4>
                  <p className="text-sm text-gray-600">Short Films</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-kannada-blue/10 rounded-full">
                  <Book className="text-kannada-blue h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-kannada-black">30+</h4>
                  <p className="text-sm text-gray-600">Written Stories</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-kannada-red hover:bg-kannada-red/80 text-white border-none">
              <Mail className="mr-2 h-4 w-4" /> Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
