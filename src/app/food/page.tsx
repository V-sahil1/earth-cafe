import type { Metadata } from "next";
import { ColorOnPlate, Favourites, FinalCTA, PageHero } from "@/components/sections";
import { Eyebrow, Section } from "@/components/ui";
import { IMG } from "@/data/site";

export const metadata: Metadata = {
  title: "Food & Nutrition",
  description: "Colour on your plate — wholesome, plant-forward food made fresh in Mumbai.",
};

const faqs = [
  {
    q: "Is everything vegetarian?",
    a: "Yes. Earth Café is a 100% vegetarian kitchen, and most of the menu is vegan by default. Dishes with dairy or honey are clearly tagged, and many can be made vegan on request.",
  },
  {
    q: "Do you use refined sugar?",
    a: "No. We sweeten with fruit, dates, jaggery, coconut sugar, maple and raw honey.",
  },
  {
    q: "What gluten-free options do you have?",
    a: "Look for the GF tag — our amaranth bowls, nourish bowls and satay platter are gluten-free. Please tell us about coeliac disease so our kitchen can take extra care.",
  },
  {
    q: "Which dishes are highest in protein?",
    a: "The Ruby Beetroot Falafel Roll, Golden Turmeric Tofu Hash and Tandoori Cottage Cheese Satay are our protein-rich favourites.",
  },
];

export default function FoodPage() {
  return (
    <>
      <PageHero
        eyebrow="Culinary Canvas"
        title="COLOUR ON"
        italic="your plate."
        description="Let the food be the colour. Every hue on our plates reflects naturally occurring phytonutrients, seasonal harvests and whole ingredients."
        image={IMG.bruschetta}
        imageAlt="Heirloom tomato bruschetta with basil and cashew crema"
      />
      <ColorOnPlate />
      <Favourites />
      <Section className="bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Eyebrow className="text-secondary font-bold">Nutrition Notes</Eyebrow>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mt-2">
              GOOD TO KNOW
            </h2>
          </div>
          {/* Nutritional accordion from the design system */}
          <div className="lg:col-span-8 divide-y divide-[rgba(38,63,50,0.12)] border-y border-[rgba(38,63,50,0.12)]">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none font-headline-sm text-headline-sm text-primary [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="font-serif text-[28px] leading-none text-primary-container transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}
