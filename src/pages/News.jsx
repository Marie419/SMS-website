
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar, User, FilePen } from "lucide-react";
import EducationCtaSection from '../components/EducationCtaSection';

const News = () => {
  const newsEvents = [
    {
      id: 1,
      title: "THE SCHOOL END OF THE SESSION PARTY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      date: "15 Sep 2023",
      comments: 25,
      author: "Admin"
    },
    {
      id: 2,
      title: "Children's Annual Sports Day Event",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      date: "12 Sep 2023",
      comments: 18,
      author: "Admin"
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting Day",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      date: "10 Sep 2023",
      comments: 12,
      author: "Admin"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/news">News & Events</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-56">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" className="bg-white/90 hover:bg-white">
                      <FilePen className="mr-2 h-4 w-4" />
                      Read More
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2 hover:text-orange transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{event.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{event.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <EducationCtaSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
