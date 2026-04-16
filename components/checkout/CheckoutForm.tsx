"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Lock, Truck, Zap, Check, CreditCard, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CheckoutForm = () => {
  const [deliveryMethod, setDeliveryMethod] = useState<"standard" | "express">(
    "standard",
  );
  const [paymentMethod, setPaymentMethod] = useState<
    "credit" | "mobile" | "paylater"
  >("credit");

  const InputField = ({
    label,
    type = "text",
    placeholder,
    optional = false,
    icon = null,
  }: any) => (
    <div className="flex w-full flex-col items-start gap-1.5">
      <label className="text-sm font-semibold text-[#3d2b1f]">
        {label}{" "}
        {optional && (
          <span className="text-[#8b7b6b] font-normal">(optional)</span>
        )}
      </label>
      <div className="relative w-full">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8b7b6b]">
            {icon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`h-11 w-full rounded-lg border border-[#e8d5c4] bg-white px-4 py-2 text-sm text-[#3d2b1f] placeholder:text-[#8b7b6b] outline-none hover:border-[#d4a574] focus:border-[#d4a574] transition-colors ${icon ? "pl-10" : ""}`}
        />
      </div>
    </div>
  );

  return (
    <div className="flex min-w-0 grow flex-col items-start gap-10">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-2 md:gap-3">
        <span className="text-sm font-semibold text-[#3d2b1f] underline underline-offset-4 decoration-[#6B3A2A]">
          Information
        </span>
        <span className="text-sm text-[#c4a882]">—</span>
        <span className="text-sm text-[#8b7b6b]">Shipping</span>
        <span className="text-sm text-[#c4a882]">—</span>
        <span className="text-sm text-[#8b7b6b]">Payment</span>
      </div>

      {/* Contact Information */}
      <div className="flex w-full flex-col items-start gap-5">
        <div className="flex w-full flex-col md:flex-row md:items-center justify-between gap-2">
          <h2 className="font-sans text-[20px] md:text-[22px] font-semibold text-[#3d2b1f]">
            Contact Information
          </h2>
          <div className="flex items-center gap-1.5 text-sm">
            <span className="text-[#8b7b6b]">Already have an account?</span>
            <button className="font-semibold text-[#6B3A2A] hover:text-[#5a2f22]">
              Sign in
            </button>
          </div>
        </div>

        <InputField
          label="Email address"
          type="email"
          placeholder="you@example.com"
        />

        <div className="flex w-full flex-col md:flex-row gap-4">
          <InputField label="First name" placeholder="First name" />
          <InputField label="Last name" placeholder="Last name" />
        </div>

        <InputField
          label="Phone number"
          type="tel"
          placeholder="+1 (555) 000-0000"
        />

        <label className="flex items-center gap-3 cursor-pointer group mt-2">
          <div className="flex h-5 w-5 items-center justify-center rounded border border-[#c4a882] bg-white group-hover:border-[#6B3A2A] transition-colors">
            {/* Native Checkbox could go here, simulating unchecked */}
          </div>
          <span className="text-sm text-[#3d2b1f]">
            Send me updates about my order via email
          </span>
        </label>
      </div>

      <div className="flex h-px w-full bg-[#e8d5c4]" />

      {/* Shipping Address */}
      <div className="flex w-full flex-col items-start gap-5">
        <h2 className="font-sans text-[20px] md:text-[22px] font-semibold text-[#3d2b1f]">
          Shipping Address
        </h2>
        <InputField label="Address line 1" placeholder="123 Main Street" />
        <InputField
          label="Address line 2"
          optional
          placeholder="Apartment, suite, etc."
        />

        <div className="flex w-full flex-col md:flex-row gap-4">
          <InputField label="City" placeholder="City" />
          <InputField label="State / Region" placeholder="State" />
        </div>

        <div className="flex w-full flex-col md:flex-row gap-4">
          <InputField label="Postal code" placeholder="10001" />

          <div className="flex w-full flex-col items-start gap-1.5">
            <label className="text-sm font-semibold text-[#3d2b1f]">
              Country
            </label>
            <select className="h-11 w-full rounded-lg border border-[#e8d5c4] bg-white px-4 py-2 text-sm text-[#3d2b1f] outline-none hover:border-[#d4a574] focus:border-[#d4a574] transition-colors appearance-none">
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="NG">Nigeria</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex h-px w-full bg-[#e8d5c4]" />

      {/* Delivery Method */}
      <div className="flex w-full flex-col items-start gap-5">
        <h2 className="font-sans text-[20px] md:text-[22px] font-semibold text-[#3d2b1f]">
          Delivery Method
        </h2>

        <div className="flex w-full flex-col md:flex-row gap-4">
          {/* Standard Shipping Card */}
          <button
            onClick={() => setDeliveryMethod("standard")}
            className={`flex flex-col flex-1 items-start gap-3 rounded-2xl border-2 px-5 py-4 transition-colors ${
              deliveryMethod === "standard"
                ? "border-[#6b3a2a] bg-[#6b3a2a0d]"
                : "border-[#e8d5c4] bg-white hover:border-[#c4a882]"
            }`}
          >
            <div className="flex w-full items-start justify-between">
              <div className="flex items-center gap-2.5">
                <Truck className="w-5 h-5 text-[#d4a574]" />
                <span className="font-semibold text-[#3d2b1f]">
                  Standard Shipping
                </span>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="font-semibold text-[#3d2b1f]">Free</span>
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full ${deliveryMethod === "standard" ? "bg-[#6b3a2a]" : "border-2 border-[#e8d5c4]"}`}
                >
                  {deliveryMethod === "standard" && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
              </div>
            </div>
            <span className="text-sm text-[#8b7b6b] pl-8 line-clamp-1 text-left">
              5–7 business days
            </span>
          </button>

          {/* Express Shipping Card */}
          <button
            onClick={() => setDeliveryMethod("express")}
            className={`flex flex-col flex-1 items-start gap-3 rounded-2xl border-2 px-5 py-4 transition-colors ${
              deliveryMethod === "express"
                ? "border-[#6b3a2a] bg-[#6b3a2a0d]"
                : "border-[#e8d5c4] bg-white hover:border-[#c4a882]"
            }`}
          >
            <div className="flex w-full items-start justify-between">
              <div className="flex items-center gap-2.5">
                <Zap className="w-5 h-5 text-[#d4a574]" />
                <span className="font-semibold text-[#3d2b1f]">
                  Express Shipping
                </span>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="font-semibold text-[#3d2b1f]">$15.00</span>
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full ${deliveryMethod === "express" ? "bg-[#6b3a2a]" : "border-2 border-[#e8d5c4]"}`}
                >
                  {deliveryMethod === "express" && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
              </div>
            </div>
            <span className="text-sm text-[#8b7b6b] pl-8 line-clamp-1 text-left">
              2–3 business days
            </span>
          </button>
        </div>
      </div>

      <div className="flex h-px w-full bg-[#e8d5c4]" />

      {/* Payment */}
      <div className="flex w-full flex-col items-start gap-5">
        <h2 className="font-sans text-[20px] md:text-[22px] font-semibold text-[#3d2b1f]">
          Payment
        </h2>

        {/* Payment Tabs */}
        <div className="flex flex-wrap items-center gap-2 w-full">
          <button
            onClick={() => setPaymentMethod("credit")}
            className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
              paymentMethod === "credit"
                ? "bg-[#3d2b1f] text-white"
                : "bg-[#f5ede4] text-[#3d2b1f]"
            }`}
          >
            Credit Card
          </button>
          <button
            onClick={() => setPaymentMethod("mobile")}
            className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
              paymentMethod === "mobile"
                ? "bg-[#3d2b1f] text-white"
                : "bg-[#f5ede4] text-[#3d2b1f]"
            }`}
          >
            Mobile Money
          </button>
          <button
            onClick={() => setPaymentMethod("paylater")}
            className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
              paymentMethod === "paylater"
                ? "bg-[#3d2b1f] text-white"
                : "bg-[#f5ede4] text-[#3d2b1f]"
            }`}
          >
            Pay Later
          </button>
        </div>

        {paymentMethod === "credit" && (
          <div className="flex w-full flex-col gap-5 pt-2">
            <InputField
              label="Card number"
              placeholder="1234 5678 9012 3456"
              icon={<CreditCard className="w-4 h-4" />}
            />

            <div className="flex w-full flex-col md:flex-row gap-4">
              <InputField label="Expiration (MM/YY)" placeholder="MM / YY" />
              <InputField label="Security code (CVV)" placeholder="123" />
            </div>

            <InputField
              label="Name on card"
              placeholder="Full name as shown on card"
            />
          </div>
        )}

        <div className="flex items-center gap-2 mt-2">
          <Lock className="w-4 h-4 text-[#8b7b6b]" />
          <span className="text-xs text-[#8b7b6b]">
            Your payment information is encrypted and secure
          </span>
        </div>
      </div>

      {/* Mobile Place Order Button */}
      <div className="flex w-full flex-col items-center gap-3 lg:hidden mt-6">
        <Link href="/order-success" className="w-full">
          <Button className="h-14 w-full flex-none rounded-full bg-[#6B3A2A] hover:bg-[#5a2f22] text-white shadow-none">
            <Lock className="w-5 h-5 mr-2" />
            Place Order · $689.04
          </Button>
        </Link>
        <div className="flex items-center gap-2 text-center mt-2">
          <Shield className="w-4 h-4 text-[#8b7b6b]" />
          <span className="text-xs font-medium text-[#8b7b6b]">
            Secure 256-bit SSL encryption
          </span>
        </div>
      </div>
    </div>
  );
};
