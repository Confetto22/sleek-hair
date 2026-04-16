import React from "react";

const PROMISES = [
  {
    title: "Premium Human Hair",
    description: "100% ethically sourced, virgin human hair of the highest grade",
  },
  {
    title: "Luxury Finishing",
    description: "Hand-crafted styling with salon-quality finishing on every piece",
  },
  {
    title: "Nationwide Delivery",
    description: "Discreet, luxury packaging delivered to your door across the country",
  },
];

function Divider({ orientation = "horizontal" }: { orientation?: "horizontal" | "vertical" }) {
  if (orientation === "vertical") {
    return (
      <div className="hidden md:flex h-20 w-px flex-none bg-[#c6a76e] opacity-30" />
    );
  }
  return <div className="flex md:hidden h-px w-12 bg-[#c6a76e] opacity-30" />;
}

function PromiseItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-3 md:gap-4 px-4 md:px-10">
      <div className="hidden md:flex h-px w-8 bg-[#c6a76e] opacity-40" />
      <h3 className="font-serif text-[clamp(1rem,2vw,1.2rem)] font-light text-[#1a1a1a] text-center">
        {title}
      </h3>
      <p className="max-w-[224px] font-sans text-[13px] font-light leading-[1.7] text-[#999] text-center">
        {description}
      </p>
    </div>
  );
}

export function ThePromise() {
  return (
    <section className="flex w-full max-w-5xl flex-col items-center gap-6 px-4 md:px-6 py-20 md:py-28 mx-auto">
      {/* Section label */}
      <span className="pb-4 md:pb-6 text-[10px] font-light tracking-[0.35em] text-[#c6a76e] uppercase">
        The Promise
      </span>

      {/* Promise items with dividers */}
      <div className="flex w-full flex-col md:flex-row items-center justify-center">
        {PROMISES.map((item, i) => (
          <React.Fragment key={item.title}>
            <PromiseItem title={item.title} description={item.description} />
            {i < PROMISES.length - 1 && (
              <>
                <Divider orientation="vertical" />
                <Divider orientation="horizontal" />
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
