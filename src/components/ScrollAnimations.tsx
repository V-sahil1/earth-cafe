"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText);

declare global {
  interface Window {
    __lenis?: Lenis;
    __animReady?: boolean;
  }
}

/*
 * Declarative scroll animations. Mark up elements with:
 *   data-anim="chars"        heading: letters rise out of masked lines
 *   data-anim="lines"        heading: masked line-by-line reveal
 *   data-anim="words"        paragraph: words light up as you scroll (scrubbed)
 *   data-anim="track"        eyebrow label: letter-spacing collapses in
 *   data-anim="fade"         fade + rise
 *   data-anim="stagger"      children fade + rise one after another
 *   data-anim="image"        clip-path wipe + zoom-out of the inner <img>
 *     data-reveal="up|left|right"   wipe direction (default up)
 *   data-parallax="8"        inner <img> drifts ±N% while scrolling
 *   data-marquee="1|-1"      row slides horizontally with scroll
 *   data-spin                element rotates with scroll
 *   data-delay="0.3"         extra delay (seconds) for any reveal
 * Elements are hidden by CSS (html.anim [data-anim]) until their animation takes over.
 */

const KNOWN = new Set(["chars", "lines", "words", "track", "fade", "stagger", "image"]);
const EXPO = "expo.out";

const trigger = (el: Element, start = "top 88%") => ({ trigger: el, start, once: true });
const delayOf = (el: HTMLElement) => parseFloat(el.dataset.delay ?? "0") || 0;
const all = (sel: string) => gsap.utils.toArray<HTMLElement>(sel);

function clipFrom(dir: string | undefined, r: string) {
  if (dir === "left") return `inset(0% 100% 0% 0% round ${r})`;
  if (dir === "right") return `inset(0% 0% 0% 100% round ${r})`;
  return `inset(100% 0% 0% 0% round ${r})`;
}

