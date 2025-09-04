import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Star, ShoppingBag, Heart, Smartphone } from 'lucide-react';

export default function DownloadApp() {
  const appFeatures = [
    {
      icon: ShoppingBag,
      title: 'Easy Shopping',
      description: 'Browse and shop with just a few taps'
    },
    {
      icon: Heart,
      title: 'Wishlist',
      description: 'Save your favorite pieces for later'
    },
    {
      icon: Star,
      title: 'Exclusive Deals',
      description: 'Get access to app-only discounts'
    }
  ];

  return (
    <section id="download" className="py-20 bg-gradient-to-br from-amber-900 to-amber-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-light mb-6 font-['Dancing_Script']">
              Download Our App
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-300 to-gold-500 rounded-full mb-6"></div>
            
            <p className="text-lg text-amber-100 mb-8 leading-relaxed">
              Experience the convenience of shopping authentic boutique dresses right from your phone. Get exclusive access to new collections, special offers, and personalized recommendations.
            </p>

            {/* App Features */}
            <div className="space-y-4 mb-8">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-gold-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                    <p className="text-amber-200 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => window.open("https://play.google.com/store", "_blank")}
                className="group flex items-center gap-3 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Download className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gold-200 uppercase tracking-wider">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>
              
              <div className="flex items-center gap-2 text-amber-200">
                <Star className="w-5 h-5 fill-gold-400 text-gold-400" />
                <span className="text-sm">4.8 rating • 10K+ downloads</span>
              </div>
            </div>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-64 h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="bg-gray-100 h-8 flex items-center justify-between px-6 text-xs text-gray-600">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                      <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                      <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 h-full bg-gradient-to-br from-gold-50 to-amber-50">
                    <div className="flex items-center gap-3 mb-4">
                      <img src="/logo.png" alt="Village Angel" className="w-8 h-8" />
                      <span className="font-['Dancing_Script'] text-lg font-semibold text-amber-900">Village Angel</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="w-full h-20 bg-gradient-to-br from-red-200 to-pink-200 rounded-md mb-2"></div>
                        <div className="text-xs font-medium text-gray-700">Sarees</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="w-full h-20 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-md mb-2"></div>
                        <div className="text-xs font-medium text-gray-700">Lehengas</div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-gold-200 rounded-full"></div>
                        <div>
                          <div className="w-16 h-2 bg-gray-200 rounded mb-1"></div>
                          <div className="w-12 h-2 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded mb-1"></div>
                      <div className="w-3/4 h-2 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-light text-white mb-4 font-['Dancing_Script']">
              Customer Reviews
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-gold-300 to-gold-500 rounded-full mx-auto"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}