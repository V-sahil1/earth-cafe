import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA, PageHero } from "@/components/sections";
import { Icon, Photo, Section } from "@/components/ui";
import { articles } from "@/data/site";

export const metadata: Metadata = {
  title: "The Journal",
  description: "Stories on nutrition, slow living and Indian food heritage from Earth Café.",
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Read & Reflect"
        title="FROM THE EARTH."
        italic="Stories to savour."
        description="Notes from our kitchens on colour, nourishment, slow mornings and the food traditions that inspire us."
      />
      <Section>
        <div data-anim="stagger" className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/journal/${a.slug}`}
              className="group rounded-3xl overflow-hidden bg-surface-container-low shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              <div data-anim="image" data-parallax="6" className="relative aspect-[16/10] overflow-hidden">
                <Photo
                  src={a.image}
                  alt={a.title}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block mb-3">
                    {a.category} • {a.readTime}
                  </span>
                  <h2 className="font-headline-md text-headline-md text-primary mb-3 group-hover:text-secondary transition-colors">
                    {a.title}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">{a.excerpt}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-surface-container flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase text-secondary">{a.volume}</span>
                  <Icon name="north_east" className="text-primary text-[20px]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}
