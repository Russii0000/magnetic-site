// src/pages/HomePage.js
import React from "react";
import Navbar from "../components/Navbar";
import ProductsSection from "../components/ProductsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import WhatsAppButton from "../components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <div className="font-sans bg-gray-50 text-gray-900">
        <Navbar />

        <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-8 px-6 text-center">
          <h1 className="text-4xl font-bold mb-2">Magnetic Middle East Trading</h1>
          <h1 className="text-4xl font-bold mb-2">✅ Welcome to Magnetic Middle East Trading</h1>
          <p className="text-lg">Your Global Partner in Building Materials</p>
        </header>

        <ProductsSection />
        <AboutSection />
        <ContactSection />

        <footer className="bg-gray-800 text-white text-center py-6">
          <p>© 2025 Magnetic Middle East Trading — Sharjah & Dubai, UAE</p>
        </footer>
      </div>

      <WhatsAppButton />
    </>
  );
}
