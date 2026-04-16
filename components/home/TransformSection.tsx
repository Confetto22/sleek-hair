import React from "react";
import { Sparkles, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const TransformSection = () => {
  return (
    <section className=" w-full flex-col flex-nowrap items-start justify-start gap-8 px-4 py-12  md:gap-20 md:px-16 md:py-20 mx-auto max-w-7xl grid lg:grid-cols-5">
      <div className="flex max-w-xl  w-full flex-col items-start gap-8 lg:col-span-3">
        <Badge
          variant="secondary"
          className="bg-[#f5ede4] text-[#d4a574] hover:bg-[#f5ede4] px-3 py-1 gap-1"
        >
          <Sparkles className="w-4 h-4" />
          New Collection
        </Badge>
        <h2 className="font-sans text-3xl font-normal leading-9 text-[#3d2b1f] md:text-5xl md:font-bold md:leading-tight">
          Transform Your Look in Seconds
        </h2>
        <p className="font-sans text-sm font-normal leading-relaxed text-[#6b5b4f]">
          Our pre-styled wigs are ready to wear right out of the box. From sleek
          bobs to flowing curls, each piece is professionally cut and styled so
          you can step out with confidence from the moment you put it on.
        </p>
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-[#d4a574]" />
            <span className="text-sm text-[#3d2b1f]">
              Pre-plucked natural hairline
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-[#d4a574]" />
            <span className="text-sm text-[#3d2b1f]">
              Bleached knots for seamless blending
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-[#d4a574]" />
            <span className="text-sm text-[#3d2b1f]">
              Adjustable cap fits all head sizes
            </span>
          </div>
        </div>
        <Link
          href={"/products"}
          className="rounded-full bg-[#D4A574] hover:bg-[#C4956A] text-white px-8 py-3 text-lg"
        >
          View Collection
        </Link>
      </div>
      <div className="flex min-w-72 max-w-md grow shrink-0 basis-0 items-center justify-center relative lg:col-span-2">
        <div className="relative  w-full min-w-0 grow shrink-0 basis-0 aspect-7/8 lg:aspect-9/12 md:flex-none rounded-3xl overflow-hidden">
          <div className="w-full h-full bg-gray-200" />
        </div>
      </div>
    </section>
  );
};
