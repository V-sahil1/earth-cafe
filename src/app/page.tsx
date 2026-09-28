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
      <MenuSection />
      <Favourites />
      <CoffeeSection />
      <VibeSection />
      <MumbaiSpot />
      <InstagramSection />
      <JournalSection />
      <LocationsSection />
      <FinalCTA />
    </>
  );
}
