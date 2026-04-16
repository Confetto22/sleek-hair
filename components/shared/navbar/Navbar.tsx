"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // TODO: wire cartCount from real cart state / context
  const cartCount = 2;

  return (
    <>
      <nav className="flex w-full items-center justify-between px-4 py-4 md:px-16 md:py-6 bg-[#faf5ef] sticky top-0 z-50">
        <Link href="/" className="font-sans text-2xl font-bold text-[#3d2b1f]">
          LUXE CROWN
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/search"
            className="text-sm text-[#3d2b1f]  tracking-widest hover:text-[#d4a574] transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/products"
            className="text-sm text-[#3d2b1f]  tracking-widest hover:text-[#d4a574] transition-colors"
          >
            Collection
          </Link>
          <Link
            href="/products"
            className="text-sm text-[#3d2b1f]  tracking-widest hover:text-[#d4a574] transition-colors"
          >
            Track orders
          </Link>
        </div>

        {/* Desktop actions */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex text-[#3d2b1f] hover:text-[#d4a574]"
          >
            <Link href="/search">
              <Search className="w-5 h-5" />
            </Link>
          </Button>

          <Button
            variant="link"
            className="hidden md:flex text-[#3d2b1f] hover:text-[#d4a574] px-0"
          >
            Sign In
          </Button>

          <Link href="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="text-[#3d2b1f] hover:text-[#d4a574] relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#d4a574] text-[9px] font-bold text-white leading-none">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>

          <Link href="/">
            <Button className="hidden md:inline-flex rounded-full bg-[#D4A574] hover:bg-[#C4956A] text-white">
              Shop Now
            </Button>
          </Link>

          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden flex text-[#3d2b1f] hover:text-[#d4a574]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        cartCount={cartCount}
      />
    </>
  );
};
