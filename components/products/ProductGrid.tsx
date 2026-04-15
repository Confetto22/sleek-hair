import React from "react";
import {
  SlidersHorizontal,
  ChevronDown,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ProductFilterContent } from "./ProductSidebar";
import { ProductCard, Product } from "./ProductCard";

const products: Product[] = [
  {
    id: "1",
    name: "Water Wave HD Lace Frontal",
    specs: '20" · HD Lace · 150%',
    price: 399.0,
    rating: 4.8,
    reviews: 142,
    badge: "New",
  },
  {
    id: "2",
    name: "Brazilian Body Wave Frontal",
    specs: '18" · HD Lace · 180%',
    price: 289.0,
    rating: 5.0,
    reviews: 128,
  },
  {
    id: "3",
    name: "Silky Straight HD Lace",
    specs: '20" · Frontal · 150%',
    price: 296.65,
    originalPrice: 349.0,
    rating: 4.6,
    reviews: 256,
    badge: "-15%",
  },
  {
    id: "4",
    name: "Deep Wave 5x5 Closure",
    specs: '16" · Closure · 150%',
    price: 259.0,
    rating: 4.7,
    reviews: 89,
  },
  {
    id: "5",
    name: "Kinky Straight Closure",
    specs: '16" · Closure · 150%',
    price: 189.0,
    rating: 4.4,
    reviews: 34,
  },
  {
    id: "6",
    name: "Loose Curl Frontal Wig",
    specs: '22" · HD Lace · 150%',
    price: 329.0,
    rating: 4.9,
    reviews: 67,
  },
  {
    id: "7",
    name: "Blonde Highlight Frontal",
    specs: '20" · HD Lace · 180%',
    price: 379.0,
    rating: 4.9,
    reviews: 93,
  },
  {
    id: "8",
    name: "Deep Wave Custom Unit",
    specs: '24" · Full Lace · 200%',
    price: 449.0,
    rating: 5.0,
    reviews: 178,
  },
];

export const ProductGrid = () => {
  return (
    <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start w-full">
      {/* Mobile Filters Toggle & Quick Selects */}
      <div className="flex w-full items-center gap-2 pb-3 overflow-x-auto md:hidden">
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="sm"
                className="rounded-full shadow-none border-[#e8d5c4]"
              />
            }
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filters
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-full max-w-xs overflow-y-auto pt-10 px-4"
          >
            <SheetTitle className="sr-only">Product Filters</SheetTitle>
            <div className="flex flex-col gap-4">
              <ProductFilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Top Bar: Count & Sort */}
      <div className="flex w-full items-center justify-between mb-6">
        <span className="text-sm text-[#8b7b6b]">24 results</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#8b7b6b] hidden md:inline-block">
            Sort by:
          </span>
          {/* Static Sort representation */}
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-[#e8d5c4] shadow-none h-8 font-normal"
          >
            Best Selling
            <ChevronDown className="w-4 h-4 ml-2 text-[#8b7b6b]" />
          </Button>
        </div>
      </div>

      {/* Grid */}
      <div className="w-full gap-5 items-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex w-full items-center justify-center gap-2 mt-12">
        <Button
          variant="outline"
          size="sm"
          className="rounded-full border-[#e8d5c4] shadow-none"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6b3a2a]">
          <span className="text-sm font-bold text-white">1</span>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full cursor-pointer hover:bg-[#f5ede4] text-[#3d2b1f]">
          <span className="text-sm">2</span>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full cursor-pointer hover:bg-[#f5ede4] text-[#3d2b1f]">
          <span className="text-sm">3</span>
        </div>
        <div className="flex h-9 w-9 items-center justify-center">
          <span className="text-sm text-[#8b7b6b]">...</span>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full cursor-pointer hover:bg-[#f5ede4] text-[#3d2b1f]">
          <span className="text-sm">8</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full border-[#e8d5c4] shadow-none"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};
