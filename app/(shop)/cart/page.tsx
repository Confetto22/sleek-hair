"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CartShippingBanner } from "@/components/cart/CartShippingBanner";
import { CartHeader } from "@/components/cart/CartHeader";
import { CartItem, CartItemCard } from "@/components/cart/CartItemCard";
import { CartSummary } from "@/components/cart/CartSummary";
import { CartEmptyState } from "@/components/cart/CartEmptyState";
import { CartRecommendations } from "@/components/cart/CartRecommendations";
import { Lock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const initialCartItems: CartItem[] = [
  {
    id: "1",
    name: "Brazilian Body Wave HD Lace Frontal Wig",
    specs: 'Body Wave · HD Lace · 18" · 180% Density',
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80",
    price: 289.0,
    quantity: 1,
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Silky Straight HD Lace Frontal Wig",
    specs: 'Straight · HD Lace · 20" · 150% Density',
    image:
      "https://images.unsplash.com/photo-1595959183082-7b570b7e1e6b?w=300&q=80",
    price: 349.0,
    quantity: 1,
  },
  {
    id: "3",
    name: "Deep Wave 5x5 Closure Wig",
    specs: 'Deep Wave · Closure · 16" · 150% Density',
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&q=80",
    price: 259.0,
    quantity: 2,
  },
];

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialCartItems);

  // Note: For previewing the empty state quickly, one can swap this to initially empty:
  // const [items, setItems] = useState<CartItem[]>([]);

  const handleUpdateQuantity = (id: string, delta: number) => {
    setItems((currentItems) =>
      currentItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }),
    );
  };

  const handleRemoveItem = (id: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  // Arbitrary tax fixed at ~8% mock for viewing
  const tax = subtotal * 0.08;
  const hasItems = items.length > 0;

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-[#faf5ef] font-sans">
      <main className="flex flex-col w-full items-center mb-8">
        {hasItems ? (
          <>
            <CartHeader
              itemCount={items.reduce((acc, i) => acc + i.quantity, 0)}
            />

            <div className="flex w-full max-w-7xl flex-col lg:flex-row items-start gap-6 lg:gap-8 px-4 md:px-8 lg:px-16 pb-16 mx-auto">
              {/* Left Column: Cart Items */}
              <div className="flex min-w-0 grow flex-col items-start gap-4 w-full">
                {items.map((item) => (
                  <CartItemCard
                    key={item.id}
                    item={item}
                    updateQuantity={handleUpdateQuantity}
                    removeItem={handleRemoveItem}
                  />
                ))}

                {/* Mobile/Tablet Proceed to Checkout Button */}
                <div className="flex w-full flex-col items-center gap-3 lg:hidden mt-4">
                  <Link href="/checkout" className="w-full">
                    <Button className="h-14 w-full flex-none rounded-full bg-[#6B3A2A] hover:bg-[#5a2f22] text-white shadow-none">
                      <Lock className="w-5 h-5 mr-2" />
                      Proceed to Checkout · ${(subtotal + tax).toFixed(2)}
                    </Button>
                  </Link>
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-[#8b7b6b]" />
                    <span className="text-xs font-medium text-[#8b7b6b]">
                      Secure checkout · SSL encrypted
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Order Summary (Sticky) */}
              <div className="w-full lg:w-auto">
                <CartSummary subtotal={subtotal} tax={tax} />
              </div>
            </div>
          </>
        ) : (
          <CartEmptyState />
        )}

        <CartRecommendations />
      </main>
    </div>
  );
}
