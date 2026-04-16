import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard, type Product } from "@/components/products/ProductCard";

const RELATED_PRODUCTS: Product[] = [
  {
    id: "r1",
    name: "Brazilian Body Wave",
    specs: '18" · HD Lace · 180%',
    price: 249.00,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "r2",
    name: "Deep Wave Frontal",
    specs: '20" · HD Lace · 150%',
    price: 289.00,
    rating: 4.9,
    reviews: 89,
    badge: "New",
  },
  {
    id: "r3",
    name: "Loose Curl Closure",
    specs: '16" · Closure · 150%',
    price: 189.00,
    rating: 4.7,
    reviews: 211,
  },
  {
    id: "r4",
    name: "Custom Blonde Unit",
    specs: '22" · HD Lace · 200%',
    price: 399.00,
    originalPrice: 450.00,
    rating: 5.0,
    reviews: 45,
    badge: "-10%",
  },
];

export const RelatedProducts = () => {
  return (
    <div className="flex w-full flex-col items-start gap-10">
      <div className="flex w-full flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-3xl md:text-4xl text-[#3d2b1f] font-normal leading-tight">
          You May Also Like
        </h2>
        <Button variant="link" className="text-[#d4a574] hover:text-[#c4956a] group p-0 hidden md:flex items-center">
          View All
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {RELATED_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Mobile only view-all button */}
      <Button variant="outline" className="w-full md:hidden rounded-full border-[#d4a574] text-[#d4a574] mt-4">
        View All
      </Button>
    </div>
  );
};
