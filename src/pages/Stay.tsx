import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "../lib/router";
import SBCImage from "../components/SBCImage";
import StayModal from "../components/StayModal";
import { Chapter, PageHero, SectionHead, CTABand } from "../components/ui";
import { Reveal } from "../components/motion";
import { ACCOMMODATIONS, FAQS, IMAGES, RATE_NOTES, RATES, SITE, type Accommodation } from "../data/content";

function RateTable() {
  return (
    <div className="mt-14 overflow-x-auto">
      <table className="w-full min-w-[760px] border-collapse text-left">
        <thead>
          <tr className="border-b-2 border-ink/70">
            {["Season", "Dates", "Bungalow", "4-Bedroom Villa", "Minimum Stay"].map((h, i) => (
              <th
                key={h}
                className={`eyebrow pb-4 pr-6 font-semibold text-coral ${i >= 2 ? "text-right" : ""}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {RATES.map((r, idx) => (
            <tr
              key={idx}
              className={`border-b hairline transition-colors hover:bg-ivory ${
                r.season === "Holiday" ? "bg-shell/60" : ""
              }`}
            >
              <td className="display-2 py-4 pr-6 text-[1.15rem]">{r.season}</td>
              <td className="py-4 pr-6 font-sans text-[0.85rem] text-ink/65">{r.dates}</td>
              <td className="py-4 pr-6 text-right font-sans text-[0.92rem] font-medium">{r.bungalow} <span className="text-ink/45">/ night</span></td>
              <td className="py-4 pr-6 text-right font-sans text-[0.92rem] font-medium">{r.villa} <span className="text-ink/45">/ night</span></td>
              <td className="py-4 text-right font-sans text-[0.92rem] text-ink/65">{r.min} nights</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-12 divide-y divide-ink/10 border-y hairline">
      {FAQS.map((f, i) => (
        <div key={f.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-6 py-6 text-left"
          >
            <span className="display-2 text-[1.3rem] leading-snug transition-colors hover:text-ocean">{f.q}</span>
            <span
              className={`display-2 shrink-0 text-3xl font-light text-coral transition-transform duration-500 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className="grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <p className="max-w-3xl pb-7 font-sans text-[0.92rem] leading-relaxed text-ink/65">{f.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Stay() {
  const [active, setActive] = useState<Accommodation | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Stay — Accommodations & Rates"
        title={
          <>
            Seven stays, <span className="serif-italic">one horizon</span>
          </>
        }
        lede="An intimate collection of seven oceanview accommodations — the Bahamas' most luxuriously appointed four-bedroom villas and oceanfront poolside bungalows."
        image={IMAGES.miniAccom}
      >
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link to="/reserve" className="btn btn-coral">Reserve Your Stay</Link>
          <a href="#rates" className="btn btn-outline-light">View Rates</a>
        </div>
      </PageHero>

      {/* ——— The collection ——— */}
      <section className="bg-paper py-24 md:py-36">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Chapter no="01" label="The Collection" />
          <SectionHead
            eyebrow="Three categories"
            title={
              <>
                Choose your <span className="serif-italic text-ocean">view</span>
              </>
            }
            lede="All accommodations feature tropical vistas with ocean views and luxurious amenities — either footsteps, or a three-minute walk, to Pascal's Restaurant, Bar and Grille."
          />

          <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
            {ACCOMMODATIONS.map((a, idx) => (
              <Reveal key={a.id}>
                <article
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                    idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <button
                    onClick={() => setActive(a)}
                    className="group relative block overflow-hidden"
                    aria-label={`View ${a.name}`}
                  >
                    <div className="img-frame aspect-[4/3] overflow-hidden">
                      <div className="h-full w-full transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]">
                        <SBCImage image={a.hero} className="h-full w-full object-cover" />
                      </div>
                    </div>
                    <span className="absolute bottom-5 left-5 bg-abyss/70 px-4 py-2 font-sans text-[0.6rem] uppercase tracking-[0.26em] text-paper backdrop-blur">
                      View gallery & details
                    </span>
                  </button>
                  <div>
                    <p className="eyebrow text-coral">{a.index} — {a.count}</p>
                    <h3 className="display-2 mt-4 text-[2.1rem] leading-[1.05] md:text-[2.7rem]">{a.name}</h3>
                    <div className="mt-5 flex flex-wrap gap-x-7 gap-y-2 border-y hairline py-3.5">
                      <span className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-ink/55">{a.size}</span>
                      <span className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-ink/55">{a.guests}</span>
                      <span className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-ink/55">From {a.from} / night</span>
                    </div>
                    <p className="mt-6 font-sans text-[0.95rem] leading-relaxed text-ink/68">
                      {a.description[0]}
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <button onClick={() => setActive(a)} className="btn btn-solid">
                        View Accommodation
                      </button>
                      <a href="#rates" className="btn btn-outline">Check Rates</a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Rates ——— */}
      <section id="rates" className="bg-ivory py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <Chapter no="02" label="Seasonal Rates" />
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHead
              eyebrow="2026 — 2027"
              title={
                <>
                  Rates & <span className="serif-italic text-ocean">seasons</span>
                </>
              }
              lede="Check-in 4 p.m. · Check-out 10:00 a.m."
            />
            <Reveal delay={0.15}>
              <Link to="/reserve" className="btn btn-coral mb-2">
                Request Reservation <ArrowRight size={13} strokeWidth={1.5} />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <RateTable />
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="mt-10 grid gap-x-10 gap-y-2.5 border-t hairline pt-8 sm:grid-cols-2">
              {RATE_NOTES.map((n) => (
                <li key={n} className="font-sans text-[0.82rem] leading-relaxed text-ink/58">
                  — {n}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-12 flex flex-col items-start justify-between gap-6 bg-ocean p-8 text-paper md:flex-row md:items-center md:p-10">
              <div>
                <p className="display-2 text-2xl">Prefer to speak with the Club?</p>
                <p className="mt-2 font-sans text-[0.88rem] text-paper/70">
                  Our reservations team will help you choose the right residence for your dates.
                </p>
              </div>
              <a href={`tel:${SITE.reservations.tel}`} className="btn btn-coral shrink-0">
                <Phone size={14} strokeWidth={1.5} /> {SITE.reservations.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——— FAQ ——— */}
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1000px] px-5 md:px-10">
          <Chapter no="03" label="Good to Know" />
          <SectionHead
            eyebrow="Questions"
            title={
              <>
                Before you <span className="serif-italic text-ocean">arrive</span>
              </>
            }
          />
          <FAQ />
        </div>
      </section>

      <CTABand image={IMAGES.villaPool} />
      <StayModal stay={active} onClose={() => setActive(null)} />
    </>
  );
}
