import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Won Mart (Pvt) Ltd - Authentic Korean Food Products in Sri Lanka",
    template: "%s | Won Mart"
  },
  description: "Sole authorized distributor of Nongshim Korea food products in Sri Lanka. Premium Korean instant noodles, snacks, and authentic cuisine delivered islandwide.",
  keywords: [
    "Won Mart",
    "Nongshim Sri Lanka",
    "Korean food products",
    "instant noodles Sri Lanka",
    "authentic Korean cuisine",
    "Shin Ramen Sri Lanka",
    "Korean snacks Sri Lanka",
    "food distribution Sri Lanka",
    "Nongshim products"
  ],
  authors: [{ name: "Won Mart (Pvt) Ltd" }],
  creator: "Won Mart (Pvt) Ltd",
  publisher: "Won Mart (Pvt) Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://wonmart.lk'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Won Mart (Pvt) Ltd - Authentic Korean Food Products",
    description: "Sri Lanka's premier destination for authentic Nongshim Korean food products. Quality guaranteed, islandwide delivery.",
    url: 'https://wonmart.lk',
    siteName: 'Won Mart (Pvt) Ltd',
    images: [
      {
        url: '/og-image.jpg', // Add this image
        width: 1200,
        height: 630,
        alt: 'Won Mart - Authentic Korean Food Products',
      },
    ],
    locale: 'en_LK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Won Mart (Pvt) Ltd - Korean Food Products",
    description: "Authentic Nongshim Korean cuisine in Sri Lanka",
    images: ['/twitter-image.jpg'], // Add this image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '', // Add your Google Search Console verification code
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}