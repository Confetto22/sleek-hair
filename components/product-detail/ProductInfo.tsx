"use client";

import React, { useState } from "react";
import { 
  Star, 
  Minus, 
  Plus, 
  ShoppingBag, 
  Lock, 
  CreditCard, 
  Eye, 
  Award, 
  Thermometer, 
  Scissors 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Natural Black");
  const [selectedLength, setSelectedLength] = useState('18"');
  const [selectedDensity, setSelectedDensity] = useState("180%");
  const [selectedTexture, setSelectedTexture] = useState("Straight");

  return (
    <div className="flex min-w-0 md:min-w-[320px] max-w-none md:max-w-md lg:max-w-lg grow shrink-0 basis-0 flex-col items-start gap-6">
      {/* Badge & Title */}
      <span className="text-xs font-semibold tracking-[0.15em] text-[#6b3a2a] uppercase">
        New Arrival
      </span>
      <h1 className="text-3xl md:text-4xl font-normal text-[#3d2b1f] leading-tight">
        Silky Straight HD Lace Frontal Wig
      </h1>

      {/* Pricing */}
      <div className="flex items-center gap-3">
        <span className="text-3xl text-[#3d2b1f]">$349</span>
        <span className="text-lg text-[#8b7b6b] line-through">$449</span>
        <Badge className="bg-[#e8f5e9] text-[#2e7d32] hover:bg-[#c8e6c9] border-none">
          Save 22%
        </Badge>
      </div>

      {/* Reviews */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 text-[#d4a574] fill-[#d4a574]" />
          ))}
        </div>
        <span className="text-sm font-medium text-[#3d2b1f]">4.8</span>
        <span className="text-sm text-[#8b7b6b]">·</span>
        <span className="text-sm font-medium text-[#6b3a2a] underline cursor-pointer hover:text-[#5a2f22]">
          96 reviews
        </span>
      </div>

      {/* Short Description */}
      <p className="text-sm text-[#6b5b4f] leading-relaxed">
        Experience the ultimate in luxury with our Silky Straight HD Lace
        Frontal Wig. Crafted from 100% virgin Brazilian hair, this wig features
        an ultra-thin HD lace that melts seamlessly into your skin for an
        undetectable, natural hairline.
      </p>

      <div className="h-px w-full bg-[#e8d5c4]" />

      {/* Selectors - Color */}
      <div className="flex w-full flex-col items-start gap-3">
        <span className="text-sm font-bold text-[#3d2b1f]">Color</span>
        <div className="flex items-center gap-3">
          {[
            { name: "Jet Black", hex: "#1a1a1a" },
            { name: "Natural Black", hex: "#3d2b1f" },
            { name: "Dark Auburn", hex: "#5c3a1e" },
            { name: "Honey Blonde", hex: "#c8944a" },
          ].map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={cn(
                "flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 p-0.5 transition-colors",
                selectedColor === color.name ? "border-[#6b3a2a]" : "border-transparent hover:border-gray-300"
              )}
            >
              <div
                className="h-full w-full rounded-full"
                style={{ backgroundColor: color.hex }}
              />
            </button>
          ))}
        </div>
        <span className="text-xs text-[#8b7b6b]">{selectedColor}</span>
      </div>

      {/* Selectors - Length */}
      <div className="flex w-full flex-col items-start gap-3">
        <span className="text-sm font-bold text-[#3d2b1f]">Length</span>
        <div className="flex flex-wrap items-center gap-2">
          {['16"', '18"', '20"', '24"'].map((length) => (
            <button
              key={length}
              onClick={() => setSelectedLength(length)}
              className={cn(
                "flex h-9 items-center justify-center rounded-full border px-5 text-xs font-bold transition-colors",
                selectedLength === length
                  ? "border-[#6b3a2a] bg-[#6b3a2a] text-white"
                  : "border-[#e8d5c4] bg-white text-[#3d2b1f] hover:bg-gray-50"
              )}
            >
              {length}
            </button>
          ))}
        </div>
      </div>

      {/* Selectors - Density */}
      <div className="flex w-full flex-col items-start gap-3">
        <span className="text-sm font-bold text-[#3d2b1f]">Density</span>
        <div className="flex flex-wrap items-center gap-2">
          {["150%", "180%", "200%"].map((density) => (
            <button
              key={density}
              onClick={() => setSelectedDensity(density)}
              className={cn(
                "flex h-9 items-center justify-center rounded-full border px-5 text-xs font-bold transition-colors",
                selectedDensity === density
                  ? "border-[#6b3a2a] bg-[#6b3a2a] text-white"
                  : "border-[#e8d5c4] bg-white text-[#3d2b1f] hover:bg-gray-50"
              )}
            >
              {density}
            </button>
          ))}
        </div>
      </div>

      {/* Selectors - Texture */}
      <div className="flex w-full flex-col items-start gap-3">
        <span className="text-sm font-bold text-[#3d2b1f]">Texture</span>
        <div className="flex flex-wrap items-center gap-2">
          {["Straight", "Body Wave", "Deep Wave"].map((texture) => (
            <button
              key={texture}
              onClick={() => setSelectedTexture(texture)}
              className={cn(
                "flex h-9 items-center justify-center rounded-full border px-5 text-xs font-bold transition-colors",
                selectedTexture === texture
                  ? "border-[#6b3a2a] bg-[#6b3a2a] text-white"
                  : "border-[#e8d5c4] bg-white text-[#3d2b1f] hover:bg-gray-50"
              )}
            >
              {texture}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px w-full bg-[#e8d5c4]" />

      {/* Quantity & Actions */}
      <div className="flex w-full flex-col gap-4">
        {/* Quantity */}
        <div className="flex items-center rounded-full border border-[#e8d5c4] bg-white w-fit">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-l-full hover:bg-gray-50 text-[#8b7b6b]"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Minus className="w-4 h-4" />
          </Button>
          <div className="flex h-9 w-10 items-center justify-center">
            <span className="text-sm font-bold text-[#3d2b1f]">{quantity}</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-r-full hover:bg-gray-50 text-[#8b7b6b]"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* Buttons */}
        <Button className="h-12 w-full rounded-full bg-[#6B3A2A] hover:bg-[#5a3023] text-white text-base shadow-none">
          <ShoppingBag className="w-5 h-5 mr-2" />
          Add to Cart
        </Button>
        <Button className="h-12 w-full rounded-full bg-[#D4A574] hover:bg-[#C4956A] text-white text-base shadow-none">
          Buy Now — Express Checkout
        </Button>
      </div>

      {/* Trust Badges */}
      <div className="flex w-full items-center justify-center gap-6 mt-2">
        <div className="flex items-center gap-1.5">
          <Lock className="w-4 h-4 text-[#8b7b6b]" />
          <span className="text-xs text-[#8b7b6b]">Secure Checkout</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CreditCard className="w-4 h-4 text-[#8b7b6b]" />
          <span className="text-xs text-[#8b7b6b]">Pay in 4 with Afterpay</span>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="w-full grid grid-cols-2 gap-3 mt-4">
        <div className="flex items-center gap-3 rounded-xl bg-[#f5ede4] px-4 py-3">
          <Eye className="w-5 h-5 text-[#d4a574]" />
          <span className="text-xs font-medium text-[#3d2b1f]">HD Lace Technology</span>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-[#f5ede4] px-4 py-3">
          <Award className="w-5 h-5 text-[#d4a574]" />
          <span className="text-xs font-medium text-[#3d2b1f]">100% Virgin Hair</span>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-[#f5ede4] px-4 py-3">
          <Thermometer className="w-5 h-5 text-[#d4a574]" />
          <span className="text-xs font-medium text-[#3d2b1f]">Heat Resistant 400°F</span>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-[#f5ede4] px-4 py-3">
          <Scissors className="w-5 h-5 text-[#d4a574]" />
          <span className="text-xs font-medium text-[#3d2b1f]">Pre-plucked Hairline</span>
        </div>
      </div>
    </div>
  );
};
