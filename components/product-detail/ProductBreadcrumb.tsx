import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const ProductBreadcrumb = ({
  category,
  productName,
}: {
  category: string;
  productName: string;
}) => {
  return (
    <div className="flex w-full items-center gap-2 text-sm text-[#8b7b6b]">
      <Link href="/" className="hover:text-[#3d2b1f] hover:underline transition-colors">
        Home
      </Link>
      <ChevronRight className="w-4 h-4 text-[#e8d5c4]" />
      <Link href="/products" className="hover:text-[#3d2b1f] hover:underline transition-colors">
        {category}
      </Link>
      <ChevronRight className="w-4 h-4 text-[#e8d5c4]" />
      <span className="font-semibold text-[#3d2b1f] truncate">
        {productName}
      </span>
    </div>
  );
};
