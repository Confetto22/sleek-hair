import React from "react";
import { Heart, Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Product {
  id: string;
  name: string;
  specs: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: "New" | string;
}

export const ProductCard = ({ product, actionLabel = "Add to Cart" }: { product: Product, actionLabel?: string }) => {
  return (
    <div className="flex flex-col items-start overflow-hidden rounded-2xl bg-white hover:shadow-md transition-shadow group max-w-md mx-auto w-full">
      {/* Image Container */}
      <div className="flex aspect-5/4 md:aspect-5/5 w-full  flex-none items-start overflow-hidden relative">
        <div className="w-full h-full bg-gray-200" />{" "}
        {/* Generic grey blur placeholder */}
        {/* Favorite Icon */}
        <button className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/80 absolute top-3 right-3 backdrop-blur-sm transition-colors hover:bg-white text-[#6b3a2a]">
          <Heart className="w-4 h-4" />
        </button>
        {/* Badge */}
        {product.badge && (
          <div
            className={`flex items-center rounded-full px-3 py-1 absolute top-3 left-3 ${product.badge === "New" ? "bg-[#d4a574]" : "bg-[#6b3a2a]"}`}
          >
            <span className="text-xs font-bold text-white">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex grow flex-col items-start gap-1.5 px-3 py-3 md:px-5 md:py-4 w-full">
        <span className="line-clamp-1 font-bold text-sm md:text-base text-[#3d2b1f]">
          {product.name}
        </span>
        <span className="text-xs text-[#8b7b6b]">{product.specs}</span>

        {/* Ratings */}
        <div className="flex items-center gap-1 mt-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-3 h-3 ${star <= Math.round(product.rating) ? "text-[#d4a574] fill-[#d4a574]" : "text-[#8b7b6b]"}`}
            />
          ))}
          <span className="text-xs text-[#8b7b6b] ml-1">
            ({product.reviews})
          </span>
        </div>

        {/* Price Box */}
        <div className="flex items-center gap-2 mt-2 mb-2">
          <span className="text-lg font-semibold text-[#3d2b1f]">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-[#8b7b6b] line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <Button className="h-9 w-full rounded-full bg-[#6B3A2A] hover:bg-[#5a2f22] text-white mt-auto flex items-center justify-center gap-2 transition-all shadow-none">
          <ShoppingBag className="w-4 h-4" />
          {actionLabel}
        </Button>
      </div>
    </div>
  );
};
