"use client";

import { useState, type FormEvent } from "react";
import { locations } from "@/data/site";
import { Icon } from "./ui";

const inputClass =
  "w-full h-12 px-4 rounded-lg bg-surface-container-lowest border border-[rgba(38,63,50,0.15)] text-on-surface font-body-md text-body-md outline-none transition focus:border-primary-container focus:ring-4 focus:ring-[rgba(49,90,69,0.1)]";
const labelClass = "block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant mb-2";

type Kind = "reservation" | "catering";

/**
 * Reservation / catering enquiry form.
 * TODO: connect `onSubmit` to a booking API or email service — it currently only confirms on the client.
 */
export default function RequestForm({ kind }: { kind: Kind }) {
  const [sent, setSent] = useState<{ name: string } | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setSent({ name: String(data.get("name") || "friend") });
  }

  if (sent) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-surface-container-lowest shadow-sm text-center flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-4">
          <Icon name="check" className="text-[28px]" />
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Thank you, {sent.name}.</h3>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          {kind === "reservation"
            ? "Your table request has been received. Our team will call you shortly to confirm."
            : "Your catering enquiry has been received. Our events team will be in touch within one working day."}
        </p>
        <button
          type="button"
          onClick={() => setSent(null)}
          className="mt-6 font-label-lg text-label-lg uppercase tracking-wider text-primary underline underline-offset-4"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="p-6 sm:p-10 rounded-3xl bg-surface-container-lowest shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
        <label htmlFor="name" className={labelClass}>Name</label>
        <input id="name" name="name" required autoComplete="name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="phone" className={labelClass}>Phone</label>
        <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+91" className={inputClass} />
      </div>
      <div>
        <label htmlFor="location" className={labelClass}>Café</label>
        <select id="location" name="location" className={inputClass}>
          {locations.map((l) => (
            <option key={l.slug} value={l.slug}>{l.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="date" className={labelClass}>Date</label>
        <input id="date" name="date" type="date" required className={inputClass} />
      </div>
      {kind === "reservation" ? (
        <>
          <div>
            <label htmlFor="time" className={labelClass}>Time</label>
            <input id="time" name="time" type="time" required min="08:00" max="23:00" className={inputClass} />
          </div>
          <div>
            <label htmlFor="guests" className={labelClass}>Guests</label>
            <select id="guests" name="guests" className={inputClass} defaultValue="2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
              ))}
            </select>
          </div>
        </>
      ) : (
        <>
          <div>
            <label htmlFor="event" className={labelClass}>Occasion</label>
            <select id="event" name="event" className={inputClass}>
              <option>Birthday / Celebration</option>
              <option>Corporate Lunch</option>
              <option>Wellness Workshop</option>
              <option>Office Catering</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="headcount" className={labelClass}>Headcount</label>
            <input id="headcount" name="headcount" type="number" min={10} defaultValue={20} className={inputClass} />
          </div>
        </>
      )}
      <div className="sm:col-span-2">
        <label htmlFor="notes" className={labelClass}>Notes</label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder={kind === "reservation" ? "Allergies, occasions, seating preferences…" : "Tell us about your gathering…"}
          className={`${inputClass} h-auto py-3`}
        />
      </div>
      <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="font-body-sm text-body-sm text-outline">We&apos;ll confirm by phone. No payment needed to book.</p>
        <button
          type="submit"
          className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-widest shadow-md hover:bg-primary transition-colors"
        >
          {kind === "reservation" ? "Request Table" : "Send Enquiry"}
        </button>
      </div>
    </form>
  );
}
