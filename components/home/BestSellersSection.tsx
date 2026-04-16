import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard, Product } from "@/components/products/ProductCard";

const bestSellers: Product[] = [
  { 
    id: "1", 
    name: "Brazilian Body Wave", 
    price: 249,
    specs: "18\" · 180% Density · HD Lace",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller"
  },
  { 
    id: "2", 
    name: "Silky Straight HD Lace", 
    price: 349,
    originalPrice: 399,
    specs: "20\" · 150% Density · HD Lace",
    rating: 4.9,
    reviews: 86
  },
  { 
    id: "3", 
    name: "Deep Wave Frontal", 
    price: 289,
    specs: "16\" · 150% Density · Frontal",
    rating: 4.7,
    reviews: 210
  },
  { 
    id: "4", 
    name: "Loose Curl Closure", 
    price: 189,
    originalPrice: 220,
    specs: "14\" · 150% Density · Closure",
    rating: 4.6,
    reviews: 64
  },
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
      <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-4 md:gap-6 place-content-start place-items-start">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
