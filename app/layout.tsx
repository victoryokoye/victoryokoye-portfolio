import type { Metadata } from "next";
import type { Viewport } from "next";
import { Geist, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

import Providers from "./providers";

import { Analytics } from "@vercel/analytics/next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.victoryokoye.vercel.app"),
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
    canonical: "https://www.victoryokoye.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/victory-okoye-logo-bg.jpg",
  },
  openGraph: {
    title: "Victory Okoye's Portfolio",
    description: "Explore my portfolio website to see my projects and work",
    url: "https://www.victoryokoye.vercel.app",
    siteName: "Victory Okoye's Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victory Okoye",
    description: "Full Stack Developer Portfolio",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f7fd" },
    { media: "(prefers-color-scheme: dark)", color: "#070e1a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${poppins.variable} ${openSans.variable} bg-bg h-full antialiased`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="1Mg7uxhqDNnt84ml-QT80lxTORDn8DaaHL4VXoxKXdU"
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text">
        <Analytics />
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
