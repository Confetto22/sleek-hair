import React from "react";
import { X, Minus, Plus } from "lucide-react";

export interface CartItem {
  id: string;
  name: string;
  specs: string;
  image: string;
  price: number;
  quantity: number;
  badge?: string;
}

export const CartItemCard = ({
  item,
  updateQuantity,
  removeItem,
}: {
  item: CartItem;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
}) => {
  return (
    <div className="flex w-full items-start gap-3 md:gap-5 rounded-[20px] bg-white px-4 py-4 md:px-6 md:py-6 shadow-[0px_2px_12px_-4px_#3d2b1f0f] flex-row relative">
      <img
        src={item.image}
        alt={item.name}
        className="h-24 w-24 md:h-36 md:w-36 flex-none rounded-xl object-cover"
      />

      <div className="flex min-w-0 grow flex-col items-start gap-1.5 md:gap-3 w-full">
        <div className="flex w-full items-start justify-between">
          <span className="font-bold text-sm md:text-base text-[#3d2b1f] line-clamp-2 leading-snug">
            {item.name}
          </span>
          <button 
            onClick={() => removeItem(item.id)}
            className="ml-2 flex-none text-[#8b7b6b] hover:text-[#3d2b1f] transition-colors"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        <span className="text-xs text-[#8b7b6b] line-clamp-1">{item.specs}</span>

        {item.badge && (
          <div className="flex items-center rounded-full bg-[#6b3a2a1a] px-2 py-0.5 mt-0.5">
            <span className="text-[10px] font-bold text-[#6b3a2a] uppercase tracking-wide">
              {item.badge}
            </span>
          </div>
        )}

        <div className="flex w-full items-center justify-between flex-row mt-auto pt-2">
          {/* Quantity Selector */}
          <div className="flex items-center rounded-full bg-[#f5ede4]">
            <button
              onClick={() => updateQuantity(item.id, -1)}
              className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-[#8b7b6b] hover:text-[#3d2b1f] transition-colors"
            >
              <Minus className="w-3 h-3 md:w-4 md:h-4" />
            </button>
            <span className="text-xs md:text-sm font-bold text-[#3d2b1f] px-2 md:px-3 min-w-[1.5rem] md:min-w-[2rem] text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, 1)}
              className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-[#8b7b6b] hover:text-[#3d2b1f] transition-colors"
            >
              <Plus className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>

          <div className="flex flex-col items-end gap-0.5">
            <span className="font-sans text-base md:text-lg font-semibold text-[#3d2b1f]">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
            {item.quantity > 1 && (
              <span className="text-[10px] md:text-xs text-[#8b7b6b]">
                ${item.price.toFixed(2)} each
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
