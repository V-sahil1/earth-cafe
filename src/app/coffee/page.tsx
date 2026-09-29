import type { Metadata } from "next";
import { CoffeeSection, FinalCTA, InstagramSection, Marquee } from "@/components/sections";
import Image from "next/image";
import { Eyebrow, Section, rupees } from "@/components/ui";
import { menuItems } from "@/data/site";

export const metadata: Metadata = {
  title: "Artisan Coffee",
  description: "Good coffee. Slow moments. Shade-grown Indian single origins, roasted in micro-batches.",
};

export default function CoffeePage() {
  const drinks = menuItems.filter((m) => m.category === "beverages");
  return (
    <>
      <CoffeeSection headingLevel="h1" />
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Eyebrow>The Barista Bar</Eyebrow>
          <h2 data-anim="chars" className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mt-2">
            MINDFUL SIPS
          </h2>
        </div>
        <div data-anim="stagger" className="max-w-3xl mx-auto divide-y divide-[rgba(38,63,50,0.1)]">
          {drinks.map((d) => (
            <div key={d.id} className="group py-6 flex items-start gap-5">
              {d.image && (
                <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-surface-container">
                  <Image src={d.image} alt={d.name} fill sizes="96px" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              )}
              <div className="flex-1">
                <h3 className="font-headline-sm text-headline-sm text-primary">{d.name}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">{d.description}</p>
                <span className="inline-block mt-3 font-label-sm text-label-sm uppercase text-primary bg-surface-container px-2 py-0.5 rounded">
                  {d.tag}
                </span>
              </div>
              <span className="font-title-md text-title-md text-primary shrink-0">{rupees(d.price)}</span>
            </div>
          ))}
        </div>
      </Section>
      <Marquee words={["Matcha", "Cold Brew", "Pour Over", "Golden Mylk"]} />
      <InstagramSection />
      <FinalCTA />
    </>
  );
}
