import SectionTitle from "@/components/SectionTitle";
import ProductTile from "@/components/ProductTile";
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

export default function ProductsPage() {
  // Transform the data to match what ProductTile expects
  const products: Product[] = (productsData as any).products.map((product: any) => ({
    id: product.id,
    name: product.name,
    shortDescription: product.description,
    longDescription: product.description,
    image: product.image, // Use the image path directly without adding /img/ prefix
    price: product.price
  }));

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
              <ProductTile key={product.id} product={product} />
            ))}
          </div>
        </section>
        
        {/* Brand Information */}
        <section className="mt-20 bg-gray-50 bg-opacity-80 rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="w-full h-64 flex items-center justify-center">
                <img 
                  src="/img/Nongshim_Logo1.jpg" 
                  alt="Nongshim Brand" 
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
    </div>
  );
}