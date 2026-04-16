import React from "react";
import { Heart, Share2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WishlistHeaderProps {
  itemCount: number;
}

export const WishlistHeader = ({ itemCount }: WishlistHeaderProps) => {
  return (
    <div className="flex w-full max-w-7xl items-start justify-between flex-col md:flex-row md:items-center gap-4 px-4 py-6 md:px-16 md:py-10 mx-auto">
      <div className="flex flex-col items-start gap-2">
        <h1 className="font-sans text-2xl font-semibold leading-8 text-[#3d2b1f] md:text-[32px] md:leading-[40px]">
          Your Saved Wigs
        </h1>
        <div className="flex items-center gap-2">
          <Heart className="w-3.5 h-3.5 text-[#8b7b6b]" />
          <span className="text-xs font-medium text-[#8b7b6b]">
            {itemCount} items saved
          </span>
        </div>
      </div>
      <div className="flex w-full md:w-auto items-center justify-between md:justify-end gap-3 flex-row">
        <Button
          className="rounded-full shadow-none border-[#e8d5c4] text-[#3d2b1f]"
          variant="outline"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share Wishlist
        </Button>
        <button className="flex items-center text-sm font-semibold text-[#c4956a] hover:text-[#a0744d] transition-colors">
          Continue Shopping
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};
