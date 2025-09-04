import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Truck, Shield } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Heart,
      title: 'Handcrafted with Love',
      description: 'Each piece is meticulously crafted by skilled artisans who pour their heart into every stitch.',
      color: 'text-red-500'
    },
    {
      icon: Sparkles,
      title: 'Authentic Fabrics',
      description: 'We source only the finest traditional fabrics, ensuring authenticity and premium quality.',
      color: 'text-gold-500'
    },
    {
      icon: Shield,
      title: 'Elegant Designs',
      description: 'Timeless designs that blend traditional aesthetics with contemporary fashion sensibilities.',
      color: 'text-purple-500'
    },
    {
      icon: Truck,
      title: 'Pan-India Delivery',
      description: 'Fast and secure delivery across India, bringing authentic boutique fashion to your doorstep.',
      color: 'text-green-500'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-amber-50 to-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-amber-900 mb-4 font-['Dancing_Script']">
            Why Choose Village Angel
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to bringing you the finest authentic boutique dresses with uncompromising quality and service.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-10 h-10 ${feature.color}`} />
                </div>
                <div className="absolute inset-0 bg-gold-200 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-amber-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          <div className="p-6">
            <div className="text-3xl lg:text-4xl font-bold text-gold-600 mb-2">10K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="p-6">
            <div className="text-3xl lg:text-4xl font-bold text-gold-600 mb-2">500+</div>
            <div className="text-gray-600">Unique Designs</div>
          </div>
          <div className="p-6">
            <div className="text-3xl lg:text-4xl font-bold text-gold-600 mb-2">50+</div>
            <div className="text-gray-600">Skilled Artisans</div>
          </div>
          <div className="p-6">
            <div className="text-3xl lg:text-4xl font-bold text-gold-600 mb-2">5★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}