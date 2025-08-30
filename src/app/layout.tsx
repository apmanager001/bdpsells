import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BDP Sells - Your Trusted Real Estate Partner",
  description:
    "Professional real estate services in Cheboygan, MI and surrounding areas. Find your dream home or sell your property with expert guidance from BDP Sells.",
  keywords:
    "real estate, realtor, homes for sale, property, real estate agent, BDP Sells, Cheboygan MI, Northern Michigan real estate",
  authors: [{ name: "BDP Sells" }],
  creator: "BDP Sells",
  publisher: "BDP Sells",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bdpsells.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BDP Sells - Your Trusted Real Estate Partner",
    description:
      "Professional real estate services in Cheboygan, MI and surrounding areas. Find your dream home or sell your property with expert guidance from BDP Sells.",
    url: "https://bdpsells.com",
    siteName: "BDP Sells",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BDP Sells Real Estate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BDP Sells - Your Trusted Real Estate Partner",
    description:
      "Professional real estate services in Cheboygan, MI and surrounding areas. Find your dream home or sell your property with expert guidance from BDP Sells.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
