import React from "react";
import { SearchHero } from "@/components/products/SearchHero";
import { ProductLayout } from "@/components/products/ProductLayout";

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-[#faf5ef] font-['Inter']">
      <main className="flex flex-col w-full items-center">
        <SearchHero />
        <ProductLayout />
      </main>
    </div>
  );
}
