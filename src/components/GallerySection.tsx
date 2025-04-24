
import React from 'react';
import { Button } from './ui/button';

const GallerySection = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1567477053983-6451b24e6f59?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1526634332515-d56c5fd16991?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="orange-heading text-center mb-2">Our Moments</h3>
        <h2 className="section-heading text-center mx-auto">Our Gallery</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="h-64 overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button className="bg-orange hover:bg-orange-dark text-white rounded">View More</Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
