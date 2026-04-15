import React from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-4 py-4 md:px-16 md:py-6 bg-[#faf5ef] sticky top-0 z-50">
      <Link href="#" className="font-sans text-2xl font-bold text-[#3d2b1f]">
        LUXE CROWN
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link href="#" className="text-sm text-[#3d2b1f] uppercase tracking-widest hover:text-[#d4a574] transition-colors">
          Shop
        </Link>
        <Link href="#" className="text-sm text-[#3d2b1f] uppercase tracking-widest hover:text-[#d4a574] transition-colors">
          Collections
        </Link>
        <Link href="#" className="text-sm text-[#3d2b1f] uppercase tracking-widest hover:text-[#d4a574] transition-colors">
          Best Sellers
        </Link>
        <Link href="#" className="text-sm text-[#3d2b1f] uppercase tracking-widest hover:text-[#d4a574] transition-colors">
          About
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="hidden md:flex text-[#3d2b1f] hover:text-[#d4a574]">
          <Search className="w-5 h-5" />
        </Button>
        <Button variant="link" className="hidden md:flex text-[#3d2b1f] hover:text-[#d4a574] px-0">
          Sign In
        </Button>
        <Button variant="ghost" size="icon" className="text-[#3d2b1f] hover:text-[#d4a574]">
          <ShoppingBag className="w-5 h-5" />
        </Button>
        <Button className="hidden md:inline-flex rounded-full bg-[#D4A574] hover:bg-[#C4956A] text-white">
          Shop Now
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden flex text-[#3d2b1f] hover:text-[#d4a574]">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </nav>
  );
};
