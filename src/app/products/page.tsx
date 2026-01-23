import type { Metadata } from "next";
"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import ProductTile from "@/components/ProductTile";
import ProductModal from "@/components/ProductModal";
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

export const metadata: Metadata = {
  title: "Korean Food Products - Nongshim Range | Won Mart Sri Lanka",
  description: "Shop authentic Nongshim Korean food products including Shin Ramyun, Neoguri, Chapagetti and more. Premium Korean instant noodles and snacks delivered islandwide in Sri Lanka.",
  keywords: [
    "Korean food products",
    "Nongshim products",
    "Shin Ramyun",
    "Neoguri",
    "Chapagetti",
    "Korean instant noodles",
    "Ramyun",
    "ShinRamyun",
    "Kfood",
    "Korea",
    "Korean food",
    "Ramen",
    "Korean snacks",
    "Asian food",
    "Korean grocery",
    "Korean cuisine",
    "authentic Korean",
    "Korean delicacies",
    "instant noodles Sri Lanka"
  ],
  openGraph: {
    title: "Nongshim Products | Korean Food Range",
    description: "Discover authentic Korean instant noodles and food products from Nongshim Korea, exclusively distributed by Won Mart in Sri Lanka.",
    url: '/products',
  },
};

export default function ProductsPage() {
  // Transform the data to match what ProductTile expects
  const products: Product[] = (productsData as ProductsData).products.map((product) => ({
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
    <div className="min-h-screen py-16 bg-white bg-opacity-90">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete range of authentic Nongshim Korea food products
          </p>
        </div>
        
        {/* Products Grid */}
        <section>
          <SectionTitle 
            title="Nongshim Product Range" 
            subtitle="Explore our selection of premium Korean instant noodles and food products"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductTile 
                key={product.id} 
                product={product} 
                onOpenModal={openModal} 
              />
            ))}
          </div>
        </section>
        
        {/* Brand Information */}
        <section className="mt-20 bg-gray-50 bg-opacity-80 rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="w-full h-64 flex items-center justify-center">
                <Image 
                  src="/img/Nongshim_Logo1.jpg" 
                  alt="Nongshim Brand" 
                  width={300}
                  height={200}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Nongshim</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Nongshim Co., Ltd. is a leading South Korean food company established in 1965. 
                Known for its innovative approach to traditional Korean cuisine, Nongshim has become 
                one of the most recognized food brands globally.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Famous for its instant noodle products, particularly the iconic Shin Ramen, Nongshim 
                combines traditional Korean flavors with modern food technology to create products 
                that are both delicious and convenient.
              </p>
              <p className="text-gray-600 text-lg">
                All Nongshim products distributed by Won Mart are sourced directly from Korea, 
                ensuring authenticity and the highest quality standards.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      {/* Product Modal */}
      {isModalOpen && (
        <ProductModal 
          product={selectedProduct} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}