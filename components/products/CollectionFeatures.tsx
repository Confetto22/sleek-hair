import React from "react";
import { Truck, RefreshCw, Lock, Award } from "lucide-react";

export const CollectionFeatures = () => {
  return (
    <div className="flex w-full items-center justify-center bg-[#f5ede4] px-4 py-6 md:px-16 md:py-10 mt-auto">
      <div className="flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 md:flex-row flex-col">
        <div className="flex items-center gap-3">
          <Truck className="w-5 h-5 text-[#d4a574]" />
          <span className="text-sm md:text-base font-normal text-[#3d2b1f]">
            Free Shipping Over $150
          </span>
        </div>
        <div className="flex items-center gap-3">
          <RefreshCw className="w-5 h-5 text-[#d4a574]" />
          <span className="text-sm md:text-base font-normal text-[#3d2b1f]">
            30-Day Returns
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Lock className="w-5 h-5 text-[#d4a574]" />
          <span className="text-sm md:text-base font-normal text-[#3d2b1f]">
            Secure Checkout
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Award className="w-5 h-5 text-[#d4a574]" />
          <span className="text-sm md:text-base font-normal text-[#3d2b1f]">
            100% Human Hair
          </span>
        </div>
      </div>
    </div>
  );
};
