import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SBCImage from "../components/SBCImage";
import Lightbox from "../components/Lightbox";
import { CTABand, PageHero } from "../components/ui";
import { Reveal, EASE } from "../components/motion";
import { GALLERY, IMAGES, type GalleryCat } from "../data/content";

const FILTERS: { key: GalleryCat | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "property", label: "Property" },
  { key: "beach", label: "Beach" },
  { key: "accommodations", label: "Accommodations" },
  { key: "dining", label: "Dining" },
  { key: "pool", label: "Pool" },
  { key: "eleuthera", label: "Eleuthera" },
  { key: "weddings", label: "Weddings" },
];

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryCat | "all">("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "all" ? GALLERY : GALLERY.filter((g) => g.cat === filter)),
    [filter]
  );

  return (
    <>
      <PageHero
        eyebrow="Photo Gallery"
        title={
          <>
            The Club, <span className="serif-italic">in pictures</span>
          </>
        }
        lede="Real photography from Sky Beach Club — the pink-sand beach, the pool, Pascal's, and the island beyond."
        image={IMAGES.blog}
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          {/* Filters */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 border-b hairline pb-6" role="tablist" aria-label="Gallery filters">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  role="tab"
                  aria-selected={filter === f.key}
                  onClick={() => setFilter(f.key)}
                  className={`u-link font-sans text-[0.66rem] font-medium uppercase tracking-[0.24em] transition-colors duration-400 ${
                    filter === f.key ? "text-coral" : "text-ink/50 hover:text-ink"
                  }`}
                >
                  {f.label}
                </button>
              ))}
              <span className="ml-auto font-sans text-[0.66rem] uppercase tracking-[0.24em] text-ink/40">
                {items.length} photographs
              </span>
            </div>
          </Reveal>

          {/* Masonry */}
          <motion.div layout className="mt-10 columns-2 gap-4 md:columns-3 md:gap-6 xl:columns-4">
            <AnimatePresence mode="popLayout">
              {items.map((g, i) => (
                <motion.figure
                  layout
                  key={g.src + g.cat}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.55, ease: EASE, delay: Math.min(i * 0.03, 0.4) }}
                  className="group relative mb-4 break-inside-avoid overflow-hidden md:mb-6"
                >
                  <button
                    onClick={() => setLightbox(i)}
                    className="block w-full cursor-zoom-in"
                    aria-label={`Open photo: ${g.alt}`}
                  >
                    <div className="img-frame overflow-hidden">
                      <div className="transition-transform duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]">
                        <SBCImage image={g} className="w-full object-cover" />
                      </div>
                    </div>
                    <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-abyss/70 to-transparent p-4 pt-10 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="font-sans text-[0.6rem] uppercase tracking-[0.24em] text-paper/85">
                        {FILTERS.find((f) => f.key === g.cat)?.label ?? g.cat} — {g.alt}
                      </span>
                    </figcaption>
                  </button>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Lightbox images={items} index={lightbox} onClose={() => setLightbox(null)} onNavigate={setLightbox} />
      <CTABand image={IMAGES.beach} />
    </>
  );
}
