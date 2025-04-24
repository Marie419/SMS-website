
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ActivitiesSection from '../components/ActivitiesSection';
import BlogSection from '../components/BlogSection';
import TeamSection from '../components/TeamSection';
import GallerySection from '../components/GallerySection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ActivitiesSection />
        <BlogSection />
        <TeamSection />
        <GallerySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
