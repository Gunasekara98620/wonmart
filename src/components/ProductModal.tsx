import { useState, useEffect, useRef } from "react";
import Button from "@/components/Button";

interface Product {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  price: string;
  weight: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      // Store original body styles
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const originalPosition = document.body.style.position;
      const originalTop = document.body.style.top;
      const originalWidth = document.body.style.width;
      
      // Calculate scrollbar width
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Apply styles to prevent scrolling while maintaining background visibility
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // Restore original body styles
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    
    return () => {
      // Cleanup on unmount
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(252, 165, 165, 0.25)' }}>
      <div 
        ref={modalRef}
        className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        <div className="sticky top-0 bg-white p-4 flex justify-between items-center border-b">
          <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <div className="md:flex gap-8">
            {/* Product Image */}
            <div className="md:w-1/2 mb-6 md:mb-0">
              <div className="w-full h-96 flex items-center justify-center bg-gray-50 p-4 rounded-lg">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            
            {/* Product Details */}
            <div className="md:w-1/2">
              <span className="text-red-600 font-medium">Nongshim Product</span>
              <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">{product.name}</h1>
              <p className="text-gray-600 text-lg mb-6">{product.shortDescription}</p>
              
              <div className="mb-8">
                <p className="text-2xl font-bold text-red-600 mb-6">{product.price}</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Product Description</h2>
                <p className="text-gray-600 mb-6">{product.longDescription}</p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Product Details</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex">
                      <span className="font-medium w-32">Brand:</span>
                      <span>Nongshim</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium w-32">Origin:</span>
                      <span>South Korea</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium w-32">Category:</span>
                      <span>Instant Noodles</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium w-32">Weight:</span>
                      <span>{product.weight || "120g"}</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium w-32">Shelf Life:</span>
                      <span>12 months</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Freshness Guarantee</h3>
              <p className="text-gray-600">
                All our products are sourced directly from Korea and delivered fresh to ensure the best quality.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Authentic Korean Taste</h3>
              <p className="text-gray-600">
                Experience the genuine flavors of Korea with our authentic Nongshim products.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Islandwide Distribution</h3>
              <p className="text-gray-600">
                Available for delivery across Sri Lanka with fast and reliable shipping options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;