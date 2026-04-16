"use client";

import React from "react";
import {
  Check,
  Mail,
  User,
  Shield,
  Box,
  Heart,
  ShoppingBag,
  MapPin,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Stepper = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { num: 1, label: "Order Placed" },
    { num: 2, label: "Processing" },
    { num: 3, label: "Shipped" },
    { num: 4, label: "Delivered" },
  ];

  return (
    <div className="flex w-full items-start justify-between relative mt-4 mb-2">
      {steps.map((step, idx) => {
        const isActive = step.num === currentStep;
        const isCompleted = step.num < currentStep;
        const isPending = step.num > currentStep;

        return (
          <div
            key={idx}
            className="flex flex-col items-center flex-1 relative z-10"
          >
            <div
              className={`flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full text-xs md:text-sm font-semibold transition-colors duration-200
                ${isCompleted || isActive ? "bg-wine text-white" : "bg-surface border-2 border-border text-muted-foreground"}
              `}
            >
              {isCompleted ? (
                <Check className="h-3 w-3 md:h-4 md:w-4" />
              ) : (
                step.num
              )}
            </div>

            <span
              className={`mt-2 text-[10px] md:text-xs font-medium text-center
                ${isActive || isCompleted ? "text-foreground" : "text-muted-foreground"}
              `}
            >
              {step.label}
            </span>

            {/* Connecting Line */}
            {idx < steps.length - 1 && (
              <div
                className={`absolute top-3 md:top-4 left-[50%] w-full h-[2px] -z-10
                  ${isCompleted ? "bg-wine" : "bg-border"}
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default function OrderSuccessPage() {
  return (
    <main className="flex h-full w-full flex-col items-center bg-background md:pt-4">
      <div className="flex w-full max-w-3xl flex-col items-center px-4 py-8 md:px-8 md:py-12">
        {/* Header Section */}
        <div className="flex w-full flex-col items-center gap-5">
          <div className="flex h-20 w-20 flex-none items-center justify-center rounded-full bg-wine/10">
            <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-wine">
              <Check className="h-6 w-6 text-white" />
            </div>
          </div>
          <h1 className="text-2xl md:text-4xl font-serif text-text text-center">
            Order Confirmed!
          </h1>
          <p className="max-w-md text-sm md:text-base text-muted-foreground text-center">
            Thank you for choosing LUXE CROWN. Your order has been placed
            successfully.
          </p>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs md:text-sm text-muted-foreground">
              A confirmation email has been sent to queen@luxecrown.com
            </span>
          </div>
        </div>

        {/* Order Details Grid */}
        <div className="flex w-full flex-col items-start gap-4 md:gap-6 rounded-2xl md:rounded-3xl bg-surface px-5 py-6 md:px-8 md:py-8 shadow-light mt-8">
          <h2 className="text-lg font-serif font-semibold text-foreground">
            Order Details
          </h2>
          <div className="flex h-px w-full flex-none items-start bg-border" />

          <div className="w-full grid grid-cols-2 gap-4 md:gap-6">
            <div className="flex flex-col items-start gap-1">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Order Number
              </span>
              <span className="text-sm md:text-base font-semibold text-foreground">
                #LC-2024-8847
              </span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Order Date
              </span>
              <span className="text-sm md:text-base font-semibold text-foreground">
                December 15, 2024
              </span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Payment Method
              </span>
              <span className="text-sm md:text-base font-semibold text-foreground">
                Visa ending in 4242
              </span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Estimated Delivery
              </span>
              <span className="text-sm md:text-base font-semibold text-wine">
                Dec 20 – Dec 22
              </span>
            </div>
          </div>

          <div className="flex h-px w-full flex-none items-start bg-border mt-2" />

          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-sm md:text-base font-semibold text-foreground">
              Delivery Status
            </span>
            <Stepper currentStep={2} />
            <p className="w-full text-xs text-muted-foreground text-center mt-2">
              Your order is being carefully prepared and inspected for quality.
            </p>
          </div>
        </div>

        {/* Items Ordered List */}
        <div className="flex w-full flex-col items-start gap-4 md:gap-5 rounded-2xl md:rounded-3xl bg-surface px-5 py-6 md:px-8 md:py-8 shadow-light mt-4 md:mt-8">
          <h2 className="text-lg font-serif font-semibold text-foreground">
            Items Ordered
          </h2>
          <div className="flex h-px w-full flex-none items-start bg-border" />

          {/* Item 1 */}
          <div className="flex w-full items-start gap-4">
            <img
              className="h-16 w-16 md:h-20 md:w-20 flex-none rounded-xl object-cover"
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&q=80"
              alt="Wig"
            />
            <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
              <span className="text-sm md:text-base font-medium text-foreground">
                Brazilian Body Wave HD Lace Frontal Wig
              </span>
              <span className="text-xs md:text-sm text-muted-foreground">
                18" · 180% Density · HD Lace · Qty: 1
              </span>
              <span className="hidden md:inline text-sm font-semibold text-foreground mt-1">
                $289.00
              </span>
            </div>
            <span className="text-sm font-semibold text-foreground md:hidden mt-1">
              $289.00
            </span>
          </div>

          <div className="flex h-px w-full flex-none items-start bg-background" />

          {/* Item 2 */}
          <div className="flex w-full items-start gap-4">
            <img
              className="h-16 w-16 md:h-20 md:w-20 flex-none rounded-xl object-cover"
              src="https://images.unsplash.com/photo-1595959183082-7b570b7e1e6b?w=200&q=80"
              alt="Wig"
            />
            <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
              <span className="text-sm md:text-base font-medium text-foreground">
                Silky Straight HD Lace Frontal Wig
              </span>
              <span className="text-xs md:text-sm text-muted-foreground">
                20" · 150% Density · HD Lace · Qty: 1
              </span>
              <span className="hidden md:inline text-sm font-semibold text-foreground mt-1">
                $349.00
              </span>
            </div>
            <span className="text-sm font-semibold text-foreground md:hidden mt-1">
              $349.00
            </span>
          </div>

          <div className="flex h-px w-full flex-none items-start bg-background" />

          {/* Item 3 */}
          <div className="flex w-full items-start gap-4">
            <img
              className="h-16 w-16 md:h-20 md:w-20 flex-none rounded-xl object-cover"
              src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=200&q=80"
              alt="Wig"
            />
            <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
              <span className="text-sm md:text-base font-medium text-foreground">
                Deep Wave 5x5 Closure Wig
              </span>
              <span className="text-xs md:text-sm text-muted-foreground">
                16" · 150% Density · Closure · Qty: 2
              </span>
              <span className="hidden md:inline text-sm font-semibold text-foreground mt-1">
                $518.00
              </span>
            </div>
            <span className="text-sm font-semibold text-foreground md:hidden mt-1">
              $518.00
            </span>
          </div>

          <div className="flex h-px w-full flex-none items-start bg-border mt-2" />

          <div className="flex w-full flex-col items-start gap-3 w-full max-w-[300px] ml-auto">
            <div className="flex w-full items-center justify-between">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="text-sm font-medium text-foreground">
                $1,156.00
              </span>
            </div>
            <div className="flex w-full items-center justify-between">
              <span className="text-sm text-muted-foreground">Shipping</span>
              <span className="text-sm font-semibold text-wine">Free</span>
            </div>
            <div className="flex w-full items-center justify-between">
              <span className="text-sm text-muted-foreground">Tax</span>
              <span className="text-sm font-medium text-foreground">
                $92.48
              </span>
            </div>
          </div>

          <div className="flex h-0.5 w-full flex-none items-start bg-border" />

          <div className="flex w-full items-center justify-between">
            <span className="text-base md:text-lg font-serif font-semibold text-foreground">
              Total Paid
            </span>
            <span className="text-lg md:text-xl font-bold text-foreground">
              $1,248.48
            </span>
          </div>
        </div>

        {/* Create Account Banner */}
        <div className="flex w-full flex-col md:flex-row items-center gap-4 md:gap-5 rounded-2xl md:rounded-3xl bg-primary/20 px-5 py-6 md:px-8 md:py-6 mt-4 md:mt-6 text-center md:text-left">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-accent/20">
            <User className="h-6 w-6 text-accent" />
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-center md:items-start gap-1 text-center md:text-left">
            <span className="text-sm md:text-base font-semibold text-foreground">
              Save Your Details for Next Time
            </span>
            <span className="text-xs md:text-sm text-muted-foreground">
              Create an account to track orders, save addresses, and get
              exclusive offers.
            </span>
          </div>
          <Button className="w-full md:w-auto bg-wine text-white hover:bg-[#5a2f22]">
            Create Account
          </Button>
        </div>

        {/* Features / Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full mt-12 px-4">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-accent/10">
              <Shield className="h-5 w-5 text-accent" />
            </div>
            <span className="text-sm font-semibold text-foreground">
              100% Authentic
            </span>
            <p className="text-xs md:text-sm text-muted-foreground text-center max-w-[200px]">
              Every wig is hand-inspected for quality before shipping.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-accent/10">
              <Box className="h-5 w-5 text-accent" />
            </div>
            <span className="text-sm font-semibold text-foreground">
              Premium Packaging
            </span>
            <p className="text-xs md:text-sm text-muted-foreground text-center max-w-[200px]">
              Beautifully packaged with care to protect your investment.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-accent/10">
              <Heart className="h-5 w-5 text-accent" />
            </div>
            <span className="text-sm font-semibold text-foreground">
              Dedicated Support
            </span>
            <p className="text-xs md:text-sm text-muted-foreground text-center max-w-[200px]">
              Our styling experts are here to help you every step of the way.
            </p>
          </div>
        </div>

        {/* Footer / Quote */}
        <div className="flex flex-col items-center gap-3 mt-16 mb-8">
          <p className="max-w-[576px] font-serif text-lg md:text-xl text-foreground text-center italic">
            "You deserve to feel beautiful, confident, and unstoppable."
          </p>
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mt-2">
            — LUXE CROWN
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 w-full md:w-auto">
          <Button
            className="w-full md:w-auto bg-wine text-white hover:bg-wine/90 h-12 px-8 rounded-full text-base"
            size="lg"
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            Continue Shopping
          </Button>
          <Button
            variant="outline"
            className="w-full md:w-auto h-12 px-8 rounded-full text-base bg-transparent border-2 border-border text-foreground hover:bg-surface"
            size="lg"
          >
            <MapPin className="mr-2 h-5 w-5" />
            Track Your Order
          </Button>
        </div>

        {/* Support Link */}
        <div className="flex items-center gap-2 mt-8">
          <span className="text-sm text-muted-foreground">
            Need help with your order?
          </span>
          <Button
            variant="link"
            className="text-accent underline hover:text-accent/80 p-0 h-auto"
          >
            <Headphones className="mr-1 h-4 w-4" />
            Contact Support
          </Button>
        </div>
      </div>
    </main>
  );
}
