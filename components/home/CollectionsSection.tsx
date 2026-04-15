import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const collections = [
  { id: 1, name: "Human Hair" },
  { id: 2, name: "Frontal Wigs" },
  { id: 3, name: "Closure Wigs" },
  { id: 4, name: "Custom Units" },
];

export const CollectionsSection = () => {
  return (
    <section className="flex w-full flex-col items-center gap-12 px-4 py-12 md:px-16 md:py-20 mx-auto max-w-7xl">
      <h2 className="font-sans text-3xl font-normal text-center text-[#3d2b1f] md:text-5xl md:font-bold md:leading-tight">
        Shop by Collection
      </h2>
      <div className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6 items-start">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="flex flex-col items-center gap-4 max-w-md mx-auto w-full rounded-3xl bg-white p-4   shadow-sm"
          >
            <div className="relative aspect-square w-full  flex-none rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gray-200" />
            </div>
            <h3 className="font-sans text-lg font-bold leading-1 text-[#3d2b1f] text-center">
              {collection.name}
            </h3>
            <Button
              variant="link"
              className="text-[#d4a574]  hover:text-[#c4956a] px-0"
            >
              Explore <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};
