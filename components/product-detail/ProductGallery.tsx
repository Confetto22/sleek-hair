"use client";

import React, { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const MOCK_IMAGES = [
  "https://images.unsplash.com/photo-1595959183082-7b570b7e1e6b?w=800&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&q=80",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=200&q=80",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=200&q=80",
];

export const ProductGallery = ({ images = MOCK_IMAGES }: { images?: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex min-w-0 md:min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-4">
      {/* Main Feature Image */}
      <div className="flex w-full items-start relative overflow-hidden rounded-3xl bg-gray-200">
        <img
          className="aspect-square md:aspect-[4/5] object-cover w-full h-full"
          src={images[activeIndex]}
          alt="Product Feature"
        />
        <button className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white shadow-sm absolute top-4 right-4 hover:bg-gray-50 transition-colors">
          <Heart className="w-5 h-5 text-[#6b3a2a]" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex w-full items-center gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-none">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={cn(
              "h-16 w-16 md:h-20 md:w-20 flex-none rounded-xl border-2 object-cover overflow-hidden transition-all",
              activeIndex === idx
                ? "border-[#d4a574] opacity-100"
                : "border-transparent opacity-70 hover:opacity-100"
            )}
          >
            <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover bg-gray-200" />
          </button>
        ))}
      </div>
    </div>
  );
};
