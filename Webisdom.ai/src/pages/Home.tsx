import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import IndustriesSection from "@/components/sections/IndustriesSection";
import AIAuditSection from "@/components/sections/AIAuditSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ParticlesBackground from "@/components/visuals/ParticlesBackground";

const Home = () => {
  return (
    // We use bg-black to make the white lines pop
    <div className="min-h-screen bg-black relative overflow-hidden">
      
      {/* 1. The Particle Layer */}
      <ParticlesBackground />

      {/* 2. The Content Layer */}
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <ProductShowcase />
          <IndustriesSection />
          <AIAuditSection />
          <NewsletterSection />
          <FeaturesSection />
          <ProcessSection />
        </main>
        <Footer />
      </div>

    </div>
  );
};

export default Home;