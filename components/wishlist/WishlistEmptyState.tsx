import React from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WishlistEmptyState = () => {
  return (
    <div className="flex w-full max-w-7xl flex-col items-center gap-6 text-center px-4 py-16 md:px-16 mx-auto">
      <div className="flex h-48 w-48 flex-none items-center justify-center rounded-full bg-[#f5ede4]">
        <div className="flex h-28 w-28 flex-none items-center justify-center rounded-full bg-[#e8d5c480]">
          <Heart className="w-12 h-12 text-[#d4a574] opacity-40" />
        </div>
      </div>
      <h2 className="font-sans text-[22px] font-semibold leading-[30px] text-[#3d2b1f] md:text-[28px] md:leading-[36px]">
        Your Wishlist is Empty
      </h2>
      <p className="max-w-[384px] text-sm font-normal text-[#8b7b6b]">
        Discover our curated collection of premium wigs and save your favorites
        for later.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
        <Button className="rounded-full bg-[#6B3A2A] hover:bg-[#5a2f22] text-white w-full md:w-auto shadow-none py-5 px-5">
          <ShoppingBag className="w-4 h-4 mr-2" />
          Start Shopping
        </Button>
        <Button
          variant="outline"
          className="rounded-full py-5 px-5 border-[#e8d5c4] shadow-none w-full md:w-auto text-[#3d2b1f]"
        >
          <Star className="w-4 h-4 mr-2" />
          View Best Sellers
        </Button>
      </div>
    </div>
  );
};
