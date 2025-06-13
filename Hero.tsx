import React from 'react';
import { Calendar, Phone, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
      </div>

      {/* Spiritual Symbols Watermark */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {/* Sri Yantra Pattern */}
        <div className="absolute top-1/4 left-1/4 text-6xl text-yellow-400 animate-pulse">🔯</div>
        <div className="absolute bottom-1/3 right-1/4 text-5xl text-purple-300 animate-pulse delay-1000">⚛️</div>
        <div className="absolute top-1/3 right-1/3 text-4xl text-indigo-300 animate-pulse delay-500">🕉️</div>
        <div className="absolute bottom-1/4 left-1/3 text-5xl text-teal-300 animate-pulse delay-700">☯️</div>
        <div className="absolute top-1/2 left-1/5 text-3xl text-pink-300 animate-pulse delay-300">🌟</div>
        <div className="absolute bottom-1/2 right-1/5 text-4xl text-orange-300 animate-pulse delay-900">🔮</div>
        
        {/* Reiki Symbols */}
        <div className="absolute top-2/3 left-2/3 text-3xl text-violet-300 animate-pulse delay-1200">✨</div>
        <div className="absolute top-1/5 right-2/5 text-3xl text-cyan-300 animate-pulse delay-400">🌙</div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="mb-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Healing With Bajjwa
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-purple-200 font-medium mb-6">
              Awaken Your Divine Potential • Transform Your Destiny
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Welcome, I'm
            <span className="text-yellow-400 block">Nishaan Bajjwa</span>
          </h2>
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Professional Certified Numerologist, Vastu Consultant, Reiki Healer & Mobile Numerologist
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm sm:text-base">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              ✨ 15+ Years Experience
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              🏆 1000+ Happy Clients
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              📱 Available 24/7
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2"
          >
            <Calendar className="h-5 w-5" />
            Book Consultation
          </a>
          <a
            href="tel:+1234567890"
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border border-white/30 flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
          <a
            href="https://wa.me/1234567890"
            className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-400 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
            <div className="text-2xl font-bold text-yellow-400 mb-1">15+</div>
            <div className="text-sm text-gray-300">Years Experience</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
            <div className="text-2xl font-bold text-yellow-400 mb-1">1000+</div>
            <div className="text-sm text-gray-300">Happy Clients</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
            <div className="text-2xl font-bold text-yellow-400 mb-1">24/7</div>
            <div className="text-sm text-gray-300">Available</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
            <div className="text-2xl font-bold text-yellow-400 mb-1">100%</div>
            <div className="text-sm text-gray-300">Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;