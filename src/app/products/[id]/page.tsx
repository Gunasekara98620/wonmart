import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import productsData from "@/data/products.json";

// Type for our product data
interface Product {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  price: string;
}

// Generate static params for static export
export async function generateStaticParams() {
  const products: Product[] = productsData as Product[];
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const products: Product[] = productsData as Product[];
  const productId = parseInt(params.id);
  const product = products.find(p => p.id === productId);

  // If product not found, show 404 page
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link 
            href="/products" 
            className="flex items-center text-red-600 hover:text-red-800 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Products
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2">
              <div className="bg-gray-200 border-2 border-dashed w-full h-96 md:h-full flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
              </div>
            </div>
            
            {/* Product Details */}
            <div className="md:w-1/2 p-8">
              <span className="text-red-600 font-medium">Nongshim Product</span>
              <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">{product.name}</h1>
              <p className="text-gray-600 text-lg mb-6">{product.shortDescription}</p>
              
              <div className="mb-8">
                <p className="text-2xl font-bold text-red-600 mb-6">{product.price}</p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button variant="primary" size="large">
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="large">
                    Buy Now
                  </Button>
                </div>
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
                      <span>120g</span>
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
        </div>
        
        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
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
          
          <div className="bg-white p-6 rounded-lg shadow">
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
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Worldwide Shipping</h3>
            <p className="text-gray-600">
              Available for delivery across Sri Lanka with fast and reliable shipping options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}