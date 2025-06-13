import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Facebook, Instagram, X, ChevronUp } from 'lucide-react';

const SocialFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/1234567890?text=Hello Nishaan, I would like to book a consultation with Healing With Bajjwa',
      color: 'bg-green-500 hover:bg-green-600',
      delay: 'delay-100'
    },
    {
      icon: Phone,
      label: 'Call Now',
      href: 'tel:+1234567890',
      color: 'bg-blue-500 hover:bg-blue-600',
      delay: 'delay-200'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:nishaan@healingwithbajjwa.com?subject=Consultation Inquiry - Healing With Bajjwa',
      color: 'bg-red-500 hover:bg-red-600',
      delay: 'delay-300'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://facebook.com',
      color: 'bg-blue-600 hover:bg-blue-700',
      delay: 'delay-500'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
      delay: 'delay-700'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Social Links */}
      <div className={`flex flex-col space-y-3 mb-4 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {socialLinks.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              className={`${link.color} ${link.delay} w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white transform hover:scale-110 transition-all duration-300 animate-bounce-in`}
              title={link.label}
              target={link.href.startsWith('http') ? '_blank' : '_self'}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <IconComponent className="h-5 w-5" />
            </a>
          );
        })}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white hover:from-purple-700 hover:to-indigo-700 transform hover:scale-110 transition-all duration-300 animate-pulse"
        title={isOpen ? 'Close' : 'Contact Options'}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <ChevronUp className="h-6 w-6" />
        )}
      </button>

      {/* Floating WhatsApp Button (always visible) */}
      <a
        href="https://wa.me/1234567890?text=Hello Nishaan, I would like to book a consultation with Healing With Bajjwa"
        className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transform hover:scale-110 transition-all duration-300 animate-bounce z-50"
        title="Chat with Nishaan on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 right-6 bg-gray-800 hover:bg-gray-700 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white transform hover:scale-110 transition-all duration-300 opacity-80 hover:opacity-100"
        title="Scroll to Top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SocialFloat;