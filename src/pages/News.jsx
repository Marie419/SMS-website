
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar, User } from "lucide-react";

const News = () => {
  const newsEvents = [
    {
      id: 1,
      title: "THE SCHOOL END OF THE SESSION PARTY",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      date: "September 15, 2023",
      comments: 25,
      author: "Admin"
    },
    {
      id: 2,
      title: "Children's Annual Sports Day Event",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      date: "September 12, 2023",
      comments: 18,
      author: "Admin"
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting Day",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      date: "September 10, 2023",
      comments: 12,
      author: "Admin"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
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
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{event.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
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
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
