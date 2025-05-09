
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1594750018712-77643025beb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "A wonderful",
      subtitle: "FIRST out of home learning",
      subtitle2: "EXPERIENCE",
      bottomText: "For your Child."
    },
    {
      image: "https://images.unsplash.com/photo-1566140967404-b8b3932483f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Creating a",
      subtitle: "LOVING environment",
      subtitle2: "FOR LEARNING",
      bottomText: "For every child."
    }
  ];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="container mx-auto h-full flex items-center justify-start relative z-10">
              <div className="text-white px-4 max-w-xl">
                <h2 className="text-3xl md:text-4xl font-light mb-2">{slide.title}</h2>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{slide.subtitle}</h1>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.subtitle2}</h1>
                <p className="text-2xl md:text-3xl mb-8">{slide.bottomText}</p>
                <Link
            to="/about"
            className="bg-orange hover:bg-orange-dark text-white rounded px-4 py-2"
          >
            More Info
          </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default HeroSection;
