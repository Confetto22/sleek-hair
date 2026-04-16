import React from "react";
import Link from "next/link";
import { Lock, Shield, RefreshCw, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CartSummary = ({
  subtotal,
  tax,
  shipping = 0,
}: {
  subtotal: number;
  tax: number;
  shipping?: number;
}) => {
  const total = subtotal + tax + shipping;
  return (
    <div className="flex w-full lg:w-[448px] flex-none flex-col items-start gap-6 rounded-[24px] bg-white px-5 py-6 md:px-8 shadow-[0px_2px_16px_-4px_#3d2b1f0f] lg:sticky lg:top-6">
      <h2 className="font-sans text-lg font-semibold leading-[26px] text-[#3d2b1f]">
        Order Summary
      </h2>
      <div className="flex h-px w-full flex-none items-start bg-[#e8d5c4]" />
      
      <div className="flex w-full flex-col items-start gap-3 text-sm">
        <div className="flex w-full items-center justify-between">
          <span className="text-[#8b7b6b]">Subtotal</span>
          <span className="font-medium text-[#3d2b1f]">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex w-full items-center justify-between">
          <span className="text-[#8b7b6b]">Shipping</span>
          <span className="text-xs text-[#8b7b6b]">
            Calculated at checkout
          </span>
        </div>
        <div className="flex w-full items-center justify-between">
          <span className="text-[#8b7b6b]">Estimated Tax</span>
          <span className="font-medium text-[#3d2b1f]">${tax.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex h-px w-full flex-none items-start bg-[#e8d5c4]" />

      <div className="flex w-full items-center justify-between">
        <span className="font-sans text-lg font-semibold text-[#3d2b1f]">
          Estimated Total
        </span>
        <span className="font-sans text-xl font-bold text-[#3d2b1f]">
          ${total.toFixed(2)}
        </span>
      </div>

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

      <Link href="/checkout" className="w-full mt-2">
        <Button
          className="h-14 w-full flex-none rounded-full bg-[#6B3A2A] hover:bg-[#5a2f22] text-white shadow-none"
        >
          <Lock className="w-5 h-5 mr-2" />
          Proceed to Checkout
        </Button>
      </Link>

      <div className="flex w-full items-center justify-center gap-2">
        <Shield className="w-4 h-4 text-[#8b7b6b]" />
        <span className="text-xs font-medium text-[#8b7b6b]">
          Secure checkout · SSL encrypted
        </span>
      </div>

      <div className="flex h-px w-full flex-none items-start bg-[#e8d5c4]/50 my-2" />

      <div className="flex w-full items-center justify-between text-xs font-medium text-[#8b7b6b]">
        <div className="flex items-center gap-1.5">
          <RefreshCw className="w-4 h-4 text-[#d4a574]" />
          <span>30-day returns</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Truck className="w-4 h-4 text-[#d4a574]" />
          <span>Free over $150</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Shield className="w-4 h-4 text-[#d4a574]" />
          <span>Secure</span>
        </div>
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-2 mt-2">
        {/* Payment Badges */}
        {["Visa", "Mastercard", "Amex", "PayPal"].map((provider) => (
          <div key={provider} className="flex items-center rounded bg-[#f5ede4] px-2 py-1">
            <span className="text-[10px] font-bold text-[#3d2b1f] uppercase tracking-wide">
              {provider}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
