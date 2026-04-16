"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FILTERS = {
  texture: ["Straight", "Body Wave", "Deep Wave", "Curly", "Kinky Straight"],
  length: ['14"-16"', '18"-20"', '22"-24"', '26"+'],
  laceType: ["HD Lace", "Transparent", "Swiss Lace"],
  priceRange: ["Under $200", "$200 - $300", "$300 - $400", "$400+"],
};

type FilterKey = keyof typeof FILTERS;

interface CheckboxFilterProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckboxFilter = ({ label, checked, onChange }: CheckboxFilterProps) => (
  <label className="flex items-center gap-3 cursor-pointer group select-none">
    <div
      className={`flex h-4 w-4 flex-none items-center justify-center rounded border transition-colors ${
        checked
          ? "bg-[#6b3a2a] border-[#6b3a2a]"
          : "bg-white border-[#e8d5c4] group-hover:border-[#c4a882]"
      }`}
      onClick={() => onChange(!checked)}
    >
      {checked && (
        <svg
          className="h-2.5 w-2.5 text-white"
          fill="none"
          viewBox="0 0 12 12"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path d="M2 6l3 3 5-5" />
        </svg>
      )}
    </div>
    <span
      className={`text-sm transition-colors ${
        checked ? "text-[#3d2b1f] font-semibold" : "text-[#3d2b1f]"
      } group-hover:text-[#6b3a2a]`}
      onClick={() => onChange(!checked)}
    >
      {label}
    </span>
  </label>
);

export const CollectionSidebar = () => {
  const [selected, setSelected] = useState<Record<FilterKey, string[]>>({
    texture: [],
    length: [],
    laceType: [],
    priceRange: [],
  });

  const toggle = (group: FilterKey, value: string) => {
    setSelected((prev) => ({
      ...prev,
      [group]: prev[group].includes(value)
        ? prev[group].filter((v) => v !== value)
        : [...prev[group], value],
    }));
  };

  const clearAll = () => {
    setSelected({ texture: [], length: [], laceType: [], priceRange: [] });
  };

  const totalSelected = Object.values(selected).flat().length;

  return (
    <aside className="hidden lg:flex w-60 flex-none flex-col items-start gap-5 bg-white rounded-2xl p-4 shadow-[0px_2px_12px_-4px_#3d2b1f0f] border border-[#e8d5c4]/50 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto">
      {/* Header */}
      <div className="flex w-full items-center justify-between">
        <span className="font-semibold text-sm text-[#3d2b1f]">Filters</span>
        {totalSelected > 0 && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1 text-xs font-medium text-[#6b3a2a] hover:text-[#5a2f22] transition-colors"
          >
            <X className="h-3 w-3" />
            Clear All
          </button>
        )}
      </div>

      {/* Texture */}
      <Accordion
        multiple={true}
        defaultValue={["texture"]}
        className="w-full gap-0"
      >
        <AccordionItem value="texture" className="border-none">
          <AccordionTrigger className="flex w-full items-center gap-2 rounded-xl bg-[#faf5ef] px-4 py-3 hover:no-underline hover:bg-[#f5ede4] transition-colors">
            <span className="grow text-sm font-semibold text-[#3d2b1f]">
              Texture
              {selected.texture.length > 0 && (
                <span className="ml-2 text-xs font-medium text-[#6b3a2a]">
                  ({selected.texture.length})
                </span>
              )}
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-5 py-3">
            <div className="flex flex-col items-start gap-3">
              {FILTERS.texture.map((item) => (
                <CheckboxFilter
                  key={item}
                  label={item}
                  checked={selected.texture.includes(item)}
                  onChange={() => toggle("texture", item)}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Length */}
      <Accordion
        multiple={false}
        defaultValue={["length"]}
        className="w-full gap-0"
      >
        <AccordionItem value="length" className="border-none">
          <AccordionTrigger className="flex w-full items-center gap-2 rounded-xl bg-[#faf5ef] px-4 py-3 hover:no-underline hover:bg-[#f5ede4] transition-colors">
            <span className="grow text-sm font-semibold text-[#3d2b1f]">
              Length
              {selected.length.length > 0 && (
                <span className="ml-2 text-xs font-medium text-[#6b3a2a]">
                  ({selected.length.length})
                </span>
              )}
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-5 py-3">
            <div className="flex flex-col items-start gap-3">
              {FILTERS.length.map((item) => (
                <CheckboxFilter
                  key={item}
                  label={item}
                  checked={selected.length.includes(item)}
                  onChange={() => toggle("length", item)}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Lace Type */}
      <Accordion
        multiple={false}
        className="w-full gap-0"
      >
        <AccordionItem value="laceType" className="border-none">
          <AccordionTrigger className="flex w-full items-center gap-2 rounded-xl bg-[#faf5ef] px-4 py-3 hover:no-underline hover:bg-[#f5ede4] transition-colors">
            <span className="grow text-sm font-semibold text-[#3d2b1f]">
              Lace Type
              {selected.laceType.length > 0 && (
                <span className="ml-2 text-xs font-medium text-[#6b3a2a]">
                  ({selected.laceType.length})
                </span>
              )}
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-5 py-3">
            <div className="flex flex-col items-start gap-3">
              {FILTERS.laceType.map((item) => (
                <CheckboxFilter
                  key={item}
                  label={item}
                  checked={selected.laceType.includes(item)}
                  onChange={() => toggle("laceType", item)}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Price Range */}
      <Accordion
        multiple={false}
        className="w-full gap-0"
      >
        <AccordionItem value="priceRange" className="border-none">
          <AccordionTrigger className="flex w-full items-center gap-2 rounded-xl bg-[#faf5ef] px-4 py-3 hover:no-underline hover:bg-[#f5ede4] transition-colors">
            <span className="grow text-sm font-semibold text-[#3d2b1f]">
              Price Range
              {selected.priceRange.length > 0 && (
                <span className="ml-2 text-xs font-medium text-[#6b3a2a]">
                  ({selected.priceRange.length})
                </span>
              )}
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-5 py-3">
            <div className="flex flex-col items-start gap-3">
              {FILTERS.priceRange.map((item) => (
                <CheckboxFilter
                  key={item}
                  label={item}
                  checked={selected.priceRange.includes(item)}
                  onChange={() => toggle("priceRange", item)}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {totalSelected > 0 && (
        <button
          onClick={clearAll}
          className="flex items-center gap-1.5 text-sm font-medium text-[#6b3a2a] hover:text-[#5a2f22] transition-colors"
        >
          <X className="h-3.5 w-3.5" />
          Clear All Filters
        </button>
      )}
    </aside>
  );
};
