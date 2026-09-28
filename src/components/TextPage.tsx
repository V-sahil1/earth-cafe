import type { ReactNode } from "react";
import { Eyebrow } from "./ui";

/** Simple editorial layout for policy / guide pages. */
export default function TextPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { heading: string; body: ReactNode }[];
}) {
  return (
    <>
      <section className="w-full bg-surface-container-low px-5 sm:px-6 lg:px-12 py-14 md:py-20">
        <div className="max-w-3xl mx-auto">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 data-anim="chars" className="font-display text-display-mobile md:text-display text-primary tracking-tight mt-3 mb-4">{title}</h1>
          <p data-anim="fade" data-delay="0.5" className="font-headline-sm text-headline-sm text-on-surface-variant font-normal">{intro}</p>
        </div>
      </section>
      <section className="w-full px-5 sm:px-6 lg:px-12 py-14 md:py-20">
        <div data-anim="stagger" className="max-w-3xl mx-auto space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-3">{s.heading}</h2>
              <div className="font-body-lg text-body-lg text-on-surface-variant space-y-3">{s.body}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
