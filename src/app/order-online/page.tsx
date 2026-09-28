import type { Metadata } from "next";
import OrderMenu from "@/components/OrderMenu";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Order Online",
  description: "Order wholesome plates and mindful sips directly from Earth Café.",
};

export default function OrderPage() {
  return (
    <>
      <section className="w-full bg-surface-container-lowest px-5 sm:px-6 lg:px-12 pt-12 md:pt-16 pb-10">
        <div className="max-w-7xl mx-auto text-center">
          <Eyebrow>Order Online • Direct</Eyebrow>
          <h1 data-anim="chars" className="font-display text-display-mobile md:text-display text-primary tracking-tight mt-3 mb-4">
            YOUR MINDFUL <span className="italic font-normal text-primary-container">BASKET.</span>
          </h1>
          <p data-anim="fade" data-delay="0.5" className="font-headline-sm text-headline-sm text-on-surface-variant font-normal max-w-2xl mx-auto">
            Pick your favourites and collect them fresh from your nearest Earth Café.
          </p>
        </div>
      </section>
      <OrderMenu />
    </>
  );
}
