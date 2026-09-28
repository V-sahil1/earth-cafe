import type { Metadata } from "next";
import TextPage from "@/components/TextPage";

export const metadata: Metadata = { title: "Terms of Service" };

// NOTE: placeholder copy — have this reviewed before launch.
export default function TermsPage() {
  return (
    <TextPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="A few simple terms for using this website and our online services."
      sections={[
        {
          heading: "Menu & pricing",
          body: <p>Menu items, prices and opening hours may change seasonally. Prices are listed in Indian Rupees and are subject to applicable taxes.</p>,
        },
        {
          heading: "Reservations & orders",
          body: <p>Reservation requests are confirmed by phone. Online orders are subject to availability at your chosen café.</p>,
        },
        {
          heading: "Content",
          body: <p>All photography, text and branding on this site belong to Earth Café India Private Limited and may not be reused without permission.</p>,
        },
      ]}
    />
  );
}
