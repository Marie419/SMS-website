
import React from 'react';
import { Button } from './ui/button';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur.",
      image: "https://images.unsplash.com/photo-1576404425470-62150cff83ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      date: "October 10, 2023",
      comments: 15,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur.",
      image: "https://images.unsplash.com/photo-1471239149316-558a63a36d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      date: "September 05, 2023",
      comments: 8,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="orange-heading text-center mb-2">Stay Updated</h3>
        <h2 className="section-heading text-center mx-auto">Latest Blog</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3">{post.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span>September 10, 2023</span>
                  <span className="mx-2">•</span>
                  <span>{post.comments} Comments</span>
                </div>
                <div className="flex space-x-3">
                  <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                  <span className="w-2 h-2 rounded-full bg-orange"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button className="bg-orange hover:bg-orange-dark text-white rounded">Read More</Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
