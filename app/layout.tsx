import type { Metadata } from "next";
import type { Viewport } from "next";
import { Geist, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: [ "400", "500", "600", "700"]
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victory Okoye | Web Developer",
  description: "I build modern, fast, and responsive web applications.",
  keywords: [
    "victory okoye",
    "victory's portfolio",
    "web developer",
    "next.js developer",
    "frontend developer",
    "full stack developer",
  ],
  alternates: {
    canonical: "https://"
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/",
  },
  openGraph: {
    title: "Victory Okoye's Portfolio",
    description: "Explore my portfolio website to see my projects and work",
    url: "https://",
    siteName: "Victory Okoye's Portfolio",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victory Okoye",
    description: "Full Stack Developer Portfolio",
    images: ["/"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${poppins.variable} ${openSans.variable} bg-background h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
