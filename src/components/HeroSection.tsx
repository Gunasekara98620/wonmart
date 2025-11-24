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
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl" style={{ paddingLeft: '1in' }}>
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 inline-block px-6 py-3 rounded-full" 
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            Won Mart (Pvt) Ltd
          </h1>
          <p className="text-xl md:text-2xl text-black mb-8 inline-block px-6 py-3 rounded-full" 
             style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            Sole Distributor in Sri Lanka of Nongshim Korea Food Products
          </p>
          <p className="text-lg text-black mb-10 inline-block px-6 py-3 rounded-full" 
             style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            Bringing authentic Korean flavors to your table with our premium selection of Nongshim products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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
    </section>
  );
};

export default HeroSection;