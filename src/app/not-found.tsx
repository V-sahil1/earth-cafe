import { ButtonLink, Icon } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="w-full px-5 sm:px-6 lg:px-12 py-24 md:py-32 bg-surface-container-low">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
        <Icon name="local_florist" className="text-primary-container text-[40px] mb-4" />
        <h1 className="font-display text-display-mobile md:text-display text-primary tracking-tight mb-4">
          This page wandered off.
        </h1>
        <p className="font-headline-sm text-headline-sm text-on-surface-variant font-normal mb-10">
          Let&apos;s get you back to something good.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">Back Home</ButtonLink>
          <ButtonLink href="/menu" variant="soft">
            Explore Menu
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
