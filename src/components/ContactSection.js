// src/components/ContactSection.js
import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-100 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded border border-gray-300" />
          <input type="email" placeholder="Email Address" className="w-full p-3 rounded border border-gray-300" />
          <textarea placeholder="Message" rows="5" className="w-full p-3 rounded border border-gray-300"></textarea>
          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 w-full">Send Message</button>
        </form>
      </div>
    </section>
  );
}
