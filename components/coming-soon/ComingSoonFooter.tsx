import React from "react";

export function ComingSoonFooter() {
  return (
    <footer className="flex w-full flex-col items-center gap-6 px-4 md:px-6 py-12 md:py-16">
      {/* Top gold divider */}
      <div className="flex w-16 items-center justify-center">
        <div className="h-px w-full bg-[#c6a76e]" />
      </div>

      {/* Instagram block */}
      <div className="flex flex-col items-center gap-3 md:gap-4">
        {/* <Instagram
          className="text-[#1a1a1a]"
          size={20}
          strokeWidth={1.5}
          aria-hidden="true"
        /> */}
        <span className="font-sans text-[11px] md:text-[12px] font-light tracking-[0.2em] text-[#999] uppercase">
          Follow our journey
        </span>
        <a
          href="https://instagram.com/luxecrown"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-[11px] tracking-[0.15em] text-[#c6a76e] transition-opacity hover:opacity-70"
        >
          @luxecrown
        </a>
      </div>

      {/* Copyright */}
      <div className="flex flex-col items-center gap-2 pt-6 md:pt-8">
        <span className="font-sans text-[10px] tracking-[0.15em] text-[#999] uppercase">
          Luxe Crown
        </span>
        <span className="font-sans text-[10px] font-light text-[#bbb]">
          &copy; {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  );
}
