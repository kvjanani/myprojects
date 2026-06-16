"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold mb-6">
          Counter: {count}
        </h1>

        <div className="space-x-3">
          <button
            onClick={() => setCount(count + 1)}
            className="px-5 py-3 bg-green-500 text-white rounded-lg hover:scale-105"
          >
            +
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="px-5 py-3 bg-red-500 text-white rounded-lg hover:scale-105"
          >
            -
          </button>

          <button
            onClick={() => setCount(0)}
            className="px-5 py-3 bg-gray-500 text-white rounded-lg hover:scale-105"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}