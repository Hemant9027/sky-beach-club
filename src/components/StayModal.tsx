import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Users, X } from "lucide-react";
import { Link } from "../lib/router";
import SBCImage from "./SBCImage";
import Lightbox from "./Lightbox";
import type { Accommodation } from "../data/content";
import { SITE } from "../data/content";
import { EASE } from "./motion";

export default function StayModal({
  stay,
  onClose,
}: {
  stay: Accommodation | null;
  onClose: () => void;
}) {
  const [photo, setPhoto] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    if (stay) {
      setPhoto(0);
      setLightbox(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [stay]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !lightbox) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, lightbox]);

  return (
    <AnimatePresence>
      {stay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="fixed inset-0 z-[70] bg-abyss/70 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={stay.name}
        >
          <motion.div
            initial={{ y: "6%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "6%", opacity: 0 }}
            transition={{ duration: 0.65, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-x-0 bottom-0 top-[3svh] overflow-y-auto bg-paper text-ink md:inset-x-8 md:top-[5svh] md:rounded-t-md"
          >
            <button
              onClick={onClose}
              aria-label="Close accommodation details"
              className="fixed right-5 top-8 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-abyss/60 text-paper backdrop-blur transition-colors hover:bg-coral md:right-14 md:top-12"
            >
              <X size={17} strokeWidth={1.5} />
            </button>

            <div className="grid lg:grid-cols-[1.15fr_1fr]">
              {/* ——— Gallery column ——— */}
              <div className="relative bg-shell">
                <button
                  className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[640px]"
                  onClick={() => setLightbox(true)}
                  aria-label="Open photo gallery"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={photo}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7, ease: EASE }}
                      className="absolute inset-0"
                    >
                      <SBCImage image={stay.gallery[photo]} eager className="h-full w-full object-cover" />
                    </motion.div>
                  </AnimatePresence>
                  <span className="absolute bottom-5 left-5 bg-paper/90 px-4 py-2 font-sans text-[0.6rem] uppercase tracking-[0.26em] text-ink backdrop-blur">
                    {photo + 1} / {stay.gallery.length} — Tap to expand
                  </span>
                </button>

                <div className="absolute bottom-5 right-5 flex gap-2">
                  <button
                    onClick={() => setPhoto((p) => (p - 1 + stay.gallery.length) % stay.gallery.length)}
                    aria-label="Previous photo"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-paper/90 text-ink backdrop-blur transition-colors hover:bg-coral hover:text-paper"
                  >
                    <ArrowLeft size={15} strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={() => setPhoto((p) => (p + 1) % stay.gallery.length)}
                    aria-label="Next photo"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-paper/90 text-ink backdrop-blur transition-colors hover:bg-coral hover:text-paper"
                  >
                    <ArrowRight size={15} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* ——— Details column ——— */}
              <div className="flex flex-col px-6 py-10 md:px-12 md:py-14">
                <p className="eyebrow text-coral">
                  {stay.index} — {stay.count}
                </p>
                <h3 className="display-2 mt-4 text-[2.2rem] leading-[1.04] md:text-[2.9rem]">{stay.name}</h3>

                <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-y hairline py-4">
                  <span className="font-sans text-[0.72rem] uppercase tracking-[0.2em] text-ink/60">
                    {stay.size}
                  </span>
                  <span className="flex items-center gap-2 font-sans text-[0.72rem] uppercase tracking-[0.2em] text-ink/60">
                    <Users size={13} strokeWidth={1.5} /> {stay.guests}
                  </span>
                  <span className="font-sans text-[0.72rem] uppercase tracking-[0.2em] text-ink/60">
                    From {stay.from} / night
                  </span>
                </div>

                {stay.description.map((p, i) => (
                  <p key={i} className={`mt-5 font-sans text-[0.95rem] leading-relaxed text-ink/72 ${i === 0 ? "lede text-[1.12rem] text-ink/85" : ""}`}>
                    {p}
                  </p>
                ))}

                {stay.note && (
                  <p className="mt-5 border-l-2 border-coral pl-4 font-sans text-[0.85rem] italic text-ink/60">
                    {stay.note}
                  </p>
                )}

                <p className="eyebrow mt-9 text-ink/45">Features & Amenities</p>
                <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {stay.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 font-sans text-[0.84rem] leading-snug text-ink/70">
                      <Check size={13} strokeWidth={1.8} className="mt-0.5 shrink-0 text-coral" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link to="/reserve" onClick={onClose} className="btn btn-coral flex-1">
                    Reserve This Stay
                  </Link>
                  <Link to="/stay#rates" onClick={onClose} className="btn btn-outline flex-1">
                    Check Rates
                  </Link>
                </div>
                <a
                  href={`tel:${SITE.reservations.tel}`}
                  className="mt-5 text-center font-sans text-[0.75rem] uppercase tracking-[0.22em] text-ink/55 transition-colors hover:text-coral"
                >
                  Or call reservations — {SITE.reservations.phone}
                </a>
              </div>
            </div>

            <Lightbox
              images={stay.gallery}
              index={lightbox ? photo : null}
              onClose={() => setLightbox(false)}
              onNavigate={setPhoto}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
