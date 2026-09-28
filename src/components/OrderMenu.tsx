"use client";

import { useMemo, useState } from "react";
import { locations, menuCategories, menuItems, type MenuCategory } from "@/data/site";
import { Icon, rupees } from "./ui";

/**
 * Online ordering menu with the "Floating Botanical Cart Bar" from the design system.
 * TODO: hand the basket to a real checkout / POS — "Place Order" currently only confirms on the client.
 */
export default function OrderMenu() {
  const [category, setCategory] = useState<"all" | MenuCategory>("all");
  const [qty, setQty] = useState<Record<string, number>>({});
  const [basketOpen, setBasketOpen] = useState(false);
  const [placed, setPlaced] = useState(false);

  const items = category === "all" ? menuItems : menuItems.filter((m) => m.category === category);
  const lines = useMemo(() => menuItems.filter((m) => qty[m.id]).map((m) => ({ ...m, qty: qty[m.id] })), [qty]);
  const count = lines.reduce((s, l) => s + l.qty, 0);
  const subtotal = lines.reduce((s, l) => s + l.qty * l.price, 0);

  const change = (id: string, delta: number) =>
    setQty((q) => {
      const copy = { ...q, [id]: Math.max(0, (q[id] ?? 0) + delta) };
      if (!copy[id]) delete copy[id];
      return copy;
    });

  return (
    <section className="w-full bg-surface-container-low py-12 md:py-16 px-5 sm:px-6 lg:px-12 pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-6 mb-8 scrollbar-none -mx-5 px-5 sm:mx-0 sm:px-0">
          {menuCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCategory(c.id)}
              className={`px-5 py-2.5 rounded-full font-label-md text-label-md uppercase tracking-wider transition-all duration-200 shrink-0 ${
                c.id === category
                  ? "bg-primary-container text-on-primary"
                  : "bg-surface-container-lowest text-on-surface-variant hover:text-primary"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div data-anim="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => {
            const n = qty[item.id] ?? 0;
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-surface-container-lowest border border-[rgba(38,63,50,0.08)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-headline-sm text-headline-sm text-primary">{item.name}</h3>
                    <span className="font-title-md text-title-md text-primary shrink-0">{rupees(item.price)}</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">{item.description}</p>
                </div>
                <div className="flex items-center justify-between mt-5">
                  <span
                    className={`font-label-sm text-label-sm uppercase px-2 py-0.5 rounded ${
                      item.accent ? "text-secondary bg-secondary-fixed/50" : "text-primary bg-surface-container"
                    }`}
                  >
                    {item.tag}
                  </span>
                  {n === 0 ? (
                    <button
                      type="button"
                      onClick={() => change(item.id, 1)}
                      className="inline-flex items-center gap-1 h-9 px-4 rounded-full bg-surface-container-high text-primary font-label-md text-label-md uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-colors"
                    >
                      <Icon name="add" className="text-[16px]" /> Add
                    </button>
                  ) : (
                    <div className="inline-flex items-center gap-1 h-9 rounded-full bg-primary-container text-on-primary">
                      <button type="button" aria-label={`Remove one ${item.name}`} onClick={() => change(item.id, -1)} className="w-9 h-9 flex items-center justify-center">
                        <Icon name="remove" className="text-[16px]" />
                      </button>
                      <span className="font-title-md text-title-md w-5 text-center">{n}</span>
                      <button type="button" aria-label={`Add one ${item.name}`} onClick={() => change(item.id, 1)} className="w-9 h-9 flex items-center justify-center">
                        <Icon name="add" className="text-[16px]" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Botanical Cart Bar */}
      {count > 0 && !basketOpen && (
        <div className="fixed bottom-4 inset-x-4 z-40 flex justify-center">
          <div className="w-full max-w-xl flex items-center justify-between gap-4 pl-6 pr-2 py-2 rounded-full bg-surface-container-lowest/85 backdrop-blur-md shadow-[0_12px_36px_-8px_rgba(38,63,50,0.25)] border border-[rgba(38,63,50,0.08)]">
            <div className="font-body-md text-body-md text-on-surface">
              <span className="font-semibold">{count} {count === 1 ? "item" : "items"}</span>
              <span className="text-outline"> • </span>
              <span className="font-semibold text-primary">{rupees(subtotal)}</span>
            </div>
            <button
              type="button"
              onClick={() => setBasketOpen(true)}
              className="h-11 px-5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider hover:bg-primary transition-colors"
            >
              View Basket
            </button>
          </div>
        </div>
      )}

      {/* Basket drawer */}
      {basketOpen && (
        <div className="fixed inset-0 z-[70] flex justify-end" role="dialog" aria-modal="true" data-lenis-prevent aria-label="Your mindful basket">
          <button type="button" aria-label="Close basket" className="absolute inset-0 bg-primary/30" onClick={() => setBasketOpen(false)} />
          <div className="relative w-full max-w-md h-full bg-surface-container-lowest flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-[rgba(38,63,50,0.08)]">
              <h2 className="font-headline-sm text-headline-sm text-primary">Your Mindful Basket</h2>
              <button type="button" aria-label="Close basket" onClick={() => setBasketOpen(false)} className="p-2 rounded-full hover:bg-surface-container-high">
                <Icon name="close" />
              </button>
            </div>

            {placed ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-4">
                  <Icon name="check" className="text-[28px]" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Order received</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Thank you! We&apos;re preparing your order with good energy.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQty({});
                    setPlaced(false);
                    setBasketOpen(false);
                  }}
                  className="mt-6 font-label-lg text-label-lg uppercase tracking-wider text-primary underline underline-offset-4"
                >
                  Start a new order
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {lines.length === 0 && <p className="font-body-md text-body-md text-on-surface-variant">Your basket is empty.</p>}
                  {lines.map((l) => (
                    <div key={l.id} className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-title-md text-title-md text-primary">{l.name}</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {l.qty} × {rupees(l.price)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button type="button" aria-label={`Remove one ${l.name}`} onClick={() => change(l.id, -1)} className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary">
                          <Icon name="remove" className="text-[16px]" />
                        </button>
                        <span className="w-5 text-center font-title-md text-title-md">{l.qty}</span>
                        <button type="button" aria-label={`Add one ${l.name}`} onClick={() => change(l.id, 1)} className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary">
                          <Icon name="add" className="text-[16px]" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6 border-t border-[rgba(38,63,50,0.08)] space-y-4">
                  <label className="block">
                    <span className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant mb-2">Pick up from</span>
                    <select className="w-full h-12 px-4 rounded-lg bg-surface-container-lowest border border-[rgba(38,63,50,0.15)] font-body-md text-body-md focus:border-primary-container outline-none">
                      {locations.map((loc) => (
                        <option key={loc.slug}>{loc.name}</option>
                      ))}
                    </select>
                  </label>
                  <div className="flex items-center justify-between font-title-lg text-title-lg text-primary">
                    <span>Subtotal</span>
                    <span>{rupees(subtotal)}</span>
                  </div>
                  <button
                    type="button"
                    disabled={count === 0}
                    onClick={() => setPlaced(true)}
                    className="w-full h-12 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-widest hover:bg-primary transition-colors disabled:opacity-50"
                  >
                    Place Order
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
