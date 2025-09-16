import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Collections from "./components/Collections";
import WhyChooseUs from "./components/WhyChooseUs";
import DownloadApp from "./components/DownloadApp";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen bg-[url('/bg.png')] bg-cover bg-center flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg relative inline-block">
          Village Angel
          <sup className="absolute -top-1">
            ®
          </sup>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-white max-w-2xl">
          Authentic Boutique Dresses – Online Pop-Up Boutique – Where Elegance
          Meets Tradition
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#collections"
            className="px-6 py-3 bg-red-600 text-white rounded-2xl shadow-lg hover:bg-red-700 transition"
          >
            Shop Now
          </a>
          <a
            href="#download"
            className="px-6 py-3 bg-gray-100 text-gray-900 rounded-2xl shadow hover:bg-gray-200 transition"
          >
            Download App
          </a>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Collections Section */}
      <Collections />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Download App Section */}
      <DownloadApp />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
