import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartHeaderProps {
  itemCount: number;
}

export const CartHeader = ({ itemCount }: CartHeaderProps) => {
  return (
    <div className="flex w-full max-w-7xl items-center justify-between px-4 py-6 md:px-8 lg:px-16 md:py-8 mx-auto">
      <div className="flex items-center gap-3">
        <h1 className="font-sans text-2xl font-semibold text-[#3d2b1f] md:text-[32px] md:leading-[40px]">
          Shopping Cart
        </h1>
        <span className="text-sm md:text-base font-normal text-[#8b7b6b]">
          ({itemCount} items)
        </span>
      </div>
      <button className="flex items-center text-sm font-semibold text-[#c4956a] hover:text-[#a0744d] transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1" />
        <span className="hidden md:inline">Continue Shopping</span>
        <span className="md:hidden">Back</span>
      </button>
    </div>
  );
};
