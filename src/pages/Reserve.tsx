import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { Link } from "../lib/router";
import SBCImage from "../components/SBCImage";
import { Chapter, PageHero } from "../components/ui";
import { EASE, Reveal } from "../components/motion";
import { ACCOMMODATIONS, IMAGES, SITE } from "../data/content";

interface FormState {
  arrival: string;
  departure: string;
  guests: string;
  accommodation: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initial: FormState = {
  arrival: "",
  departure: "",
  guests: "",
  accommodation: "",
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function useFormValidation(fields: FormState) {
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!fields.arrival) e.arrival = "Please choose an arrival date";
    if (!fields.departure) e.departure = "Please choose a departure date";
    if (fields.arrival && fields.departure && fields.departure <= fields.arrival)
      e.departure = "Departure must follow arrival";
    if (!fields.guests) e.guests = "Select guests";
    if (!fields.accommodation) e.accommodation = "Select an accommodation";
    if (!fields.name.trim()) e.name = "Please share your name";
    if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      e.email = "A valid email is required";
    if (!fields.phone.trim() || fields.phone.replace(/\D/g, "").length < 7)
      e.phone = "A valid phone number is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  return { errors, validate, setErrors };
}

export function FieldError({ msg }: { msg?: string }) {
  return (
    <AnimatePresence>
      {msg && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mt-1.5 font-sans text-[0.7rem] tracking-wide text-[#b3553f]"
          role="alert"
        >
          {msg}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export function SuccessOverlay({ title, body, onReset }: { title: string; body: string; onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="flex min-h-[480px] flex-col items-center justify-center border hairline bg-ivory p-10 text-center"
      role="status"
    >
      <motion.span
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-ocean text-paper"
      >
        <Check size={24} strokeWidth={1.5} />
      </motion.span>
      <h3 className="display-2 mt-8 text-[2rem] leading-tight">{title}</h3>
      <p className="mt-4 max-w-md font-sans text-[0.92rem] leading-relaxed text-ink/62">{body}</p>
      <p className="mt-6 font-sans text-[0.78rem] uppercase tracking-[0.2em] text-ink/50">
        For immediate confirmation —{" "}
        <a href={`tel:${SITE.reservations.tel}`} className="text-coral underline-offset-4 hover:underline">
          {SITE.reservations.phone}
        </a>
      </p>
      <button onClick={onReset} className="btn btn-outline mt-9">
        Send Another Request
      </button>
    </motion.div>
  );
}

export default function Reserve() {
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);
  const { errors, validate, setErrors } = useFormValidation(form);

  const set = (k: keyof FormState) => (e: { target: { value: string } }) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title={
          <>
            Book your stay, <span className="serif-italic">island style</span>
          </>
        }
        lede="From water activities and sightseeing, to fine dining and total relaxation on a pink-sand beach — we will handle everything. All you need to do is show up."
        image={IMAGES.miniAmenities}
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Chapter no="01" label="Request a Reservation" />
          <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
            {/* ——— Form ——— */}
            <div>
              {sent ? (
                <SuccessOverlay
                  title="Thank you — request received"
                  body="Your reservation request has been received. A member of the Sky Beach Club team will be in touch to confirm availability and complete your booking. To secure dates right away, please call reservations."
                  onReset={() => {
                    setSent(false);
                    setForm(initial);
                  }}
                />
              ) : (
                <Reveal>
                  <form onSubmit={submit} noValidate className="space-y-8">
                    <div className="grid gap-8 sm:grid-cols-2">
                      <div>
                        <label htmlFor="arrival" className="f-label">Arrival</label>
                        <input id="arrival" type="date" min={new Date().toISOString().split("T")[0]} className={`field ${errors.arrival ? "field-error" : ""}`} value={form.arrival} onChange={set("arrival")} />
                        <FieldError msg={errors.arrival} />
                      </div>
                      <div>
                        <label htmlFor="departure" className="f-label">Departure</label>
                        <input id="departure" type="date" min={form.arrival || new Date().toISOString().split("T")[0]} className={`field ${errors.departure ? "field-error" : ""}`} value={form.departure} onChange={set("departure")} />
                        <FieldError msg={errors.departure} />
                      </div>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2">
                      <div>
                        <label htmlFor="guests" className="f-label">Guests</label>
                        <select id="guests" className={`field ${errors.guests ? "field-error" : ""}`} value={form.guests} onChange={set("guests")}>
                          <option value="">Select guests</option>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                            <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                          ))}
                          <option value="10+">Group / event</option>
                        </select>
                        <FieldError msg={errors.guests} />
                      </div>
                      <div>
                        <label htmlFor="accommodation" className="f-label">Accommodation</label>
                        <select id="accommodation" className={`field ${errors.accommodation ? "field-error" : ""}`} value={form.accommodation} onChange={set("accommodation")}>
                          <option value="">Select accommodation</option>
                          {ACCOMMODATIONS.map((a) => (
                            <option key={a.id} value={a.name}>{a.name}</option>
                          ))}
                          <option value="No preference">No preference — advise me</option>
                        </select>
                        <FieldError msg={errors.accommodation} />
                      </div>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="f-label">Full name</label>
                        <input id="name" type="text" autoComplete="name" placeholder="Your name" className={`field ${errors.name ? "field-error" : ""}`} value={form.name} onChange={set("name")} />
                        <FieldError msg={errors.name} />
                      </div>
                      <div>
                        <label htmlFor="phone" className="f-label">Phone</label>
                        <input id="phone" type="tel" autoComplete="tel" placeholder="+1 …" className={`field ${errors.phone ? "field-error" : ""}`} value={form.phone} onChange={set("phone")} />
                        <FieldError msg={errors.phone} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="f-label">Email</label>
                      <input id="email" type="email" autoComplete="email" placeholder="you@example.com" className={`field ${errors.email ? "field-error" : ""}`} value={form.email} onChange={set("email")} />
                      <FieldError msg={errors.email} />
                    </div>
                    <div>
                      <label htmlFor="message" className="f-label">Message — occasions, questions, requests (optional)</label>
                      <textarea id="message" rows={4} placeholder="Tell us about your trip…" className="field resize-none" value={form.message} onChange={set("message")} />
                    </div>
                    <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
                      <button type="submit" className="btn btn-coral">
                        Request Reservation
                      </button>
                      <p className="font-sans text-[0.72rem] leading-relaxed text-ink/50 sm:max-w-[240px]">
                        Prefer email? Write to{" "}
                        <a href={`mailto:${SITE.email}`} className="text-coral underline-offset-4 hover:underline">
                          {SITE.email}
                        </a>
                      </p>
                    </div>
                  </form>
                </Reveal>
              )}
            </div>

            {/* ——— Sidebar ——— */}
            <div className="space-y-10">
              <Reveal delay={0.1}>
                <div className="img-frame aspect-[16/10] overflow-hidden">
                  <SBCImage image={IMAGES.reservations} className="h-full w-full object-cover" />
                </div>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="border hairline bg-ivory p-8">
                  <p className="eyebrow text-coral">Speak with the Club</p>
                  <ul className="mt-6 space-y-5">
                    {[SITE.reservations, SITE.office, SITE.pascals].map((c) => (
                      <li key={c.tel}>
                        <a href={`tel:${c.tel}`} className="group flex items-center justify-between gap-4">
                          <span className="font-sans text-[0.85rem] text-ink/60">{c.label}</span>
                          <span className="display-2 text-[1.3rem] text-ink transition-colors group-hover:text-coral">
                            {c.phone}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 border-t hairline pt-6">
                    <p className="font-sans text-[0.8rem] leading-relaxed text-ink/58">
                      Check-in 4 p.m. · Check-out 10:00 a.m. Seasonal minimum stays apply — see the{" "}
                      <Link to="/stay#rates" className="text-coral underline-offset-4 hover:underline">rate calendar</Link>.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.22}>
                <div className="flex items-start gap-4 border hairline p-6">
                  <Phone size={16} strokeWidth={1.4} className="mt-1 shrink-0 text-coral" />
                  <p className="font-sans text-[0.82rem] leading-relaxed text-ink/60">
                    From within the Bahamas, you can also reach the Club directly — rates are
                    subject to change until reservations are made.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
