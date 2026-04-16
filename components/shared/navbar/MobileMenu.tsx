"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  X,
  Sparkles,
  ChevronDown,
  User,
  Package,
  Heart,
  ShoppingBag,
  ArrowRight,
  Calendar,
  Music2,
  MessageCircle,
} from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  cartCount?: number;
}

const SHOP_ITEMS = [
  { label: "Wigs", href: "/products?category=wigs", active: true },
  { label: "Bundles", href: "/products?category=bundles", active: false },
  {
    label: "Closures & Frontals",
    href: "/products?category=closures",
    active: false,
  },
  {
    label: "Ready-to-Wear",
    href: "/products?category=ready-to-wear",
    active: false,
  },
  { label: "Custom Orders", href: "/custom", active: false },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  cartCount = 0,
}) => {
  const [shopOpen, setShopOpen] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Prevent scroll on body when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Mount after first render to enable CSS transitions
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${mounted && isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`
          fixed top-0 left-0 z-50 flex h-full w-full max-w-[448px] flex-col
          bg-[#faf5ef] shadow-2xl
          transition-transform duration-300 ease-in-out
          ${mounted && isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Scrollable content */}
        <div className="flex flex-col flex-1 overflow-y-auto px-6 py-6">
          {/* ── Header ─────────────────────────────────── */}
          <div className="flex w-full items-center justify-between mb-6">
            <Link
              href="/"
              onClick={onClose}
              className="font-sans text-[24px] font-[700] leading-[32px] text-[#3d2b1f] tracking-tight"
            >
              LUXE CROWN
            </Link>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="
                flex h-10 w-10 flex-none items-center justify-center
                rounded-full bg-[#f5ede4]
                hover:bg-[#eddfd0] active:scale-95
                transition-all duration-150
              "
            >
              <X className="w-[18px] h-[18px] text-[#3d2b1f]" />
            </button>
          </div>

          {/* ── Tagline ────────────────────────────────── */}
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="w-3 h-3 text-[#d4a574] flex-none" />
            <span className="font-['DM_Sans',sans-serif] text-sm text-[#8b7b6b] italic tracking-wide">
              Luxury Hair, Redefined
            </span>
          </div>

          {/* ── Divider ────────────────────────────────── */}
          <div className="h-px w-full bg-[#e8d5c4] mb-6" />

          {/* ── Main Navigation ────────────────────────── */}
          <nav className="flex w-full flex-col items-start">
            {/* Home */}
            <Link
              href="/"
              onClick={onClose}
              className="
                flex w-full items-center justify-between
                border-b border-[#f5ede4] py-4
                group
              "
            >
              <span className="font-['DM_Sans',sans-serif] text-[22px] font-[400] leading-[30px] text-[#3d2b1f] group-hover:text-[#6b3a2a] transition-colors duration-150">
                Home
              </span>
            </Link>

            {/* Shop — expandable */}
            <div className="flex w-full flex-col items-start border-b border-[#f5ede4]">
              <button
                onClick={() => setShopOpen((prev) => !prev)}
                className="flex w-full items-center justify-between py-4 group"
                aria-expanded={shopOpen}
              >
                <span className="font-['DM_Sans',sans-serif] text-[22px] font-[400] leading-[30px] text-[#3d2b1f] group-hover:text-[#6b3a2a] transition-colors duration-150">
                  Shop
                </span>
                <ChevronDown
                  className={`
                    w-[18px] h-[18px] text-[#8b7b6b]
                    transition-transform duration-300
                    ${shopOpen ? "rotate-180" : "rotate-0"}
                  `}
                />
              </button>

              {/* Shop sub-items */}
              <div
                className={`
                  w-full overflow-hidden
                  transition-all duration-300 ease-in-out
                  ${shopOpen ? "max-h-80 opacity-100 mb-3" : "max-h-0 opacity-0 mb-0"}
                `}
              >
                <div className="flex w-full flex-col items-start  bg-[#f5ede4]">
                  {SHOP_ITEMS.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={onClose}
                      className={`
                        flex w-full items-center px-4 py-3
                        border-l-2 border-solid
                        ${item.active ? "border-[#d4a574]" : "border-transparent hover:border-[#d4a574]/50"}
                        transition-colors duration-150 group
                      `}
                    >
                      <span
                        className={`
                          font-['DM_Sans',sans-serif] text-[16px] leading-[24px]
                          ${item.active ? "font-[500] text-[#6b3a2a]" : "font-[400] text-[#3d2b1f] group-hover:text-[#6b3a2a]"}
                          transition-colors duration-150
                        `}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Collections */}
            <Link
              href="/products"
              onClick={onClose}
              className="flex w-full items-center justify-between border-b border-[#f5ede4] py-4 group"
            >
              <span className="font-['DM_Sans',sans-serif] text-[22px] font-[400] leading-[30px] text-[#3d2b1f] group-hover:text-[#6b3a2a] transition-colors duration-150">
                Collections
              </span>
            </Link>

            {/* Best Sellers */}
            <Link
              href="/products?sort=best-sellers"
              onClick={onClose}
              className="flex w-full items-center justify-between border-b border-[#f5ede4] py-4 group"
            >
              <div className="flex items-center gap-3">
                <span className="font-['DM_Sans',sans-serif] text-[22px] font-[400] leading-[30px] text-[#3d2b1f] group-hover:text-[#6b3a2a] transition-colors duration-150">
                  Best Sellers
                </span>
                <div className="flex h-5 items-center rounded-full bg-[#6b3a2a] px-2">
                  <span className="font-['DM_Sans',sans-serif] text-[10px] font-[600] leading-[14px] tracking-wider text-white uppercase">
                    Hot
                  </span>
                </div>
              </div>
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              onClick={onClose}
              className="flex w-full items-center justify-between border-b border-[#f5ede4] py-4 group"
            >
              <span className="font-['DM_Sans',sans-serif] text-[22px] font-[400] leading-[30px] text-[#3d2b1f] group-hover:text-[#6b3a2a] transition-colors duration-150">
                About Us
              </span>
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={onClose}
              className="flex w-full items-center justify-between border-b border-[#f5ede4] py-4 group"
            >
              <span className="font-['DM_Sans',sans-serif] text-[22px] font-[400] leading-[30px] text-[#3d2b1f] group-hover:text-[#6b3a2a] transition-colors duration-150">
                Contact
              </span>
            </Link>
          </nav>

          {/* ── Divider ────────────────────────────────── */}
          <div className="h-px w-full bg-[#e8d5c4] my-6" />

          {/* ── Account Links ──────────────────────────── */}
          <div className="flex w-full flex-col items-start">
            <Link
              href="/account"
              onClick={onClose}
              className="flex w-full items-center gap-3 py-3.5 group"
            >
              <User className="w-[18px] h-[18px] text-[#8b7b6b] group-hover:text-[#d4a574] transition-colors duration-150 flex-none" />
              <span className="font-['DM_Sans',sans-serif] text-[16px] font-[500] leading-[24px] text-[#3d2b1f] group-hover:text-[#6b3a2a] transition-colors duration-150">
                My Account
              </span>
            </Link>

            <Link
              href="/orders"
              onClick={onClose}
              className="flex w-full items-center gap-3 py-3.5 group"
            >
              <Package className="w-[18px] h-[18px] text-[#8b7b6b] group-hover:text-[#d4a574] transition-colors duration-150 flex-none" />
              <span className="font-['DM_Sans',sans-serif] text-[16px] font-[500] leading-[24px] text-[#3d2b1f] group-hover:text-[#6b3a2a] transition-colors duration-150">
                Order Tracking
              </span>
            </Link>

            <Link
              href="/wishlist"
              onClick={onClose}
              className="flex w-full items-center gap-3 py-3.5 group"
            >
              <Heart className="w-[18px] h-[18px] text-[#8b7b6b] group-hover:text-[#d4a574] transition-colors duration-150 flex-none" />
              <span className="font-['DM_Sans',sans-serif] text-[16px] font-[500] leading-[24px] text-[#3d2b1f] group-hover:text-[#6b3a2a] transition-colors duration-150">
                Wishlist
              </span>
            </Link>

            <Link
              href="/cart"
              onClick={onClose}
              className="flex w-full items-center gap-3 py-3.5 group"
            >
              <ShoppingBag className="w-[18px] h-[18px] text-[#8b7b6b] group-hover:text-[#d4a574] transition-colors duration-150 flex-none" />
              <span className="font-['DM_Sans',sans-serif] text-[16px] font-[500] leading-[24px] text-[#3d2b1f] group-hover:text-[#6b3a2a] transition-colors duration-150">
                Cart
              </span>
              {cartCount > 0 && (
                <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#d4a574]">
                  <span className="font-['DM_Sans',sans-serif] text-[10px] font-[600] leading-[10px] text-white">
                    {cartCount}
                  </span>
                </div>
              )}
            </Link>
          </div>

          {/* ── Divider ────────────────────────────────── */}
          <div className="h-px w-full bg-[#e8d5c4] my-6" />

          {/* ── CTAs ───────────────────────────────────── */}
          <div className="flex w-full flex-col items-start gap-3">
            <Link href="/products" onClick={onClose} className="w-full">
              <button
                className="
                  flex h-14 w-full items-center justify-center gap-2
                  rounded-full bg-[#6B3A2A] hover:bg-[#5a2f22] active:bg-[#6B3A2A]
                  shadow-[0_4px_16px_-4px_rgba(107,58,42,0.3)]
                  transition-all duration-200 group
                "
              >
                <span className="font-['DM_Sans',sans-serif] text-base font-[600] text-white tracking-wide">
                  Shop Now
                </span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </Link>

            <Link href="/consultation" onClick={onClose} className="w-full">
              <div
                className="
                  flex h-14 w-full items-center justify-center gap-2
                  rounded-full border-2 border-[#d4a574]
                  hover:bg-[#f5ede4] active:bg-[#eddfd0]
                  transition-all duration-200 cursor-pointer
                "
              >
                <Calendar className="w-4 h-4 text-[#d4a574] flex-none" />
                <span className="font-['DM_Sans',sans-serif] text-base font-[600] text-[#d4a574]">
                  Book a Consultation
                </span>
              </div>
            </Link>
          </div>

          {/* ── Spacer ─────────────────────────────────── */}
          <div className="flex-1 min-h-10" />

          {/* ── Footer ─────────────────────────────────── */}
          <div className="flex w-full flex-col items-center gap-4 pb-2 mt-10">
            {/* Social icons */}
            <div className="flex items-center gap-6">
              {[
                { icon: Music2, label: "TikTok", href: "#" },
                { icon: MessageCircle, label: "WhatsApp", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex h-10 w-10 flex-none items-center justify-center
                    rounded-full bg-[#f5ede4]
                    hover:bg-[#eddfd0] hover:scale-105
                    active:scale-95
                    transition-all duration-150
                  "
                >
                  <Icon className="w-[18px] h-[18px] text-[#3d2b1f]" />
                </a>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex flex-col items-center gap-1">
              <span className="font-['DM_Sans',sans-serif] text-xs text-[#8b7b6b]">
                hello@luxecrown.com
              </span>
              <span className="font-['DM_Sans',sans-serif] text-xs text-[#8b7b6b]">
                +1 (310) 555-LUXE
              </span>
            </div>

            {/* Legal links */}
            <div className="flex items-center gap-4">
              {["Privacy Policy", "Terms", "Shipping"].map((item, i, arr) => (
                <React.Fragment key={item}>
                  <Link
                    href="#"
                    onClick={onClose}
                    className="font-['DM_Sans',sans-serif] text-xs text-[#8b7b6b] hover:text-[#3d2b1f] transition-colors duration-150"
                  >
                    {item}
                  </Link>
                  {i < arr.length - 1 && (
                    <span className="font-['DM_Sans',sans-serif] text-xs text-[#e8d5c4]">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Copyright */}
            <span className="font-['DM_Sans',sans-serif] text-xs text-[#d4a574]">
              © 2024 LUXE CROWN
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
