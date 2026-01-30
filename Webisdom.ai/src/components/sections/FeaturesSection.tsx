import { Zap, Shield, BarChart3 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    { 
      icon: <Zap size={36} className="text-primary" />, 
      title: "Fast Automation", 
      desc: "Automate routine tasks with AI and save hours daily." 
    },
    { 
      icon: <Shield size={36} className="text-primary" />, 
      title: "Secure & Reliable", 
      desc: "Data protection and privacy guaranteed at every step." 
    },
    { 
      icon: <BarChart3 size={36} className="text-primary" />, 
      title: "Analytics & Insights", 
      desc: "Get actionable insights in real-time to boost growth." 
    },
  ];

  return (
    /* Changed bg-gray-50 to bg-transparent */
    <section className="py-24 bg-transparent text-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-white">
          Our Key <span className="text-gradient">Features</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-12">
          {features.map((f, i) => (
            <div
              key={i}
              /* 1. Removed bg-white and solid shadow
                2. Added bg-white/5 and backdrop-blur-lg
                3. Refined the hover to keep transparency but add a primary glow
              */
              className="w-80 h-96 p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 flex flex-col items-center justify-center transform transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:bg-primary/10 hover:border-primary/50 group"
            >
              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                {f.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                {f.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-white/90 transition-colors">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;