"use client";

import React, { useState } from "react";
import { WishlistHeader } from "@/components/wishlist/WishlistHeader";
import { WishlistEmptyState } from "@/components/wishlist/WishlistEmptyState";
import { WishlistRecommendations } from "@/components/wishlist/WishlistRecommendations";
import { WishlistBanner } from "@/components/wishlist/WishlistBanner";
import { ProductCard, Product } from "@/components/products/ProductCard";

// Mock saved items
const savedWigs: Product[] = [
  // {
  //   id: "1",
  //   name: "Brazilian Body Wave HD Lace Frontal Wig",
  //   specs: '18" · HD Lace · Body Wave',
  //   price: 289.0,
  //   rating: 4.8,
  //   reviews: 128,
  // },
  // {
  //   id: "3",
  //   name: "Silky Straight HD Lace Frontal Wig",
  //   specs: '20" · HD Lace · Straight',
  //   price: 279.2,
  //   originalPrice: 349.0,
  //   rating: 4.6,
  //   reviews: 256,
  //   badge: "-20%",
  // },
  // {
  //   id: "4",
  //   name: "Deep Wave 5x5 Closure Wig",
  //   specs: '16" · Closure · Deep Wave',
  //   price: 259.0,
  //   rating: 4.7,
  //   reviews: 89,
  // },
  // {
  //   id: "5",
  //   name: "Water Wave HD Lace Custom Unit",
  //   specs: '20" · HD Lace · Water Wave',
  //   price: 399.0,
  //   rating: 4.8,
  //   reviews: 142,
  //   badge: "Back in Stock",
  // },
  // {
  //   id: "6",
  //   name: "Kinky Straight Closure Wig",
  //   specs: '14" · Closure · Kinky Straight',
  //   price: 189.0,
  //   rating: 4.4,
  //   reviews: 34,
  // },
];

export default function WishlistPage() {
  // Toggle this true/false manually right now to preview states
  const hasItems = savedWigs.length > 0;
  // const [hasItems, setHasItems] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-[#faf5ef] font-['Inter']">
      <main className="flex flex-col w-full items-center mb-8">
        {hasItems ? (
          <>
            <WishlistHeader itemCount={savedWigs.length} />
            <div className="w-full max-w-7xl px-4 md:px-16 pb-12 mx-auto gap-5 items-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {savedWigs.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  actionLabel="Move to Cart"
                />
              ))}
            </div>
          </>
        ) : (
          <WishlistEmptyState />
        )}
        <WishlistRecommendations />
        <WishlistBanner />
      </main>
    </div>
  );
}
