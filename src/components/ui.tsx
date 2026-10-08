import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "../lib/router";
import SBCImage from "./SBCImage";
import { LineReveal, Parallax, Reveal } from "./motion";
import type { SBCImg } from "../data/content";

/* ——— Section heading ——— */
export function SectionHead({
  eyebrow,
  title,
  lede,
  center = false,
  light = false,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl ${className}`}>
      <Reveal>
        <p className={`eyebrow ${light ? "text-blush" : "text-coral"}`}>{eyebrow}</p>
      </Reveal>
      <LineReveal delay={0.08}>
        <h2
          className={`display-2 mt-5 text-[2.5rem] leading-[1.02] sm:text-6xl lg:text-[4.4rem] ${
            light ? "text-paper" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </LineReveal>
      {lede && (
        <Reveal delay={0.18}>
          <p
            className={`lede mt-6 text-[1.18rem] sm:text-[1.35rem] ${
              light ? "text-paper/75" : "text-ink/68"
            }`}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ——— Inner-page hero ——— */
export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  image: SBCImg;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[82svh] items-end overflow-hidden bg-abyss">
      <Parallax amount={70} className="absolute inset-0">
        <SBCImage image={image} eager className="h-full w-full object-cover" />
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-t from-abyss/85 via-abyss/25 to-abyss/35" />
      <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-16 pt-40 md:px-10 md:pb-24">
        <Reveal>
          <p className="eyebrow text-blush">{eyebrow}</p>
        </Reveal>
        <LineReveal delay={0.1}>
          <h1 className="display-1 mt-5 max-w-4xl text-[2.9rem] text-paper sm:text-7xl lg:text-[5.6rem]">
            {title}
          </h1>
        </LineReveal>
        {lede && (
          <Reveal delay={0.22}>
            <p className="lede mt-6 max-w-2xl text-[1.15rem] text-paper/80 sm:text-[1.35rem]">
              {lede}
            </p>
          </Reveal>
        )}
        {children && <Reveal delay={0.32}>{children}</Reveal>}
      </div>
    </section>
  );
}

/* ——— Final CTA band ——— */
export function CTABand({ image }: { image: SBCImg }) {
  return (
    <section className="relative overflow-hidden bg-abyss">
      <Parallax amount={55} className="absolute inset-0">
        <SBCImage image={image} className="h-full w-full object-cover" />
      </Parallax>
      <div className="absolute inset-0 bg-abyss/60" />
      <div className="relative mx-auto max-w-[1600px] px-5 py-28 text-center md:px-10 md:py-44">
        <Reveal>
          <p className="eyebrow text-blush">Luxury in Eleuthera is waiting</p>
        </Reveal>
        <LineReveal delay={0.1}>
          <h2 className="display-1 mx-auto mt-6 max-w-4xl text-[2.9rem] text-paper sm:text-6xl lg:text-[5.2rem]">
            All you need to do is <span className="serif-italic">show up</span>
          </h2>
        </LineReveal>
        <Reveal delay={0.22}>
          <p className="lede mx-auto mt-6 max-w-xl text-lg text-paper/75">
            From water activities and sightseeing, to fine dining and total relaxation on a pink-sand
            beach — we will handle everything.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/reserve" className="btn btn-coral">
              Reserve Your Stay <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
            <a href="tel:+16232247523" className="btn btn-outline-light">
              Call 623-224-7523
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ——— Editorial divider label ——— */
export function Chapter({ no, label, light = false }: { no: string; label: string; light?: boolean }) {
  return (
    <Reveal className="mb-10 flex items-center gap-5 md:mb-14">
      <span className={`display-2 text-lg ${light ? "text-paper/50" : "text-ink/40"}`}>{no}</span>
      <span className={`h-px flex-1 ${light ? "bg-paper/20" : "bg-ink/12"}`} />
      <span className={`eyebrow ${light ? "text-paper/50" : "text-ink/50"}`}>{label}</span>
    </Reveal>
  );
}
