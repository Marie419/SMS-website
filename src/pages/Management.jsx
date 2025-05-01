import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EducationCtaSection from '../components/EducationCtaSection';

const Management = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-orange/10 py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <a href="/" className="hover:text-orange">Home</a>
              <span>/</span>
              <span className="text-orange">Management</span>
            </div>
            <h1 className="text-3xl font-bold mt-2">Our Management Team</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Management content here */}
          <div className="mb-16">
            <h2 className="section-heading">Leadership Team</h2>
            <p className="text-gray-600 mb-8">
              Meet the dedicated professionals who lead our institution with passion and expertise.
            </p>
            
            {/* Add your management team content here */}
          </div>
        </div>
        
        <EducationCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Management;
