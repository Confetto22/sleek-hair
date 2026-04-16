import React from "react";
import { Truck, Gift } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const CartShippingBanner = () => {
  // Hardcoded values for demonstration
  const progressValue = 87;
  const amountAway = 20;

  return (
    <div className="flex w-full items-center justify-center bg-[#f5ede4] px-4 py-4 md:px-8 lg:px-16">
      <div className="flex w-full max-w-7xl flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <Truck className="w-4 h-4 md:w-5 md:h-5 text-[#d4a574]" />
          <span className="text-sm md:text-base font-normal text-[#3d2b1f]">
            You're ${amountAway.toFixed(2)} away from free shipping!
          </span>
          <Gift className="w-4 h-4 md:w-5 md:h-5 text-[#d4a574]" />
        </div>
        <div className="flex w-full max-w-md flex-col items-center gap-1.5">
          {/* Note: In a real implementation this would tie into standard shadcn progress classNames */}
          <div className="relative w-full h-2 rounded-full bg-[#e8d5c4] overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#6b3a2a] transition-all"
              style={{ width: `${progressValue}%` }}
            />
          </div>
          <div className="flex w-full items-center justify-between text-xs text-[#8b7b6b] font-medium">
            <span>$130.00 of $150.00</span>
            <span>Free Shipping!</span>
          </div>
        </div>
      </div>
    </div>
  );
};
