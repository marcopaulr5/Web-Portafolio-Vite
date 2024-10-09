import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-2xl font-bold neon-text">Marco.dev</h1>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="hover:text-neon-blue transition-colors">Home</a>
          <a href="#about" className="hover:text-neon-blue transition-colors">About Me</a>
          <a href="#projects" className="hover:text-neon-blue transition-colors">Projects</a>
          <a href="#skills" className="hover:text-neon-blue transition-colors">Skills</a>
          <a href="#contact" className="hover:text-neon-blue transition-colors">Contact</a>
        </nav>
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
          alt="Marco Paul Quispe"
          className="w-10 h-10 rounded-full border-2 border-neon-blue cursor-pointer hidden md:block"
        />
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95">
          <nav className="flex flex-col items-center py-4">
            <a href="#home" className="py-2 hover:text-neon-blue transition-colors" onClick={toggleMenu}>Home</a>
            <a href="#about" className="py-2 hover:text-neon-blue transition-colors" onClick={toggleMenu}>About Me</a>
            <a href="#projects" className="py-2 hover:text-neon-blue transition-colors" onClick={toggleMenu}>Projects</a>
            <a href="#skills" className="py-2 hover:text-neon-blue transition-colors" onClick={toggleMenu}>Skills</a>
            <a href="#contact" className="py-2 hover:text-neon-blue transition-colors" onClick={toggleMenu}>Contact</a>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              alt="Marco Paul Quispe"
              className="w-10 h-10 rounded-full border-2 border-neon-blue cursor-pointer mt-4"
            />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;