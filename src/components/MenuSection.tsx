"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  const grid = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  // Re-animate dishes whenever the category filter changes
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (!grid.current || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      grid.current.children,
      { autoAlpha: 0, y: 40, rotateX: -12 },
      { autoAlpha: 1, y: 0, rotateX: 0, duration: 0.8, ease: "expo.out", stagger: 0.07, overwrite: true },
    );
  }, [category]);

  return (
    <section className="w-full bg-surface-container-low py-16 md:py-20 lg:py-28 px-5 sm:px-6 lg:px-12" id="editorial-menu">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <Eyebrow>Our Compass</Eyebrow>
          <h2 data-anim="chars" className="font-headline-lg text-headline-lg-mobile md:text-headline-lg lg:text-[46px] text-primary tracking-tight mt-2 mb-4">
            THE MENU
          </h2>
          <p data-anim="fade" data-delay="0.3" className="font-headline-sm text-headline-sm italic text-secondary font-normal">
            Wholesome. Colourful. Seriously delicious.
          </p>
        </div>

        <div
          data-anim="stagger"
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

        <div
          ref={grid}
          data-anim="fade"
          className="[perspective:1200px] grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10 bg-surface-container-lowest p-6 sm:p-8 lg:p-12 rounded-3xl shadow-sm">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 sm:gap-5 group pb-2 md:pb-6">
              {full && item.image && (
                <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-surface-container shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="96px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="flex flex-col flex-1 min-w-0">
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
            </div>
          ))}
        </div>

        <div data-anim="fade" className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-surface-container-high/60 gap-4 text-center sm:text-left">
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
