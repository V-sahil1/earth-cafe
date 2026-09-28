import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span aria-hidden className={`material-symbols-outlined ${className}`}>
      {name}
    </span>
  );
}

/** Fills its (relative, sized) parent — used for every card/hero photo. */
export function Photo({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  preload,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
}) {
  return <Image src={src} alt={alt} fill sizes={sizes} preload={preload} className={`object-cover ${className}`} />;
}

export function Eyebrow({ children, className = "text-primary-container" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`block font-label-md text-label-md uppercase tracking-[0.2em] font-semibold ${className}`}>
      {children}
    </span>
  );
}

const buttonStyles = {
  primary: "bg-primary-container text-on-primary shadow-md hover:bg-primary",
  soft: "bg-surface-container-low text-primary hover:bg-surface-container",
  light: "bg-surface-container-lowest text-primary shadow-lg hover:bg-surface-container",
  outlineLight: "border border-primary-fixed text-primary-fixed hover:bg-primary-container",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: keyof typeof buttonStyles }) {
  return (
    <Link
      {...props}
      className={`inline-flex items-center justify-center px-8 py-4 rounded-full font-label-lg text-label-lg uppercase tracking-widest transition-all duration-300 ${buttonStyles[variant]} ${className}`}
    />
  );
}

export function Section({
  children,
  className = "bg-surface-container-lowest",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`w-full py-16 md:py-20 lg:py-28 px-5 sm:px-6 lg:px-12 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

export const rupees = (n: number) => `₹${n.toLocaleString("en-IN")}`;
