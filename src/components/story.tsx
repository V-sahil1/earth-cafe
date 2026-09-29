import Link from "next/link";
import { IMG, founderParagraphs, journey, welcomeParagraphs } from "@/data/site";
import { Eyebrow, Icon, Photo, Section } from "./ui";

/* ---------- Welcome ---------- */
export function Welcome() {
  const [lead, ...rest] = welcomeParagraphs;
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Eyebrow className="text-secondary font-bold">Welcome!</Eyebrow>
            <h2
              data-anim="chars"
              className="font-display text-display-mobile md:text-display lg:text-[64px] lg:leading-[70px] text-primary tracking-tight mt-3"
            >
              EARTH
              <br />
              <span className="italic font-normal text-primary-container">Café.</span>
            </h2>
            <div data-anim="fade" data-delay="0.4" className="flex items-center gap-3 text-primary-container/50 mt-8">
              <span className="w-12 h-px bg-primary-container/30" />
              <Icon name="favorite" className="text-[20px] text-secondary" />
              <span className="w-12 h-px bg-primary-container/30" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-8">
          <p
            data-anim="words"
            className="font-headline-sm text-[24px] leading-[36px] md:text-[30px] md:leading-[44px] text-primary font-normal"
          >
            {lead}
          </p>
          {rest.map((p) => (
            <p key={p.slice(0, 20)} data-anim="fade" className="font-body-lg text-body-lg md:text-[18px] md:leading-[30px] text-on-surface-variant">
              {p}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Meet our founders ---------- */
export function Founders() {
  return (
    <Section className="bg-surface-container-low">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div
            data-anim="image"
            data-reveal="left"
            data-parallax="7"
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[5/6] bg-surface-container-high max-w-md mx-auto lg:max-w-none"
          >
            <Photo src={IMG.founder} alt="Earth Café co-founder at the café" sizes="(min-width: 1024px) 40vw, 90vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-transparent to-transparent pointer-events-none" />
            <p data-anim="fade" data-delay="0.9" className="absolute bottom-6 left-6 right-6 font-headline-sm text-headline-sm italic text-on-primary">
              “Food should nourish the body and soul.”
            </p>
          </div>
          <div className="hidden sm:block absolute -top-6 -right-2 lg:-right-6 z-10">
            <div
              data-spin
              className="w-32 h-32 rounded-full bg-secondary-fixed shadow-xl flex flex-col items-center justify-center text-center p-3"
            >
              <Icon name="eco" className="text-secondary text-[26px]" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-secondary-fixed mt-1">
                Healthy &amp;
                <br />
                Delicious
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <Eyebrow className="text-secondary font-bold">Meet Our Founders</Eyebrow>
          <h2
            data-anim="chars"
            className="font-display text-display-mobile md:text-display lg:text-[60px] lg:leading-[66px] text-primary tracking-tight mt-3 mb-8"
          >
            VIK &amp; POOJA
            <br />
            <span className="italic font-normal text-primary-container">Khatwani.</span>
          </h2>
          <div data-anim="stagger" className="space-y-6">
            {founderParagraphs.map((p) => (
              <p key={p.slice(0, 20)} className="font-body-lg text-body-lg md:text-[18px] md:leading-[30px] text-on-surface-variant">
                {p}
              </p>
            ))}
          </div>
          <div data-anim="stagger" className="flex flex-wrap gap-3 mt-10">
            {["Business", "Culinary Arts", "Sustainability", "Well-being"].map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 rounded-full bg-surface-container-lowest text-primary font-label-md text-label-md uppercase tracking-wider shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Our journey (branch timeline) ---------- */
export function Journey() {
  return (
    <Section className="bg-surface-container-lowest">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
        <Eyebrow className="text-primary-container tracking-[0.25em]">From Bandra to Palladium</Eyebrow>
        <h2
          data-anim="chars"
          className="font-display text-display-mobile md:text-display lg:text-[64px] lg:leading-[70px] text-primary tracking-tight mt-3 mb-4"
        >
          OUR JOURNEY
        </h2>
        <p data-anim="fade" data-delay="0.3" className="font-body-lg text-body-lg text-on-surface-variant">
          One café on Waterfield Road grew into five neighbourhood homes across Mumbai. Here is how it happened.
        </p>
      </div>

      <div className="relative">
        {/* track + scroll-drawn progress line */}
        <div aria-hidden className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-primary-container/15" />
        <div
          aria-hidden
          data-draw
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-primary-container via-secondary to-secondary-fixed-dim"
        />

        {journey.map((j, i) => {
          const flip = i % 2 === 1;
          return (
            <div key={j.slug} className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 items-center pl-12 md:pl-0 py-10 md:py-16">
              <span
                aria-hidden
                data-anim="pop"
                className="absolute left-4 md:left-1/2 top-12 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-5 h-5 rounded-full bg-secondary ring-8 ring-surface-container-lowest z-10"
              />
              <div className={flip ? "md:order-2" : "md:text-right"}>
                <span
                  data-anim="chars"
                  className="block font-display italic text-[48px] leading-[1] md:text-[72px] lg:text-[88px] text-primary-container/80 tracking-tight"
                >
                  {j.year}
                </span>
                <h3 data-anim="lines" className="font-headline-md text-headline-md md:text-[34px] md:leading-[42px] text-primary mt-4">
                  {j.place}
                </h3>
                <span data-anim="track" className="block font-label-md text-label-md uppercase tracking-[0.2em] text-secondary mt-2">
                  {j.area}
                </span>
                <p data-anim="fade" className={`font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-md ${flip ? "" : "md:ml-auto"}`}>
                  {j.text}
                </p>
                <Link
                  data-anim="fade"
                  href={`/visit-us#${j.slug}`}
                  className="group inline-flex items-center gap-1 mt-5 font-label-lg text-label-lg uppercase tracking-wider text-primary hover:text-secondary"
                >
                  <span>Visit {j.place}</span>
                  <Icon name="arrow_forward" className="text-[16px] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className={flip ? "md:order-1" : ""}>
                <div
                  data-anim="image"
                  data-reveal={flip ? "left" : "right"}
                  data-parallax="8"
                  className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-surface-container-high group"
                >
                  <Photo
                    src={j.image}
                    alt={`Earth Café ${j.place} interior`}
                    sizes="(min-width: 768px) 45vw, 90vw"
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-sm text-label-sm uppercase text-primary">
                    {String(i + 1).padStart(2, "0")} • {j.place}
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        <div className="relative flex justify-center pt-6">
          <span data-anim="pop" className="w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-xl z-10">
            <Icon name="local_florist" />
          </span>
        </div>
      </div>
    </Section>
  );
}
