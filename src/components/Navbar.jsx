
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-4 md:px-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/" className="flex items-center hover:text-violet">
            <span className="text-orange">Kinder</span>
            <span>Care</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-violet px-2">Home</Link>
          <Link to="/about" className="text-sm font-medium hover:text-violet px-2">About Us</Link>
          <Link to="/management" className="text-sm font-medium hover:text-violet px-2">Management</Link>
          <Link to="/news" className="text-sm font-medium hover:text-violet px-2">News & Event</Link>
          <Link to="/gallery" className="text-sm font-medium hover:text-violet px-2">Gallery</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-violet px-2">Contact Us</Link>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden hover:bg-violet/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu hover:text-violet"></svg>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
