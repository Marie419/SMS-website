
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-4 md:px-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/" className="flex items-center">
            <span className="text-orange">Kinder</span>
            <span>Care</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-orange">Home</Link>
          <Link to="/about" className="text-sm font-medium hover:text-orange">About Us</Link>
          <Link to="/management" className="text-sm font-medium hover:text-orange">Management</Link>
          <Link to="/news" className="text-sm font-medium hover:text-orange">News & Event</Link>
          <Link to="/gallery" className="text-sm font-medium hover:text-orange">Gallery</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-orange">Contact Us</Link>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
