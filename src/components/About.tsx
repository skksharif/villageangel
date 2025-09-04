import React from "react";
import { motion } from "framer-motion";
import { Heart, Award, Users } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-cream-50 to-gold-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-amber-900 mb-4 font-['Dancing_Script']">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full mb-6"></div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Village Angel was born from a passion for preserving the timeless
              elegance of traditional Indian fashion while embracing
              contemporary style. Our journey began in the heart of India's
              textile heritage, where skilled artisans have been crafting
              beautiful garments for generations.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Every piece in our collection tells a story of craftsmanship,
              authenticity, and cultural pride. We work directly with local
              artisans and weavers, ensuring that each dress not only embodies
              beauty but also supports traditional craftsmanship.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="font-semibold text-amber-900 mb-1">
                  Handcrafted
                </h3>
                <p className="text-sm text-gray-600">With Love & Care</p>
              </div>
              <div className="text-center">
                <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="font-semibold text-amber-900 mb-1">Premium</h3>
                <p className="text-sm text-gray-600">Quality Fabrics</p>
              </div>
              <div className="text-center">
                <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="font-semibold text-amber-900 mb-1">Trusted</h3>
                <p className="text-sm text-gray-600">By Thousands</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://imgs.search.brave.com/BQeNWygwNE-XK2cdCU5VRMS3htwJ1pP2IRdFO2_mGEg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzUzLzIyLzU5/LzM2MF9GXzY1MzIy/NTk2Ml9LOTBLbmpB/TnU2dEJ6WnBWMHNJ/a2V6Y0lFTG5uNGRN/US5qcGc"
                alt="Traditional Indian craftsmanship"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-200 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
