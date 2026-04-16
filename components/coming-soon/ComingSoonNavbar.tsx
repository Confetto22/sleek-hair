import React from "react";

/** Top navigation bar strip — Est. date on the left, status badge on the right */
export function ComingSoonNavbar() {
  return (
    <header className="flex w-full items-center justify-center px-4 py-5 md:px-8 md:py-8">
      <div className="flex w-full max-w-screen-xl items-center justify-between">
        <span className="font-sans text-[11px] font-light tracking-[0.3em] text-[#1a1a1a] uppercase">
          Est. 2025
        </span>

        {/* Status badge */}
        <div className="flex items-center gap-3">
          <div className="h-1 w-1 rounded-full bg-[#c6a76e]" aria-hidden="true" />
          <span className="font-sans text-[11px] font-light tracking-[0.3em] text-[#1a1a1a] uppercase">
            Coming Soon
          </span>
        </div>
      </div>
    </header>
  );
}
