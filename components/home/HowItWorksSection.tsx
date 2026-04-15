import React from 'react';
import { CalendarRange, Ruler, Truck } from 'lucide-react';

export const HowItWorksSection = () => {
  return (
    <section className="flex w-full flex-col items-center gap-12 px-4 py-12 md:px-16 md:py-20 mx-auto max-w-7xl bg-[#f5ede4] rounded-3xl mt-12 mb-12">
      <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
        <h2 className="font-sans text-3xl font-normal leading-9 text-[#3d2b1f] md:text-5xl md:font-bold md:leading-tight">
          How to Order Your Dream Wig
        </h2>
        <p className="font-sans text-sm font-normal leading-relaxed text-[#6b5b4f]">
          We’ve streamlined the process to ensure you get a flawless, natural look 
          with the perfect fit—every single time.
        </p>
      </div>
      
      <div className="flex w-full flex-col flex-nowrap gap-8 items-stretch justify-center md:flex-row md:flex-wrap md:gap-12 relative z-10">
        <div className="flex min-w-64 grow shrink-0 basis-0 flex-col items-center gap-4 text-center">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-sm mb-2 relative">
            <CalendarRange className="w-10 h-10 text-[#d4a574]" />
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#3d2b1f] text-white flex items-center justify-center font-bold">1</div>
          </div>
          <span className="font-sans text-xl font-bold leading-7 text-[#3d2b1f]">
            Book a Consultation
          </span>
          <span className="text-sm text-[#8b7b6b]">
            Have specific wig requests? Schedule an online consultation with our experts to curate the perfect texture, color, and style.
          </span>
        </div>

        <div className="flex min-w-64 grow shrink-0 basis-0 flex-col items-center gap-4 text-center">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-sm mb-2 relative">
            <Ruler className="w-10 h-10 text-[#d4a574]" />
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#3d2b1f] text-white flex items-center justify-center font-bold">2</div>
          </div>
          <span className="font-sans text-xl font-bold leading-7 text-[#3d2b1f]">
            Submit Measurements
          </span>
          <span className="text-sm text-[#8b7b6b]">
            Yes, we need your head measurements! This ensures your wig cap fits securely and seamlessly, giving you an undetectable hairline.
          </span>
        </div>

        <div className="flex min-w-64 grow shrink-0 basis-0 flex-col items-center gap-4 text-center">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-sm mb-2 relative">
            <Truck className="w-10 h-10 text-[#d4a574]" />
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#3d2b1f] text-white flex items-center justify-center font-bold">3</div>
          </div>
          <span className="font-sans text-xl font-bold leading-7 text-[#3d2b1f]">
            Fast Doorstep Delivery
          </span>
          <span className="text-sm text-[#8b7b6b]">
            Readily available units ship within <strong>48 hours</strong>. Custom request wigs are perfected and delivered in just <strong>7 working days</strong>.
          </span>
        </div>
      </div>
    </section>
  );
};
