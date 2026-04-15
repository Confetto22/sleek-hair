import React from "react";
import { Plus, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const HeroSection = () => {
  return (
    <section className="flex w-full flex-col flex-nowrap items-center justify-start gap-8 px-4 py-12 md:flex-row md:flex-wrap md:gap-16 md:px-16 md:py-20 mx-auto max-w-7xl">
      <div className="flex min-w-80 grow shrink-0 basis-0 flex-col items-start gap-8">
        <h1 className="font-sans text-4xl font-normal text-[#3d2b1f] md:text-6xl md:font-bold md:leading-tight">
          Embrace Your Beauty with Premium Wigs
        </h1>
        <p className="max-w-md font-sans text-sm leading-relaxed text-[#6b5b4f]">
          We believe that true beauty comes from within. Our luxury human hair
          wigs are crafted to help you discover and enhance your natural
          radiance with confidence.
        </p>
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8 ring-2 ring-white">
            <AvatarImage src="" alt="User 1" className="object-cover" />
            <AvatarFallback className="bg-gray-200">U1</AvatarFallback>
          </Avatar>
          <Avatar className="w-8 h-8 -ml-3 ring-2 ring-white">
            <AvatarImage src="" alt="User 2" className="object-cover" />
            <AvatarFallback className="bg-gray-200">U2</AvatarFallback>
          </Avatar>
          <Avatar className="w-8 h-8 -ml-3 ring-2 ring-white">
            <AvatarImage src="" alt="User 3" className="object-cover" />
            <AvatarFallback className="bg-gray-200">U3</AvatarFallback>
          </Avatar>
          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-solid border-[#d4a574] bg-white -ml-3 ring-2 ring-white">
            <Plus className="w-4 h-4 text-[#d4a574]" />
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-start gap-6 md:gap-12">
          <div className="flex flex-col items-start gap-1">
            <span className="font-sans text-3xl font-bold text-[#3d2b1f]">
              57.1K+
            </span>
            <span className="text-xs text-[#8b7b6b]">Flawless Beauty</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="font-sans text-3xl font-bold text-[#3d2b1f]">
              3,020+
            </span>
            <span className="text-xs text-[#8b7b6b]">Happy Clients</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="font-sans text-3xl font-bold text-[#3d2b1f]">
              182K
            </span>
            <span className="text-xs text-[#8b7b6b]">Wigs Delivered</span>
          </div>
        </div>
      </div>
      <div className="flex min-w-80 grow shrink-0 basis-0 flex-col items-start justify-start relative">
        <Sparkles className="w-6 h-6 text-[#d4a574] absolute top-4 right-16 z-10" />
        <Sparkles className="w-5 h-5 text-[#d4a574] absolute top-20 left-4 z-10" />
        <Sparkles className="w-5 h-5 text-[#d4a574] absolute bottom-12 right-8 z-10" />
        <div className="relative h-96 w-full max-w-md lg:h-[36rem] rounded-3xl overflow-hidden flex-none">
          <div className="w-full h-full bg-gray-200" />
        </div>
      </div>
    </section>
  );
};
