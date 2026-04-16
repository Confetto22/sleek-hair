import React from "react";
import { ProductSidebar } from "./ProductSidebar";
import { CollectionSidebar } from "./CollectionSidebar";
import { ProductGrid } from "./ProductGrid";

export const ProductLayout = ({ sidebarType = 'default' }: { sidebarType?: 'default' | 'collection' }) => {
  return (
    <div className="flex w-full max-w-[1400px] items-start gap-8 px-4 pb-16 md:px-8 xl:px-16 md:pb-24 mx-auto lg:flex-row flex-col pt-12">
      {sidebarType === 'collection' ? <CollectionSidebar /> : <ProductSidebar />}
      <ProductGrid />
    </div>
  );
};
