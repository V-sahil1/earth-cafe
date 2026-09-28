import type { Metadata } from "next";
import Link from "next/link";
import TextPage from "@/components/TextPage";

export const metadata: Metadata = {
  title: "Dietary Guide",
  description: "What the tags on the Earth Café menu mean, and how we handle allergens.",
};

const tags = [
  { tag: "100% Vegan", text: "No animal products of any kind, including dairy and honey." },
  { tag: "Plant-Based", text: "Built around whole plant foods; may include honey." },
  { tag: "GF", text: "Made without gluten-containing ingredients." },
  { tag: "High Protein", text: "Around 20g of protein or more per serving from legumes, tofu or paneer." },
  { tag: "No Refined Sugar", text: "Sweetened only with fruit, dates, jaggery, coconut sugar, maple or raw honey." },
];

export default function DietaryGuidePage() {
  return (
    <TextPage
      eyebrow="Eat with confidence"
      title="Dietary Guide"
      intro="Every dish on our menu carries simple tags so you can choose what suits your body. Here is what they mean."
      sections={[
        {
          heading: "Menu tags",
          body: (
            <ul className="space-y-3">
              {tags.map((t) => (
                <li key={t.tag} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                  <span className="shrink-0 w-fit font-label-sm text-label-sm uppercase text-primary bg-surface-container px-2 py-0.5 rounded">
                    {t.tag}
                  </span>
                  <span>{t.text}</span>
                </li>
              ))}
            </ul>
          ),
        },
        {
          heading: "Allergens",
          body: (
            <>
              <p>
                Our kitchens handle nuts, sesame, soy, gluten and dairy. While we take great care, we cannot guarantee
                that any dish is completely free from traces of these allergens.
              </p>
              <p>Please tell your server about any allergy or intolerance before ordering — we are always happy to help.</p>
            </>
          ),
        },
        {
          heading: "Adjustments",
          body: (
            <p>
              Many dishes can be made vegan, gluten-free or less spicy on request. Ask at the counter or add a note
              when you <Link href="/visit-us#reserve" className="text-primary underline underline-offset-4">reserve a table</Link>.
            </p>
          ),
        },
      ]}
    />
  );
}
