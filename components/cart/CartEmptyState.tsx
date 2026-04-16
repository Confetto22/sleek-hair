import React from "react";
import { ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CartEmptyState = () => {
  return (
    <div className="flex w-full max-w-7xl flex-col items-center gap-6 text-center px-4 py-20 md:px-16 mx-auto">
      <div className="flex h-48 w-48 flex-none items-center justify-center rounded-full bg-[#f5ede4]">
        <div className="flex h-28 w-28 flex-none items-center justify-center rounded-full bg-[#e8d5c480]">
          {/* Subtle shopping bag for elegant presentation */}
          <ShoppingBag className="w-12 h-12 text-[#d4a574] opacity-40" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2 className="font-sans text-[22px] font-semibold leading-[30px] text-[#3d2b1f] md:text-[28px] md:leading-[36px]">
          Your Cart is Empty
        </h2>
        <p className="max-w-[400px] text-sm font-normal text-[#8b7b6b]">
          Looks like you haven't added anything to your cart yet. Discover our premium wigs and find your perfect match.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto mt-2">
        <Button
          className="rounded-full bg-[#6B3A2A] hover:bg-[#5a2f22] text-white w-full md:w-auto shadow-none px-6 py-5"
        >
          <ShoppingBag className="w-4 h-4 mr-2" />
          Start Shopping
        </Button>
        <Button
          variant="outline"
          className="rounded-full border-[#e8d5c4] shadow-none w-full md:w-auto text-[#3d2b1f] px-6 py-5"
        >
          <Star className="w-4 h-4 mr-2" />
          View Best Sellers
        </Button>
      </div>
    </div>
  );
};
