import { Card, CardContent } from "@/components/ui/card";
import { Building2, Heart, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IndustriesSection = () => {
  const navigate = useNavigate();
  const industries = [
    {
      icon: Building2,
      name: "Hospitality",
      description:
        "AI-powered solutions for hotels, restaurants, and travel companies to enhance guest experiences and optimize operations.",
      features: [
        "Guest Experience Management",
        "Revenue Optimization",
        "Operational Intelligence",
      ],
    },
    {
      icon: Heart,
      name: "Healthcare",
      description:
        "Intelligent healthcare solutions for patient care optimization, medical decision support, and predictive analytics.",
      features: [
        "Patient Care Intelligence",
        "Medical Decision Support",
        "Predictive Health Analytics",
      ],
    },
    {
      icon: TrendingUp,
      name: "Fintech",
      description:
        "Advanced financial intelligence for risk management, fraud detection, and customer insights in financial services.",
      features: ["Risk Assessment AI", "Fraud Detection", "Customer Analytics"],
    },
  ];

  return (
    /* Changed bg-secondary/30 to bg-transparent */
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground/80 max-w-3xl mx-auto">
            Specialized AI solutions tailored for specific industry needs,
            delivering targeted results and sector-specific expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Card
                key={industry.name}
                /* Replaced 'card-gradient' with glass styles: bg-white/5 + backdrop-blur */
                className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-primary/50 transition-all duration-500 group overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/80 to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">{industry.name}</h3>
                  <p className="text-muted-foreground/90 mb-6">
                    {industry.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {industry.features.map((feature, index) => (
                      <div
                        key={index}
                        className="text-xs bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Modernized "Know More" Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate("/industries")}
            className="group relative px-8 py-3 font-semibold text-white transition-all duration-300 bg-transparent border border-white/20 rounded-xl hover:border-primary/50 hover:bg-white/5 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Know More 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;