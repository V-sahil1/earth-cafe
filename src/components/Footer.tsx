import Link from "next/link";
import { INSTAGRAM_URL, locations } from "@/data/site";
import { Icon } from "./ui";

const exploreLinks = [
  { href: "/menu", label: "Curated Menu" },
  { href: "/our-story", label: "Philosophy & Farmers" },
  { href: "/catering", label: "Mindful Gatherings & Catering" },
  { href: "/visit-us#reserve", label: "Table Reservations" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/dietary-guide", label: "Dietary Guide" },
];

const socialClass =
  "w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-primary transition-colors";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 flex flex-col space-y-4">
            <Link href="/" className="flex flex-col">
              <span className="font-headline-md text-headline-md tracking-tight text-primary">EARTH CAFÉ</span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline mt-1">Mumbai</span>
            </Link>
            <p className="font-headline-sm text-headline-sm italic text-tertiary max-w-sm pt-2">
              “Wholesome plates, mindful sips &amp; good vibes.”
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Crafted with pure whole foods, conscious botanicals, and artisanal Mumbai roasts. Designed to nourish body
              and palate.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col space-y-4">
            <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">
              Our Sanctuaries
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 pt-1">
              {locations.map((l) => (
                <Link key={l.slug} href={`/visit-us#${l.slug}`} className="flex flex-col space-y-1 group">
                  <span className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors">
                    {l.name}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{l.short}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col space-y-4">
            <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">
              Explore &amp; Connect
            </span>
            <div className="flex flex-col space-y-2.5">
              {exploreLinks.map((l) => (
                <Link key={l.href} href={l.href} className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3 pt-4">
              <a aria-label="Instagram" className={socialClass} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <Icon name="photo_camera" className="text-[18px]" />
              </a>
              <Link aria-label="The Journal" className={socialClass} href="/journal">
                <Icon name="mail" className="text-[18px]" />
              </Link>
              <Link aria-label="Locations" className={socialClass} href="/visit-us">
                <Icon name="location_on" className="text-[18px]" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant text-center">
          <p>© {new Date().getFullYear()} Earth Café India Private Limited. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-on-surface transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
