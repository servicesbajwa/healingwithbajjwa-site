import React from 'react';
import { Star, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const services = [
    'Numerology Consultation',
    'Vastu Shastra',
    'Reiki Healing',
    'Mobile Numerology',
    'Business Consultation',
    'Life Path Analysis'
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com', label: 'Youtube' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Spiritual Symbols Background */}
      <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl text-purple-400 animate-pulse">🕉️</div>
        <div className="absolute top-20 right-20 text-3xl text-indigo-400 animate-pulse delay-500">⚛️</div>
        <div className="absolute bottom-20 left-20 text-5xl text-purple-400 animate-pulse delay-1000">🔯</div>
        <div className="absolute bottom-10 right-10 text-4xl text-indigo-400 animate-pulse delay-700">☯️</div>
        <div className="absolute top-1/2 left-1/4 text-3xl text-purple-400 animate-pulse delay-300">✨</div>
        <div className="absolute top-1/3 right-1/3 text-3xl text-indigo-400 animate-pulse delay-900">🌟</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-3 rounded-full">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Healing With Bajjwa</h3>
                <p className="text-sm text-gray-400">Awaken Your Divine Potential</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <strong className="text-white">Nishaan Bajjwa</strong> - Professional Certified Numerologist, Vastu Consultant, and Reiki Healer with over 15 years of experience.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Unlock your divine potential through the ancient wisdom of numerology, Vastu Shastra, and Reiki healing.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <div>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                  <p className="text-xs text-gray-500">24/7 Available</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <div>
                  <a href="mailto:nishaan@healingwithbajjwa.com" className="text-gray-400 hover:text-white transition-colors">
                    nishaan@healingwithbajjwa.com
                  </a>
                  <p className="text-xs text-gray-500">Response within 24hrs</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Online Consultations</p>
                  <p className="text-xs text-gray-500">Serving Worldwide</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Stay Updated</h5>
              <p className="text-sm text-gray-400 mb-4">Get spiritual insights and tips</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg flex-1 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button className="bg-purple-600 px-4 py-2 rounded-r-lg hover:bg-purple-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Healing With Bajjwa. All rights reserved. | Nishaan Bajjwa - Certified Numerologist & Spiritual Guide
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🌟 15+ Years Experience</span>
              <span>📞 24/7 Available</span>
              <span>⭐ 5.0 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;