import React from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <nav className="bg-white shadow py-4 px-6 flex justify-between items-center">
      <span className="text-xl font-bold text-blue-900">
        {t("brand")}
      </span>

      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <a href="#home" className="text-gray-800 hover:text-blue-700">
          {t("home")}
        </a>
        <a href="#about" className="text-gray-800 hover:text-blue-700">
          {t("aboutLink")}
        </a>
        <a href="#contact" className="text-gray-800 hover:text-blue-700">
          {t("contactLink")}
        </a>
        <button
          onClick={toggleLanguage}
          className="bg-blue-700 text-white px-3 py-1 rounded"
        >
          {i18n.language === "ar" ? "English" : "العربية"}
        </button>
      </div>
    </nav>
  );
}
