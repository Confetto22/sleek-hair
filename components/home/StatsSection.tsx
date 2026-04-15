import React from "react";
import { ArrowUpRight } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "5,201+",
    title: "Wigs Styled",
    description: "Premium products and expert craftsmanship",
  },
  {
    id: 2,
    value: "4,201+",
    title: "Happy Customers",
    description: "Premium products and expert care",
  },
  {
    id: 3,
    value: "8,132+",
    title: "Premium Units",
    description: "Premium products and expert styling",
  },
];

export const StatsSection = () => {
  return (
    <section className="flex w-full flex-col items-center gap-12 px-4 py-12 md:px-16 md:py-20 mx-auto max-w-7xl">
      <h2 className="max-w-xl font-sans text-3xl font-normal text-left text-[#3d2b1f] md:text-5xl md:font-bold md:leading-tight">
        Your Journey to Stunning Hair Begins Here
      </h2>
      <div className="flex w-full flex-col flex-nowrap gap-6 items-stretch justify-center md:flex-row md:flex-wrap">
        {stats.map((stat) => (
          <div key={stat.id} className="flex min-w-48 grow shrink-0 basis-0 flex-col items-start gap-4 rounded-3xl bg-[#f5ede4] px-8 py-8">
            <div className="flex w-full items-center justify-between">
              <span className="font-sans text-4xl font-bold text-[#d4a574]">
                {stat.value}
              </span>
              <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white">
                <ArrowUpRight className="w-4 h-4 text-[#d4a574]" />
              </div>
            </div>
            <span className="font-semibold text-[#3d2b1f]">{stat.title}</span>
            <span className="text-xs text-[#8b7b6b]">
              {stat.description}
            </span>
            <div className="relative h-32 w-full flex-none rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
