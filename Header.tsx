import React, { useState } from 'react';
import { Menu, X, Star, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
      {/* Spiritual Symbols Watermark */}
      <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-10 text-purple-600 text-2xl">🕉️</div>
        <div className="absolute top-1 right-20 text-purple-600 text-xl">☯️</div>
        <div className="absolute top-3 left-1/3 text-purple-600 text-lg">🔯</div>
        <div className="absolute top-2 right-1/3 text-purple-600 text-xl">⚛️</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-3 rounded-full relative">
              <Star className="h-6 w-6 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Healing With Bajjwa</h1>
              <p className="text-xs text-purple-600 font-medium">Awaken Your Divine Potential</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 pl-4 border-l border-gray-200">
              <a href="tel:+1234567890" className="flex items-center text-sm text-gray-600 hover:text-purple-600">
                <Phone className="h-4 w-4 mr-1" />
                <span className="hidden lg:inline">+1 (234) 567-890</span>
              </a>
              <a href="mailto:nishaan@healingwithbajjwa.com" className="flex items-center text-sm text-gray-600 hover:text-purple-600">
                <Mail className="h-4 w-4 mr-1" />
                <span className="hidden lg:inline">nishaan@healingwithbajjwa.com</span>
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <a href="tel:+1234567890" className="flex items-center text-sm text-gray-600 hover:text-purple-600 px-2 py-1">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (234) 567-890
                </a>
                <a href="mailto:nishaan@healingwithbajjwa.com" className="flex items-center text-sm text-gray-600 hover:text-purple-600 px-2 py-1">
                  <Mail className="h-4 w-4 mr-2" />
                  nishaan@healingwithbajjwa.com
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;