import type { Metadata } from "next";
import { FinalCTA, IntroStatement, PageHero, Philosophy, VibeSection } from "@/components/sections";
import { Eyebrow, Icon, Section } from "@/components/ui";
import { IMG } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Food that feels good. The philosophy behind Earth Café, Mumbai.",
};

const promises = [
  { icon: "compost", title: "Zero Refined Sugar", text: "Sweetness comes from fruit, dates, maple and raw honey — never refined sugar." },
  { icon: "eco", title: "Plant-Forward", text: "A fully vegetarian kitchen with a menu that is largely vegan by default." },
  { icon: "agriculture", title: "Seasonal Produce", text: "We cook with what is fresh and in season, prepared every morning." },
  { icon: "coffee", title: "Local Roasts", text: "Shade-grown coffee from Karnataka and Kerala, roasted in micro-batches." },
];

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Est. 2019 • Mumbai"
        title="GOOD FOOD."
        italic="Good energy."
        description="Earth Café began with a simple idea: healthy food should be joyful, colourful and craveable — and the room you eat it in should feel like a deep breath."
        image={IMG.marbleWall}
        imageAlt="Guest at a marble table beside the fluted mint wall"
      />
      <IntroStatement />
      <Philosophy />
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Eyebrow className="text-secondary font-bold">Our Promise</Eyebrow>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mt-2">
            WHAT WE STAND FOR
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
