import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Hook to know which page we are on

  // Helper to highlight the active link
  const isActive = (path) =>
    location.pathname === path
      ? "text-orange-500 font-bold"
      : "text-gray-600 hover:text-orange-500";

  return (
    // 1. THE CONTAINER: Glassmorphism Effect
    // bg-white/80 = 80% opacity white
    // backdrop-blur-md = blurs the content scrolling underneath
    // sticky top-0 = stays fixed at the top
    <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* 2. THE LOGO: Branding */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 tracking-tight hover:opacity-80 transition"
        >
          Chef<span className="text-orange-500">Share</span>
          <span className="text-xs text-gray-400 ml-1 font-normal uppercase tracking-widest">
            Platform
          </span>
        </Link>

        {/* 3. THE LINKS */}
        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className={`${isActive("/")} transition duration-300 text-sm uppercase tracking-wide`}
          >
            Home
          </Link>

          {/* 4. THE BUTTON (Call To Action) 
             Instead of a plain text link, this is a gradient pill button.
          */}
          <Link
            to="/add-recipe"
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300 ease-in-out text-sm"
          >
            + Post Recipe
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
