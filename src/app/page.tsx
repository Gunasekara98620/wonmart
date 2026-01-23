"use client";

import type { Metadata } from "next";
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import ProductTile from "@/components/ProductTile";
import ProductModal from "@/components/ProductModal";
import Link from "next/link";
import productsData from "@/data/products.json";
import Image from "next/image";

// Type for our product data
interface Product {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  price: string;
  weight: string;
}

// Type for products data structure
interface ProductsData {
  products: Array<{
    id: number;
    name: string;
    description: string;
    image: string;
    price: string;
    weight: string;
  }>;
}

export default function Home() {
  // Use the first 3 products from our products data as featured products
  const featuredProducts: Product[] = (productsData as ProductsData).products.slice(0, 3).map((product) => ({
    id: product.id,
    name: product.name,
    shortDescription: product.description,
    longDescription: product.description,
    image: product.image,
    price: product.price,
    weight: product.weight
  }));

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen" style={{ backgroundImage: "url('/img/bg5.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
      {/* Hero Section */}
      <header>
        <HeroSection />
      </header>
      
      <main>
        {/* About Section */}
        <section className="py-16 bg-white bg-opacity-90" aria-labelledby="about-heading">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="w-full h-96 flex items-center justify-center">
                  <Image 
                    src="/img/company name.png" 
                    alt="Won Mart Company" 
                    width={400}
                    height={300}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <SectionTitle 
                  id="about-heading"
                  title="About Won Mart" 
                  subtitle="Your trusted partner for authentic Korean cuisine in Sri Lanka"
                  align="left"
                />
                <p className="text-gray-600 mb-6 text-lg">
                  Won Mart (Pvt) Ltd is the sole distributor in Sri Lanka of premium food products from Nongshim Korea. 
                  We are committed to bringing authentic Korean flavors to your table with our carefully curated selection 
                  of Nongshim products.
                </p>
                <p className="text-gray-600 mb-8 text-lg">
                  Since our establishment, we have been dedicated to providing Sri Lankan consumers with the highest 
                  quality Korean food products, ensuring that every bite delivers the genuine taste of Korea.
                </p>
                <Link 
                  href="/about"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 bg-white bg-opacity-85" aria-labelledby="products-heading">
          <div className="container mx-auto px-4">
            <SectionTitle 
              id="products-heading"
              title="Featured Products" 
              subtitle="Discover our most popular Nongshim products"
              darkBackground={false}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductTile 
                  key={product.id} 
                  product={product} 
                  onOpenModal={openModal} 
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/products"
                className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-16 bg-white bg-opacity-90" aria-labelledby="partnership-heading">
          <div className="container mx-auto px-4 text-center">
            <SectionTitle 
              id="partnership-heading"
              title="Our Partnership with Nongshim Korea" 
              subtitle="Bringing authentic Korean flavors to Sri Lanka since our partnership began"
              align="center"
              darkBackground={false}
            />
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 text-xl mb-8">
                As the exclusive distributors in Sri Lanka, we work closely with Nongshim Korea to ensure 
                that you receive only the freshest and highest quality products. Our partnership is built 
                on a shared commitment to excellence and authenticity.
              </p>
              <div className="w-64 h-32 mx-auto flex items-center justify-center">
                <Image 
                  src="/img/Nongshim_Logo2.png" 
                  alt="Nongshim Korea" 
                  width={200}
                  height={100}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
}