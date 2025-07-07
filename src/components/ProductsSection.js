// src/components/ProductsSection.js
import React from "react";

export default function ProductsSection() {
  return (
    <section id="products" className="py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Premium Building Materials</h2>
      <p className="text-center text-lg mb-12">Supplying Cement, Bricks, and Steel across UAE & GCC</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-6 hover:scale-105 transition-all">
          <img src="/cement.jpg" alt="Cement" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2">Cement</h3>
          <p>High-quality cement suitable for all structural and finishing needs.</p>
          <p className="mt-2 font-semibold text-blue-800">650 AED / ton</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 hover:scale-105 transition-all">
          <img src="/bricks.jpg" alt="Bricks" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2">Red Bricks</h3>
          <p>Durable red bricks for reliable construction.</p>
          <p className="mt-2 font-semibold text-blue-800">2.5 AED / piece</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 hover:scale-105 transition-all">
          <img src="/steel.jpg" alt="Steel" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2">Reinforced Steel</h3>
          <p>Standard-compliant reinforced steel bars for construction.</p>
          <p className="mt-2 font-semibold text-blue-800">2200 AED / ton</p>
        </div>
      </div>
    </section>
  );
}
