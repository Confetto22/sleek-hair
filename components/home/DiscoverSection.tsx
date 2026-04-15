import React from "react";
import { Sparkles, Gift } from "lucide-react";

export const DiscoverSection = () => {
  return (
    <section className="flex w-full flex-col flex-nowrap items-center justify-center gap-8 px-4 py-12 md:flex-row md:flex-wrap md:gap-20 md:px-16 md:py-20 mx-auto max-w-7xl">
      <div className="flex min-w-72 grow shrink-0 basis-0 items-center justify-center">
        <div className="flex items-start rounded-3xl border-b-4 border-l-4 border-solid border-[#d4a574] px-2 py-2">
          <div className="relative h-80 w-full min-w-48 grow shrink-0 basis-0 md:h-96 md:w-96 md:flex-none rounded-3xl overflow-hidden">
            <div className="w-full h-full bg-gray-200 aspect-7/8" />
          </div>
        </div>
      </div>
      <div className="flex min-w-80 grow shrink-0 basis-0 flex-col items-start gap-8">
        <h2 className="font-sans text-3xl font-normal leading-9 text-[#3d2b1f] md:text-5xl md:font-bold md:leading-tight">
          Discover the Art of Natural Hair
        </h2>
        <p className="font-sans text-sm font-normal leading-relaxed text-[#6b5b4f]">
          We believe that true beauty comes from within, and our mission is to
          help you discover and enhance your natural radiance. Whether
          you&apos;re looking for the perfect wig for everyday wear, a special
          occasion, or a complete transformation, our collection offers
          unmatched quality and style.
        </p>
        <div className="flex w-full flex-col md:flex-row flex-wrap gap-4 items-stretch">
          <div className="flex min-w-48 grow shrink-0 basis-0 flex-col items-start gap-3 rounded-2xl bg-[#f5ede4] px-6 py-6">
            <Sparkles className="w-7 h-7 text-[#d4a574]" />
            <span className="font-semibold text-[#3d2b1f]">
              Premium Quality
            </span>
            <span className="text-xs text-[#8b7b6b]">
              100% virgin human hair, hand-selected for softness and durability
            </span>
          </div>
          <div className="flex min-w-48 grow shrink-0 basis-0 flex-col items-start gap-3 rounded-2xl bg-[#f5ede4] px-6 py-6">
            <Gift className="w-7 h-7 text-[#d4a574]" />
            <span className="font-semibold text-[#3d2b1f]">
              Natural Elegance
            </span>
            <span className="text-xs text-[#8b7b6b]">
              Undetectable hairline with HD lace for a seamless, natural look
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
