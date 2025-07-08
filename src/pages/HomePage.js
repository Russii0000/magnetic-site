import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import ProductsSection from "../components/ProductsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import WhatsAppButton from "../components/WhatsAppButton";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="font-sans bg-gray-50 text-gray-900">
        <Navbar />

        {/* الهيدر */}
        <header
          id="home"
          className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-8 px-6 text-center"
        >
          <h1 className="text-4xl font-bold mb-2">
            {t("mainHeading")}
          </h1>
          <p className="text-lg">{t("subHeading")}</p>
        </header>

        <ProductsSection />

        <section id="about">
          <AboutSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <footer className="bg-gray-800 text-white text-center py-6">
          <p>© 2025 Magnetic Middle East Trading — Sharjah & Dubai, UAE</p>
        </footer>
      </div>

      <WhatsAppButton />
    </>
  );
}
