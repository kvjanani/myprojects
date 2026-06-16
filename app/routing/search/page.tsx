"use client";

import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");

  const data = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Grapes",
    "Pineapple",
    "Watermelon",
  ];

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-[400px]">
        <h1 className="text-3xl font-bold text-center mb-6">
          🔍 Search App
        </h1>

        <input
          type="text"
          placeholder="Search fruits..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border-2 border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:border-purple-500"
        />

        <ul className="space-y-2">
          {filteredData.map((item, index) => (
            <li
              key={index}
              className="bg-gray-100 p-3 rounded-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}