import type { Metadata } from "next";
import { FinalCTA, Marquee, PageHero, Philosophy, VibeSection } from "@/components/sections";
import { Founders, Journey, Welcome } from "@/components/story";
import { Eyebrow, Icon, Section } from "@/components/ui";
import { IMG } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Welcome to Earth Café — meet founders Vik & Pooja Khatwani and follow our journey from Bandra to Phoenix Palladium.",
};

const promises = [
  { icon: "compost", title: "Zero Refined Sugar", text: "Sweetness comes from fruit, dates, maple and raw honey — never refined sugar." },
  { icon: "eco", title: "Plant-Forward", text: "A fully vegetarian kitchen with a menu that is largely vegan by default." },
  { icon: "agriculture", title: "Finest Ingredients", text: "Quality, taste and the finest ingredients, prepared fresh every morning." },
  { icon: "diversity_3", title: "Community First", text: "Warmth and positivity for every guest, team member and local partner." },
];

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Welcome!"
        title="PASSION &"
        italic="creativity."
        description="Earth Café is a place driven by a deep sense of passion and creativity — and a community that believes in the power of positivity and connection."
        image={IMG.locationBandra}
        imageAlt="Inside Earth Café Bandra"
      />
      <Welcome />
      <Founders />
      <Marquee words={["Bandra", "Juhu", "BKC", "Churchgate", "Palladium"]} />
      <Journey />
      <Philosophy />
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Eyebrow className="text-secondary font-bold">Our Promise</Eyebrow>
          <h2 data-anim="chars" className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mt-2">
            WHAT WE STAND FOR
          </h2>
        </div>
        <div data-anim="stagger" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((p) => (
            <div key={p.title} className="p-8 rounded-3xl bg-surface-container-low">
              <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary mb-5">
                <Icon name={p.icon} />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{p.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <VibeSection />
      <FinalCTA />
    </>
  );
}
