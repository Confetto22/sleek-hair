import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// Simple custom checkbox mimicking Subframe's checkbox API
const Checkbox = ({
  label,
  checked,
  onCheckedChange,
}: {
  label: string;
  checked?: boolean;
  onCheckedChange?: (c: boolean) => void;
}) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <div
      className={`flex w-5 h-5 items-center justify-center rounded border transition-colors ${checked ? "bg-[#6b3a2a] border-[#6b3a2a]" : "border-[#e8d5c4] bg-white group-hover:border-[#d4a574]"}`}
    >
      {checked && (
        <svg
          className="w-3.5 h-3.5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </div>
    <span className="text-sm font-medium text-[#6b5b4f] group-hover:text-[#3d2b1f] transition-colors">
      {label}
    </span>
  </label>
);

export const ProductFilterContent = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between pb-2">
        <span className="text-lg font-bold text-[#3d2b1f]">Filters</span>
      </div>

      <Accordion
        className="w-full space-y-2"
        multiple
        defaultValue={["texture", "length", "lace-type", "price-range"]}
      >
        {/* Texture */}
        <AccordionItem value="texture" className="border-none">
          <AccordionTrigger className="w-full text-left font-bold text-[#3d2b1f] hover:no-underline py-2">
            Texture
          </AccordionTrigger>
          <AccordionContent className="flex flex-col items-start gap-3 pb-4 pt-2">
            <Checkbox label="Straight" checked={false} />
            <Checkbox label="Body Wave" checked={false} />
            <Checkbox label="Deep Wave" checked={false} />
            <Checkbox label="Curly" checked={false} />
            <Checkbox label="Kinky Straight" checked={false} />
          </AccordionContent>
        </AccordionItem>

        {/* Length */}
        <AccordionItem value="length" className="border-none">
          <AccordionTrigger className="w-full text-left font-bold text-[#3d2b1f] hover:no-underline py-2">
            Length
          </AccordionTrigger>
          <AccordionContent className="flex flex-col items-start gap-3 pb-4 pt-2">
            <Checkbox label='14"-16"' checked={false} />
            <Checkbox label='18"-20"' checked={false} />
            <Checkbox label='22"-24"' checked={false} />
            <Checkbox label='26"+' checked={false} />
          </AccordionContent>
        </AccordionItem>

        {/* Lace Type */}
        <AccordionItem value="lace-type" className="border-none">
          <AccordionTrigger className="w-full text-left font-bold text-[#3d2b1f] hover:no-underline py-2">
            Lace Type
          </AccordionTrigger>
          <AccordionContent className="flex flex-col items-start gap-3 pb-4 pt-2">
            <Checkbox label="HD Lace" checked={false} />
            <Checkbox label="Transparent" checked={false} />
            <Checkbox label="Swiss Lace" checked={false} />
          </AccordionContent>
        </AccordionItem>

        {/* Price Range */}
        <AccordionItem value="price-range" className="border-none">
          <AccordionTrigger className="w-full text-left font-bold text-[#3d2b1f] hover:no-underline py-2">
            Price Range
          </AccordionTrigger>
          <AccordionContent className="flex flex-col items-start gap-3 pb-4 pt-2">
            <Checkbox label="Under $200" checked={false} />
            <Checkbox label="$200 - $300" checked={false} />
            <Checkbox label="$300 - $400" checked={false} />
            <Checkbox label="$400+" checked={false} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button
        variant="outline"
        className="w-full rounded-2xl border-[#d4a574] text-[#d4a574] hover:bg-[#f5ede4] hover:text-[#c4956a] h-12 shadow-none mt-4"
      >
        <X className="w-4 h-4 mr-2" />
        Clear All Filters
      </Button>
    </>
  );
};

export const ProductSidebar = () => {
  return (
    <div className="w-72 flex-none flex-col items-start gap-4 sticky top-24 self-start hidden md:flex bg-white p-6 rounded-2xl shadow-sm border border-[#e8d5c4]/50">
      <ProductFilterContent />
    </div>
  );
};
