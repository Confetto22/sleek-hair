import { CheckoutHeader } from "@/components/checkout/CheckoutHeader";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full flex-col bg-[#faf5ef] min-h-screen">
      <CheckoutHeader />
      {children}
      <div className="flex w-full items-center justify-center border-t border-solid border-[#e8d5c4] px-4 py-8 md:px-16 mt-auto">
        <span className="text-xs md:text-sm font-medium text-[#8b7b6b] text-center">
          LUXE CROWN © 2024 · Privacy Policy · Terms of Service
        </span>
      </div>
    </div>
  );
}
