
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MoviesSection from "@/components/MoviesSection";
import StoriesSection from "@/components/StoriesSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-kannada-ivory relative">
      {/* Karnataka flag-inspired background patterns */}
      <div className="fixed inset-0 bg-[radial-gradient(#FFD70022_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      {/* Karnataka emblem-inspired decorative elements */}
      <div className="fixed top-0 left-0 w-40 h-40 border-t-4 border-l-4 border-kannada-gold rounded-tl-3xl pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-40 h-40 border-t-4 border-r-4 border-kannada-gold rounded-tr-3xl pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-40 h-40 border-b-4 border-l-4 border-kannada-gold rounded-bl-3xl pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-40 h-40 border-b-4 border-r-4 border-kannada-gold rounded-br-3xl pointer-events-none"></div>
      
      {/* Karnataka flag-inspired diagonal stripe */}
      <div className="fixed top-0 left-0 w-full h-2 bg-kannada-red pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-full h-2 bg-kannada-red pointer-events-none"></div>
      
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
