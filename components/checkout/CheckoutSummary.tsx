import React from "react";
import Link from "next/link";
import { Lock, Shield, RefreshCw, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CheckoutSummary = () => {
  return (
    <div className="flex w-full lg:w-[448px] flex-none flex-col items-start gap-6 rounded-3xl bg-white px-5 py-6 md:px-8 md:py-8 shadow-[0px_2px_16px_-4px_#3d2b1f0f] lg:sticky lg:top-6">
      <span className="font-sans text-lg font-semibold leading-[26px] text-[#3d2b1f]">
        Order Summary
      </span>
      <div className="flex w-full flex-col items-start gap-4">
        {/* Cart Item Row */}
        <div className="flex w-full items-start gap-4">
          <img
            className="h-20 w-20 flex-none rounded-xl object-cover"
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&q=80"
            alt="Brazilian Body Wave"
          />
          <div className="flex min-w-0 grow flex-col items-start gap-1">
            <span className="font-bold text-sm text-[#3d2b1f]">
              Brazilian Body Wave HD Lace
            </span>
            <span className="text-xs text-[#8b7b6b]">18" · 180% · HD Lace</span>
            <span className="text-xs text-[#8b7b6b]">Qty: 1</span>
          </div>
          <span className="font-bold text-sm text-[#3d2b1f]">$289.00</span>
        </div>
        {/* Cart Item Row */}
        <div className="flex w-full items-start gap-4">
          <img
            className="h-20 w-20 flex-none rounded-xl object-cover"
            src="https://images.unsplash.com/photo-1595959183082-7b570b7e1e6b?w=200&q=80"
            alt="Silky Straight"
          />
          <div className="flex min-w-0 grow flex-col items-start gap-1">
            <span className="font-bold text-sm text-[#3d2b1f]">
              Silky Straight HD Lace
            </span>
            <span className="text-xs text-[#8b7b6b]">20" · 150% · HD Lace</span>
            <span className="text-xs text-[#8b7b6b]">Qty: 1</span>
          </div>
          <span className="font-bold text-sm text-[#3d2b1f]">$349.00</span>
        </div>
      </div>
      <div className="flex h-px w-full flex-none items-start bg-[#e8d5c4]" />
      
      <div className="flex w-full items-center gap-3">
        <input
          type="text"
          placeholder="Discount code"
          className="h-10 min-w-0 grow rounded-lg border border-[#e8d5c4] px-4 py-2 text-sm outline-none placeholder:text-[#8b7b6b] hover:border-[#d4a574] focus:border-[#d4a574] transition-colors"
        />
        <Button
          className="rounded-full shadow-none border-[#e8d5c4] text-[#3d2b1f]"
          variant="outline"
        >
          Apply
        </Button>
      </div>

      <div className="flex h-px w-full flex-none items-start bg-[#e8d5c4]" />
      <div className="flex w-full flex-col items-start gap-3">
        <div className="flex w-full items-center justify-between">
          <span className="text-sm font-medium text-[#8b7b6b]">Subtotal</span>
          <span className="text-sm font-medium text-[#3d2b1f]">$638.00</span>
        </div>
        <div className="flex w-full items-center justify-between">
          <span className="text-sm font-medium text-[#8b7b6b]">Shipping</span>
          <span className="text-sm font-bold text-[#6b3a2a]">Free</span>
        </div>
        <div className="flex w-full items-center justify-between">
          <span className="text-sm font-medium text-[#8b7b6b]">Tax</span>
          <span className="text-sm font-medium text-[#3d2b1f]">$51.04</span>
        </div>
      </div>
      <div className="flex h-px w-full flex-none items-start bg-[#e8d5c4]" />
      <div className="flex w-full items-center justify-between">
        <span className="font-sans text-xl font-semibold text-[#3d2b1f]">Total</span>
        <span className="font-sans text-xl font-bold text-[#3d2b1f]">$689.04</span>
      </div>
      <Link href="/order-success" className="w-full mt-2">
        <Button className="h-14 w-full flex-none rounded-full bg-[#6B3A2A] hover:bg-[#5a2f22] text-white shadow-none">
          <Lock className="w-5 h-5 mr-2" />
          Place Order · $689.04
        </Button>
      </Link>
      <div className="flex w-full items-center justify-center gap-2">
        <Shield className="w-4 h-4 text-[#8b7b6b]" />
        <span className="text-xs font-medium text-[#8b7b6b]">
          Secure 256-bit SSL encryption
        </span>
      </div>
      <div className="flex h-px w-full flex-none items-start bg-[#e8d5c4]/50 my-1" />
      <div className="flex w-full flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <RefreshCw className="w-4 h-4 text-[#d4a574]" />
          <span className="text-xs font-medium text-[#8b7b6b]">
            30-day hassle-free returns
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-[#d4a574]" />
          <span className="text-xs font-medium text-[#8b7b6b]">
            Free shipping on orders over $150
          </span>
        </div>
      </div>
    </div>
  );
};
