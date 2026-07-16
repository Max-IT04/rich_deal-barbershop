"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scroll}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#D4A05A] text-black rounded-full shadow-lg hover:scale-110 transition-all flex items-center justify-center text-2xl"
    >
      ↑
    </button>
  );
}