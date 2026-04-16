import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { CollectionsSection } from "@/components/home/CollectionsSection";
import { DiscoverSection } from "@/components/home/DiscoverSection";
import { TransformSection } from "@/components/home/TransformSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { BestSellersSection } from "@/components/home/BestSellersSection";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-[#faf5ef] font-['Inter']">
      <main className="flex flex-col w-full items-center">
        <HeroSection />
        <StatsSection />
        <CollectionsSection />
        <DiscoverSection />
        <TransformSection />
        <BestSellersSection />
        <WhyChooseUsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaBanner />
      </main>
    </div>
  );
}
