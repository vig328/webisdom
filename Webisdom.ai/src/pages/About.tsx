"use client";
import React, { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Target, Eye, Users, Sparkles } from "lucide-react";

// Import your particle background component
import ParticlesBackground from "@/components/visuals/ParticlesBackground"; 

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "Building domain-specific AI solutions that deliver measurable impact across Hospitality, Fintech, and Healthcare industries."
    },
    {
      icon: Eye,
      title: "Vision", 
      description: "To be the trusted AI partner for enterprises, transforming industries through intelligent, scalable, and future-ready solutions."
    },
    {
      icon: Users,
      title: "Values",
      description: "Innovation, integrity, and impact drive everything we do. We believe in creating AI that serves humanity and enhances business outcomes."
    }
  ];

  const teamMembers = [
    {
      name: "Amardeep Bajpai",
      role: "FOUNDER, IIM-A ALUMNUS",
      image: "/lovable-uploads/aa6bc937-0bd0-4524-a16f-7dc9e29851c4.png",
      description: "Mr. Amardeep Bajpai did his management education from the prestigious Indian Institute of Management, Ahmedabad."
    },
    {
      name: "Gourav Singh",
      role: "Sr. Vice President, BD & Client Servicing",
      image: "/lovable-uploads/2ca69ba8-ceb5-425d-92d5-52e9066faf81.png",
      description: "Accomplishes project objectives by planning and evaluating project activities."
    },
    {
      name: "Atharv Kumar",
      role: "AI LEAD, IIT MANDI ALUMNUS",
      image: "/lovable-uploads/506b0336-44ee-4e68-8cea-73e6a5f369ca.png",
      description: "As the AI Lead at Webisdom AI Solutions, driving innovation across Hospitality, Fintech, and Healthcare."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-primary/30 relative overflow-x-hidden">
      
      <Header />
      
      <main className="relative">
        {/* HERO SECTION - Particles and Watermark Isolated Here */}
        <section className="relative pt-48 pb-32 text-center overflow-hidden min-h-[60vh] flex items-center">
          
          {/* 1. BACKGROUND LAYERS (TRAPPED IN HERO) */}
          <div className="absolute inset-0 z-0">
            {/* Layered Earth/Network Image */}
            <div 
              className="absolute inset-0 opacity-30 bg-center bg-cover"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')`, 
                filter: 'brightness(0.3) contrast(1.1)'
              }}
            />
            
            {/* GIANT "ABOUT" WATERMARK */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="text-[30vw] font-black text-white/[0.02] leading-none tracking-tighter uppercase">
                About
              </span>
            </div>

            {/* PARTICLES EFFECT */}
            <div className="absolute inset-0 pointer-events-none">
              <ParticlesBackground />
            </div>

            {/* GRADIENT MASKING */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] pointer-events-none" />
          </div>

          {/* 2. HERO CONTENT */}
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 border-primary/40 text-primary uppercase tracking-[0.2em] py-2 px-6 bg-primary/10 backdrop-blur-md">
                <Sparkles className="w-4 h-4 mr-2" /> Our Identity
              </Badge>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                About <span className="text-primary">Webisdom AI</span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed shadow-sm">
                Pioneering the future of AI-driven business transformation, one industry at a time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. SUBSEQUENT SECTIONS - SOLID BACKGROUNDS FOR FOCUS */}

        {/* Company Story Section */}
        <section className="py-24 relative z-10 bg-[#020617]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                  Transforming Industries with <span className="text-primary shadow-primary/20">Intelligent AI</span>
                </h2>
                <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                  <p>
                    At Webisdom AI Solutions, we believe that artificial intelligence should be more than just a buzzword—it should be a powerful tool that creates real, measurable impact for businesses.
                  </p>
                  <p>
                    Founded with the vision of democratizing AI across key industries, we specialize in building domain-specific solutions that understand the unique challenges within Hospitality, Fintech, and Healthcare sectors.
                  </p>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative group">
                <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm h-[400px]">
                  <img 
                    src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop" 
                    alt="Neural AI Brain Concept"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Foundation Section (Mission/Vision) */}
        <section className="py-24 relative z-10 bg-[#020617]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our <span className="text-primary">Foundation</span></h2>
              <p className="text-white/60 max-w-2xl mx-auto">The principles that guide our innovation and drive our commitment to excellence.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="bg-slate-900/60 border-white/10 backdrop-blur-xl hover:bg-slate-800/80 hover:border-primary/50 transition-all duration-500 shadow-xl">
                    <CardContent className="p-10 text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/30">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-md">
                        {value.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed font-medium">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 relative z-10 bg-black/40 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Meet Our <span className="text-primary">Team</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member) => (
                <Card key={member.name} className="bg-slate-900/40 border-white/5 hover:border-primary/30 transition-all duration-500">
                  <CardContent className="p-8 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-2 border-primary/20 p-1">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full" 
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                    <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Transformation Section */}
        <section className="py-24 relative z-10 bg-[#020617]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Industries We <span className="text-primary">Transform</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {["Hospitality", "Fintech", "Healthcare"].map((industry, index) => (
                <Card key={industry} className="bg-slate-900/40 border-white/10 hover:bg-black/60 transition-all duration-500 text-center group">
                  <CardContent className="p-10">
                    <div className="text-5xl font-black text-white/10 mb-6 group-hover:text-primary/30 transition-colors">0{index + 1}</div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{industry}</h3>
                    <p className="text-slate-400 group-hover:text-slate-200 transition-colors">
                      {industry === "Hospitality" && "Revolutionizing guest experiences and operational efficiency with our Hotel AI Chieftain platform."}
                      {industry === "Fintech" && "Next-generation financial intelligence for risk management and customer insights."}
                      {industry === "Healthcare" && "Intelligent healthcare solutions for patient care optimization."}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
