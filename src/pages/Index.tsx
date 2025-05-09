
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MoviesSection from "@/components/MoviesSection";
import StoriesSection from "@/components/StoriesSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-kannada-ivory relative">
      {/* Background Kannada-style geometric patterns */}
      <div className="fixed inset-0 bg-[radial-gradient(#E6B32522_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
      
      {/* Corner decorative elements */}
      <div className="fixed top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-kannada-gold/20 rounded-tl-3xl pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-kannada-gold/20 rounded-tr-3xl pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-kannada-gold/20 rounded-bl-3xl pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-kannada-gold/20 rounded-br-3xl pointer-events-none"></div>
      
      <Navbar />
      <Hero />
      <MoviesSection />
      <StoriesSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
};

export default Index;
