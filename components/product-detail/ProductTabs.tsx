import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const ProductTabs = () => {
  return (
    <div className="flex w-full flex-col items-start gap-8">
      <Tabs defaultValue="description" className="w-full">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="care">Care Guide</TabsTrigger>
          <TabsTrigger value="shipping">Shipping Info</TabsTrigger>
        </TabsList>

        <TabsContent value="description">
          <div className="flex w-full flex-wrap items-start gap-12 mt-6">
            <div className="flex min-w-0 md:min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-4">
              <h2 className="text-2xl text-[#3d2b1f] font-medium">About This Wig</h2>
              <p className="text-sm text-[#6b5b4f] leading-relaxed">
                Our Silky Straight HD Lace Frontal Wig is the epitome of luxury
                hair. Sourced from a single donor in Brazil, this 100% virgin human
                hair maintains its natural cuticle alignment for unmatched softness,
                shine, and longevity.
              </p>
              <p className="text-sm text-[#6b5b4f] leading-relaxed">
                The ultra-thin Swiss HD lace front creates an invisible,
                undetectable hairline that blends seamlessly with all skin tones.
                The hand-tied construction ensures natural movement and
                breathability, while the adjustable cap with combs and elastic band
                provides a secure, comfortable fit for all head sizes.
              </p>
              <p className="text-sm text-[#6b5b4f] leading-relaxed">
                Each wig is pre-plucked with bleached knots for a ready-to-wear
                experience. Simply customize to your preference — the hair can be
                dyed, bleached, curled, and straightened just like your natural
                hair.
              </p>
            </div>

            {/* Specifications Card */}
            <div className="flex w-full md:w-96 flex-col items-start rounded-2xl bg-[#f5ede4] px-6 py-6">
              <h3 className="text-lg text-[#3d2b1f] pb-4 font-medium">Specifications</h3>
              
              <div className="flex w-full items-center justify-between border-b border-[#e8d5c4] py-3">
                <span className="text-sm text-[#8b7b6b]">Hair Type</span>
                <span className="text-sm font-bold text-[#3d2b1f]">Brazilian Virgin</span>
              </div>
              <div className="flex w-full items-center justify-between border-b border-[#e8d5c4] py-3">
                <span className="text-sm text-[#8b7b6b]">Lace</span>
                <span className="text-sm font-bold text-[#3d2b1f]">HD Invisible</span>
              </div>
              <div className="flex w-full items-center justify-between border-b border-[#e8d5c4] py-3">
                <span className="text-sm text-[#8b7b6b]">Density</span>
                <span className="text-sm font-bold text-[#3d2b1f]">150% — 200%</span>
              </div>
              <div className="flex w-full items-center justify-between border-b border-[#e8d5c4] py-3">
                <span className="text-sm text-[#8b7b6b]">Length</span>
                <span className="text-sm font-bold text-[#3d2b1f]">16&quot; — 24&quot;</span>
              </div>
              <div className="flex w-full items-center justify-between border-b border-[#e8d5c4] py-3">
                <span className="text-sm text-[#8b7b6b]">Cap Size</span>
                <span className="text-sm font-bold text-[#3d2b1f]">Adjustable</span>
              </div>
              <div className="flex w-full items-center justify-between py-3">
                <span className="text-sm text-[#8b7b6b]">Weight</span>
                <span className="text-sm font-bold text-[#3d2b1f]">150g — 250g</span>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="care">
          <div className="flex w-full flex-col gap-4 mt-6">
            <p className="text-sm text-[#6b5b4f] leading-relaxed">
              Care guide details go here...
            </p>
          </div>
        </TabsContent>

        <TabsContent value="shipping">
          <div className="flex w-full flex-col gap-4 mt-6">
            <p className="text-sm text-[#6b5b4f] leading-relaxed">
              Shipping info details go here...
            </p>
          </div>
        </TabsContent>

      </Tabs>
    </div>
  );
};
