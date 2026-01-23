import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Won Mart (Pvt) Ltd - Leading Korean Food Distributors in Sri Lanka",
  description: "Learn about Won Mart (Pvt) Ltd, Sri Lanka's premier distributor of authentic Nongshim Korean food products. Discover our history, mission, and commitment to quality Kfood and Korean culture.",
  keywords: [
    "About Won Mart",
    "Korean food distributors",
    "Nongshim Sri Lanka",
    "Korean food products",
    "authentic Korean cuisine",
    "Korean culture Sri Lanka",
    "Ramyun",
    "ShinRamyun",
    "Kfood",
    "Korea",
    "Korean food",
    "Ramen",
    "Kpop",
    "Kdrama",
    "Kbeauty",
    "Asian food",
    "Korean instant noodles",
    "Korean grocery"
  ],
  openGraph: {
    title: "About Won Mart | Korean Food Distributors in Sri Lanka",
    description: "The story behind Sri Lanka's premier Korean food distributor and our partnership with Nongshim Korea.",
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 bg-white bg-opacity-90">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Won Mart (Pvt) Ltd</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for authentic Korean cuisine in Sri Lanka
          </p>
        </div>
        
        {/* Company History */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="w-full h-96 flex items-center justify-center">
                <Image 
                  src="/img/company.PNG" 
                  alt="Company History" 
                  width={500}
                  height={400}
                  className="max-h-full max-w-full object-contain rounded-xl"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <SectionTitle 
                title="Our History" 
                align="left"
              />
              <p className="text-gray-600 mb-6 text-lg">
                Founded with a passion for Korean cuisine, Won Mart (Pvt) Ltd has been the leading distributor 
                of Nongshim Korea food products in Sri Lanka for several years. Our journey began with a 
                simple vision: to bring authentic Korean flavors to Sri Lankan households.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Over the years, we have expanded our product portfolio to include a wide range of Nongshim 
                products, from their iconic Shin Ramen to specialty items that cater to diverse taste preferences.
              </p>
              <p className="text-gray-600 text-lg">
                Today, we are proud to be recognized as the sole authorized distributor of Nongshim products 
                in Sri Lanka, serving retailers, restaurants, and consumers across the country.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="w-full h-96 flex items-center justify-center">
                <Image 
                  src="/img/ngsl.jpg" 
                  alt="Mission & Vision" 
                  width={500}
                  height={400}
                  className="max-h-full max-w-full object-contain rounded-xl"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <SectionTitle 
                title="Our Mission & Vision" 
                align="left"
              />
              <h3 className="text-2xl font-bold text-red-600 mb-4">Mission</h3>
              <p className="text-gray-600 mb-8 text-lg">
                To provide Sri Lankan consumers with authentic, high-quality Korean food products while 
                fostering cultural exchange through culinary experiences.
              </p>
              
              <h3 className="text-2xl font-bold text-red-600 mb-4">Vision</h3>
              <p className="text-gray-600 text-lg">
                To become the premier destination for Korean cuisine in Sri Lanka, recognized for our 
                commitment to quality, authenticity, and exceptional customer service.
              </p>
            </div>
          </div>
        </section>
        
        {/* Partnership */}
        <section className="mb-20">
          <SectionTitle 
            title="Our Partnership with Nongshim Korea" 
          />
          <div className="bg-gray-50 bg-opacity-80 rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3">
                <div className="w-full h-64 flex items-center justify-center">
                  <Image 
                    src="/img/Nongshim-Company.jpg" 
                    alt="Nongshim Company" 
                    width={300}
                    height={200}
                    className="max-h-full max-w-full object-contain rounded-xl"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-6 text-lg">
                  Our partnership with Nongshim Korea represents a shared commitment to quality and authenticity. 
                  As the sole distributors in Sri Lanka, we work closely with Nongshim to ensure that all products 
                  meet the highest standards of quality and freshness.
                </p>
                <p className="text-gray-600 mb-6 text-lg">
                  Nongshim, established in 1965, is one of Korea&apos;s leading food companies with a strong reputation 
                  for innovation and quality. Their dedication to preserving traditional Korean flavors while 
                  embracing modern food technology aligns perfectly with our mission.
                </p>
                <p className="text-gray-600 text-lg">
                  Through this partnership, we are able to offer Sri Lankan consumers access to authentic Korean 
                  cuisine that maintains the integrity of traditional recipes while meeting international safety 
                  and quality standards.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section>
          <SectionTitle 
            title="Our Core Values" 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                We ensure that every product meets the highest quality standards before reaching our customers.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Authenticity</h3>
              <p className="text-gray-600">
                We are committed to delivering genuine Korean flavors that stay true to their origins.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Satisfaction</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do, and their satisfaction drives our success.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}