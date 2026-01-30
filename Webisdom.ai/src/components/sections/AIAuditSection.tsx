import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, BarChart3, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AuditRequestDialog } from "@/components/forms/AuditRequestDialog";

const AIAuditSection = () => {
  const [isAuditDialogOpen, setIsAuditDialogOpen] = useState(false);
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "We analyze your business processes, data infrastructure, and operational workflows to identify AI opportunities."
    },
    {
      icon: BarChart3,
      title: "Audit",
      description: "Comprehensive assessment of your current systems and detailed evaluation of AI implementation potential."
    },
    {
      icon: MapPin,
      title: "Roadmap",
      description: "Delivery of expert insights with a strategic roadmap for AI adoption tailored to your business goals."
    }
  ];

  return (
    /* Changed bg-gradient to transparent so particles show through */
    <section className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            AI Audit <span className="text-gradient">as a Service</span>
          </h2>
          <p className="text-xl text-muted-foreground/80 max-w-3xl mx-auto">
            Transform your business with our comprehensive AI assessment. We identify opportunities, analyze potential, and deliver actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={step.title} 
                /* Changed to bg-card/20 and added backdrop-blur. 
                   Removed 'card-gradient' if it had a solid color.
                */
                className="relative bg-card/10 backdrop-blur-md border border-white/10 hover:border-accent/50 transition-all duration-500 group overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    {/* Icon container with slight transparency */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/80 to-accent/80 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-muted-foreground/90">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          {/* Glassmorphism call-to-action box */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Business?</h3>
            <p className="text-muted-foreground/80 mb-6">
              Get a comprehensive AI audit and discover how artificial intelligence can revolutionize your operations, reduce costs, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group bg-primary hover:bg-primary/90" onClick={() => setIsAuditDialogOpen(true)}>
                Request AI Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white" asChild>
                <Link to="/services">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAuditSection;