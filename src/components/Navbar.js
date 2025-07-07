import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-bold text-blue-800">Magnetic</div>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><a href="#home" className="hover:text-blue-600">Home</a></li>
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  );
}

