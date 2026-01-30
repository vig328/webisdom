import { Zap, BarChart3, Shield } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    { 
      icon: <Zap size={36} className="text-primary" />, 
      title: "Step 1", 
      desc: "Discover your business needs." 
    },
    { 
      icon: <BarChart3 size={36} className="text-primary" />, 
      title: "Step 2", 
      desc: "Analyze with AI insights." 
    },
    { 
      icon: <Shield size={36} className="text-primary" />, 
      title: "Step 3", 
      desc: "Implement and optimize solutions." 
    },
  ];

  return (
    /* Changed to bg-transparent to allow global particles to show through */
    <section className="py-24 bg-transparent text-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-white">
          How It <span className="text-gradient">Works</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-12">
          {steps.map((step, i) => (
            <div
              key={i}
              /* - Replaced bg-white with a semi-transparent white/5
                 - Added backdrop-blur-lg to create the 'glass' effect
                 - Hover state now uses a subtle primary glow instead of a solid gradient
              */
              className="w-80 h-96 p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 flex flex-col items-center justify-center transform transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:bg-primary/10 hover:border-primary/50 group"
            >
              <div className="mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-white/90 transition-colors">
                {step.desc}
              </p>
              
              {/* Optional: Step indicator bubble */}
              <div className="mt-6 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white/40 group-hover:text-primary group-hover:border-primary/30 transition-colors">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;