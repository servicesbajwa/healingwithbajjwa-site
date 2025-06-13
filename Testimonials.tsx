import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      service: 'Numerology Consultation',
      rating: 5,
      text: 'The numerology reading was incredibly accurate and insightful. It helped me understand my life path better and make important career decisions. Highly recommended!',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Raj Patel',
      location: 'Mumbai, India',
      service: 'Vastu Consultation',
      rating: 5,
      text: 'After implementing the Vastu recommendations for our home, we noticed positive changes in our family harmony and prosperity. Amazing guidance!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Chen',
      location: 'Toronto, Canada',
      service: 'Reiki Healing',
      rating: 5,
      text: 'The distant Reiki healing sessions helped me overcome anxiety and stress. I felt a profound sense of peace and balance. Thank you for this gift!',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Rodriguez',
      location: 'Los Angeles, USA',
      service: 'Mobile Numerology',
      rating: 5,
      text: 'Choosing the right mobile number based on numerology has brought noticeable positive changes in my business. Worth every penny!',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Priya Sharma',
      location: 'Delhi, India',
      service: 'Complete Life Analysis',
      rating: 5,
      text: 'The comprehensive consultation covering numerology and Vastu gave me clarity about my life direction. Professional and compassionate service.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'David Thompson',
      location: 'London, UK',
      service: 'Business Consultation',
      rating: 5,
      text: 'The business name numerology and office Vastu consultation helped my startup flourish. Incredible attention to detail and practical advice.',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%227%22%20cy=%227%22%20r=%227%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What My <span className="text-yellow-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Real experiences from real people who have transformed their lives through spiritual guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-yellow-400 mr-3" />
                <div className="flex space-x-1">{renderStars(testimonial.rating)}</div>
              </div>

              <p className="text-gray-200 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-300 text-sm">{testimonial.location}</p>
                  <p className="text-yellow-400 text-xs">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-yellow-400 mb-2">1000+</div>
            <div className="text-gray-200">Happy Clients</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-yellow-400 mb-2">5.0</div>
            <div className="text-gray-200">Average Rating</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
            <div className="text-gray-200">Years Experience</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-200">Support Available</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-200 mb-6">Ready to start your spiritual journey?</p>
          <a
            href="#contact"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center gap-2"
          >
            Book Your Consultation
            <Star className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;