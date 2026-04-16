"use client";

import React from "react";
import { Truck, RefreshCw, Sparkles, Check } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const ProductAccordions = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <Accordion multiple className="w-full gap-4 flex flex-col">
        {/* Delivery Information */}
        <AccordionItem value="delivery" className="border-none bg-white rounded-2xl shadow-sm">
          <AccordionTrigger className="px-6 py-5 hover:no-underline rounded-2xl focus-visible:ring-0">
            <div className="flex items-center gap-3 text-[#3d2b1f]">
              <Truck className="w-5 h-5 text-[#d4a574]" />
              <span className="text-base font-bold text-[#3d2b1f]">
                Delivery Information
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-5 pt-0">
            <div className="flex w-full flex-col gap-3">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#d4a574]/80" />
                <span className="text-sm text-[#6b5b4f]">
                  Free standard shipping on all orders over $200
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#d4a574]/80" />
                <span className="text-sm text-[#6b5b4f]">
                  Express delivery: 2-3 business days ($15)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#d4a574]/80" />
                <span className="text-sm text-[#6b5b4f]">
                  International shipping: 5-10 business days
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#d4a574]/80" />
                <span className="text-sm text-[#6b5b4f]">
                  Full tracking provided with every order
                </span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Returns & Exchanges */}
        <AccordionItem value="returns" className="border-none bg-white rounded-2xl shadow-sm">
          <AccordionTrigger className="px-6 py-5 hover:no-underline rounded-2xl focus-visible:ring-0">
            <div className="flex items-center gap-3 text-[#3d2b1f]">
              <RefreshCw className="w-5 h-5 text-[#d4a574]" />
              <span className="text-base font-bold text-[#3d2b1f]">
                Returns & Exchanges
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-5 pt-0">
            <p className="text-sm text-[#6b5b4f] leading-relaxed">
              We offer a 30-day satisfaction guarantee. Unworn wigs in original
              packaging can be returned for a full refund or exchanged for a
              different style. Custom-colored units are final sale. Contact our team
              for hassle-free returns.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Care Instructions */}
        <AccordionItem value="care" className="border-none bg-white rounded-2xl shadow-sm">
          <AccordionTrigger className="px-6 py-5 hover:no-underline rounded-2xl focus-visible:ring-0">
            <div className="flex items-center gap-3 text-[#3d2b1f]">
              <Sparkles className="w-5 h-5 text-[#d4a574]" />
              <span className="text-base font-bold text-[#3d2b1f]">
                Care Instructions
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-5 pt-0">
            <div className="flex w-full flex-col gap-3">
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#d4a574]">1.</span>
                <span className="text-sm text-[#6b5b4f]">
                  Wash gently with sulfate-free shampoo every 7-10 wears
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#d4a574]">2.</span>
                <span className="text-sm text-[#6b5b4f]">
                  Air dry on a wig stand to maintain shape and volume
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#d4a574]">3.</span>
                <span className="text-sm text-[#6b5b4f]">
                  Use heat protectant before styling with hot tools
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#d4a574]">4.</span>
                <span className="text-sm text-[#6b5b4f]">
                  Store on a mannequin head or in a silk bag when not in use
                </span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
