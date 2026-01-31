"use client";
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
import { motion } from "framer-motion";

// Import your particle background component
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

        // 1. PRIMARY ACTION: Save to Supabase (Database)
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

        if (insertError) {
          console.error('Database insert error:', insertError);
          throw new Error("Could not save to database.");
        }

        // 2. SECONDARY ACTION: Send Email Notification
        // We wrap this in its own try/catch so if the API fails, the user still gets a success message
        try {
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
          if (!data.success) console.warn("Email API returned success:false");
        } catch (emailErr) {
          // We only log this to the console so the UI doesn't break for the user
          console.error("Email API Connection Error (CORS/404):", emailErr);
        }

        // 3. UI SUCCESS STATE
        // Since Supabase worked, we treat the whole thing as a success
        setIsSubmitted(true);
        setFormData({ name: "", email: "", company: "", service: "demo", message: "" });
        toast({ 
          title: "Message sent successfully!", 
          description: "We've received your request and will get back to you within 24 hours." 
        });

      } catch (error: any) {
        toast({ 
          title: "Submission Error", 
          description: error?.message || "Something went wrong. Please try again.", 
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
      
      <Header />
      
      <main className="relative">
        {/* HERO SECTION */}
        <section className="relative pt-48 pb-24 text-center overflow-hidden min-h-[50vh] flex items-center">
          
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 opacity-20 bg-center bg-cover"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2000&auto=format&fit=crop')`, 
                filter: 'brightness(0.2) contrast(1.2)'
              }}
            />
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="text-[30vw] font-black text-white/[0.02] leading-none tracking-tighter uppercase">
                Connect
              </span>
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <ParticlesBackground />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] pointer-events-none" />
          </div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 border-primary/40 text-primary uppercase tracking-[0.2em] py-2 px-6 bg-primary/10 backdrop-blur-md">
                <Sparkles className="w-4 h-4 mr-2" /> Connect with us
              </Badge>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
                Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTACT FORM & INFO */}
        <section className="py-24 relative z-10 bg-[#020617]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              <Card className="bg-slate-900/60 border-white/10 backdrop-blur-xl shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white drop-shadow-md">
                    {isSubmitted ? "Thank You!" : "Send us a Message"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6 opacity-80" />
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
                          <Input name="name" value={formData.name} onChange={handleInputChange} required className="bg-white/5 border-white/10 text-white" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-300">Email Address *</label>
                          <Input name="email" type="email" value={formData.email} onChange={handleInputChange} required className="bg-white/5 border-white/10 text-white" placeholder="email@company.com" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Company Name</label>
                        <Input name="company" value={formData.company} onChange={handleInputChange} className="bg-white/5 border-white/10 text-white" placeholder="Your company" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Interest *</label>
                        <select name="service" value={formData.service} onChange={handleInputChange} className="w-full h-10 px-3 py-2 bg-slate-900 border border-white/10 rounded-md text-white focus:ring-1 focus:ring-primary outline-none">
                          <option value="demo">Book a Demo</option>
                          <option value="audit">Request AI Audit</option>
                          <option value="hotel-ai">Hotel AI Chieftain</option>
                          <option value="consultation">General Consultation</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Message *</label>
                        <Textarea name="message" value={formData.message} onChange={handleInputChange} required className="bg-white/5 border-white/10 text-white" placeholder="How can we help?" rows={5} />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/80 transition-all font-bold tracking-wide" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="bg-slate-900/40 border-white/10 backdrop-blur-md">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6 text-white border-l-4 border-primary pl-4">Contact Information</h3>
                    <div className="space-y-6">
                      {[
                        { icon: Mail, label: "Email", val: "contact@webisdom.ai", sub: "atharv.kumar@webisdom.ai" },
                        { icon: Phone, label: "Phone", val: "+91 9569394675" },
                        { icon: MapPin, label: "Location", val: "Janpath, Connaught Place, New Delhi, 110001" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-4 group">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                            <item.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">{item.label}</h4>
                            <p className="text-slate-400">{item.val}</p>
                            {item.sub && <p className="text-slate-500 text-xs mt-1">{item.sub}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/40 border-white/10 backdrop-blur-md overflow-hidden relative group">
                  <CardContent className="p-8 text-center relative z-10">
                    <h3 className="text-xl font-bold mb-4 text-white">Direct Access</h3>
                    <p className="text-slate-300 mb-6 text-sm">Need a faster response? Open your mail client directly to reach our leadership team.</p>
                    <Button className="w-full bg-primary hover:bg-primary/80 transition-all font-bold tracking-wide" asChild>
                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@webisdom.ai" target="_blank" rel="noreferrer">
                        Email Us Directly
                      </a>
                    </Button>
                  </CardContent>
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                    <Send size={80} />
                  </div>
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
