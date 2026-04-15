import React from "react";
import { Heart, Star, Shield, Globe } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Heart,
    title: "Online Exclusive Boutique",
    description:
      "By operating purely online with no physical shop overhead, we deliver premium luxury directly to you.",
  },
  {
    id: 2,
    icon: Star,
    title: "Hand-Tied & HD Lace",
    description:
      "Meticulously hand-tied with ultra-thin HD lace that melts into your skin invisibly.",
  },
  {
    id: 3,
    icon: Shield,
    title: "100% Human Hair",
    description:
      "Genuine, unprocessed human hair. No synthetic fillers, designed to last for years.",
  },
  {
    id: 4,
    icon: Globe,
    title: "Affordable Doorstep Delivery",
    description:
      "Inexpensive, fast courier delivery straight to your doorstep—no matter where in the world you are.",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="flex w-full flex-col items-center gap-12 px-4 py-12 md:px-16 md:py-20 mx-auto max-w-7xl">
      <h2 className="font-sans text-3xl font-normal leading-9 text-[#3d2b1f] text-center md:text-5xl md:font-bold md:leading-tight">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 w-full flex-col flex-nowrap gap-4 items-stretch justify-center md:grid-cols-2 lg:grid-cols-4 md:gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex max-w-md mx-auto  flex-col items-center gap-4 rounded-3xl bg-white px-8 py-10 shadow-sm"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#F5EDE4]">
              <feature.icon className="w-8 h-8 text-[#d4a574]" />
            </div>
            <span className="font-sans text-lg font-bold leading-6 text-[#3d2b1f] text-center">
              {feature.title}
            </span>
            <span className="text-sm text-[#8b7b6b] text-center">
              {feature.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
