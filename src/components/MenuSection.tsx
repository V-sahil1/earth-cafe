"use client";

import Link from "next/link";
import { useState } from "react";
import { menuCategories, menuItems, type MenuCategory } from "@/data/site";
import { Eyebrow, Icon, rupees } from "./ui";

export default function MenuSection({
  full = false,
  initialCategory = "all",
}: {
  /** Home shows the six signature dishes; /menu shows everything. */
  full?: boolean;
  initialCategory?: "all" | MenuCategory;
}) {
  const [category, setCategory] = useState<"all" | MenuCategory>(initialCategory);
  const source = full ? menuItems : menuItems.filter((m) => m.featured);
  const items = category === "all" ? source : source.filter((m) => m.category === category);

  return (
    <section className="w-full bg-surface-container-low py-16 md:py-20 lg:py-28 px-5 sm:px-6 lg:px-12" id="editorial-menu">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <Eyebrow>Our Compass</Eyebrow>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg lg:text-[46px] text-primary tracking-tight mt-2 mb-4">
            THE MENU
          </h2>
          <p className="font-headline-sm text-headline-sm italic text-secondary font-normal">
            Wholesome. Colourful. Seriously delicious.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Menu categories"
          className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-6 mb-8 md:mb-12 scrollbar-none -mx-5 px-5 sm:mx-0 sm:px-0"
        >
          {menuCategories.map((c) => {
            const active = c.id === category;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setCategory(c.id)}
                className={`px-5 py-2.5 rounded-full font-label-md text-label-md uppercase tracking-wider transition-all duration-200 shrink-0 ${
                  active
                    ? "bg-primary-container text-on-primary"
                    : "bg-surface-container-lowest text-on-surface-variant hover:text-primary"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10 bg-surface-container-lowest p-6 sm:p-8 lg:p-12 rounded-3xl shadow-sm">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col group pb-2 md:pb-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                  {item.name}
                </h3>
                <span className="font-title-md text-title-md text-primary font-semibold shrink-0">{rupees(item.price)}</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">{item.description}</p>
              <div className="flex items-center gap-2 mt-3">
                <span
                  className={`font-label-sm text-label-sm uppercase px-2 py-0.5 rounded ${
                    item.accent ? "text-secondary bg-secondary-fixed/50" : "text-primary bg-surface-container"
                  }`}
                >
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-surface-container-high/60 gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Icon name="menu_book" className="text-primary text-[24px]" />
            <span className="font-body-md text-body-md text-on-surface font-medium">
              {full
                ? "Have allergies or dietary preferences? Our guide explains every tag."
                : "Looking for our full dine-in menu with every dish and drink?"}
            </span>
          </div>
          <Link
            href={full ? "/dietary-guide" : "/menu"}
            className="font-label-lg text-label-lg uppercase tracking-wider text-primary underline underline-offset-4 hover:text-primary-container"
          >
            {full ? "Read the Dietary Guide" : "View Complete Menu"}
          </Link>
        </div>
      </div>
    </section>
  );
}
