"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IMG, navLinks } from "@/data/site";
import { Icon } from "./ui";

const isActive = (pathname: string, href: string) => pathname === href || pathname.startsWith(`${href}/`);

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  // Lock body scroll while the drawer is open; Escape closes it
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 flex items-center justify-between gap-gutter">
          <Link href="/" className="group flex items-center gap-3" aria-label="Earth Café home">
            <Image
              src={IMG.logo}
              alt=""
              width={40}
              height={40}
              className="hidden sm:block w-10 h-10 rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.08)]"
            />
            <span className="flex flex-col">
              <span className="font-headline-sm text-headline-sm tracking-tight text-primary transition-colors group-hover:text-primary-container">
                EARTH CAFÉ
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline -mt-1">
                Mumbai • Est. 2019
              </span>
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-space-lg" aria-label="Primary">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`uppercase tracking-wider transition-colors py-2 ${
                    active
                      ? "text-primary font-title-md text-label-lg font-semibold underline decoration-primary decoration-1 underline-offset-8"
                      : "font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-space-md">
            <Link
              href="/visit-us"
              className="hidden md:inline-block xl:hidden font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors px-space-xs py-2"
            >
              Visit Us
            </Link>
            <Link
              href="/order-online"
              className="inline-flex items-center justify-center h-11 px-5 sm:px-6 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider shadow-[0_2px_12px_rgba(25,66,47,0.12)] hover:bg-primary transition-all duration-200"
            >
              <span className="sm:hidden">Order</span>
              <span className="hidden sm:inline">Order Online</span>
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-nav-drawer"
              onClick={() => setOpen(true)}
              className="xl:hidden p-2 rounded-full text-on-surface hover:bg-surface-container-high transition-colors"
            >
              <Icon name="menu" className="text-[24px]" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav-drawer"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-[60] bg-surface-container-lowest transform transition-transform duration-300 ease-in-out flex flex-col p-6 xl:hidden overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between pb-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary">EARTH CAFÉ</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">Mindful Living</span>
          </div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="p-2 rounded-full text-on-surface hover:bg-surface-container-high transition-colors"
          >
            <Icon name="close" className="text-[28px]" />
          </button>
        </div>
        <nav className="flex flex-col gap-5 py-8" aria-label="Mobile" onClick={close}>
          <Link href="/" className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors">
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-headline-sm text-headline-sm transition-colors hover:text-primary ${
                isActive(pathname, link.href) ? "text-primary italic" : "text-on-surface"
              }`}
            >
              {link.mobileLabel}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-6 flex flex-col gap-4" onClick={close}>
          <Link
            href="/order-online"
            className="w-full flex items-center justify-center py-4 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider"
          >
            Order Online • Direct Delivery
          </Link>
          <div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant pt-2">
            <span>Bandra • Juhu • BKC</span>
            <span>10am – 11pm</span>
          </div>
        </div>
      </div>
    </>
  );
}
