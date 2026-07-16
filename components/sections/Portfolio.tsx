"use client";

import { useState } from "react";

export default function Portfolio() {
  const [active, setActive] = useState(0);

  const works = [
    { id: 1, title: "Классика", emoji: "💈" },
    { id: 2, title: "Борода", emoji: "🧔" },
    { id: 3, title: "Модерн", emoji: "✨" },
    { id: 4, title: "Фейд", emoji: "🔥" },
  ];

  // Пока заглушки, позже заменишь на реальные фото
  const photos = [
    "/portfolio/1.jpg",
    "/portfolio/2.jpg",
    "/portfolio/3.jpg",
    "/portfolio/4.jpg",
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#111]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-[#D4A05A]">Примеры</span> работ
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Реальные работы нашего барбера
        </p>

        {/* Табы */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {works.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActive(idx)}
              className={`px-6 py-2 rounded-full transition-all text-sm font-medium ${
                active === idx
                  ? "bg-[#D4A05A] text-black"
                  : "bg-[#222] text-gray-400 hover:bg-[#333]"
              }`}
            >
              {item.emoji} {item.title}
            </button>
          ))}
        </div>

        {/* Сетка фото */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((src, idx) => (
            <div
              key={idx}
              className="aspect-square bg-[#222] rounded-lg overflow-hidden border border-gray-800 hover:border-[#D4A05A] transition-all hover:scale-105"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm">
                📸 Фото {idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}