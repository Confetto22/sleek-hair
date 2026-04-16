import React from "react";
import { ProductSidebar } from "./ProductSidebar";
import { ProductGrid } from "./ProductGrid";

export const ProductLayout = () => {
  return (
    <div className="flex w-full max-w-7xl items-start gap-8 px-4 pb-16 md:px-16 md:pb-24 mx-auto md:flex-row flex-col pt-12">
      <ProductSidebar />
      <ProductGrid />
    </div>
  );
};
