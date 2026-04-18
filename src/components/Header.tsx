import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <img
              src="/logo3.png"
              alt="Shintre Construction Logo"
              className="h-[52px] sm:h-[60px] w-auto object-contain transition-transform duration-300 scale-[1.35] sm:scale-[1.45] origin-left group-hover:scale-[1.4] sm:group-hover:scale-[1.5] drop-shadow-sm"
            />
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+91 96375 04588" className="flex items-center text-blue-600 hover:text-blue-700">
              <Phone className="w-4 h-4 mr-1" />
              Call Us
            </a>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Quote
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 text-left">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 text-left">Services</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 text-left">Projects</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 text-left">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 text-left">Contact</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;