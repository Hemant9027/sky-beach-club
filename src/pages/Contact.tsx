import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Chapter, PageHero, CTABand } from "../components/ui";
import { Reveal } from "../components/motion";
import { FieldError, SuccessOverlay, useFormValidation } from "./Reserve";
import { IMAGES, SITE } from "../data/content";

export default function Contact() {
  const [form, setForm] = useState({
    arrival: "", departure: "", guests: "", accommodation: "",
    name: "", email: "", phone: "", message: "",
  });
  const [reason, setReason] = useState("Reservations");
  const [sent, setSent] = useState(false);
  const { errors, setErrors } = useFormValidation(form);

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const okName = form.name.trim().length > 0;
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    const okPhone = form.phone.replace(/\D/g, "").length >= 7;
    setErrors({
      name: okName ? undefined : "Please share your name",
      email: okEmail ? undefined : "A valid email is required",
      phone: okPhone ? undefined : "A valid phone number is required",
    });
    if (okName && okEmail && okPhone) setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Speak with <span className="serif-italic">the Club</span>
          </>
        }
        lede="Questions about reservations, weddings, or the island itself — reach out and we'll take care of the rest."
        image={IMAGES.contact}
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Chapter no="01" label="Get in Touch" />
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            {/* Info column */}
            <div>
              <Reveal>
                <h2 className="display-2 text-[2.3rem] leading-[1.06]">
                  Sky Beach Club <br />
                  <span className="serif-italic text-ocean">Eleuthera, The Bahamas</span>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <ul className="mt-10 space-y-6">
                  {[SITE.reservations, SITE.office, SITE.pascals].map((c) => (
                    <li key={c.tel} className="flex items-center justify-between gap-6 border-b hairline pb-5">
                      <span className="flex items-center gap-3 font-sans text-[0.85rem] text-ink/60">
                        <Phone size={14} strokeWidth={1.5} className="text-coral" /> {c.label}
                      </span>
                      <a href={`tel:${c.tel}`} className="display-2 text-[1.35rem] transition-colors hover:text-coral">
                        {c.phone}
                      </a>
                    </li>
                  ))}
                  <li className="flex items-center justify-between gap-6 border-b hairline pb-5">
                    <span className="flex items-center gap-3 font-sans text-[0.85rem] text-ink/60">
                      <Mail size={14} strokeWidth={1.5} className="text-coral" /> Email
                    </span>
                    <a href={`mailto:${SITE.email}`} className="font-sans text-[0.95rem] transition-colors hover:text-coral">
                      {SITE.email}
                    </a>
                  </li>
                </ul>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-10 bg-ivory p-7">
                  <p className="eyebrow flex items-center gap-2 text-coral">
                    <MapPin size={12} strokeWidth={1.5} /> Mailing Address
                  </p>
                  <p className="mt-4 font-sans text-[0.88rem] leading-relaxed text-ink/65">{SITE.mailing}</p>
                  <a
                    href="https://maps.google.com/maps?q=Sky+Beach+Club,+Eleuthera,+Bahamas"
                    target="_blank"
                    rel="noreferrer"
                    className="u-link mt-6 inline-flex items-center gap-2 font-sans text-[0.66rem] font-medium uppercase tracking-[0.24em] text-ink"
                  >
                    Open in Google Maps <ArrowUpRight size={12} strokeWidth={1.5} />
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.22}>
                <div className="img-frame mt-8 aspect-[16/9] overflow-hidden">
                  <iframe
                    title="Map — Sky Beach Club, Eleuthera, The Bahamas"
                    src="https://maps.google.com/maps?q=Sky%20Beach%20Club%2C%20Eleuthera%2C%20Bahamas&t=&z=11&ie=UTF8&iwloc=&output=embed"
                    className="h-full w-full border-0 grayscale-[35%]"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>

            {/* Form column */}
            <div>
              {sent ? (
                <SuccessOverlay
                  title="Thank you — message received"
                  body="Your note has been received. The Sky Beach Club team will respond as soon as possible. For time-sensitive questions, the fastest way to reach the Club is by phone."
                  onReset={() => {
                    setSent(false);
                    setForm({ arrival: "", departure: "", guests: "", accommodation: "", name: "", email: "", phone: "", message: "" });
                  }}
                />
              ) : (
                <Reveal delay={0.1}>
                  <form onSubmit={submit} noValidate className="space-y-8">
                    <div>
                        <span className="f-label">Reason for contacting us</span>
                      <div className="mt-3 flex flex-wrap gap-3">
                        {["Reservations", "Weddings & Events", "Real Estate", "Other"].map((r) => (
                          <button
                            type="button"
                            key={r}
                            onClick={() => setReason(r)}
                            aria-pressed={reason === r}
                            className={`border px-5 py-2.5 font-sans text-[0.66rem] uppercase tracking-[0.2em] transition-all duration-400 ${
                              reason === r
                                ? "border-coral bg-coral text-paper"
                                : "border-ink/20 text-ink/60 hover:border-ink/50"
                            }`}
                          >
                            {r}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="c-name" className="f-label">Full name</label>
                      <input id="c-name" type="text" autoComplete="name" placeholder="Your name" className={`field ${errors.name ? "field-error" : ""}`} value={form.name} onChange={set("name")} />
                      <FieldError msg={errors.name} />
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2">
                      <div>
                        <label htmlFor="c-email" className="f-label">Email</label>
                        <input id="c-email" type="email" autoComplete="email" placeholder="you@example.com" className={`field ${errors.email ? "field-error" : ""}`} value={form.email} onChange={set("email")} />
                        <FieldError msg={errors.email} />
                      </div>
                      <div>
                        <label htmlFor="c-phone" className="f-label">Phone</label>
                        <input id="c-phone" type="tel" autoComplete="tel" placeholder="+1 …" className={`field ${errors.phone ? "field-error" : ""}`} value={form.phone} onChange={set("phone")} />
                        <FieldError msg={errors.phone} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="c-message" className="f-label">Message</label>
                      <textarea id="c-message" rows={6} placeholder="How can we help?" className="field resize-none" value={form.message} onChange={set("message")} />
                    </div>
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <button type="submit" className="btn btn-coral">Send Message</button>
                      <p className="font-sans text-[0.72rem] text-ink/50">
                        Or call reservations — {SITE.reservations.phone}
                      </p>
                    </div>
                  </form>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTABand image={IMAGES.oceanTwo} />
    </>
  );
}
