"use client";

import { useState } from "react";
import Image from "next/image";

interface Category {
  id: number;
  name: string;
  emoji: string;
}

type PhotoCategories = {
  [key: string]: string[];
};

export default function Portfolio() {
  const [active, setActive] = useState<number>(0);

  const categories: Category[] = [
    { id: 0, name: "Классика", emoji: "💈" },
    { id: 1, name: "Борода", emoji: "🧔" },
    { id: 2, name: "Модерн", emoji: "✨" },
    { id: 3, name: "Фейд", emoji: "🔥" },
  ];

  const photos: PhotoCategories = {
    Классика: ["/portfolio/classic-1.jpg", "/portfolio/classic-2.jpg", "/portfolio/classic-3.jpg", "/portfolio/classic-4.jpg"],
    Борода: ["/portfolio/beard-1.jpg", "/portfolio/beard-2.jpg", "/portfolio/beard-3.jpg", "/portfolio/beard-4.jpg"],
    Модерн: ["/portfolio/modern-1.jpg", "/portfolio/modern-2.jpg", "/portfolio/modern-3.jpg", "/portfolio/modern-4.jpg"],
    Фейд: ["/portfolio/fade-1.jpg", "/portfolio/fade-2.jpg", "/portfolio/fade-3.jpg", "/portfolio/fade-4.jpg"],
  };

  const currentCategory: string = categories[active].name;
  const currentPhotos: string[] = photos[currentCategory] || [];

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
          {categories.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`px-6 py-2 rounded-full transition-all text-sm font-medium ${
                active === item.id
                  ? "bg-[#D4A05A] text-black"
                  : "bg-[#222] text-gray-400 hover:bg-[#333]"
              }`}
            >
              {item.emoji} {item.name}
            </button>
          ))}
        </div>

        {/* Сетка фото */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {currentPhotos.map((src: string, idx: number) => (
            <div
              key={idx}
              className="aspect-square bg-[#222] rounded-lg overflow-hidden border border-gray-800 hover:border-[#D4A05A] transition-all hover:scale-105"
            >
              <Image
                src={src}
                alt={`${currentCategory} ${idx + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Если фото нет */}
        {currentPhotos.length === 0 && (
          <p className="text-center text-gray-500 py-10">
            Фото в этой категории скоро появятся
          </p>
        )}
      </div>
    </section>
  );
}