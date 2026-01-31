"use client";
import React, { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Hotel, Heart, Building2, ShoppingBag, GraduationCap, 
  Home, Factory, Truck, Gavel, Cpu, Wheat, TrendingUp, Sparkles, ArrowRight 
} from "lucide-react";

// Import your particle background component
import ParticlesBackground from "@/components/visuals/ParticlesBackground"; 

const industryConfig = [
  { id: "hospitality", title: "Hospitality", icon: Hotel, color: "text-blue-400", bg: "bg-blue-500/10", desc: "AI for Hotels, Resorts, Restaurants & Travel." },
  { id: "fintech", title: "Fintech", icon: Building2, color: "text-purple-400", bg: "bg-purple-500/10", desc: "Banking automation, Fraud detection & Compliance." },
  { id: "healthcare", title: "Healthcare", icon: Heart, color: "text-red-400", bg: "bg-red-500/10", desc: "Diagnostics, Patient Triage & Pharma R&D." },
  { id: "tech", title: "Technology", icon: Cpu, color: "text-slate-400", bg: "bg-slate-500/10", desc: "Dev Tools, Cybersecurity & Autonomous Agents." },
  { id: "manufacturing", title: "Manufacturing", icon: Factory, color: "text-orange-400", bg: "bg-orange-500/10", desc: "IoT, Predictive Maintenance & Safety." },
  { id: "retail", title: "Retail", icon: ShoppingBag, color: "text-pink-400", bg: "bg-pink-500/10", desc: "E-commerce optimization & Marketing AI." },
  { id: "education", title: "Education", icon: GraduationCap, color: "text-yellow-400", bg: "bg-yellow-500/10", desc: "EdTech, Personalized Tutoring & Grading." },
  { id: "agtech", title: "AgriTech", icon: Wheat, color: "text-green-400", bg: "bg-green-500/10", desc: "Smart Farming, Drones & Yield Prediction." },
  { id: "logistics", title: "Logistics", icon: Truck, color: "text-cyan-400", bg: "bg-cyan-500/10", desc: "Supply Chain, Fleet Management & Routing." },
  { id: "real-estate", title: "Real Estate", icon: Home, color: "text-teal-400", bg: "bg-teal-500/10", desc: "Valuation, PropTech & Market Analysis." },
  { id: "revenue", title: "Revenue Mgmt", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-500/10", desc: "Dynamic Pricing & Competitor Intelligence." },
  { id: "legal", title: "LegalTech", icon: Gavel, color: "text-stone-400", bg: "bg-stone-500/10", desc: "Contract Analysis, Patents & Compliance." },
  { id: "coworking", title: "Coworking", icon: Sparkles, color: "text-violet-400", bg: "bg-violet-500/10", desc: "Workspace Automation & Community Mgmt." },
];

const Industries = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (id: string) => {
    navigate(`/industry/${id}`);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-primary/30 relative overflow-x-hidden">
      
      <Header />
      
      <main className="relative">
        {/* HERO SECTION - Particles and Large Text restricted here */}
        <section className="relative pt-48 pb-32 text-center overflow-hidden min-h-[70vh] flex items-center">
          
          {/* 1. BACKGROUND LAYERS (TRAPPED IN HERO) */}
          <div className="absolute inset-0 z-0">
            {/* Neural Network Image */}
            <div 
              className="absolute inset-0 opacity-30 bg-center bg-cover"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop')`, 
                filter: 'brightness(0.4) contrast(1.1)'
              }}
            />
            
            {/* GIANT "AI" BACKGROUND TEXT */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="text-[40vw] font-black text-white/[0.03] leading-none tracking-tighter">
                AI
              </span>
            </div>

            {/* PARTICLES EFFECT */}
            <div className="absolute inset-0 pointer-events-none">
              <ParticlesBackground />
            </div>

            {/* GRADIENT MASKING */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_90%)] pointer-events-none" />
          </div>

          {/* 2. HERO CONTENT */}
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 border-primary/40 text-primary uppercase tracking-[0.2em] py-2 px-6 bg-primary/10 backdrop-blur-md">
                <Sparkles className="w-4 h-4 mr-2" /> Sectors We Transform
              </Badge>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                Our <span className="text-primary">Industries</span>
              </h1>
              <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
                Select an industry to explore tailored AI solutions engineered for the enterprise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. INDUSTRY GRID - SOLID BACKGROUND FOR CLARITY */}
        <section className="py-24 container mx-auto px-4 relative bg-[#020617] z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryConfig.map((ind) => {
              const Icon = ind.icon;
              return (
                <Card 
                  key={ind.id} 
                  onClick={() => handleCardClick(ind.id)}
                  className="group cursor-pointer bg-white/[0.03] border-white/10 backdrop-blur-xl hover:bg-white/[0.08] hover:border-primary/40 transition-all duration-500 overflow-hidden relative shadow-2xl"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="flex flex-row items-center gap-4 pb-2 relative z-10">
                    <div className={`p-3.5 rounded-2xl ${ind.bg} border border-white/5 group-hover:border-primary/50 transition-all duration-500`}>
                      <Icon className={`w-8 h-8 ${ind.color} transition-colors`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {ind.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="text-white/40 mb-6 text-sm leading-relaxed group-hover:text-white/70 transition-colors">{ind.desc}</p>
                    <div className="flex items-center text-xs font-bold uppercase tracking-widest text-primary opacity-60 group-hover:opacity-100 transition-all">
                      View Solutions <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Industries;
