import type { Metadata } from "next";
import MenuSection from "@/components/MenuSection";
import { Favourites, FinalCTA, PageHero } from "@/components/sections";
import { IMG } from "@/data/site";

export const metadata: Metadata = {
  title: "Menu",
  description: "Wholesome. Colourful. Seriously delicious. The full Earth Café menu.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Compass"
        title="THE MENU."
        italic="Seriously delicious."
        description="Breakfast bowls, sourdough toasts, wraps, nourish bowls and slow coffee — all plant-forward, all made fresh every morning."
        image={IMG.falafel}
        imageAlt="Ruby beetroot falafel roll"
      />
      <MenuSection full />
      <Favourites />
      <FinalCTA />
    </>
  );
}
