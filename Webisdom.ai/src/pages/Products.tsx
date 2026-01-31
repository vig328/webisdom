"use client";
import { useState } from "react";
import { Link } from "react-router-dom"; 
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, ChevronLeft, Sparkles, ChevronDown 
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { DemoRequestDialog } from "@/components/forms/DemoRequestDialog";
import CaseStudies from "@/components/sections/CaseStudies";
import ParticlesBackground from "@/components/visuals/ParticlesBackground"; 

// IMPORT DATA
import { products } from "@/data/productsData"; 

const ProductTour = () => {
  const steps = [
    {
      title: "Executive Dashboard",
      description: "Get a bird's eye view of all your AI operations. Monitor performance metrics, revenue growth, and system health in real-time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
    },
    {
      title: "Smart Workflow Automation",
      description: "Automate repetitive tasks with drag-and-drop AI agents. Connect your CRM, Email, and ERP systems seamlessly.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast future trends with 95% accuracy. Use historical data to make informed decisions about inventory and staffing.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692"
    },
    {
      title: "Budget & Compliance Control",
      description: "Ensure contract compliance and gain full control over rates, limits, and budget definitions automatically.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length);
  const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <div className="bg-black/60 backdrop-blur-xl rounded-2xl overflow-hidden mb-20 border border-white/10 shadow-2xl relative z-10">
      <div className="bg-white/5 p-6 md:p-8 text-center border-b border-white/10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Product Tour — Enterprise AI Suite</h2>
        <p className="text-white/50 text-lg">
          Exceed client expectations with projects that are on time and on budget.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row h-[500px] lg:h-[600px]">
        <div className="w-full lg:w-2/3 bg-black/20 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentStep}
              src={steps[currentStep].image}
              alt={steps[currentStep].title}
              className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 flex justify-between items-center px-4 pointer-events-none">
            <Button variant="secondary" size="icon" className="pointer-events-auto rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-primary" onClick={prevStep}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button variant="secondary" size="icon" className="pointer-events-auto rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-primary" onClick={nextStep}>
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center bg-transparent border-l border-white/10">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">
            Phase {currentStep + 1} / {steps.length}
          </span>
          <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
            {steps[currentStep].title}
          </h3>
          <p className="text-lg text-white/60 leading-relaxed mb-8">
            {steps[currentStep].description}
          </p>
          <div className="flex gap-2">
             {steps.map((_, idx) => (
               <div 
                 key={idx} 
                 onClick={() => setCurrentStep(idx)}
                 className={`h-1 rounded-full cursor-pointer transition-all duration-500 ${idx === currentStep ? 'w-12 bg-primary' : 'w-4 bg-white/20'}`}
               />
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [filter, setFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const categories = ["All", ...new Set(products.map(p => p.category))];
  const displayedCategories = filter === "All" 
    ? [...new Set(products.map(p => p.category))] 
    : [filter];

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-primary/30 relative overflow-x-hidden">
      
      {/* HEADER IS OUTSIDE MAIN TO OVERLAY PROPERLY */}
      <Header />
      
      {/* VERTICAL GLOW LINE - GLOBAL POSITIONED */}
      <div className="fixed left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/40 to-transparent -translate-x-1/2 z-1 pointer-events-none" />

      <main className="relative">
        
        {/* Hero Section - PARTICLES TRAPPED HERE */}
        <section className="relative pt-48 pb-32 text-center overflow-hidden min-h-[80vh] flex items-center justify-center">
          
          {/* 1. BACKGROUND LAYERS (TRAPPED) */}
          <div className="absolute inset-0 z-0">
             {/* Dynamic Neural Network Image */}
             <div 
                className="absolute inset-0 opacity-40 bg-center bg-cover"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop')` }}
             />
             {/* Particles Effect Only for Hero */}
             <div className="absolute inset-0 pointer-events-none">
                <ParticlesBackground />
             </div>
             {/* Overlays for Hero Readability */}
             <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-transparent to-[#020617] pointer-events-none" />
          </div>

          {/* 2. HERO CONTENT */}
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 border-primary/40 text-primary uppercase tracking-[0.2em] py-2 px-6 bg-primary/10 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <Sparkles className="w-4 h-4 mr-2" /> AI Intelligence Layer
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                AI Product <span className="text-primary">Suite</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-2xl font-medium">
                Precision-engineered AI agents designed to transform enterprise data into actionable ROI.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-primary hover:bg-primary/80 text-white border-none shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all" onClick={() => setIsModalOpen(true)}>
                  Book a Demo <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-white/20 bg-black/40 hover:bg-black/60 text-white backdrop-blur-md" asChild>
                  <a href="#product-tour">Explore Architecture</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Catalog Section - PLAIN BACKGROUND (Dark Navy) */}
        <section className="py-24 relative bg-[#020617] z-10" id="product-tour">
          <div className="container mx-auto px-4">
            
            <Tabs defaultValue="products" className="w-full">
              <div className="flex justify-center mb-20">
                <TabsList className="p-1 bg-black/60 border border-white/10 rounded-full backdrop-blur-xl">
                  <TabsTrigger value="products" className="rounded-full px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-white">Our Systems</TabsTrigger>
                  <TabsTrigger value="case-studies" className="rounded-full px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-white">Success Logic</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="products" className="space-y-32 outline-none">
                
                <ProductTour />

                {/* Filter Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 border border-white/10 py-10 bg-black/40 backdrop-blur-md px-8 rounded-2xl shadow-xl">
                  <div>
                    <h2 className="text-3xl font-bold">System Catalog</h2>
                    <p className="text-white/70 mt-1 font-medium italic">Filtering {products.length} active neural nodes...</p>
                  </div>
                  
                  <div className="relative w-full md:w-72">
                    <select
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                      className="w-full bg-[#0f172a]/90 border border-white/10 text-white text-sm rounded-xl block p-4 pr-10 appearance-none backdrop-blur-md focus:ring-2 focus:ring-primary/50 outline-none"
                    >
                      {categories.map((cat, idx) => (
                        <option key={idx} value={cat}>{cat === "All" ? "All Divisions" : cat}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30 pointer-events-none" />
                  </div>
                </div>

                {/* Product Grid */}
                <div className="space-y-32">
                  {displayedCategories.map((category) => {
                    const categoryProducts = products.filter(p => p.category === category);
                    if (categoryProducts.length === 0) return null;

                    return (
                      <div key={category} className="space-y-12">
                        <div className="flex items-center gap-6">
                          <h2 className="text-4xl font-bold tracking-tight text-white drop-shadow-md">{category}</h2>
                          <div className="h-[1px] flex-grow bg-gradient-to-r from-white/30 to-transparent"></div>
                          <Badge className="bg-primary/30 text-primary border-primary/40 backdrop-blur-md px-4 py-1">{categoryProducts.length} Units</Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {categoryProducts.map((product) => (
                            <Card 
                              key={product.id}
                              className="group relative bg-black/50 border-white/10 backdrop-blur-md hover:bg-black/70 hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-lg"
                            >
                              <Link to={`/products/${product.id}`}>
                                <div className="relative h-64 overflow-hidden">
                                  <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80"></div>
                                  <Badge className="absolute top-4 right-4 bg-primary text-white border-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                                    {product.status}
                                  </Badge>
                                </div>

                                <CardContent className="p-8">
                                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
                                  <p className="text-primary/80 text-sm font-semibold mb-4 uppercase tracking-wider">{product.subtitle}</p>
                                  <p className="text-white/80 mb-8 text-sm leading-relaxed line-clamp-3">
                                    {product.description}
                                  </p>
                                  <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                                    <span className="text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                                      System Architecture
                                    </span>
                                    <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
                                  </div>
                                </CardContent>
                              </Link>
                            </Card>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="case-studies">
                <CaseStudies />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 relative overflow-hidden bg-[#020617]">
          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
            <h2 className="text-5xl font-bold mb-8 tracking-tighter drop-shadow-2xl">Ready to Deploy?</h2>
            <p className="text-xl text-white/90 mb-12 drop-shadow-md">
              Our neural agents integrate with your existing tech stack in days, not months.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-primary hover:text-white rounded-full h-16 px-12 text-lg font-bold transition-all shadow-2xl" onClick={() => setIsModalOpen(true)}>
              Initialize Free Pilot
            </Button>
          </div>
        </section>

      </main>
      <DemoRequestDialog open={isModalOpen} onOpenChange={setIsModalOpen} />
      <Footer />
    </div>
  );
};

export default Products;
