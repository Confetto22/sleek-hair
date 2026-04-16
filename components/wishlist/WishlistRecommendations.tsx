import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const recommendations = [
  {
    id: 1,
    name: "Blonde Highlight Frontal",
    price: 319.0,
    image:
      "https://images.unsplash.com/photo-1611042553365-9b101441c135?w=300&q=80",
  },
  {
    id: 2,
    name: "HD Lace Wig Cap",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&q=80",
  },
  {
    id: 3,
    name: "Premium Wig Care Kit",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&q=80",
  },
  {
    id: 4,
    name: "Satin Wig Bonnet",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=300&q=80",
  },
];

export const WishlistRecommendations = () => {
  return (
    <div className="flex  w-full max-w-7xl flex-col items-start px-4 py-8 md:px-16 md:py-12 mx-auto">
      <div className="flex h-px w-full flex-none items-start bg-[#e8d5c4] mb-10" />
      <div className="flex w-full items-center justify-between mb-6">
        <h2 className="font-sans text-2xl font-semibold leading-8 text-[#3d2b1f]">
          You May Also Love
        </h2>
        <button className="flex items-center text-sm font-semibold text-[#c4956a] hover:text-[#a0744d] transition-colors">
          View All
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      <div className="flex w-full items-start gap-4 pb-2 overflow-x-auto no-scrollbar">
        {recommendations.map((item) => (
          <div
            key={item.id}
            className="flex  flex-none flex-col items-start overflow-hidden rounded-2xl bg-white shadow-sm border border-[#e8d5c4]/50 hover:shadow-md transition-shadow max-w-[300px] w-full"
          >
            <img
              className="aspect-5/4 w-full flex-none object-cover"
              src={item.image}
              alt={item.name}
            />
            <div className="flex w-full flex-col items-start gap-2 px-4 py-4">
              <span className="line-clamp-1 text-sm font-bold text-[#3d2b1f]">
                {item.name}
              </span>
              <span className="text-sm font-medium text-[#d4a574]">
                ${item.price.toFixed(2)}
              </span>
              <Button
                className="h-8 w-full flex-none rounded-full border-[#e8d5c4] text-[#3d2b1f] shadow-none mt-2"
                variant="outline"
                size="sm"
              >
                Quick Add
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
