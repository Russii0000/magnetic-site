import React from "react";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          {t("contact.title")}
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder={t("contact.name")}
            className="w-full p-3 rounded border border-gray-300"
          />
          <input
            type="email"
            placeholder={t("contact.email")}
            className="w-full p-3 rounded border border-gray-300"
          />
          <textarea
            placeholder={t("contact.message")}
            rows="5"
            className="w-full p-3 rounded border border-gray-300"
          ></textarea>
          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg w-full">
            {t("contact.send")}
          </button>
        </form>
      </div>
    </section>
  );
}
