import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { CheckoutSummary } from "@/components/checkout/CheckoutSummary";

export default function CheckoutPage() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full max-w-7xl flex-col-reverse lg:flex-row items-start gap-8 lg:gap-12 px-4 py-8 md:px-8 lg:px-16 lg:py-12 mx-auto">
        <CheckoutForm />
        
        {/* Desktop Sticky Summary Pane */}
        <div className="w-full lg:w-auto">
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
}
