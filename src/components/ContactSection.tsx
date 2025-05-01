
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Contact details */}
          <div className="flex-1">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-orange flex items-center justify-center">
                  <span className="text-white font-medium">C</span>
                </div>
                <h2 className="text-orange text-xl font-medium">Contact us</h2>
              </div>
              <h3 className="text-2xl font-bold mb-4">CONTACT DETAILS</h3>
              <p className="text-gray-600 mb-6">
                You can always reach us via following contact details. We will give our best to reach you as possible.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="text-orange mt-1" size={20} />
                  <p>+234 805 029 1265, +234 907 228 0856</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="text-orange mt-1" size={20} />
                  <p>info@gmail.com, info@gmail.com</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="text-orange mt-1" size={20} />
                  <p>4 low castle oghale oro opa, fidelity bank omole, Abeokuta, Ogun state.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Contact form */}
          <div className="flex-1">
            <div className="bg-orange p-6 rounded-md">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white text-sm mb-1">Your Name</label>
                  <Input id="name" className="w-full bg-white" placeholder="Ex: John" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white text-sm mb-1">Your Mail</label>
                  <Input id="email" type="email" className="w-full bg-white" placeholder="info@gmail.com" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white text-sm mb-1">Your Message</label>
                  <Textarea id="message" className="w-full bg-white" placeholder="Type your message here..." />
                </div>
                
                <div className="text-right">
                  <Button className="bg-white text-orange hover:bg-gray-100">
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
