import React from 'react';
import { Button } from '@/components/ui/button';

export const CtaBanner = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-6 bg-[#6b3a2a] px-4 py-16 md:px-16 md:py-24">
      <h2 className="max-w-3xl font-sans text-4xl font-normal leading-10 text-white text-center md:text-5xl md:font-bold md:leading-tight">
        Find Your Perfect Wig Today
      </h2>
      <p className="max-w-xl font-sans text-sm font-normal leading-relaxed text-[#e8d5c4] text-center">
        Discover our curated collection of premium human hair wigs, crafted for
        confidence and natural beauty.
      </p>
      <Button 
        variant="outline" 
        className="rounded-full border-white text-white bg-transparent hover:bg-[#ffffff1a] hover:text-white h-12 px-8 text-base border-2"
      >
        Shop the Collection
      </Button>
    </section>
  );
};
