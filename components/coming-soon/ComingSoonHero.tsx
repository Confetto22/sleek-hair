"use client";

import React, { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const LAUNCH_DATE = new Date("2026-05-16T00:00:00Z");

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 md:gap-3">
      <span className="font-serif text-[clamp(2rem,6vw,3rem)] font-light leading-none text-[#1a1a1a] tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[9px] md:text-[10px] font-light tracking-[0.3em] text-[#aaaaaa] uppercase">
        {label}
      </span>
    </div>
  );
}

function CountdownSeparator() {
  return (
    <span className="font-serif text-[clamp(1.4rem,4vw,2rem)] font-light leading-none text-[#c6a76e] opacity-50 pb-5 md:pb-6">
      :
    </span>
  );
}

export function ComingSoonHero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(LAUNCH_DATE));
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(LAUNCH_DATE)), 1000);
    return () => clearInterval(id);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section className="flex w-full flex-col items-center gap-12 md:gap-16 px-4 md:px-6 py-20 md:py-32">
      {/* Brand lockup */}
      <div className="flex flex-col items-center gap-5">
        <span className="text-[11px] md:text-[13px] font-light tracking-[0.35em] md:tracking-[0.45em] text-[#c6a76e] uppercase">
          Introducing
        </span>

        <h1 className="font-serif text-[clamp(2.4rem,9vw,5rem)] font-light leading-none tracking-[0.12em] md:tracking-[0.18em] text-[#1a1a1a] uppercase text-center">
          Sleek Hair By Vee
        </h1>

        {/* Ornament */}
        <div className="flex items-center gap-4 py-1">
          <div className="h-px w-8 bg-[#c6a76e] opacity-60" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#c6a76e] opacity-60" />
          <div className="h-px w-8 bg-[#c6a76e] opacity-60" />
        </div>
      </div>

      {/* Tagline */}
      <div className="flex w-full max-w-xl flex-col items-center gap-6 md:gap-8">
        <p className="font-serif text-[clamp(1.6rem,4vw,2.75rem)] font-light leading-tight md:leading-[1.25] text-[#1a1a1a] text-center -tracking-[0.01em]">
          Luxury Hair, Redefined.
        </p>
        <p className="max-w-md font-sans text-sm md:text-base font-light leading-relaxed text-[#6b7075] text-center">
          We&apos;re launching soon. Be the first to experience premium quality,
          flawless finishes, and timeless beauty.
        </p>
      </div>

      {/* Email capture */}
      <div className="flex w-full max-w-md flex-col items-center gap-3 md:gap-4 px-2 md:px-0">
        {submitted ? (
          <div className="flex w-full flex-col items-center gap-2 py-3">
            <div className="h-px w-8 bg-[#c6a76e] opacity-60" />
            <p className="font-sans text-sm font-light tracking-[0.15em] text-[#c6a76e] uppercase">
              You&apos;re on the list.
            </p>
            <p className="font-sans text-[11px] font-light text-[#999] text-center">
              We&apos;ll notify you the moment we go live.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col md:flex-row items-stretch md:items-center gap-3"
          >
            <div className="flex flex-1 items-center border-b border-[#c6a76e] px-1 py-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 min-w-0 font-sans text-sm font-light text-[#1a1a1a] bg-transparent outline-none placeholder:text-[#999]"
              />
            </div>
            <button
              type="submit"
              className="flex h-11 md:h-11 w-full md:w-auto items-center justify-center bg-[#1a1a1a] px-8 py-3 cursor-pointer transition-colors hover:bg-[#2b2b2b] active:bg-[#333]"
            >
              <span className="whitespace-nowrap font-sans text-xs font-medium tracking-[0.2em] text-[#c6a76e] uppercase">
                Notify Me
              </span>
            </button>
          </form>
        )}
        <span className="font-sans text-[11px] font-light text-[#999] text-center">
          Join our exclusive waitlist. No spam, ever.
        </span>
      </div>

      {/* Countdown */}
      <div className="flex flex-col items-center gap-4 md:gap-5 pt-4 md:pt-8">
        <span className="text-[10px] font-light tracking-[0.35em] text-[#c6a76e] uppercase">
          Launching In
        </span>
        <div className="flex items-end gap-4 md:gap-8">
          <CountdownUnit value={timeLeft.days} label="Days" />
          <CountdownSeparator />
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <CountdownSeparator />
          <CountdownUnit value={timeLeft.minutes} label="Minutes" />
          <CountdownSeparator />
          <CountdownUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
}
