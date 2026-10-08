import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SBCImage from "./SBCImage";
import type { SBCImg } from "../data/content";
import { EASE } from "./motion";

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: SBCImg[];
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const [dir, setDir] = useState(0);

  const next = useCallback(() => {
    if (index === null) return;
    setDir(1);
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  const prev = useCallback(() => {
    if (index === null) return;
    setDir(-1);
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, next, prev, onClose]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-abyss/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={onClose}
        >
          {/* counter */}
          <div className="absolute left-5 top-5 font-sans text-[0.7rem] uppercase tracking-[0.3em] text-paper/60 md:left-10 md:top-8">
            {String(index + 1).padStart(2, "0")} — {String(images.length).padStart(2, "0")}
          </div>

          <button
            onClick={onClose}
            aria-label="Close photo viewer"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-paper/30 text-paper transition-colors hover:bg-paper hover:text-ink md:right-10 md:top-8"
          >
            <X size={17} strokeWidth={1.5} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-paper/30 text-paper transition-colors hover:bg-paper hover:text-ink md:left-8"
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-paper/30 text-paper transition-colors hover:bg-paper hover:text-ink md:right-8"
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>

          <div
            className="relative flex h-[68svh] w-[88vw] items-center justify-center md:h-[78vh] md:w-[78vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="popLayout" custom={dir} initial={false}>
              <motion.div
                key={images[index].src + index}
                custom={dir}
                initial={{ opacity: 0, x: dir >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir >= 0 ? -60 : 60 }}
                transition={{ duration: 0.55, ease: EASE }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -70) next();
                  else if (info.offset.x > 70) prev();
                }}
                className="flex h-full w-full items-center justify-center"
              >
                <SBCImage
                  image={images[index]}
                  eager
                  className="max-h-full max-w-full object-contain shadow-2xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="absolute bottom-6 left-1/2 w-[80%] -translate-x-1/2 text-center font-sans text-[0.72rem] uppercase tracking-[0.24em] text-paper/55">
            {images[index].alt}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
