
import React from 'react';
import { Button } from './ui/button';

const CtaSection = () => {
  return (
    <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Better education for a better world. An investment in knowledge pays the best interest.</h2>
          <p className="mb-8 text-lg">Sign up for our newsletter to receive all the news and updates</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-3 rounded text-gray-800 w-full md:w-auto"
            />
            <Button className="bg-orange hover:bg-orange-dark text-white rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
