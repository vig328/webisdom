"use client";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  MapPin,
  CheckCircle,
  Brain,
  Eye,
  TrendingUp,
  Shield,
  Cpu,
  Zap,
  Target,
  Sparkles,
  ChevronRight,
  ArrowLeft,
  Clock,
  Share2
} from "lucide-react";
import { AuditRequestDialog } from "@/components/forms/AuditRequestDialog";
import { DemoRequestDialog } from "@/components/forms/DemoRequestDialog";
import ParticlesBackground from "@/components/visuals/ParticlesBackground";

const Services = () => {
  const [isAuditDialogOpen, setIsAuditDialogOpen] = useState(false);
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null); 
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const section = searchParams.get("section");

  // --- CONTENT DATA ---
  const blogs = [
    {
      id: 1,
      category: "AI Strategy",
      categoryColor: "bg-primary/20 text-primary border-primary/30",
      title: "How AI is Transforming Global Enterprise Workflows",
      readTime: "8 min read",
      description: "Artificial Intelligence is moving from basic automation to a 'Cognitive Layer' that manages decision-making pipelines.",
      content: `
        <h3>The Rise of the Intelligence Layer</h3>
        <p>By 2026, the standard enterprise architecture will shift. We are moving away from 'Software as a Service' toward 'Intelligence as a Service'. This involves embedding neural networks directly into the communication flow of a company.</p>
        
        <h4>1. Cognitive Resource Management</h4>
        <p>Modern AI systems can now predict project bottlenecks before they occur. By analyzing historical velocity and current employee sentiment, our models can suggest resource reallocation in real-time.</p>
        
        <h4>2. The End of 'Data Silos'</h4>
        <p>Generative AI doesn't just store data; it understands context. It bridges the gap between the Sales department's CRM and the Engineering department's Jira, providing a unified strategic view that was previously impossible.</p>
        
        <blockquote>"The goal is not to replace the human element, but to provide an exoskeleton for the mind."</blockquote>
      `,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    {
      id: 2,
      category: "NLP",
      categoryColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      title: "Revolution of NLP-Powered Automation",
      readTime: "6 min read",
      description: "Natural Language Processing is evolving into Semantic Understanding, allowing machines to grasp human intent and cultural nuance.",
      content: `
        <h3>From Chatbots to Semantic Partners</h3>
        <p>Natural Language Processing has moved beyond simple pattern matching. Modern Large Language Models (LLMs) are now capable of understanding complex legal jargon and emotional subtext.</p>
        
        <h4>Strategic Use Cases:</h4>
        <ul>
          <li><strong>Automated Compliance:</strong> Scanning global trade news to instantly update internal shipping protocols.</li>
          <li><strong>Sentiment-Driven Sales:</strong> Analyzing customer calls to detect early signs of churn or extreme brand loyalty.</li>
          <li><strong>Institutional Memory:</strong> Converting 10 years of unstructured emails into a searchable knowledge base.</li>
        </ul>
      `,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      id: 3,
      category: "Computer Vision",
      categoryColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      title: "Computer Vision is Changing Automation Forever",
      readTime: "10 min read",
      description: "Computer Vision enables machines to interpret the world visually, providing 'Instant Awareness' in physical manufacturing environments.",
      content: `
        <h3>The Gift of Sight for Industry 4.0</h3>
        <p>Computer Vision (CV) is no longer just about recognizing faces. It's about 'Spatial Intelligence'—the ability for a machine to understand volume, heat, and velocity in a 3D space.</p>
        
        <h4>Zero-Defect Manufacturing</h4>
        <p>Using high-speed cameras and edge-computing models, we can now detect micro-fractures in aerospace components that are invisible to the human eye. This happens at the speed of the assembly line, ensuring 100% quality assurance without slowing down production.</p>

        <h4>Predictive Thermal Analysis</h4>
        <p>By integrating infrared spectrums into CV models, AI can identify electrical overloads in server racks or machinery before they lead to fire or failure.</p>
      `,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    },
  ];

  const auditProcess = [
    { icon: Search, title: "Performance Benchmarking", description: "Evaluating AI systems against industry standards.", duration: "1-2 weeks" },
    { icon: Shield, title: "Bias Detection", description: "Advanced analysis to detect algorithmic bias and ensure ethics.", duration: "2-3 weeks" },
    { icon: MapPin, title: "Improvement Roadmap", description: "Strategic plan with technical implementation pathways.", duration: "1 week" },
  ];

  // --- LOGIC ---
  useEffect(() => {
    if (section && !selectedBlog) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }
  }, [section, selectedBlog]);

  // --- BLOG DETAIL VIEW COMPONENT ---
  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-[#020617] text-white selection:bg-primary/30">
        <Header />
        <main className="pt-32 pb-20 relative z-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button 
              variant="ghost" 
              className="mb-8 text-white/60 hover:text-primary"
              onClick={() => setSelectedBlog(null)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Button>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Badge className={`mb-4 ${selectedBlog.categoryColor}`}>{selectedBlog.category}</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{selectedBlog.title}</h1>
              
              <div className="flex items-center gap-6 text-white/40 mb-10 pb-10 border-b border-white/10">
                <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> {selectedBlog.readTime}</div>
                <div className="flex items-center gap-2"><Share2 className="h-4 w-4 cursor-pointer hover:text-white" /> Share Analysis</div>
              </div>

              <img 
                src={selectedBlog.image} 
                className="w-full h-[400px] object-cover rounded-3xl mb-12 border border-white/10 shadow-2xl" 
                alt={selectedBlog.title} 
              />

              <div 
                className="prose prose-invert prose-primary max-w-none text-lg text-white/70 leading-relaxed 
                prose-headings:text-white prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:p-6 prose-blockquote:rounded-xl"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />

              <div className="mt-20 p-10 bg-primary/10 border border-primary/20 rounded-3xl text-center">
                <h3 className="text-2xl font-bold mb-4">Want to implement this technology?</h3>
                <p className="text-white/60 mb-8">Our AI Lab specializes in custom {selectedBlog.category} deployments.</p>
                <Button size="lg" className="rounded-full px-10" onClick={() => setIsDemoDialogOpen(true)}>
                  Speak with an Architect
                </Button>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
        <DemoRequestDialog open={isDemoDialogOpen} onOpenChange={setIsDemoDialogOpen} />
      </div>
    );
  }

  // --- MAIN SERVICES VIEW ---
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-primary/30 relative overflow-x-hidden">
      
      <Header />
      
      <main className="relative">
        {/* Hero Section - Particles Isolated Here */}
        <section className="relative pt-48 pb-32 text-center overflow-hidden">
          
          {/* BACKGROUND WRAPPER (Traps Particles and Image) */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 opacity-40 bg-center bg-cover"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop')` }}
            />
            {/* Particles restricted to Hero height */}
            <div className="absolute inset-0 pointer-events-none">
              <ParticlesBackground />
            </div>
            {/* Overlay for Hero gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/60 to-[#020617] pointer-events-none" />
          </div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge variant="outline" className="mb-6 border-primary/30 text-primary uppercase tracking-[0.2em] py-2 px-6 bg-primary/10 backdrop-blur-md">
                <span className="flex items-center"><Sparkles className="w-4 h-4 mr-2" /> Expertise & Innovation</span>
              </Badge>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                Enterprise <span className="text-primary">AI Solutions</span>
              </h1>
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                Empowering businesses with intelligent auditing, custom neural models, and strategic automation.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-primary" onClick={() => setIsDemoDialogOpen(true)}>
                  Schedule a Demo <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-white/20" onClick={() => setIsAuditDialogOpen(true)}>
                  Request AI Audit
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Audit Service Section - Solid Background */}
        <section className="py-24 relative bg-[#020617] z-10" id="ai-audit">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="bg-black/40 border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                <CardHeader className="text-center pb-0 pt-12">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Shield className="h-10 w-10 text-primary" />
                    <CardTitle className="text-4xl font-bold text-white tracking-tight">AI Audit as a Service</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 md:p-12 space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h4 className="font-bold text-xl text-white">The Audit Package</h4>
                      <ul className="space-y-4">
                        {["Performance benchmarking", "Advanced bias detection", "Ethical AI compliance", "ROI projections", "Risk mitigation"].map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-3 text-white/70">
                            <CheckCircle className="text-primary h-5 w-5 shrink-0" />
                            <span className="text-sm md:text-base">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-6">
                      <h4 className="font-bold text-xl text-white">Process Timeline</h4>
                      <div className="space-y-6">
                        {auditProcess.map((step, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-primary/20 border border-primary/30 text-primary rounded-lg flex items-center justify-center font-bold flex-shrink-0">{index + 1}</div>
                            <div>
                              <h5 className="font-bold text-white text-sm">{step.title} ({step.duration})</h5>
                              <p className="text-xs text-white/50">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-center pt-8 border-t border-white/10">
                    <Button size="lg" className="rounded-full px-12 h-14 bg-white text-black font-bold" onClick={() => setIsAuditDialogOpen(true)}>
                      Initialize System Audit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Neural Insights / Blog Section - Solid Background */}
        <section className="py-24 relative bg-[#020617] z-10" id="blog">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">Latest Neural <span className="text-primary">Insights</span></h2>
              <p className="text-white/50 text-lg">Deep dives into the architectures of the future.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-black/40 border border-white/10 rounded-2xl shadow-xl hover:border-primary/30 transition-all duration-500 overflow-hidden group cursor-pointer backdrop-blur-md"
                  onClick={() => setSelectedBlog(blog)}
                >
                  <div className="h-56 overflow-hidden relative">
                    <img src={blog.image} className="h-full w-full object-cover group-hover:scale-110 transition-all duration-700" alt={blog.title} />
                    <Badge className={`absolute top-4 left-4 border backdrop-blur-md ${blog.categoryColor}`}>{blog.category}</Badge>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight">{blog.title}</h3>
                    <p className="text-white/50 text-sm line-clamp-3">{blog.description}</p>
                    <div className="pt-4 flex items-center text-primary text-xs font-bold uppercase tracking-widest gap-2">
                      Read Full Analysis <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standard Content Section (Lab Capabilities) */}
        <section className="py-32 relative bg-black/20 z-10" id="ai-lab-solutions">
           <div className="container mx-auto px-4 text-center">
             <h2 className="text-4xl font-bold mb-16">AI Lab <span className="text-primary">Capabilities</span></h2>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                 { icon: Brain, title: "Custom Models" },
                 { icon: Cpu, title: "Edge Deployment" },
                 { icon: Eye, title: "Vision Systems" },
                 { icon: TrendingUp, title: "Strategy Consulting" }
               ].map((s, i) => (
                 <Card key={i} className="bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-all">
                   <s.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                   <h3 className="font-bold text-white">{s.title}</h3>
                 </Card>
               ))}
             </div>
           </div>
        </section>

      </main>

      <Footer />
      <AuditRequestDialog open={isAuditDialogOpen} onOpenChange={setIsAuditDialogOpen} />
      <DemoRequestDialog open={isDemoDialogOpen} onOpenChange={setIsDemoDialogOpen} />
    </div>
  );
};

export default Services;
