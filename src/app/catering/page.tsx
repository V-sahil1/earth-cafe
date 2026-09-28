import type { Metadata } from "next";
import RequestForm from "@/components/RequestForm";
import { FinalCTA, PageHero } from "@/components/sections";
import { Eyebrow, Icon, Section } from "@/components/ui";
import { IMG } from "@/data/site";

export const metadata: Metadata = {
  title: "Mindful Gatherings & Catering",
  description: "Plant-forward catering and private gatherings by Earth Café, Mumbai.",
};

const offerings = [
  { icon: "celebration", title: "Celebrations", text: "Birthdays, baby showers and intimate dinners with shared platters and bespoke desserts." },
  { icon: "business_center", title: "Corporate Lunches", text: "Nourish bowls, wraps and cold-pressed sips delivered to offices across Mumbai." },
  { icon: "self_improvement", title: "Wellness Workshops", text: "Host yoga brunches, book clubs and slow-living sessions in our cafés." },
];

export default function CateringPage() {
  return (
    <>
      <PageHero
        eyebrow="Mindful Gatherings"
        title="GOOD FOOD."
        italic="Good people."
        description="From office lunches to sunlit celebrations, we bring the Earth Café table to your gathering."
        image={IMG.skewers}
        imageAlt="Tandoori paneer satay platter"
      />
      <Section>
        <div data-anim="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((o) => (
            <div key={o.title} className="p-8 rounded-3xl bg-surface-container-low">
              <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary mb-5">
                <Icon name={o.icon} />
              </div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-2">{o.title}</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">{o.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Eyebrow className="text-secondary font-bold">Plan with us</Eyebrow>
            <h2 data-anim="lines" className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mt-2 mb-4">
              TELL US ABOUT YOUR GATHERING
            </h2>
            <p data-anim="fade" className="font-body-lg text-body-lg text-on-surface-variant">
              Share a few details and our events team will put together a menu that suits your group, budget and
              dietary needs.
            </p>
          </div>
          <div data-anim="fade" data-delay="0.2" className="lg:col-span-7">
            <RequestForm kind="catering" />
          </div>
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}
