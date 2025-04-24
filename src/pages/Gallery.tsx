
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Gallery</h1>
          <p className="text-gray-600">This is the gallery page.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
