import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, CheckCircle, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

// Import your particle background component (same as About page)
import ParticlesBackground from "@/components/visuals/ParticlesBackground"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "demo",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true);
      
      try {
        const now = new Date();
        const dateStr = now.toISOString().split('T')[0];
        const timeStr = now.toTimeString().split(' ')[0];

        const confirmationId = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
        const { error: insertError } = await supabase
          .from('form_submissions')
          .insert([
            {
              submission_type: 'contact',
              confirmation_id: confirmationId,
              name: formData.name,
              email: formData.email,
              message: `Service: ${formData.service}\nMessage: ${formData.message}\nDate: ${dateStr} ${timeStr}`,
            }
          ]);

        if (insertError) console.error('Database insert error:', insertError);

        const response = await fetch("https://email-backend-snowy-five.vercel.app/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            message: formData.message,
            type: formData.service,
            phone: "Not provided in form"
          }),
        });

        const data = await response.json();
        if (!data.success) throw new Error("Failed to send email");

        setIsSubmitted(true);
        setFormData({ name: "", email: "", company: "", service: "demo", message: "" });
        
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });

      } catch (error: any) {
        toast({
          title: "Error sending message",
          description: error?.message || "Connection failed.",
          variant: "destructive"
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-primary/30 relative overflow-x-hidden">
      
      {/* 1. LAYERED BACKGROUND IMAGE (Technical/Global Connection theme) */}
      <div 
        className="fixed inset-0 z-0 opacity-30 transition-opacity duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2000&auto=format&fit=crop')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.2) contrast(1.2)'
        }}
      />
      
      {/* 2. GRADIENT OVERLAYS (Ensures text remains readable) */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_90%)] pointer-events-none" />

      {/* 3. PARTICLES EFFECT */}
      <ParticlesBackground />

      <Header />
      
      <main className="relative z-10">
        {/* UPDATED HERO SECTION */}
        <section className="pt-48 pb-24 text-center relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl relative">
            <Badge variant="outline" className="mb-6 border-primary/40 text-primary uppercase tracking-[0.2em] py-2 px-6 bg-primary/10 backdrop-blur-md">
              <Sparkles className="w-4 h-4 mr-2" /> Connect with us
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
              Get in <span className="text-primary">Touch</span>
            </h1>
            
            <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form Card - Styled to match About cards */}
              <Card className="bg-slate-900/60 border-white/10 backdrop-blur-xl shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white drop-shadow-md">
                    {isSubmitted ? "Thank You!" : "Send us a Message"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Message Sent Successfully!</h3>
                      <p className="text-slate-300 mb-6">Our team will get back to you within 24 hours.</p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-300">Full Name *</label>
                          <Input name="name" value={formData.name} onChange={handleInputChange} required className="bg-white/5 border-white/10 text-white placeholder:text-white/20" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-300">Email Address *</label>
                          <Input name="email" type="email" value={formData.email} onChange={handleInputChange} required className="bg-white/5 border-white/10 text-white placeholder:text-white/20" placeholder="email@company.com" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Company Name</label>
                        <Input name="company" value={formData.company} onChange={handleInputChange} className="bg-white/5 border-white/10 text-white placeholder:text-white/20" placeholder="Your company" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Interest *</label>
                        <select name="service" value={formData.service} onChange={handleInputChange} className="w-full h-10 px-3 py-2 bg-slate-900 border border-white/10 rounded-md text-white focus:ring-1 focus:ring-primary">
                          <option value="demo">Book a Demo</option>
                          <option value="audit">Request AI Audit</option>
                          <option value="hotel-ai">Hotel AI Chieftain</option>
                          <option value="consultation">General Consultation</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Message *</label>
                        <Textarea name="message" value={formData.message} onChange={handleInputChange} required className="bg-white/5 border-white/10 text-white placeholder:text-white/20" placeholder="How can we help?" rows={5} />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/80" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Contact Information Side */}
              <div className="space-y-8">
                <Card className="bg-slate-900/40 border-white/10 backdrop-blur-md">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4 group">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Email</h4>
                          <p className="text-slate-400">contact@webisdom.ai</p>
                          <p className="text-slate-400 text-xs">atharv.kumar@webisdom.ai</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 group">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Phone</h4>
                          <p className="text-slate-400">+91 9569394675</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 group">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Location</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">Janpath, Connaught Place, New Delhi, 110001</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Updated "Ready to Get Started" Card to match the theme */}
                <Card className="bg-slate-900/40 border-white/10 backdrop-blur-md">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold mb-4 text-white">Ready to Get Started?</h3>
                    <p className="text-slate-400 mb-6">Join leading companies already transforming their operations with our AI.</p>
                    <Button className="w-full bg-primary hover:bg-primary/80" asChild>
                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@webisdom.ai" target="_blank" rel="noreferrer">
                        Email Us Directly
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;