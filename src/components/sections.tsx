import Link from "next/link";
import type { ReactNode } from "react";
import {
  IMG,
  INSTAGRAM_URL,
  articles,
  coffeeHighlights,
  favourites,
  kitchenGallery,
  locations,
  mapsUrl,
  pillars,
} from "@/data/site";
import { ButtonLink, Eyebrow, Icon, Photo, Section, rupees } from "./ui";

/* ---------- Hero ---------- */
export function Hero() {
  return (
    <section className="relative w-full bg-surface-container-lowest overflow-hidden py-12 md:py-20 lg:py-28 px-5 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-6 flex flex-col items-start z-10">
          <div
            data-anim="fade"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container text-primary mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest">Vegetarian / Vegan Café • Mumbai</span>
          </div>
          <h1
            data-anim="chars"
            data-delay="0.15"
            className="font-display text-display-mobile sm:text-display lg:text-[76px] lg:leading-[82px] text-primary tracking-tight mb-6"
          >
            GOOD FOOD.
            <br />
            <span className="italic font-normal text-primary-container">GOOD ENERGY.</span>
          </h1>
          <p
            data-anim="fade"
            data-delay="0.7"
            className="font-headline-sm text-headline-sm text-on-surface-variant font-normal mb-4 max-w-lg leading-relaxed"
          >
            Wholesome plates, mindful sips &amp; good vibes.
          </p>
          <div data-anim="stagger" data-delay="0.85" className="flex flex-wrap items-center gap-4 text-secondary mb-10">
            <span className="font-label-md text-label-md tracking-wider flex items-center gap-1.5 bg-secondary-fixed/40 px-3 py-1 rounded-full">
              <Icon name="eco" className="text-[16px]" />
              made with good energy
            </span>
            <span className="font-body-md text-body-md text-outline italic">खाना अच्छा हो तो mood अच्छा.</span>
          </div>
          <div data-anim="stagger" data-delay="1" className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <ButtonLink href="/visit-us">Visit Us</ButtonLink>
            <ButtonLink href="/menu" variant="soft">
              Explore Menu
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div data-spin className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-surface-container/60 blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-secondary-fixed/30 blur-2xl -z-10" />
            <div
              data-anim="image"
              data-parallax="6"
              data-delay="0.3"
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-surface-container-low aspect-[4/5] sm:aspect-square lg:aspect-[4/5]"
            >
              <Photo
                src={IMG.reading}
                alt="Guest reading the Earth Café menu with a latte and croissant"
                preload
                className="object-[50%_40%] hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none" />
              <div
                data-anim="fade"
                data-delay="1.3"
                className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between gap-3 backdrop-blur-md bg-surface-container-lowest/85 p-4 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                    <Icon name="spa" className="text-[20px]" />
                  </div>
                  <div>
                    <p className="font-title-md text-title-md text-primary leading-tight">100% Plant-Forward</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Conscious plates in Bandra, Juhu &amp; BKC</p>
                  </div>
                </div>
                <span className="hidden sm:inline text-secondary font-headline-sm text-headline-sm italic whitespace-nowrap">
                  Est. 2019
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Sub-page hero ---------- */
export function PageHero({
  eyebrow,
  title,
  italic,
  description,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  description: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-low px-5 sm:px-6 lg:px-12 py-14 md:py-20 lg:py-24">
      <div data-spin className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-surface-container blur-3xl" />
      <div className="absolute -bottom-24 -left-10 w-80 h-80 rounded-full bg-secondary-fixed/30 blur-3xl" />
      <div
        className={`relative max-w-7xl mx-auto grid grid-cols-1 gap-10 lg:gap-16 items-center ${image ? "lg:grid-cols-12" : ""}`}
      >
        <div className={image ? "lg:col-span-7" : "max-w-3xl"}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1
            data-anim="chars"
            data-delay="0.1"
            className="font-display text-display-mobile md:text-display lg:text-[64px] lg:leading-[72px] text-primary tracking-tight mt-3 mb-6"
          >
            {title}
            {italic && (
              <>
                <br />
                <span className="italic font-normal text-primary-container">{italic}</span>
              </>
            )}
          </h1>
          <p data-anim="fade" data-delay="0.6" className="font-headline-sm text-headline-sm text-on-surface-variant font-normal max-w-2xl">
            {description}
          </p>
        </div>
        {image && (
          <div className="lg:col-span-5">
            <div
              data-anim="image"
              data-parallax="6"
              data-delay="0.2"
              className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/3] lg:aspect-[4/5] bg-surface-container-high"
            >
              <Photo src={image} alt={imageAlt} preload sizes="(min-width: 1024px) 40vw, 100vw" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- Scroll-driven marquee ---------- */
export function Marquee({
  words = ["Good Food", "Good Energy", "Mindful Sips", "Good Vibes"],
  className = "bg-surface-container-lowest",
}: {
  words?: string[];
  className?: string;
}) {
  const row = (outline: boolean) =>
    Array.from({ length: 3 }).flatMap((_, n) =>
      words.map((w, i) => (
        <span key={`${n}-${i}`} className="flex items-center gap-12">
          <span className={`${(i + (outline ? 1 : 0)) % 2 ? "italic text-outline-stroke" : "text-primary"}`}>{w}</span>
          <Icon name="local_florist" className="text-secondary text-[36px] md:text-[56px]" />
        </span>
      )),
    );
  return (
    <section aria-hidden className={`w-full overflow-hidden py-10 md:py-16 ${className}`}>
      <div data-marquee="1" className="marquee-row font-display text-[56px] leading-[1.1] md:text-[110px] lg:text-[140px] uppercase tracking-tight">
        {row(false)}
      </div>
      <div
        data-marquee="-1"
        className="marquee-row mt-2 md:mt-4 font-display text-[56px] leading-[1.1] md:text-[110px] lg:text-[140px] uppercase tracking-tight"
      >
        {row(true)}
      </div>
    </section>
  );
}

/* ---------- Intro statement ---------- */
export function IntroStatement() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <Eyebrow className="text-primary-container tracking-[0.25em] mb-4">Earth Café India</Eyebrow>
        <h2
          data-anim="chars"
          className="font-display text-display-mobile md:text-display lg:text-[62px] lg:leading-[70px] text-primary tracking-tight mb-8"
        >
          FOOD THAT FEELS GOOD.
        </h2>
        <p
          data-anim="words"
          className="font-headline-sm text-headline-sm md:text-[28px] md:leading-[40px] text-on-surface-variant font-normal leading-relaxed max-w-3xl mb-10"
        >
          Wholesome plates, mindful sips and good vibes — created for people who care about what they eat and how they
          feel.
        </p>
        <div data-anim="fade" className="flex items-center justify-center gap-3 text-primary-container/40">
          <span className="w-12 h-px bg-primary-container/30" />
          <Icon name="local_florist" className="text-[20px]" />
          <span className="w-12 h-px bg-primary-container/30" />
        </div>
      </div>
    </Section>
  );
}

/* ---------- Philosophy ---------- */
export function Philosophy() {
  return (
    <Section className="bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 relative">
          <div
            data-anim="image"
            data-reveal="left"
            data-parallax="8"
            className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-[5/4] bg-surface-container-high"
          >
            <Photo
              src={IMG.skewers}
              alt="Tandoori paneer skewers with herb rice and peanut satay"
              className="hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="hidden sm:block absolute -bottom-6 -right-6 z-10">
            <div
              data-spin
              className="w-36 h-36 rounded-full bg-surface-container-lowest shadow-xl flex flex-col items-center justify-center text-center p-2"
            >
              <Icon name="compost" className="text-primary text-[28px]" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary mt-1">
                Zero
                <br />
                Refined Sugar
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 flex flex-col justify-center">
          <Eyebrow className="text-secondary font-bold mb-3">Our Philosophy</Eyebrow>
          <h2
            data-anim="lines"
            className="font-headline-lg text-headline-lg lg:text-[48px] lg:leading-[54px] text-primary tracking-tight mb-6"
          >
            EAT WELL.
            <br />
            <span className="italic font-normal">LIVE WELL.</span>
          </h2>
          <p data-anim="fade" className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
            At Earth Café, food is about balance, colour, nourishment and enjoyment. We celebrate seasonal harvests,
            untamed botanicals, and high-energy whole foods prepared fresh every morning in our Mumbai kitchens.
          </p>
          <div data-anim="stagger" className="space-y-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-2xl bg-surface-container-lowest/80 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <h3 className="font-title-lg text-title-lg text-primary tracking-wide mb-1 flex items-center justify-between gap-4 uppercase">
                  <span>{p.title}</span>
                  <span className="font-label-sm text-label-sm tracking-wider text-outline">{p.tag}</span>
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Colour on your plate ---------- */
function Tag({ children, accent }: { children: ReactNode; accent?: boolean }) {
  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-full font-label-sm text-label-sm uppercase ${
        accent ? "bg-secondary-fixed/50 text-on-secondary-container" : "bg-surface-container text-primary"
      }`}
    >
      {children}
    </span>
  );
}

const smallDishes = [
  {
    title: "Sun-Drenched Tomato Bruschetta",
    text: "Crusty artisan sourdough topped with basil chiffonade, marinated cherry tomatoes & cashew crema.",
    image: IMG.bruschetta,
    pos: "object-[50%_40%]",
  },
  {
    title: "Tandoori Glazed Skewers",
    text: "Fire-grilled organic tofu skewers, spiced peanut satay, steamed brown wild rice, and wok greens.",
    image: IMG.skewers,
    pos: "object-center",
  },
  {
    title: "Turmeric Tofu Scramble",
    text: "Silken tofu tempered with garden herbs, cracked pepper, nutritional yeast, served with warm country bread.",
    image: IMG.tofu,
    pos: "object-[50%_55%]",
  },
];

/** Section title row used by several sections: eyebrow + animated heading + side copy. */
function SplitHeading({
  eyebrow,
  eyebrowClass,
  title,
  aside,
}: {
  eyebrow: string;
  eyebrowClass?: string;
  title: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
      <div>
        <Eyebrow className={eyebrowClass}>{eyebrow}</Eyebrow>
        <h2
          data-anim="chars"
          className="font-headline-lg text-headline-lg-mobile md:text-headline-lg lg:text-[46px] text-primary tracking-tight mt-2"
        >
          {title}
        </h2>
      </div>
      {aside}
    </div>
  );
}

export function ColorOnPlate() {
  const card = "group relative rounded-3xl overflow-hidden bg-surface-container shadow-md";
  return (
    <Section>
      <SplitHeading
        eyebrow="Culinary Canvas"
        title="COLOR ON YOUR PLATE."
        aside={
          <p data-anim="fade" className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
            Vibrant, colorful nutrition straight from our kitchen. Every hue reflects naturally occurring
            phytonutrients and antioxidants.
          </p>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
        <div data-anim="fade" className={`md:col-span-7 ${card}`}>
          <div data-anim="image" data-parallax="7" className="relative aspect-[16/10] overflow-hidden">
            <Photo
              src={IMG.amaranth}
              alt="Amaranth porridge with berries and seeds"
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-[50%_65%] group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="p-6 sm:p-8 bg-surface-container-lowest">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Tag accent>Superfood Grains</Tag>
              <Tag>Gluten-Free</Tag>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Organic Amaranth Superbowl</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Simmered in coconut cream, drizzled with raw amber maple, topped with toasted sunflower seeds, pumpkin
              kernels &amp; tart cranberries.
            </p>
          </div>
        </div>

        <div data-anim="fade" data-delay="0.15" className={`md:col-span-5 flex flex-col ${card}`}>
          <div
            data-anim="image"
            data-reveal="right"
            data-parallax="7"
            data-delay="0.15"
            className="relative aspect-square md:aspect-auto md:flex-1 overflow-hidden"
          >
            <Photo
              src={IMG.falafel}
              alt="Pink beetroot falafel wrap"
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-[50%_60%] group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="p-6 sm:p-8 bg-surface-container-lowest">
            <div className="mb-2">
              <Tag>Signature Wrap</Tag>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Pink Beetroot Falafel Parcel</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Steamed beetroot flatbread rolled with herbaceous crisp falafel, cooling cucumber ribbons, and velvety
              tahini drizzle.
            </p>
          </div>
        </div>

        {smallDishes.map((d, i) => (
          <div key={d.title} data-anim="fade" data-delay={String(i * 0.12)} className={`md:col-span-4 ${card}`}>
            <div data-anim="image" data-delay={String(i * 0.12)} className="relative aspect-[4/3] overflow-hidden">
              <Photo
                src={d.image}
                alt={d.title}
                sizes="(min-width: 768px) 33vw, 100vw"
                className={`${d.pos} group-hover:scale-105 transition-transform duration-700`}
              />
            </div>
            <div className="p-6 bg-surface-container-lowest">
              <h3 className="font-title-lg text-title-lg text-primary mb-1">{d.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{d.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Earth favourites ---------- */
export function Favourites() {
  return (
    <Section>
      <SplitHeading
        eyebrow="Iconic Selections"
        eyebrowClass="text-secondary font-bold"
        title="EARTH FAVOURITES"
        aside={
          <p data-anim="fade" className="font-body-md text-body-md text-on-surface-variant max-w-sm">
            Loved across Bandra, Juhu, BKC, and Lower Parel. The dishes that define our joyful approach to plant
            dining.
          </p>
        }
      />

      <div data-anim="stagger" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {favourites.map((f, i) => (
          <div
            key={f.name}
            className="flex flex-col rounded-3xl overflow-hidden bg-surface-container-low shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300"
          >
            <div data-anim="image" data-delay={String(i * 0.12)} className="aspect-square overflow-hidden relative">
              <Photo
                src={f.image}
                alt={f.name}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="hover:scale-105 transition-transform duration-500"
              />
              <span
                className={`absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-sm text-label-sm uppercase ${
                  f.badgeAccent ? "text-secondary" : "text-primary"
                }`}
              >
                {f.badge}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex justify-between items-baseline gap-3 mb-2">
                  <h3 className="font-title-lg text-title-lg text-primary">{f.name}</h3>
                  <span className="font-title-md text-title-md text-primary font-bold">{rupees(f.price)}</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{f.description}</p>
              </div>
              <div className="pt-4 mt-4 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary uppercase">{f.tag}</span>
                <Link
                  href="/order-online"
                  aria-label={`Order ${f.name}`}
                  className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary hover:rotate-90 transition-all duration-300"
                >
                  <Icon name="add" className="text-[18px]" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Fresh from the kitchen (pinned horizontal gallery) ---------- */
export function KitchenGallery() {
  return (
    <section
      data-hscroll
      className="relative w-full overflow-hidden bg-inverse-surface text-on-primary py-16 md:py-20 lg:py-0 lg:h-screen lg:flex lg:items-center"
    >
      <div
        data-hscroll-track
        className="flex items-stretch gap-5 lg:gap-8 px-5 sm:px-6 lg:px-12 lg:pt-10 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none scrollbar-none lg:w-max"
      >
        <div className="shrink-0 w-[82vw] sm:w-[420px] lg:w-[460px] snap-start flex flex-col justify-center lg:pr-8">
          <Eyebrow className="text-primary-fixed">New on the menu</Eyebrow>
          <h2
            data-anim="chars"
            className="font-display text-display-mobile md:text-display lg:text-[64px] lg:leading-[70px] tracking-tight text-on-primary mt-3 mb-5"
          >
            FRESH FROM
            <br />
            <span className="italic font-normal text-primary-fixed">the kitchen.</span>
          </h2>
          <p data-anim="fade" className="font-body-lg text-body-lg text-inverse-primary mb-8 max-w-sm">
            Nine plates and sips our regulars keep coming back for — plated fresh every morning across Mumbai.
          </p>
          <div data-anim="fade" className="flex flex-wrap items-center gap-6">
            <ButtonLink href="/menu" variant="light">
              See the Full Menu
            </ButtonLink>
            <span className="hidden lg:inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-widest text-inverse-primary">
              Scroll <Icon name="arrow_forward" className="text-[16px] animate-pulse" />
            </span>
          </div>
        </div>

        {kitchenGallery.map((d, i) => (
          <article key={d.name} data-hcard className="group shrink-0 w-[72vw] sm:w-[320px] lg:w-[340px] xl:w-[360px] snap-start">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-primary-container shadow-2xl">
              <Photo
                src={d.image}
                alt={d.name}
                sizes="(min-width: 1024px) 360px, 72vw"
                className="group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
              <span className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-sm text-label-sm uppercase text-primary">
                {d.tag}
              </span>
              <span className="absolute bottom-3 right-5 font-display italic text-[56px] leading-none text-white/85">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-primary mt-5">{d.name}</h3>
            <p className="font-body-md text-body-md text-inverse-primary mt-1">{d.note}</p>
          </article>
        ))}
        <div aria-hidden className="shrink-0 w-1 lg:w-4" />
      </div>
    </section>
  );
}

/* ---------- Coffee ---------- */
export function CoffeeSection({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  return (
    <Section className="bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <Eyebrow className="text-primary-container tracking-[0.25em]">Slow Living</Eyebrow>
          <Heading
            data-anim="chars"
            className="font-display text-display-mobile md:text-display lg:text-[60px] lg:leading-[68px] text-primary tracking-tight my-4"
          >
            GOOD COFFEE.
            <br />
            <span className="italic font-normal">SLOW MOMENTS.</span>
          </Heading>
          <p data-anim="fade" data-delay="0.3" className="font-headline-sm text-headline-sm italic text-secondary font-normal mb-6">
            “Take a moment. Sip mindfully.”
          </p>
          <p data-anim="fade" data-delay="0.4" className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed max-w-lg">
            We source directly from shade-grown estates in Karnataka and Kerala. Each cup is roasted in micro-batches
            and poured with house-pressed almond milk, creamy oat milk, or pure spring infusions.
          </p>
          <div data-anim="stagger" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coffeeHighlights.map((c) => (
              <div key={c.name} className="p-4 rounded-xl bg-surface-container-lowest/90 hover:bg-surface-container-lowest transition-colors">
                <span className="font-title-md text-title-md text-primary block">{c.name}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">{c.note}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <div
            data-anim="image"
            data-reveal="right"
            data-parallax="8"
            className="relative rounded-3xl overflow-hidden shadow-2xl bg-surface-container-high aspect-[4/3] lg:aspect-square"
          >
            <Photo
              src={IMG.coffee}
              alt="Latte art and a chocolate croissant on a marble table"
              className="object-[55%_50%] hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none" />
            <div data-anim="fade" data-delay="0.8" className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-on-primary">
              <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed mb-1">Craft Barista Bar</p>
              <p className="font-headline-sm text-headline-sm italic">Served on white honed marble tables in Bandra &amp; Juhu.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Vibe / interiors ---------- */
const vibes = [
  { label: "Fluted Mint Wall Details", image: IMG.marbleWall, pos: "object-[30%_50%]" },
  { label: "Sunlit Morning Reads", image: IMG.reading, pos: "object-center" },
  { label: "Conscious Breakfasts", image: IMG.tofu, pos: "object-center" },
  { label: "Shared Plates & Laughter", image: IMG.skewers, pos: "object-[40%_50%]" },
];

export function VibeSection() {
  return (
    <Section>
      <div className="max-w-3xl mb-12 md:mb-16">
        <Eyebrow>Sanctuary Interiors</Eyebrow>
        <h2
          data-anim="lines"
          className="font-headline-lg text-headline-lg-mobile md:text-headline-lg lg:text-[48px] lg:leading-[56px] text-primary tracking-tight mt-2 mb-4"
        >
          COME FOR THE FOOD.
          <br />
          <span className="italic font-normal">STAY FOR THE VIBE.</span>
        </h2>
        <p data-anim="words" className="font-body-lg text-body-lg md:text-[20px] md:leading-[32px] text-on-surface-variant">
          Fluted pastel sage green walls, cool Italian marble round tables, sunlight streaming through bougainvillea
          vines, and an unhurried playlist tailored for slow conversations.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {vibes.map((v, i) => (
          <div
            key={v.label}
            data-anim="image"
            data-parallax="10"
            data-delay={String(i * 0.12)}
            className={`relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md group ${i % 2 ? "lg:translate-y-12" : ""}`}
          >
            <Photo
              src={v.image}
              alt={v.label}
              sizes="(min-width: 1024px) 25vw, 50vw"
              className={`${v.pos} group-hover:scale-105 transition-transform duration-500`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 sm:p-6">
              <span className="text-white font-title-md text-body-md sm:text-title-md font-semibold">{v.label}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Mumbai spot ---------- */
export function MumbaiSpot() {
  return (
    <section className="w-full bg-surface-container-high/40 py-16 md:py-20 lg:py-28 px-5 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <div data-anim="stagger" className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md uppercase tracking-wider">
              Good Food
            </span>
            <span className="px-4 py-1.5 rounded-full bg-surface-container text-primary font-label-md text-label-md uppercase tracking-wider">
              Good People
            </span>
            <span className="px-4 py-1.5 rounded-full bg-tertiary-fixed text-tertiary font-label-md text-label-md uppercase tracking-wider">
              Good Vibes
            </span>
          </div>
          <h2
            data-anim="chars"
            className="font-display text-display-mobile sm:text-display lg:text-[76px] lg:leading-[80px] text-primary tracking-tight"
          >
            YOUR NEW
            <br />
            FAVOURITE
            <br />
            <span className="italic text-secondary font-normal">MUMBAI SPOT.</span>
          </h2>
        </div>
        <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
          <div data-anim="fade" data-delay="0.4" className="p-8 rounded-3xl bg-surface-container-lowest shadow-xl max-w-sm rotate-1 hover:rotate-0 transition-transform duration-500">
            <p className="font-headline-sm text-headline-sm italic text-primary mb-3">
              “Does he know your go-to Earth Café order?”
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              From our pink beetroot wraps to cold drip hazelnut lattes, discover why Bandra &amp; Juhu call us their
              second home.
            </p>
            <a
              className="group inline-flex items-center gap-2 text-secondary font-title-md text-title-md hover:underline"
              href={`${INSTAGRAM_URL}/reels/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View Reels &amp; Stories</span>
              <Icon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Instagram ---------- */
const posts = [
  { image: IMG.aglioOlio, icon: "favorite", label: "Spotted @ EC" },
  { image: IMG.falafel, icon: "chat_bubble", label: "Mindful Plates" },
  { image: IMG.marbleWall, icon: "local_cafe", label: "Cafe Energy" },
  { image: IMG.masalaChai, icon: "emoji_food_beverage", label: "Chai O'Clock" },
  { image: IMG.mangoChia, icon: "eco", label: "Morning Bowls" },
  { image: IMG.bruschetta, icon: "restaurant", label: "Toast Goals" },
  { image: IMG.falaffair, icon: "celebration", label: "Falaffair" },
  { image: IMG.mushroomSoup, icon: "grade", label: "Join 15K+ Foodies" },
];

export function InstagramSection() {
  return (
    <Section className="bg-surface-container-lowest">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
        <Eyebrow className="text-primary tracking-[0.25em]">Community on Instagram</Eyebrow>
        <h2
          data-anim="chars"
          className="font-headline-lg text-headline-lg-mobile md:text-headline-lg lg:text-[42px] text-primary tracking-tight mt-1 mb-2"
        >
          FOLLOW THE GOOD VIBES.
        </h2>
        <a
          data-anim="fade"
          data-delay="0.3"
          className="font-headline-sm text-headline-sm text-secondary hover:underline inline-flex items-center gap-1.5"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>@earthcafeindia</span>
          <Icon name="verified" className="text-[18px]" />
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {posts.map((p, i) => (
          <a
            key={p.label}
            data-anim="image"
            data-reveal={i % 2 ? "right" : "left"}
            data-delay={String((i % 4) * 0.1)}
            className="group relative rounded-2xl overflow-hidden aspect-square shadow-sm"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Photo
              src={p.image}
              alt={`Earth Café Instagram — ${p.label}`}
              sizes="(min-width: 768px) 25vw, 50vw"
              className="group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-on-primary p-4 text-center">
              <Icon name={p.icon} className="text-[32px] mb-2" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest">{p.label}</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Journal ---------- */
export function ArticleCard({ article }: { article: (typeof articles)[number] }) {
  return (
    <Link
      href={`/journal/${article.slug}`}
      className="group p-8 rounded-3xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300"
    >
      <div>
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block mb-3">
          {article.category} • {article.readTime}
        </span>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors">
          {article.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{article.excerpt}</p>
      </div>
      <div className="pt-6 mt-6 border-t border-surface-container flex items-center justify-between">
        <span className="font-label-sm text-label-sm uppercase text-secondary">{article.volume}</span>
        <Icon
          name="north_east"
          className="text-primary text-[20px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </div>
    </Link>
  );
}

export function JournalSection() {
  return (
    <Section className="bg-surface-container-low">
      <SplitHeading
        eyebrow="Read & Reflect"
        title="FROM THE EARTH"
        aside={
          <Link
            data-anim="fade"
            href="/journal"
            className="group font-label-lg text-label-lg uppercase tracking-wider text-primary hover:text-secondary flex items-center gap-1"
          >
            <span>Read All Stories</span>
            <Icon name="arrow_forward" className="text-[16px] group-hover:translate-x-1 transition-transform" />
          </Link>
        }
      />
      <div data-anim="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {articles.slice(0, 3).map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </Section>
  );
}

/* ---------- Locations ---------- */
export function LocationsSection() {
  return (
    <Section className="bg-surface" id="visit-sanctuaries">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <Eyebrow className="text-primary-container tracking-[0.25em]">Mumbai Sanctuaries</Eyebrow>
        <h2
          data-anim="chars"
          className="font-headline-lg text-headline-lg-mobile md:text-headline-lg lg:text-[46px] text-primary tracking-tight mt-1 mb-3"
        >
          FIND YOUR EARTH
        </h2>
        <p data-anim="fade" data-delay="0.3" className="font-body-lg text-body-lg text-on-surface-variant">
          Drop by for fresh sourdough toasts, creamy oat drinks, or peaceful afternoon co-working.
        </p>
      </div>
      <div data-anim="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((l, i) => (
          <div
            key={l.slug}
            id={l.slug}
            className={`group scroll-mt-28 rounded-3xl overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col hover:shadow-md transition-shadow ${
              i === locations.length - 1 ? "md:col-span-2 lg:col-span-2 md:flex-row" : ""
            }`}
          >
            <div
              className={`relative overflow-hidden bg-surface-container aspect-[16/10] ${
                i === locations.length - 1 ? "md:aspect-auto md:w-2/5 md:min-h-[280px] shrink-0" : ""
              }`}
            >
              <Photo
                src={l.image}
                alt={`Inside Earth Café ${l.name}`}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 flex flex-col flex-1 justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm uppercase">
                  {l.badge}
                </span>
                <Icon name={l.icon} className="text-primary text-[20px]" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{l.name}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-1">{l.address}</p>
              <p className="font-body-sm text-body-sm text-outline">{l.hours}</p>
            </div>
            <div className="pt-6 mt-6 flex items-center justify-between gap-4">
              <span className="font-body-sm text-body-sm text-secondary font-medium">{l.perk}</span>
              <a
                className="shrink-0 font-label-md text-label-md uppercase tracking-wider text-primary hover:underline"
                href={mapsUrl(l.address)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions →
              </a>
            </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Final CTA ---------- */
export function FinalCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-primary text-on-primary py-20 md:py-24 lg:py-32 px-5 sm:px-6 lg:px-12">
      <div data-parallax="15" className="absolute inset-0 opacity-25 mix-blend-overlay">
        <Photo src={IMG.aglioOlio} alt="" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary-container/90" />
      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center z-10">
        <Eyebrow className="text-primary-fixed tracking-[0.3em] mb-4">Mindful Urban Living</Eyebrow>
        <h2
          data-anim="chars"
          className="font-display text-display-mobile md:text-display lg:text-[72px] lg:leading-[78px] text-on-primary tracking-tight mb-6"
        >
          EAT WELL.
          <br />
          <span className="italic font-normal text-primary-fixed">FEEL GOOD.</span>
        </h2>
        <p data-anim="words" className="font-headline-sm text-headline-sm text-primary-fixed-dim font-light mb-10 max-w-xl">
          Wholesome nourishment is waiting for you across Mumbai. See you at Earth Café.
        </p>
        <div data-anim="stagger" className="flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="/visit-us" variant="light" className="tracking-wider">
            Visit Us Today
          </ButtonLink>
          <ButtonLink href="/order-online" variant="outlineLight" className="tracking-wider">
            Order Online • Direct
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
