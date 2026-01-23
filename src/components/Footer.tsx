import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#bdb7b7] py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <div className="mb-4 flex justify-center sm:justify-start">
              <Image 
                src="/img/company name.png" 
                alt="Won Mart" 
                width={120} 
                height={40} 
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-gray-800 mb-3 text-sm sm:text-base">
              Sole Distributor in Sri Lanka of Nongshim Korea Food Products.
            </p>
            <p className="text-gray-800 text-sm sm:text-base">
              Importing and distributing premium Korean food products since our establishment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 text-center sm:text-left">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-800 hover:text-red-600 block py-1 text-center sm:text-left">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-800 hover:text-red-600 block py-1 text-center sm:text-left">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-800 hover:text-red-600 block py-1 text-center sm:text-left">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-800 hover:text-red-600 block py-1 text-center sm:text-left">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 text-center sm:text-left">Contact Us</h4>
            <address className="not-italic text-gray-800 text-center sm:text-left">
              <p className="mb-2 text-sm sm:text-base">Won Mart (Pvt) Ltd</p>
              <p className="mb-2 text-sm sm:text-base">206, Rolawatta, Meegama, Dharga Town</p>
              <p className="mb-2 text-sm sm:text-base">Email: info.wonm@gmail.com</p>
              <p className="mb-4 text-sm sm:text-base">Phone: +94 766262903</p>
              
              {/* Social Media Links */}
              <div className="flex justify-center sm:justify-start space-x-4 pt-2">
                <a 
                  href="https://www.facebook.com/NongshimSriLanka/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-red-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.129 22 16.99 22 12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.tiktok.com/@nongshim_srilanka" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-red-600 transition-colors duration-200"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a 
                  href="http://www.youtube.com/@NongshimSriLanka" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-red-600 transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-800">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Won Mart (Pvt) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;