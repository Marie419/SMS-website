
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Send } from "lucide-react";

const EducationCtaSection = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <section 
      className="py-12 bg-cover bg-center relative" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            <span className="text-white">Better </span>
            <span className="text-orange">education</span>
            <span className="text-white"> for a better world</span>
          </h2>
          <p className="mb-6 text-white">
            An investment in <span className="text-orange">knowledge</span> pays the best <span className="text-orange">interest</span>.
          </p>
          
          <form onSubmit={handleSubmit} className="flex mx-auto max-w-md">
            <div className="relative flex-grow">
              <Input 
                type="email" 
                placeholder="Enter e-mail to recieve news letter" 
                className="pr-12 bg-white/10 border-white/50 text-white placeholder:text-white/60 rounded-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="absolute right-0 top-0 h-full rounded-full bg-orange hover:bg-orange-dark"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EducationCtaSection;
