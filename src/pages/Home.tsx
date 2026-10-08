import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight, MoveRight, Quote } from "lucide-react";
import { Link } from "../lib/router";
import SBCImage from "../components/SBCImage";
import StayModal from "../components/StayModal";
import { CTABand, Chapter, SectionHead } from "../components/ui";
import { EASE, LineReveal, Parallax, Reveal } from "../components/motion";
import {
  ACCOMMODATIONS,
  AMENITIES,
  EXPERIENCES,
  GALLERY,
  IMAGES,
  POSTS,
  TESTIMONIALS,
  type Accommodation,
} from "../data/content";

/* ————————————————— HERO ————————————————— */
function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % IMAGES.hero.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex h-[100svh] min-h-[640px] items-end overflow-hidden bg-abyss">
      {/* crossfading official photography */}
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 9, ease: "easeOut" }}
            className="h-full w-full"
          >
            <SBCImage image={IMAGES.hero[i]} eager className="h-full w-full object-cover" />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-abyss/10 to-abyss/30" />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-24 md:px-10 md:pb-28">
        <Reveal delay={1.5}>
          <p className="eyebrow text-paper/80">Sky Beach Club · Eleuthera, The Bahamas</p>
        </Reveal>
        <h1 className="display-1 mt-5 max-w-5xl text-[3.2rem] text-paper sm:text-[5.4rem] lg:text-[7rem]">
          <LineReveal delay={1.62} inline>Where the Sky</LineReveal>
          <LineReveal delay={1.74} inline>
            Meets the <span className="serif-italic text-blush">Beach</span>
          </LineReveal>
        </h1>
        <Reveal delay={1.9}>
          <p className="lede mt-7 max-w-xl text-[1.1rem] text-paper/85 sm:text-[1.3rem]">
            An intimate collection of seven oceanview accommodations set above a secluded pink-sand
            beach — the gem of the Out Islands.
          </p>
        </Reveal>
        <Reveal delay={2.05}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link to="/reserve" className="btn btn-coral">
              Reserve Your Stay
            </Link>
            <Link to="/stay" className="btn btn-outline-light">
              Explore Sky Beach Club
            </Link>
          </div>
        </Reveal>
      </div>

      {/* bottom strip */}
      <Reveal delay={2.3} className="absolute inset-x-0 bottom-0 hidden md:block">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between border-t border-paper/15 px-10 py-5">
          <span className="font-sans text-[0.62rem] uppercase tracking-[0.3em] text-paper/60">
            22 oceanfront acres · Atlantic & Caribbean views
          </span>
          <span className="font-sans text-[0.62rem] uppercase tracking-[0.3em] text-paper/60">
            Pink-sand beach · Infinity pool · Pascal's Restaurant
          </span>
          <a
            href="#intro"
            className="flex items-center gap-2 font-sans text-[0.62rem] uppercase tracking-[0.3em] text-paper/80 transition-colors hover:text-blush"
          >
            Scroll <ArrowDown size={12} strokeWidth={1.5} className="animate-bounce" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ————————————————— INTRO ————————————————— */
const FACTS = [
  { n: "22", u: "acres", t: "Views of the Atlantic on one side and the Caribbean on the other — 360° of both at the top." },
  { n: "145", u: "feet", t: "Elevations rising up to 145 feet above sea level, with inspiring sunrises and amazing sunsets." },
  { n: "7", u: "stays", t: "An intimate collection of seven oceanview accommodations, footsteps from the shore." },
  { n: "1", u: "mile", t: "A magnificent secluded pink-sand beach stretching for more than a mile." },
];