function buildAnimations() {
  all('[data-anim="chars"]').forEach((el) => {
    SplitText.create(el, {
      type: "chars,words,lines",
      mask: "lines",
      linesClass: "split-line",
      autoSplit: true,
      onSplit(self) {
        gsap.set(el, { autoAlpha: 1 });
        return gsap.from(self.chars, {
          yPercent: 115,
          rotate: 12,
          autoAlpha: 0,
          duration: 1.2,
          ease: EXPO,
          stagger: 0.028,
          delay: delayOf(el),
          scrollTrigger: trigger(el),
        });
      },
    });
  });

  all('[data-anim="lines"]').forEach((el) => {
    SplitText.create(el, {
      type: "lines",
      mask: "lines",
      linesClass: "split-line",
      autoSplit: true,
      onSplit(self) {
        gsap.set(el, { autoAlpha: 1 });
        return gsap.from(self.lines, {
          yPercent: 110,
          rotate: 2.5,
          duration: 1.25,
          ease: EXPO,
          stagger: 0.13,
          delay: delayOf(el),
          scrollTrigger: trigger(el),
        });
      },
    });
  });

  all('[data-anim="words"]').forEach((el) => {
    SplitText.create(el, {
      type: "words",
      autoSplit: true,
      onSplit(self) {
        gsap.set(el, { autoAlpha: 1 });
        return gsap.fromTo(
          self.words,
          { opacity: 0.12, y: 6 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            stagger: 0.08,
            scrollTrigger: { trigger: el, start: "top 85%", end: "bottom 50%", scrub: 0.6 },
          },
        );
      },
    });
  });

  all('[data-anim="track"]').forEach((el) => {
    const spacing = getComputedStyle(el).letterSpacing;
    gsap.fromTo(
      el,
      { autoAlpha: 0, letterSpacing: "0.9em", x: -12 },
      { autoAlpha: 1, letterSpacing: spacing, x: 0, duration: 1.4, ease: EXPO, delay: delayOf(el), scrollTrigger: trigger(el) },
    );
  });

  all('[data-anim="fade"]').forEach((el) => {
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 50 },
      { autoAlpha: 1, y: 0, duration: 1.2, ease: "power4.out", delay: delayOf(el), scrollTrigger: trigger(el) },
    );
  });

  all('[data-anim="stagger"]').forEach((el) => {
    gsap.set(el, { autoAlpha: 1 });
    gsap.fromTo(
      el.children,
      { autoAlpha: 0, y: 70, scale: 0.96 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.12,
        delay: delayOf(el),
        clearProps: "transform",
        scrollTrigger: trigger(el, "top 90%"),
      },
    );
  });

  all('[data-anim="image"]').forEach((el) => {
    const img = el.querySelector("img");
    const radius = getComputedStyle(el).borderRadius || "0px";
    const endScale = el.hasAttribute("data-parallax") ? 1.15 : 1;
    gsap.set(el, { autoAlpha: 1 });
    const tl = gsap.timeline({ delay: delayOf(el), scrollTrigger: trigger(el, "top 92%") });
    tl.fromTo(
      el,
      { clipPath: clipFrom(el.dataset.reveal, radius) },
      { clipPath: `inset(0% 0% 0% 0% round ${radius})`, duration: 1.5, ease: "expo.inOut", clearProps: "clipPath" },
    );
    if (img) tl.fromTo(img, { scale: 1.45 }, { scale: endScale, duration: 2, ease: EXPO }, 0.15);
  });

  all("[data-parallax]").forEach((el) => {
    const img = el.querySelector("img");
    if (!img) return;
    const amount = parseFloat(el.dataset.parallax ?? "8");
    if (!el.matches('[data-anim="image"]')) gsap.set(img, { scale: 1.15 });
    gsap.fromTo(
      img,
      { yPercent: -amount },
      { yPercent: amount, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } },
    );
  });

  all("[data-marquee]").forEach((row) => {
    const dir = parseFloat(row.dataset.marquee ?? "1");
    gsap.fromTo(
      row,
      { xPercent: dir > 0 ? 0 : -35 },
      {
        xPercent: dir > 0 ? -35 : 0,
        ease: "none",
        scrollTrigger: { trigger: row.parentElement, start: "top bottom", end: "bottom top", scrub: 0.8 },
      },
    );
  });

  all("[data-spin]").forEach((el) => {
    gsap.fromTo(
      el,
      { rotate: -40, y: 40 },
      { rotate: 40, y: -40, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 } },
    );
  });

  // Safety net: anything marked but not handled must never stay hidden
  all("[data-anim]")
    .filter((el) => !KNOWN.has(el.dataset.anim ?? ""))
    .forEach((el) => gsap.set(el, { autoAlpha: 1 }));
}

export default function ScrollAnimations() {
  const pathname = usePathname();
  const progress = useRef<HTMLDivElement>(null);

  // Smooth scroll, progress bar and auto-hiding header — set up once
  useEffect(() => {
    window.__animReady = true;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.documentElement.classList.remove("anim");
      return;
    }

    const lenis = new Lenis({ lerp: 0.09, anchors: { offset: -80 } });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const bar = gsap.fromTo(
      progress.current,
      { scaleX: 0 },
      { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } },
    );

    const header = document.querySelector<HTMLElement>("[data-site-header]");
    const hide = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate(self) {
        if (!header) return;
        const down = self.direction === 1 && self.scroll() > 240;
        gsap.to(header, { yPercent: down ? -100 : 0, duration: 0.5, ease: "power3.out", overwrite: true });
      },
    });

    return () => {
      bar.scrollTrigger?.kill();
      bar.kill();
      hide.kill();
      gsap.ticker.remove(tick);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  // Rebuild content animations for every page
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!location.hash) window.__lenis?.scrollTo(0, { immediate: true, force: true });

    const ctx = gsap.context(buildAnimations);
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [pathname]);

  return (
    <div
      ref={progress}
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[3px] z-[80] origin-left scale-x-0 bg-gradient-to-r from-primary-container via-secondary to-secondary-fixed-dim pointer-events-none"
    />
  );
}
