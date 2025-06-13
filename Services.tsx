import React from 'react';
import { Calculator, Home, Heart, Smartphone, Clock, CheckCircle, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Numerology Consultation',
      description: 'Discover your life path, destiny number, and personal year predictions through the ancient science of numbers.',
      features: ['Life Path Analysis', 'Name Numerology', 'Business Name Analysis', 'Lucky Numbers'],
      price: 'Starting from $75',
      duration: '60 minutes',
      image: 'https://images.pexels.com/photos/6724383/pexels-photo-6724383.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Home,
      title: 'Vastu Shastra Consultation',
      description: 'Harmonize your living and working spaces according to ancient Vastu principles for prosperity and well-being.',
      features: ['Home Vastu Analysis', 'Office Space Planning', 'Remedial Measures', 'Plot Selection'],
      price: 'Starting from $100',
      duration: '90 minutes',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Heart,
      title: 'Reiki Healing Sessions',
      description: 'Experience spiritual healing through universal life force energy to restore balance and promote wellness.',
      features: ['Energy Healing', 'Chakra Balancing', 'Stress Relief', 'Distance Healing'],
      price: 'Starting from $60',
      duration: '45 minutes',
      image: 'https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Smartphone,
      title: 'Mobile Numerology',
      description: 'Choose the perfect mobile number that aligns with your energy and attracts success and prosperity.',
      features: ['Number Analysis', 'Compatibility Check', 'Lucky Mobile Numbers', 'SIM Card Selection'],
      price: 'Starting from $50',
      duration: '30 minutes',
      image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-purple-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive spiritual guidance and consulting services to help you navigate life's journey with clarity and purpose
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                      <IconComponent className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </div>
                    <div className="text-2xl font-bold text-purple-600">{service.price}</div>
                  </div>

                  <a
                    href="#contact"
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-full font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    Book Now
                    <Star className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-lg mb-6 opacity-90">
            I offer personalized consultations combining multiple disciplines for comprehensive guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Custom Consultation
            </a>
            <a
              href="tel:+1234567890"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors duration-300 border border-white/30"
            >
              Call to Discuss
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;