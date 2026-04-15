import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center bg-[#3d2b1f] px-4 py-8 md:px-16 md:py-16">
      <div className="flex w-full max-w-7xl flex-col md:flex-row flex-wrap items-start justify-between gap-8">
        <div className="flex flex-col items-start gap-4">
          <span className="font-sans text-xl font-bold text-white">
            Company
          </span>
          <Link href="#" className="text-sm text-[#d4a574] hover:text-white transition-colors">About us</Link>
          <Link href="#" className="text-sm text-[#d4a574] hover:text-white transition-colors">Careers</Link>
          <Link href="#" className="text-sm text-[#d4a574] hover:text-white transition-colors">Contact us</Link>
          <Link href="#" className="text-sm text-[#d4a574] hover:text-white transition-colors">Features</Link>
        </div>
        <div className="flex flex-col items-start gap-4">
          <span className="font-sans text-xl font-bold text-white">
            Support
          </span>
          <Link href="#" className="text-sm text-[#d4a574] hover:text-white transition-colors">Shipping Info</Link>
          <Link href="#" className="text-sm text-[#d4a574] hover:text-white transition-colors">Returns</Link>
          <Link href="#" className="text-sm text-[#d4a574] hover:text-white transition-colors">Size Guide</Link>
          <Link href="#" className="text-sm text-[#d4a574] hover:text-white transition-colors">FAQ</Link>
        </div>
        <div className="flex min-w-72 max-w-sm flex-col items-start gap-6">
          <span className="font-sans text-xl font-bold text-white">
            Subscribe
          </span>
          <div className="flex w-full items-center gap-2 rounded-xl bg-[#ffffff1a] px-4 py-3">
            <input
              className="grow shrink-0 basis-0 text-sm text-white bg-transparent outline-none placeholder:text-[#d4a574]"
              placeholder="Email address"
              type="text"
            />
            <button className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#d4a574] hover:bg-[#c4956a] transition-colors">
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
          <span className="font-sans text-xs font-normal leading-relaxed text-[#d4a574]">
            Explore our diverse range of services and discover how we can help you
            bring your vision to life with creativity and passion.
          </span>
        </div>
      </div>
      <div className="flex w-full max-w-7xl flex-col md:flex-row items-center justify-between border-t border-solid border-[#ffffff1a] pt-8 mt-12 gap-4">
        <div className="flex items-center gap-6">
          <Link href="#" className="text-xs text-[#d4a574] hover:text-white transition-colors">Privacy</Link>
          <Link href="#" className="text-xs text-[#d4a574] hover:text-white transition-colors">Cookies</Link>
          <Link href="#" className="text-xs text-[#d4a574] hover:text-white transition-colors">Terms</Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-[#d4a574] hover:text-white hover:bg-[#ffffff1a]">
            <LinkedinIcon className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#d4a574] hover:text-white hover:bg-[#ffffff1a]">
            <FacebookIcon className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#d4a574] hover:text-white hover:bg-[#ffffff1a]">
            <TwitterIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
