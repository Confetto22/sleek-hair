import React from "react";
import { Search, X, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SearchHero = () => {
  return (
    <div className="flex w-full max-w-7xl flex-col items-center gap-6 px-4 py-6 md:px-16 md:py-10 mx-auto">
      <h1 className="font-sans text-2xl font-semibold leading-8 text-[#3d2b1f] text-center md:text-[32px] md:leading-[40px]">
        Find Your Perfect Wig
      </h1>
      <p className="max-w-md text-sm md:text-base text-[#8b7b6b] text-center">
        Browse our curated collection of premium human hair wigs by style, length,
        texture, and more.
      </p>
      
      {/* Search Input Container */}
      <div className="flex w-full max-w-xl flex-col items-start relative group">
        <div className="flex z-20 h-14 w-full flex-none items-center gap-3 rounded-full border border-[#e8d5c4] bg-white px-5 shadow-sm focus-within:ring-2 focus-within:ring-[#d4a574]/50 focus-within:border-[#d4a574]">
          <Search className="w-5 h-5 text-[#8b7b6b]" />
          <input
            className="grow shrink-0 basis-0 text-[#3d2b1f] outline-none placeholder:text-[#8b7b6b] bg-transparent"
            placeholder="Search by style, length, or texture..."
            type="text"
          />
          <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-[#8b7b6b] hover:text-[#3d2b1f] hover:bg-gray-100 hidden group-focus-within:flex">
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Search Popover / Dropdown (Simulated focus behavior) */}
        <div className="hidden group-focus-within:flex flex-col w-full absolute top-14 left-0 overflow-hidden rounded-2xl border border-[#e8d5c4] bg-white shadow-xl z-10 pt-4">
          <div className="flex w-full flex-col items-start gap-2 px-5 py-3">
            <span className="text-xs font-bold text-[#8b7b6b] uppercase tracking-widest">
              Recent Searches
            </span>
            <div className="flex flex-wrap items-start gap-2">
              <div className="flex items-center gap-1.5 rounded-full bg-[#f5ede4] px-3 py-1.5 cursor-pointer hover:bg-[#e8d5c4]">
                <Clock className="w-3 h-3 text-[#8b7b6b]" />
                <span className="text-xs text-[#3d2b1f]">Body Wave 18&quot;</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-[#f5ede4] px-3 py-1.5 cursor-pointer hover:bg-[#e8d5c4]">
                <Clock className="w-3 h-3 text-[#8b7b6b]" />
                <span className="text-xs text-[#3d2b1f]">HD Lace Frontal</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-[#f5ede4] px-3 py-1.5 cursor-pointer hover:bg-[#e8d5c4]">
                <Clock className="w-3 h-3 text-[#8b7b6b]" />
                <span className="text-xs text-[#3d2b1f]">Blonde Wig</span>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-[#e8d5c4]" />
          <div className="flex w-full flex-col items-start gap-2 px-5 py-3">
            <span className="text-xs font-bold text-[#8b7b6b] uppercase tracking-widest">
              Popular Categories
            </span>
            <div className="flex flex-wrap items-start gap-2">
              {['Frontal Wigs', 'Closure Wigs', 'Straight', 'Body Wave', 'Deep Wave'].map((cat) => (
                <div key={cat} className="flex items-center rounded-full border border-[#d4a574] px-3 py-1.5 cursor-pointer hover:bg-[#f5ede4]">
                  <span className="text-xs text-[#d4a574]">{cat}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-px w-full bg-[#e8d5c4]" />
          <div className="flex w-full flex-col items-start gap-1 px-3 py-3">
            <span className="text-xs font-bold text-[#8b7b6b] uppercase tracking-widest px-2 pb-1">
              Suggested Products
            </span>
            {/* Suggested Product Items */}
            <div className="flex w-full items-center gap-3 rounded-xl px-2 py-2 hover:bg-[#f5ede4] cursor-pointer transition-colors">
              <div className="h-12 w-12 flex-none rounded-lg bg-gray-200 overflow-hidden" />
              <div className="flex min-w-0 grow flex-col items-start">
                <span className="font-semibold text-sm text-[#3d2b1f]">Brazilian Body Wave</span>
                <span className="text-xs text-[#8b7b6b]">18&quot; · HD Lace</span>
              </div>
              <span className="font-semibold text-sm text-[#d4a574]">$289</span>
            </div>
            <div className="flex w-full items-center gap-3 rounded-xl px-2 py-2 hover:bg-[#f5ede4] cursor-pointer transition-colors">
              <div className="h-12 w-12 flex-none rounded-lg bg-gray-200 overflow-hidden" />
              <div className="flex min-w-0 grow flex-col items-start">
                <span className="font-semibold text-sm text-[#3d2b1f]">Silky Straight</span>
                <span className="text-xs text-[#8b7b6b]">20&quot; · Frontal</span>
              </div>
              <span className="font-semibold text-sm text-[#d4a574]">$349</span>
            </div>
            <div className="flex w-full items-center gap-3 rounded-xl px-2 py-2 hover:bg-[#f5ede4] cursor-pointer transition-colors">
              <div className="h-12 w-12 flex-none rounded-lg bg-gray-200 overflow-hidden" />
              <div className="flex min-w-0 grow flex-col items-start">
                <span className="font-semibold text-sm text-[#3d2b1f]">Deep Wave</span>
                <span className="text-xs text-[#8b7b6b]">16&quot; · Closure</span>
              </div>
              <span className="font-semibold text-sm text-[#d4a574]">$259</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
