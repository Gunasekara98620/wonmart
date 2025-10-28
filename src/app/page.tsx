import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import ProductTile from "@/components/ProductTile";
import Link from "next/link";

// Mock product data for the homepage
const featuredProducts = [
  {
    id: 1,
    name: "Shin Ramen (Original)",
    shortDescription: "Spicy Korean instant noodles with authentic flavor",
    image: "/img/shin-ramen-original.jpg",
    price: "Rs. 150"
  },
  {
    id: 2,
    name: "Shin Ramen (Neoguri)",
    shortDescription: "Extra spicy seafood flavored instant noodles",
    image: "/img/shin-ramen-neoguri.jpg",
    price: "Rs. 160"
  },
  {
    id: 3,
    name: "Champong Noodle Soup",
    shortDescription: "Spicy seafood noodle soup with vegetables",
    image: "/img/champong-noodle-soup.jpg",
    price: "Rs. 180"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
                <span className="text-gray-500">Company Image</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <SectionTitle 
                title="About Won Mart" 
                subtitle="Your trusted partner for authentic Korean cuisine in Sri Lanka"
                align="left"
              />
              <p className="text-gray-600 mb-6 text-lg">
                Won Mart Pvt Ltd is the sole distributor in Sri Lanka of premium food products from Nongshim Korea. 
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Featured Products" 
            subtitle="Discover our most popular Nongshim products"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductTile key={product.id} product={product} />
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
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle 
            title="Our Partnership with Nongshim Korea" 
            subtitle="Bringing authentic Korean flavors to Sri Lanka since our partnership began"
            align="center"
          />
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-8">
              As the exclusive distributors in Sri Lanka, we work closely with Nongshim Korea to ensure 
              that you receive only the freshest and highest quality products. Our partnership is built 
              on a shared commitment to excellence and authenticity.
            </p>
            <div className="bg-gray-200 border-2 border-dashed border-gray-300 rounded-xl w-64 h-32 mx-auto flex items-center justify-center">
              <span className="text-gray-500">Nongshim Logo</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}