import React from "react";
import { useTranslation } from "react-i18next";

export default function ProductsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-10 px-6" id="products">
      <h2 className="text-3xl font-bold text-center mb-8">
        {t("products.title")}
      </h2>
      <p className="text-center text-lg mb-12">
        {t("products.description")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-bold mb-2">
            {t("products.cement.name")}
          </h3>
          <p>{t("products.cement.desc")}</p>
          <p className="mt-2 font-semibold text-blue-800">
            {t("products.cement.price")}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-bold mb-2">
            {t("products.bricks.name")}
          </h3>
          <p>{t("products.bricks.desc")}</p>
          <p className="mt-2 font-semibold text-blue-800">
            {t("products.bricks.price")}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-bold mb-2">
            {t("products.steel.name")}
          </h3>
          <p>{t("products.steel.desc")}</p>
          <p className="mt-2 font-semibold text-blue-800">
            {t("products.steel.price")}
          </p>
        </div>
      </div>
    </section>
  );
}
