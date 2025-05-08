import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EducationCtaSection from '../components/EducationCtaSection';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <div className="bg-orange/10 py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <a href="/" className="hover:text-orange">Home</a>
              <span>/</span>
              <span className="text-orange">About us</span>
            </div>
            <h1 className="text-3xl font-bold mt-2">About us</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          {/* Who We Are Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-orange flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              WHO WE ARE
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              ONE OF THE MOST IMPORTANT, YET UNDERSTATED, PAGES ON AN ENTIRE WEBSITE IS THE ABOUT US PAGE, PARTICULARLY FOR SMALL- AND MEDIUM-SIZED BUSINESS OWNERS (SMBS). THE ABOUT US PAGE IS ONE OF YOUR BEST CHANCES TO CREATE A MEANINGFUL CONNECTION WITH A SITE VISITOR THAT BUILDS CONFIDENCE IN THE POTENTIAL CUSTOMER AND LAYS THE FOUNDATION OF A SOLID BUSINESS RELATIONSHIP.
            </p>
            <p className="text-gray-600 leading-relaxed">
              IN THIS BLOG POST, WE'LL OUTLINE WHAT AN ABOUT US PAGE IS, A FEW OF THE MOST IMPORTANT ELEMENTS OF AN ABOUT US PAGE, SHOW OFF SOME AWESOME ABOUT US PAGE EXAMPLES, AND HIGHLIGHT A FEW OF THE BEAUTIFUL ABOUT US PAGE TEMPLATES THAT ARE AVAILABLE TO OUR CUSTOMERS AND PARTNERS.
            </p>
          </div>

          {/* Our Mission Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-orange flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </span>
              OUR MISSION
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Our Vision Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-orange flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </span>
              OUR VISION
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        
        <EducationCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
