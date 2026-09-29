import MenuSection from "@/components/MenuSection";
import {
  CoffeeSection,
  ColorOnPlate,
  Favourites,
  FinalCTA,
  Hero,
  InstagramSection,
  IntroStatement,
  JournalSection,
  KitchenGallery,
  Marquee,
  LocationsSection,
  MumbaiSpot,
  Philosophy,
  VibeSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroStatement />
      <Philosophy />
      <ColorOnPlate />
      <Marquee />
      <MenuSection />
      <KitchenGallery />
      <Favourites />
      <CoffeeSection />
      <VibeSection />
      <MumbaiSpot />
      <InstagramSection />
      <JournalSection />
      <LocationsSection />
      <Marquee words={["Bandra", "Juhu", "BKC", "Churchgate", "Palladium"]} className="bg-surface" />
      <FinalCTA />
    </>
  );
}
