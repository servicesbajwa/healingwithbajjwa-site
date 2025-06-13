import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredTime: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (234) 567-890',
      link: 'tel:+1234567890',
      description: 'Available 24/7 for urgent consultations'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'nishaan@healingwithbajjwa.com',
      link: 'mailto:nishaan@healingwithbajjwa.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Online Consultations',
      link: '#',
      description: 'Serving clients worldwide'
    },
    {
      icon: Clock,
      title: 'Hours',
      value: '24/7 Available',
      link: '#',
      description: 'Flexible scheduling for all time zones'
    }
  ];

  const services = [
    'Numerology Consultation',
    'Vastu Shastra Consultation',
    'Reiki Healing Session',
    'Mobile Numerology',
    'Business Consultation',
    'Complete Life Analysis',
    'Custom Package'
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Connect With <span className="text-purple-600">Nishaan Bajjwa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to unlock your divine potential? Contact me for a personalized consultation that will transform your life through Healing With Bajjwa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-3 rounded-full flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
                        <a
                          href={info.link}
                          className="text-purple-600 hover:text-purple-700 font-medium"
                        >
                          {info.value}
                        </a>
                        <p className="text-sm text-gray-600 mt-1">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-6 rounded-2xl text-white">
              <h4 className="text-lg font-bold mb-4">Quick Contact Options</h4>
              <div className="space-y-4">
                <a
                  href="https://wa.me/1234567890"
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-3 rounded-lg hover:bg-white/20 transition-colors duration-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Chat</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-3 rounded-lg hover:bg-white/20 transition-colors duration-300"
                >
                  <Phone className="h-5 w-5" />
                  <span>Direct Call</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-3 rounded-lg hover:bg-white/20 transition-colors duration-300"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Online</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
              
              {isSubmitted && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <p className="text-green-700">Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Consultation Time
                  </label>
                  <input
                    type="text"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                    placeholder="e.g., Weekdays 10 AM - 2 PM EST"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your situation and what you're looking to achieve..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-red-800 mb-4">Need Urgent Spiritual Guidance?</h3>
          <p className="text-red-700 mb-6">
            If you're facing a spiritual emergency or need immediate guidance, Nishaan Bajjwa is available 24/7 for urgent consultations.
          </p>
          <a
            href="tel:+1234567890"
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300 inline-flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            Call Now - 24/7 Emergency Line
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;