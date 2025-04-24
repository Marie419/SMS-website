
import React from 'react';

const ActivitiesSection = () => {
  const activities = [
    {
      title: "Art & Creativity",
      image: "https://images.unsplash.com/photo-1564429097439-cc268da861bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Our art program is designed to nurture creativity and self-expression in children through various mediums including painting, drawing, and crafting."
    },
    {
      title: "Sport & Entertainment",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Our sports activities focus on developing physical abilities, teamwork, and healthy competition while ensuring children have fun and stay active."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="orange-heading text-center mb-2">What We Offer</h3>
        <h2 className="section-heading text-center mx-auto">Our Activities</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 items-start">
              <div className="w-full md:w-1/3">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-medium mb-3">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
