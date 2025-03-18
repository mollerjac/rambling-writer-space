
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="py-6 px-4 border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-display font-bold hover:opacity-80 transition">Min Blog</Link>
        <nav className="flex items-center space-x-6">
          <Link 
            to="/" 
            className={`${isActive('/') ? 'text-black font-medium' : 'text-gray-600 hover:text-black'} transition-colors duration-200`}
          >
            Hjem
          </Link>
          <Link 
            to="/about" 
            className={`${isActive('/about') ? 'text-black font-medium' : 'text-gray-600 hover:text-black'} transition-colors duration-200`}
          >
            Om Mig
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
