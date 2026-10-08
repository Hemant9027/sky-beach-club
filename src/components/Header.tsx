import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Link, useRouter } from "../lib/router";
import { SITE } from "../data/content";
import { EASE } from "./motion";

const NAV = [
  { label: "Stay", to: "/stay" },
  { label: "Experience", to: "/experience" },
  { label: "Dine", to: "/dine" },
  { label: "Weddings & Events", to: "/weddings" },
  { label: "Eleuthera", to: "/eleuthera" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const MOBILE_NAV = [
  { label: "Stay", sub: "Accommodations & Rates", to: "/stay" },
  { label: "Experience", sub: "Amenities & Adventure Tours", to: "/experience" },
  { label: "Pascal's", sub: "Oceanfront Restaurant & Bar", to: "/dine" },
  { label: "Weddings & Events", sub: "Beachfront celebrations", to: "/weddings" },
  { label: "Eleuthera", sub: "The island & getting here", to: "/eleuthera" },
  { label: "Gallery", sub: "Photography", to: "/gallery" },
  { label: "About", sub: "Our story & journal", to: "/about" },
  { label: "Contact", sub: "Speak with the Club", to: "/contact" },
];

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex flex-col items-start leading-none" ariaLabel="Sky Beach Club — home">
      <span
        className={`display-2 text-[1.35rem] md:text-[1.55rem] tracking-[0.08em] uppercase transition-colors duration-500 ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        Sky Beach Club
      </span>
      <span
        className={`eyebrow mt-1.5 text-[0.52rem] transition-colors duration-500 ${
          light ? "text-paper/70" : "text-ink/55"
        }`}
      >
        Eleuthera · The Bahamas
      </span>
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { path } = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setOpen(false), [path]);

  const light = !scrolled && !open; /* hero overlay state */

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.25, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-paper/92 backdrop-blur-md shadow-[0_1px_0_rgba(34,41,42,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
          <Wordmark light={light} />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`u-link font-sans text-[0.66rem] font-medium uppercase tracking-[0.22em] transition-colors duration-500 ${
                  light ? "text-paper/90 hover:text-paper" : "text-ink/75 hover:text-ink"
                } ${path === n.to ? (light ? "text-paper" : "text-ink") : ""}`}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/reserve" className="btn btn-coral ml-2 px-6 py-3">
              Reserve
            </Link>
          </nav>

          {/* Mobile toggles */}
          <div className="flex items-center gap-3 xl:hidden">
            <a
              href={`tel:${SITE.reservations.tel}`}
              aria-label="Call reservations"
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-500 ${
                light ? "border-paper/40 text-paper" : "border-ink/20 text-ink"
              }`}
            >
              <Phone size={15} strokeWidth={1.5} />
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-500 ${
                light ? "border-paper/40 text-paper" : "border-ink/20 text-ink"
              }`}
            >
              {open ? <X size={17} strokeWidth={1.5} /> : <Menu size={17} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ——— Full-screen mobile menu ——— */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col bg-abyss text-paper"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="grain absolute inset-0" />
            <div className="relative flex-1 overflow-y-auto px-7 pb-40 pt-28">
              <p className="eyebrow text-paper/45">Sky Beach Club</p>
              <nav className="mt-8 flex flex-col" aria-label="Mobile">
                {MOBILE_NAV.map((n, i) => (
                  <motion.div
                    key={n.to}
                    initial={{ opacity: 0, x: -22 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.08 + i * 0.055, ease: EASE }}
                  >
                    <Link
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between border-b border-paper/10 py-[1.05rem]"
                    >
                      <span className="display-2 text-[1.75rem] text-paper transition-colors group-hover:text-blush">
                        {n.label}
                      </span>
                      <span className="font-sans text-[0.58rem] uppercase tracking-[0.22em] text-paper/40">
                        {n.sub}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
                className="mt-10 space-y-2.5"
              >
                <a href={`tel:${SITE.reservations.tel}`} className="block font-sans text-sm text-paper/70">
                  Reservations — <span className="text-paper">{SITE.reservations.phone}</span>
                </a>
                <a href={`tel:${SITE.office.tel}`} className="block font-sans text-sm text-paper/70">
                  Club Office — <span className="text-paper">{SITE.office.phone}</span>
                </a>
                <a href={`tel:${SITE.pascals.tel}`} className="block font-sans text-sm text-paper/70">
                  Pascal's — <span className="text-paper">{SITE.pascals.phone}</span>
                </a>
              </motion.div>
            </div>

            {/* pinned CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
              className="absolute inset-x-0 bottom-0 border-t border-paper/12 bg-abyss/95 p-5 backdrop-blur"
            >
              <Link to="/reserve" onClick={() => setOpen(false)} className="btn btn-coral w-full">
                Reserve Your Stay
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
