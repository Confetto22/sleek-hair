"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const FilterPill = ({
  label,
  selected = false,
  onClick,
}: {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center rounded-full border px-4 py-2 cursor-pointer transition-colors ${
        selected
          ? "border-[#6b3a2a] bg-[#6b3a2a] text-white"
          : "border-[#e8d5c4] bg-transparent text-[#3d2b1f] hover:border-[#d4a574]"
      }`}
    >
      <span className="text-xs font-bold">{label}</span>
    </button>
  );
};

export const ProductFilterContent = () => {
  // Mock state logic to show interactive pill toggles
  const [selectedTextures, setSelectedTextures] = useState<string[]>([
    "Straight",
  ]);
  const [selectedLaces, setSelectedLaces] = useState<string[]>([
    "HD Lace Frontal",
  ]);
  const [selectedLengths, setSelectedLengths] = useState<string[]>([
    '16"',
    '20"',
  ]);
  const [selectedDensities, setSelectedDensities] = useState<string[]>([
    "150%",
  ]);

  const toggleSelection = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    current: string[],
    value: string,
  ) => {
    if (current.includes(value)) {
      setter(current.filter((item) => item !== value));
    } else {
      setter([...current, value]);
    }
  };

  const handleClear = () => {
    setSelectedTextures([]);
    setSelectedLaces([]);
    setSelectedLengths([]);
    setSelectedDensities([]);
  };

  return (
    <>
      <div className="flex w-full items-center justify-between pb-2">
        <span className="text-lg font-bold text-[#3d2b1f]">Filters</span>
        <button
          onClick={handleClear}
          className="text-sm font-medium text-[#c4956a] hover:text-[#a0744d] transition-colors"
        >
          Clear All
        </button>
      </div>

      <div className="flex h-px w-full flex-none items-start bg-[#e8d5c4] my-2" />

      {/* Texture */}
      <div className="flex w-full flex-col items-start gap-4">
        <span className="text-sm font-bold text-[#3d2b1f]">Texture</span>
        <div className="flex flex-wrap items-start gap-2">
          {[
            "Straight",
            "Body Wave",
            "Deep Wave",
            "Loose Curl",
            "Kinky Straight",
            "Water Wave",
            "Kinky Curly",
          ].map((t) => (
            <FilterPill
              key={t}
              label={t}
              selected={selectedTextures.includes(t)}
              onClick={() =>
                toggleSelection(setSelectedTextures, selectedTextures, t)
              }
            />
          ))}
        </div>
      </div>

      <div className="flex h-px w-full flex-none items-start bg-[#e8d5c4] my-4" />

      {/* Lace Type */}
      <div className="flex w-full flex-col items-start gap-4">
        <span className="text-sm font-bold text-[#3d2b1f]">Lace Type</span>
        <div className="flex flex-wrap items-start gap-2">
          {[
            "HD Lace Frontal",
            "5x5 Closure",
            "4x4 Closure",
            "360 Lace",
            "Full Lace",
          ].map((l) => (
            <FilterPill
              key={l}
              label={l}
              selected={selectedLaces.includes(l)}
              onClick={() =>
                toggleSelection(setSelectedLaces, selectedLaces, l)
              }
            />
          ))}
        </div>
      </div>

      <div className="flex h-px w-full flex-none items-start bg-[#e8d5c4] my-4" />

      {/* Length */}
      <div className="flex w-full flex-col items-start gap-4">
        <span className="text-sm font-bold text-[#3d2b1f]">Length</span>
        <div className="flex flex-wrap items-start gap-2">
          {[
            '10"',
            '12"',
            '14"',
            '16"',
            '18"',
            '20"',
            '22"',
            '24"',
            '26"',
            '28"',
            '30"',
          ].map((len) => (
            <FilterPill
              key={len}
              label={len}
              selected={selectedLengths.includes(len)}
              onClick={() =>
                toggleSelection(setSelectedLengths, selectedLengths, len)
              }
            />
          ))}
        </div>
      </div>

      <div className="flex h-px w-full flex-none items-start bg-[#e8d5c4] my-4" />

      {/* Density */}
      <div className="flex w-full flex-col items-start gap-4">
        <span className="text-sm font-bold text-[#3d2b1f]">Density</span>
        <div className="flex flex-wrap items-start gap-2">
          {["130%", "150%", "180%", "200%", "250%"].map((d) => (
            <FilterPill
              key={d}
              label={d}
              selected={selectedDensities.includes(d)}
              onClick={() =>
                toggleSelection(setSelectedDensities, selectedDensities, d)
              }
            />
          ))}
        </div>
      </div>

      <div className="flex h-px w-full flex-none items-start bg-[#e8d5c4] my-4" />

      {/* Price Range */}
      <div className="flex w-full flex-col items-start gap-2">
        <span className="text-sm font-bold text-[#3d2b1f] mb-3">
          Price Range
        </span>
        <div className="px-2 w-full">
          <input
            type="range"
            min="50"
            max="500"
            defaultValue="250"
            className="w-full accent-[#6b3a2a] cursor-pointer"
          />
        </div>
        <div className="flex w-full items-center justify-between mb-2 px-1 text-xs text-[#8b7b6b]">
          <span>$50</span>
          <span>$500</span>
        </div>
        <div className="flex w-full items-center gap-3">
          <div className="relative w-full">
            <span className="absolute left-3 top-1.5 text-sm text-[#8b7b6b]">
              $
            </span>
            <input
              type="text"
              placeholder="Min 150"
              className="w-full text-sm rounded border border-[#e8d5c4] px-3 py-1.5 pl-6 outline-none hover:border-[#d4a574] focus:border-[#d4a574] transition-colors"
            />
          </div>
          <div className="relative w-full">
            <span className="absolute left-3 top-1.5 text-sm text-[#8b7b6b]">
              $
            </span>
            <input
              type="text"
              placeholder="Max 400"
              className="w-full text-sm rounded border border-[#e8d5c4] px-3 py-1.5 pl-6 outline-none hover:border-[#d4a574] focus:border-[#d4a574] transition-colors"
            />
          </div>
        </div>
      </div>

      <Button
        className="w-full rounded-full bg-[#6B3A2A] hover:bg-[#5a2f22] text-white h-11 mt-8 shadow-none"
        onClick={() => {}}
      >
        Apply Filters
      </Button>
    </>
  );
};

export const ProductSidebar = () => {
  return (
    <div className="w-72 flex-none flex-col items-start gap-4 sticky top-24 self-start hidden md:flex bg-white p-6 rounded-2xl shadow-[0px_2px_12px_-4px_#3d2b1f0f] border border-[#e8d5c4]/50">
      <ProductFilterContent />
    </div>
  );
};
