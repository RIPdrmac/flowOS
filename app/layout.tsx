import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BRIX — Got Brix? | Business Ready Intelligence eXtension",
  description:
    "The building blocks for your business. One-time purchase. Own it forever. Anti-SaaS business operating systems for every industry.",
  openGraph: {
    title: "BRIX — Got Brix?",
    description:
      "The building blocks for your business. One-time purchase. Own it forever.",
    url: "https://gotbrix.app",
    siteName: "BRIX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BRIX — Got Brix?",
    description:
      "The building blocks for your business. One-time purchase. Own it forever.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
