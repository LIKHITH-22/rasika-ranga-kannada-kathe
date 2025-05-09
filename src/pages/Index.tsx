
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MoviesSection from "@/components/MoviesSection";
import StoriesSection from "@/components/StoriesSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
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
