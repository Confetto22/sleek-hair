import React from "react";
import { Lock, ShoppingBag } from "lucide-react";
import Link from "next/link";

export const CheckoutHeader = () => {
  return (
    <div className="flex w-full items-center justify-between border-b border-solid border-[#e8d5c4] px-4 py-4 md:px-16 md:py-5 bg-[#faf5ef]">
      <Link href="/" className="font-sans text-xl md:text-2xl font-bold leading-8 text-[#3d2b1f] hover:opacity-80 transition-opacity">
        LUXE CROWN
      </Link>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2">
          <Lock className="w-4 h-4 text-[#8b7b6b]" />
          <span className="text-sm font-medium text-[#8b7b6b]">
            Secure Checkout
          </span>
        </div>
        <Link href="/cart" className="flex items-center justify-center p-2 rounded-full hover:bg-[#e8d5c4]/50 transition-colors">
          <ShoppingBag className="w-5 h-5 text-[#3d2b1f]" />
        </Link>
      </div>
    </div>
  );
};
