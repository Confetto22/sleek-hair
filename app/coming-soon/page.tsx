import type { Metadata } from "next";
import { ComingSoonNavbar } from "@/components/coming-soon/ComingSoonNavbar";
import { ComingSoonHero } from "@/components/coming-soon/ComingSoonHero";
import { ThePromise } from "@/components/coming-soon/ThePromise";
import { ComingSoonFooter } from "@/components/coming-soon/ComingSoonFooter";

export const metadata: Metadata = {
  title: "Coming Soon — Luxe Crown",
  description:
    "Luxe Crown is launching soon. Be the first to experience premium quality human hair wigs, flawless finishes, and timeless beauty. Join the exclusive waitlist.",
};

/** Slim gold horizontal rule used as a section separator */
function GoldRule({ width = "max-w-[7rem]" }: { width?: string }) {
  return (
    <div className={`flex w-full ${width} items-center justify-center`}>
      <div className="h-px w-full bg-[#c6a76e] opacity-50" />
    </div>
  );
}

export default function ComingSoonPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-[#f8f6f2]">
      <ComingSoonNavbar />

      {/* Divider below navbar */}
      <GoldRule />

      <main className="flex w-full flex-col items-center">
        <ComingSoonHero />

        {/* Divider between hero and promise */}
        <GoldRule width="max-w-[3.5rem]" />

        <ThePromise />
      </main>

      <ComingSoonFooter />
    </div>
  );
}
