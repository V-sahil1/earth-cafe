import type { Metadata } from "next";
import RequestForm from "@/components/RequestForm";
import { LocationsSection, MumbaiSpot, PageHero } from "@/components/sections";
import { Eyebrow, Section } from "@/components/ui";
import { IMG } from "@/data/site";

export const metadata: Metadata = {
  title: "Visit Us",
  description: "Find your Earth — cafés in Bandra, Juhu, BKC, Churchgate and Palladium, Mumbai.",
};

export default function VisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Mumbai Sanctuaries"
        title="FIND YOUR"
        italic="Earth."
        description="Five calm corners across Mumbai for sourdough toasts, creamy oat drinks, slow lunches and peaceful afternoon co-working."
        image={IMG.marbleWall}
        imageAlt="Marble tables and fluted mint walls inside Earth Café"
      />
      <LocationsSection />
      <Section className="bg-surface-container-low scroll-mt-20" id="reserve">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Eyebrow className="text-secondary font-bold">Table Reservations</Eyebrow>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg lg:text-[46px] text-primary tracking-tight mt-2 mb-4">
              SAVE ME
              <br />
              <span className="italic font-normal">A SEAT.</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Walk-ins are always welcome. For weekend brunches or groups, request a table and we&apos;ll call to
              confirm.
            </p>
          </div>
          <div className="lg:col-span-7">
            <RequestForm kind="reservation" />
          </div>
        </div>
      </Section>
      <MumbaiSpot />
    </>
  );
}
