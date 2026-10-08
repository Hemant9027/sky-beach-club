import { ArrowUp, Phone } from "lucide-react";
import { Link } from "../lib/router";
import { SITE } from "../data/content";
import { Reveal } from "./motion";

const COLS = [
  {
    title: "Stay",
    links: [
      { label: "Accommodations", to: "/stay" },
      { label: "Rates & Seasons", to: "/stay#rates" },
      { label: "Reservations", to: "/reserve" },
    ],
  },
  {
    title: "Experience",
    links: [
      { label: "Amenities", to: "/experience" },
      { label: "Adventure Tours", to: "/experience#adventures" },
      { label: "Gallery", to: "/gallery" },
    ],
  },
  {
    title: "The Club",
    links: [
      { label: "Pascal's Restaurant", to: "/dine" },
      { label: "Weddings & Events", to: "/weddings" },
      { label: "About & Journal", to: "/about" },
    ],
  },
  {
    title: "Eleuthera",
    links: [
      { label: "The Island", to: "/eleuthera" },
      { label: "Getting Here", to: "/eleuthera#getting-here" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-abyss text-paper">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-[1600px] px-5 pb-10 pt-20 md:px-10 md:pt-28">
        <Reveal>
          <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-sm">
              <p className="display-2 text-3xl uppercase tracking-[0.08em]">Sky Beach Club</p>
              <p className="eyebrow mt-3 text-paper/50">Eleuthera · The Bahamas</p>
              <p className="mt-6 font-sans text-[0.92rem] leading-relaxed text-paper/65">
                An intimate collection of seven oceanview accommodations — where the sky meets the
                beach.
              </p>
              <div className="mt-8 space-y-2.5">
                {[
                  { l: SITE.reservations, },
                  { l: SITE.office },
                  { l: SITE.pascals },
                ].map(({ l }) => (
                  <a
                    key={l.tel}
                    href={`tel:${l.tel}`}
                    className="group flex items-center gap-3 font-sans text-sm text-paper/65 transition-colors hover:text-paper"
                  >
                    <Phone size={13} strokeWidth={1.5} className="text-paper/40" />
                    <span>
                      {l.label} — <span className="text-paper">{l.phone}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <nav className="grid grid-cols-2 gap-x-14 gap-y-10 sm:grid-cols-4" aria-label="Footer">
              {COLS.map((c) => (
                <div key={c.title}>
                  <p className="eyebrow text-paper/40">{c.title}</p>
                  <ul className="mt-5 space-y-3">
                    {c.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          to={l.to}
                          className="u-link font-sans text-[0.9rem] text-paper/70 transition-colors hover:text-paper"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-paper/12 pt-8 md:flex-row md:items-center">
            <Link to="/reserve" className="btn btn-outline-light py-3.5">
              Reserve Your Stay
            </Link>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <a
                href={SITE.tripadvisor}
                target="_blank"
                rel="noreferrer"
                className="u-link font-sans text-[0.68rem] uppercase tracking-[0.22em] text-paper/50 hover:text-paper"
              >
                TripAdvisor Reviews
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="u-link font-sans text-[0.68rem] uppercase tracking-[0.22em] text-paper/50 hover:text-paper"
              >
                {SITE.email}
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 text-paper/70 transition-all hover:bg-paper hover:text-ink"
              >
                <ArrowUp size={15} strokeWidth={1.5} />
              </button>
            </div>
          </div>
          <p className="mt-8 font-sans text-[0.68rem] leading-relaxed tracking-wide text-paper/35">
            Sky Beach Club · Governor's Harbour, Eleuthera, The Bahamas · Seven minutes south of
            Governor's Harbour Airport (GHB) · Check-in 4 p.m. · Check-out 10 a.m.
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
