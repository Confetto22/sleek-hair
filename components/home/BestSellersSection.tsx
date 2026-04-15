import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const bestSellers = [
  { id: 1, name: "Brazilian Body Wave", price: "$249" },
  { id: 2, name: "Silky Straight HD Lace", price: "$349" },
  { id: 3, name: "Deep Wave Frontal", price: "$289" },
  { id: 4, name: "Loose Curl Closure", price: "$189" },
];

export const BestSellersSection = () => {
  return (
    <section className="flex w-full flex-col items-center gap-12 px-4 py-12 md:px-16 md:py-20 mx-auto max-w-7xl">
      <div className="flex w-full items-center justify-between">
        <h2 className="font-sans text-3xl font-normal leading-9 text-[#3d2b1f] md:text-5xl md:font-bold md:leading-tight">
          Best Selling Wigs
        </h2>
        <Button
          variant="link"
          className="text-[#d4a574] hover:text-[#c4956a] px-0"
        >
          View All <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
      <div className="w-full grid grid-cols-1 gap-4  lg:grid-cols-4 md:gap-6 place-content-start place-items-start">
        {bestSellers.map((product) => (
          <div
            key={product.id}
            className="flex flex-col place-self-start items-start gap-4 max-w-md mx-auto w-full rounded-3xl bg-white p-4 shadow-sm"
          >
            <div className="relative aspect-square w-full flex-none rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gray-200" />
            </div>
            <span className="font-semibold text-[#3d2b1f] px-1 md:px-2 line-clamp-1">
              {product.name}
            </span>
            <span className="font-sans text-lg md:text-xl font-bold leading-6 text-[#d4a574] px-1 md:px-2">
              {product.price}
            </span>
            <Button className="h-9 px-4 w-full max-w-[90%] mx-auto flex-none rounded-full bg-[#f5ede4] text-[#3d2b1f] hover:bg-[#e8d5c4] shadow-none">
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};
