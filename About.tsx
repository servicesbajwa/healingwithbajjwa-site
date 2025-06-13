import React from 'react';
import { Award, BookOpen, Users, Clock, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Certified Numerologist',
      description: 'Advanced certification in Numerology from International Institute of Numerology'
    },
    {
      icon: BookOpen,
      title: 'Vastu Expert',
      description: 'Specialized training in traditional Vastu Shastra principles and modern applications'
    },
    {
      icon: Users,
      title: 'Reiki Master',
      description: 'Level III Reiki Master with ability to teach and perform distant healing'
    },
    {
      icon: Clock,
      title: '15+ Years Experience',
      description: 'Over a decade of helping individuals find clarity and purpose through spiritual guidance'
    }
  ];

  const expertise = [
    'Pythagorean Numerology',
    'Chaldean Numerology',
    'Traditional Vastu Shastra',
    'Modern Vastu Applications',
    'Usui Reiki System',
    'Crystal Healing',
    'Chakra Balancing',
    'Feng Shui Consultation'
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Spiritual Symbols Background */}
      <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl text-purple-600 animate-pulse">🕉️</div>
        <div className="absolute top-20 right-20 text-3xl text-indigo-600 animate-pulse delay-500">⚛️</div>
        <div className="absolute bottom-20 left-20 text-5xl text-purple-600 animate-pulse delay-1000">🔯</div>
        <div className="absolute bottom-10 right-10 text-4xl text-indigo-600 animate-pulse delay-700">☯️</div>
        <div className="absolute top-1/2 left-1/4 text-3xl text-purple-600 animate-pulse delay-300">✨</div>
        <div className="absolute top-1/3 right-1/3 text-3xl text-indigo-600 animate-pulse delay-900">🌟</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-purple-600">Nishaan Bajjwa</span>
            </h2>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">Healing With Bajjwa</h3>
              <p className="text-lg text-gray-600 italic">"Awaken Your Divine Potential"</p>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Welcome to my world of spiritual guidance and ancient wisdom. I am Nishaan Bajjwa, a certified professional with over 15 years of experience in numerology, Vastu Shastra, and Reiki healing, dedicated to helping individuals unlock their true potential and create harmonious living spaces.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My journey began with a personal transformation through numerology, which led me to pursue formal certifications and dedicate my life to helping others discover their divine purpose. Through "Healing With Bajjwa," I combine traditional wisdom with modern understanding to provide practical, life-changing guidance.
            </p>

            {/* Expertise */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Areas of Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((skill, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                Schedule Consultation
              </a>
              <a
                href="#testimonials"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 text-center"
              >
                Read Testimonials
              </a>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/8034775/pexels-photo-8034775.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Nishaan Bajjwa - Professional numerologist at work"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-2xl shadow-xl">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">1000+</div>
                  <div className="text-sm">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Floating achievement cards */}
            <div className="absolute top-4 -left-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Star className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">5.0 Rating</div>
                  <div className="text-sm text-gray-600">Google Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Certifications & <span className="text-purple-600">Achievements</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;