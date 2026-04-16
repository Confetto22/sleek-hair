import React from "react";
import { Navbar } from "@/components/shared/navbar/Navbar";
import { Footer } from "@/components/shared/footer/Footer";
import { ProductBreadcrumb } from "@/components/product-detail/ProductBreadcrumb";
import { ProductGallery } from "@/components/product-detail/ProductGallery";
import { ProductInfo } from "@/components/product-detail/ProductInfo";
import { ProductTabs } from "@/components/product-detail/ProductTabs";
import { ProductAccordions } from "@/components/product-detail/ProductAccordions";
import { ProductReviews } from "@/components/product-detail/ProductReviews";
import { RelatedProducts } from "@/components/product-detail/RelatedProducts";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // In a real application, fetch product data using params.id
  // const product = await getProductById(params.id);

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-[#faf5ef]">
      <main className="flex flex-col items-center w-full">
        {/* Breadcrumb Container */}
        <div className="flex w-full max-w-7xl items-start px-4 md:px-16 py-4 mt-6">
          <ProductBreadcrumb
            category="Frontal Wigs"
            productName="Silky Straight HD Lace Frontal Wig"
          />
        </div>

        {/* Hero Gallery & Info Container */}
        <div className="flex w-full max-w-7xl flex-wrap lg:flex-nowrap items-start justify-center gap-8 lg:gap-12 px-4 md:px-16 py-8">
          <ProductGallery />
          <ProductInfo />
        </div>

        {/* Detailed Tabs Container (Description, Specs) */}
        <div className="flex w-full max-w-7xl flex-col items-start gap-8 px-4 md:px-16 py-12 md:py-16">
          <ProductTabs />
        </div>

        {/* Extra Information Accordions Container (Delivery, Returns, Care) */}
        <div className="flex w-full max-w-7xl flex-col items-start gap-4 px-4 md:px-16 py-8">
          <ProductAccordions />
        </div>

        {/* Social Proof / Reviews Container */}
        <div className="flex w-full max-w-7xl flex-col gap-10 px-4 md:px-16 py-12 md:py-16">
          <ProductReviews />
        </div>

        {/* Related Products Upsell */}
        <div className="flex w-full max-w-7xl flex-col gap-10 px-4 md:px-16 py-12 md:py-16">
          <RelatedProducts />
        </div>
      </main>
    </div>
  );
}