function Intro() {
  return (
    <section id="intro" className="relative bg-paper py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Chapter no="01" label="Welcome" />
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          <div>
            <LineReveal>
              <h2 className="display-2 text-[2.7rem] leading-[1.03] sm:text-6xl lg:text-[4.6rem]">
                An intimate escape <br />
                <span className="serif-italic text-ocean">in Eleuthera</span>
              </h2>
            </LineReveal>
            <Reveal delay={0.15}>
              <p className="lede mt-8 max-w-2xl text-[1.15rem] text-ink/72 sm:text-[1.3rem]">
                Sky Beach Club seamlessly blends refined amenities with the splendor of nature,
                providing inspiration for the soul. Aptly named, you will find our resort where the
                sky meets the beach.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-6 max-w-2xl font-sans text-[0.95rem] leading-relaxed text-ink/60">
                Sky Beach Club offers the finest in modern accommodations with the standard of
                service and luxury that you deserve — custom furnishings, contemporary dining in
                Pascal's Oceanfront Restaurant and Bar, an infinity-edge beachfront pool with
                swim-up cocktail bar, and convenient access to the island's natural amenities.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link to="/about" className="u-link mt-9 inline-flex items-center gap-3 font-sans text-[0.7rem] font-medium uppercase tracking-[0.26em] text-ink">
                Our story <ArrowRight size={13} strokeWidth={1.5} />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 content-start gap-px bg-ink/10">
            {FACTS.map((f, idx) => (
              <Reveal key={f.u} delay={0.08 * idx} className="bg-paper">
                <div className="flex h-full flex-col p-6 md:p-8">
                  <p className="display-2 text-5xl text-ocean md:text-6xl">
                    {f.n}
                    <span className="serif-italic ml-1 text-xl text-coral md:text-2xl">{f.u}</span>
                  </p>
                  <p className="mt-4 font-sans text-[0.8rem] leading-relaxed text-ink/60">{f.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————————————————— ACCOMMODATIONS ————————————————— */
function Stays({ onOpen }: { onOpen: (a: Accommodation) => void }) {
  return (
    <section className="relative bg-ivory py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Chapter no="02" label="Accommodations" />
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            eyebrow="Resort Residences & Bungalows"
            title={
              <>
                Stay above <span className="serif-italic text-ocean">the sea</span>
              </>
            }
            lede="Seven waterfront residences in three categories — luxury four-bedroom oceanview villas and oceanfront poolside bungalows, each with tropical vistas and ocean views."
          />
          <Reveal delay={0.2}>
            <Link to="/stay#rates" className="btn btn-outline mb-2">
              Check Rates
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-6 lg:gap-10">
          {ACCOMMODATIONS.map((a, idx) => (
            <Reveal key={a.id} delay={0.1 * idx} className={idx === 1 ? "md:mt-14" : ""}>
              <article className="group">
                <button
                  onClick={() => onOpen(a)}
                  className="relative block w-full overflow-hidden text-left"
                  aria-label={`View ${a.name}`}
                >
                  <div className="img-frame aspect-[4/5] overflow-hidden">
                    <div className="h-full w-full transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]">
                      <SBCImage image={a.hero} className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <span className="absolute left-5 top-5 bg-paper/90 px-3.5 py-2 font-sans text-[0.58rem] uppercase tracking-[0.26em] text-ink backdrop-blur">
                    {a.count}
                  </span>
                  <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-paper/90 text-ink opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
                    <ArrowRight size={15} strokeWidth={1.5} />
                  </span>
                </button>
                <div className="pt-6">
                  <p className="eyebrow text-coral">{a.index} — {a.size}</p>
                  <h3 className="display-2 mt-3 text-[1.7rem] leading-tight">
                    <button onClick={() => onOpen(a)} className="text-left transition-colors hover:text-ocean">
                      {a.name}
                    </button>
                  </h3>
                  <p className="mt-2.5 font-sans text-[0.88rem] leading-relaxed text-ink/60">{a.short}</p>
                  <div className="mt-4 flex items-center justify-between border-t hairline pt-4">
                    <span className="font-sans text-[0.72rem] uppercase tracking-[0.2em] text-ink/55">
                      {a.guests} · From {a.from}/night
                    </span>
                    <button
                      onClick={() => onOpen(a)}
                      className="u-link font-sans text-[0.66rem] font-medium uppercase tracking-[0.24em] text-coral"
                    >
                      View
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————————————————— BEACH ————————————————— */
function Beach() {
  return (
    <section className="relative overflow-hidden bg-abyss text-paper">
      <Parallax amount={80} className="h-[72svh] min-h-[520px] md:h-[92svh]">
        <SBCImage image={IMAGES.beach} className="h-full w-full object-cover" />
      </Parallax>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss via-abyss/10 to-transparent" />
      <div className="relative mx-auto -mt-[38svh] max-w-[1600px] px-5 pb-24 md:-mt-[46svh] md:px-10 md:pb-36">
        <div className="max-w-xl">
          <Reveal>
            <p className="eyebrow text-blush">Sky Beach</p>
          </Reveal>
          <LineReveal delay={0.1}>
            <h2 className="display-1 mt-5 text-[2.8rem] sm:text-6xl lg:text-[4.8rem]">
              Your own corner <span className="serif-italic">of Eleuthera</span>
            </h2>
          </LineReveal>
          <Reveal delay={0.22}>
            <p className="lede mt-6 text-[1.1rem] text-paper/85 sm:text-[1.25rem]">
              A magnificent pink-sand beach that stretches for more than a mile — with beautiful
              reefs offshore, home to every imaginable saltwater species from butterfly fish to
              dolphins and rays.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link to="/gallery" className="btn btn-outline-light mt-9">
              Explore the Beach
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ————————————————— AMENITIES ————————————————— */
function Amenities() {
  return (
    <section className="bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Chapter no="03" label="At the Club" />
        <SectionHead
          eyebrow="Amenities"
          title={
            <>
              Considered <span className="serif-italic text-ocean">luxuries</span>
            </>
          }
          lede="While our guest, relax and enjoy one of the island's most popular venues — Pascal's Oceanfront Restaurant with our famous swim-up pool bar."
        />
        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((a, idx) => (
            <Reveal key={a.title} delay={0.07 * idx}>
              <div className="border-t hairline pt-6">
                <p className="display-2 text-[1.05rem] text-coral">{String(idx + 1).padStart(2, "0")}</p>
                <h3 className="display-2 mt-3 text-[1.5rem] leading-snug">{a.title}</h3>
                <p className="mt-3 font-sans text-[0.88rem] leading-relaxed text-ink/62">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.25}>
          <Link to="/experience" className="u-link mt-14 inline-flex items-center gap-3 font-sans text-[0.7rem] font-medium uppercase tracking-[0.26em] text-ink">
            All amenities <ArrowRight size={13} strokeWidth={1.5} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ————————————————— PASCAL'S ————————————————— */
function Dine() {
  return (
    <section className="bg-ocean text-paper">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[720px]">
          <Parallax amount={50} className="absolute inset-0">
            <SBCImage image={IMAGES.pascals} className="h-full w-full object-cover" />
          </Parallax>
        </div>
        <div className="relative flex items-center px-6 py-20 md:px-14 lg:px-20 lg:py-32">
          <div>
            <Reveal>
              <p className="eyebrow text-blush">Dining</p>
            </Reveal>
            <LineReveal delay={0.1}>
              <h2 className="display-2 mt-5 text-[2.6rem] leading-[1.03] sm:text-[3.6rem]">
                Pascal's Oceanfront <br />
                <span className="serif-italic">Restaurant & Bar</span>
              </h2>
            </LineReveal>
            <Reveal delay={0.2}>
              <p className="lede mt-7 max-w-lg text-[1.1rem] text-paper/80">
                Sky Beach Club's exclusive fine-dining experience — international cuisine with daily
                specials inspired by local Grouper, Hog Fish Snapper and Lobster.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <p className="mt-5 max-w-lg font-sans text-[0.92rem] leading-relaxed text-paper/65">
                Traditional dishes with a twist that will keep your palate wanting more — served
                oceanfront and poolside, beside the famous swim-up bar.
              </p>
            </Reveal>
            <Reveal delay={0.34}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="tel:+12423597755" className="btn btn-coral">
                  Reserve at Pascal's
                </a>
                <Link to="/dine" className="btn btn-outline-light">
                  Hours & Details
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————————————————— ELEUTHERA + ADVENTURES ————————————————— */
function Island() {
  return (
    <section className="bg-ivory py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Chapter no="04" label="The Out Island" />
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            eyebrow="Island Time"
            title={
              <>
                Discover <span className="serif-italic text-ocean">Eleuthera</span>
              </>
            }
            lede="Famous for Out Island adventures — and Sky Beach Club is the most centrally located of all resorts to everything there is to adventure, see and do."
          />
          <Reveal delay={0.2}>
            <Link to="/eleuthera" className="btn btn-outline mb-2">
              Explore Eleuthera
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((e, idx) => (
            <Reveal key={e.title} delay={0.06 * idx}>
              <Link
                to="/eleuthera"
                className="group flex h-full flex-col justify-between border hairline bg-paper p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-coral/50 hover:shadow-[0_26px_50px_-24px_rgba(34,41,42,0.35)] md:p-9"
              >
                <div>
                  <p className="display-2 text-[1rem] text-coral">{String(idx + 1).padStart(2, "0")}</p>
                  <h3 className="display-2 mt-4 text-[1.55rem] leading-snug transition-colors group-hover:text-ocean">
                    {e.title}
                  </h3>
                  <p className="mt-3 font-sans text-[0.87rem] leading-relaxed text-ink/62">{e.text}</p>
                </div>
                <span className="mt-7 flex items-center gap-2 font-sans text-[0.62rem] font-medium uppercase tracking-[0.26em] text-coral opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Discover <MoveRight size={13} strokeWidth={1.5} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————————————————— WEDDINGS ————————————————— */
function Weddings() {
  return (
    <section className="relative overflow-hidden bg-abyss text-paper">
      <div className="grid lg:grid-cols-2">
        <div className="relative order-2 flex items-center px-6 py-20 md:px-14 lg:order-1 lg:px-20 lg:py-36">
          <div>
            <Reveal>
              <p className="eyebrow text-blush">Weddings & Events</p>
            </Reveal>
            <LineReveal delay={0.1}>
              <h2 className="display-2 mt-5 text-[2.6rem] leading-[1.03] sm:text-[3.6rem]">
                Celebrate somewhere <span className="serif-italic text-blush">extraordinary</span>
              </h2>
            </LineReveal>
            <Reveal delay={0.2}>
              <p className="lede mt-7 max-w-lg text-[1.1rem] text-paper/80">
                A dream-like location for weddings, with a spectacular deserted beach lapped by
                gin-clear water — Sky Beach Club hosts more beach weddings than any Out Island
                resort of its size.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <p className="mt-5 max-w-lg font-sans text-[0.92rem] leading-relaxed text-paper/65">
                Exchange vows on the secluded pink-sand beach, then celebrate oceanfront and
                poolside — or reserve the whole resort for the weekend, as many couples do.
              </p>
            </Reveal>
            <Reveal delay={0.34}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link to="/weddings" className="btn btn-coral">
                  Plan Your Event
                </Link>
                <a href="tel:+12428205996" className="btn btn-outline-light">
                  Inquire — 242-820-5996
                </a>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="relative order-1 min-h-[380px] overflow-hidden lg:order-2 lg:min-h-[720px]">
          <Parallax amount={50} className="absolute inset-0">
            <SBCImage image={IMAGES.wedding} className="h-full w-full object-cover" />
          </Parallax>
        </div>
      </div>
    </section>
  );
}

/* ————————————————— GALLERY STRIP ————————————————— */
function GalleryStrip() {
  const strip = GALLERY.slice(0, 14);
  return (
    <section className="overflow-hidden bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Photo Gallery"
            title={
              <>
                Postcards from <span className="serif-italic text-ocean">the Club</span>
              </>
            }
          />
          <Reveal delay={0.2}>
            <Link to="/gallery" className="btn btn-outline mb-2">
              View Gallery
            </Link>
          </Reveal>
        </div>
      </div>
      <Reveal delay={0.15}>
        <div className="mt-14 flex w-max gap-4 px-5 marquee-track md:gap-6">
          {[...strip, ...strip].map((g, idx) => (
            <Link
              to="/gallery"
              key={g.src + idx}
              className="block w-[240px] shrink-0 overflow-hidden sm:w-[300px] md:w-[360px]"
              ariaLabel={g.alt}
            >
              <div className="img-frame aspect-[4/3] overflow-hidden">
                <SBCImage image={g} className="h-full w-full object-cover transition-transform duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105" />
              </div>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ————————————————— TESTIMONIALS ————————————————— */
function Voices() {
  const [i, setI] = useState(0);
  const go = useCallback((n: number) => setI((v) => (v + n + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  useEffect(() => {
    const t = setInterval(() => go(1), 8000);
    return () => clearInterval(t);
  }, [go]);

  const t = TESTIMONIALS[i];
  return (
    <section className="bg-shell py-24 md:py-36">
      <div className="mx-auto max-w-[1100px] px-5 text-center md:px-10">
        <Reveal>
          <Quote size={30} strokeWidth={1} className="mx-auto text-coral" />
        </Reveal>
        <div className="relative mt-10 min-h-[300px] sm:min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <p className="lede text-[1.5rem] leading-[1.35] text-ink/88 sm:text-[2rem]">
                “{t.quote}”
              </p>
              <footer className="mt-8">
                <p className="eyebrow text-coral">{t.source}</p>
                <p className="mt-2 font-sans text-[0.72rem] uppercase tracking-[0.22em] text-ink/45">{t.detail}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-10 flex items-center justify-center gap-4">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-px transition-all duration-500 ${idx === i ? "w-12 bg-coral" : "w-6 bg-ink/25 hover:bg-ink/50"}`}
              style={{ height: 2 }}
            />
          ))}
        </div>
        <Reveal delay={0.15}>
          <a
            href="http://www.tripadvisor.com/Hotel_Review-g147428-d1546410-Reviews-Sky_Beach_Club-Eleuthera_Out_Islands_Bahamas.html"
            target="_blank"
            rel="noreferrer"
            className="u-link mt-10 inline-block font-sans text-[0.68rem] font-medium uppercase tracking-[0.26em] text-ink/55 hover:text-ink"
          >
            Read Sky Beach Club reviews on TripAdvisor
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ————————————————— STORIES ————————————————— */
function Stories() {
  const featured = POSTS.slice(0, 3);
  return (
    <section className="bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="The Journal"
            title={
              <>
                Stories from <span className="serif-italic text-ocean">Eleuthera</span>
              </>
            }
          />
          <Reveal delay={0.2}>
            <Link to="/about#journal" className="btn btn-outline mb-2">
              All Stories
            </Link>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {featured.map((p, idx) => (
            <Reveal key={p.title} delay={0.08 * idx}>
              <a href={p.slug} target="_blank" rel="noreferrer" className="group block">
                <div className="img-frame aspect-[16/10] overflow-hidden">
                  <div className="h-full w-full transition-transform duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
                    <SBCImage image={p.image} className="h-full w-full object-cover" />
                  </div>
                </div>
                <p className="eyebrow mt-6 text-ink/45">{p.date}</p>
                <h3 className="display-2 mt-3 text-[1.5rem] leading-snug transition-colors group-hover:text-ocean">
                  {p.title}
                </h3>
                <p className="mt-3 font-sans text-[0.87rem] leading-relaxed text-ink/62">{p.excerpt}</p>
                <span className="u-link mt-4 inline-flex items-center gap-2 font-sans text-[0.64rem] font-medium uppercase tracking-[0.24em] text-coral">
                  Read on skybeachclub.com <ArrowRight size={12} strokeWidth={1.5} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————————————————— PAGE ————————————————— */
export default function Home() {
  const [active, setActive] = useState<Accommodation | null>(null);
  return (
    <>
      <Hero />
      <Intro />
      <Stays onOpen={setActive} />
      <Beach />
      <Amenities />
      <Dine />
      <Island />
      <Weddings />
      <GalleryStrip />
      <Voices />
      <Stories />
      <CTABand image={IMAGES.sunset} />
      <StayModal stay={active} onClose={() => setActive(null)} />
    </>
  );
}
