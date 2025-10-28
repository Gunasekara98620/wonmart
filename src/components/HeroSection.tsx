"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  // For a subtle animation effect
  const [animate, setAnimate] = useState(true);

  // Simulating image rotation for background effect
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setAnimate(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/img/classic-topping.jpg"
          alt="Nongshim Products Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Animated elements representing noodles */}
      <div className={`absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-yellow-400 opacity-20 transform transition-all duration-1000 ${animate ? 'scale-100' : 'scale-75'}`}></div>
      <div className={`absolute top-1/3 right-1/3 w-12 h-12 rounded-full bg-yellow-400 opacity-20 transform transition-all duration-1000 delay-300 ${animate ? 'scale-100' : 'scale-75'}`}></div>
      <div className={`absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-yellow-400 opacity-20 transform transition-all duration-1000 delay-500 ${animate ? 'scale-100' : 'scale-75'}`}></div>
      <div className={`absolute bottom-1/3 right-1/4 w-14 h-14 rounded-full bg-yellow-400 opacity-20 transform transition-all duration-1000 delay-700 ${animate ? 'scale-100' : 'scale-75'}`}></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Won Mart Pvt Ltd
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in-delay">
            Sole Distributor in Sri Lanka of Nongshim Korea Food Products
          </p>
          <p className="text-lg text-gray-200 mb-10 animate-fade-in-delay-2">
            Bringing authentic Korean flavors to your table with our premium selection of Nongshim products.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-3">
            <Link 
              href="/products" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
            >
              Explore Products
            </Link>
            <Link 
              href="/about" 
              className="bg-white hover:bg-gray-100 text-red-600 font-bold py-3 px-8 rounded-full transition duration-300 border-2 border-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;