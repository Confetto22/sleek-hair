import React from "react";

export const WishlistBanner = () => {
  return (
    <div className="flex w-full max-w-7xl flex-col items-center gap-3 px-4 pt-4 pb-10 md:px-16 md:pb-16 mx-auto">
      <h3 className="max-w-lg font-sans text-lg font-normal leading-7 text-[#3d2b1f] text-center italic">
        "Every wig in your collection tells a story of confidence."
      </h3>
      <span className="text-xs font-bold text-[#d4a574] uppercase tracking-widest mt-2">
        — LUXE CROWN
      </span>
    </div>
  );
};
