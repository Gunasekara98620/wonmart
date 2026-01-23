"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/img/bg5.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center sm:text-left px-4 sm:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full" 
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
            Won Mart (Pvt) Ltd
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-black mb-4 sm:mb-6 md:mb-8 inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full" 
             style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
            Sole Distributor in Sri Lanka of Nongshim Korea Food Products
          </p>
          <p className="text-base sm:text-lg text-black mb-6 sm:mb-8 md:mb-10 inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full" 
             style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
            Bringing authentic Korean flavors to your table with our premium selection of Nongshim products.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
            <Link 
              href="/products" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 transform hover:scale-105 text-center"
            >
              Explore Products
            </Link>
            <Link 
              href="/about" 
              className="bg-white hover:bg-gray-100 text-red-600 font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 border-2 border-white text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;