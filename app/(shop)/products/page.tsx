import React from "react";
import { CollectionHero } from "@/components/products/CollectionHero";
import { ProductLayout } from "@/components/products/ProductLayout";
import { CollectionFeatures } from "@/components/products/CollectionFeatures";

export default function CollectionPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-[#faf5ef] font-['Inter']">
      <main className="flex flex-col w-full items-center">
        <CollectionHero />
        <ProductLayout />
      </main>
      <CollectionFeatures />
    </div>
  );
}
