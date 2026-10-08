import { ArrowUpRight } from "lucide-react";
import SBCImage from "../components/SBCImage";
import { CTABand, Chapter, PageHero, SectionHead } from "../components/ui";
import { Parallax, Reveal } from "../components/motion";
import { IMAGES, POSTS } from "../data/content";

const VALUES = [
  "22-acres with views of the Atlantic on one side and the Caribbean on the other — 360 degrees of both at the top",
  "Custom furnishings and ultra-modern architecture",
  "A secluded pink-sand beach stretching more than a mile",
  "Elevations up to 145 feet above sea level",
  "Contemporary dining in Pascal's Oceanfront Restaurant and Bar",
  "Infinity-edge beachfront pool with swim-up cocktail bar",
  "Satellite TV and free WiFi throughout",
  "Seven minutes south of Governor's Harbour Airport",
  "Inspiring sunrises and amazing sunsets",
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About — Our Story"
        title={
          <>
            Inspiration for <span className="serif-italic">the soul</span>
          </>
        }
        lede="Sky Beach Club seamlessly blends refined amenities with the splendor of nature. Aptly named, you will find our resort where the sky meets the beach."
        image={IMAGES.reservations}
      />

      {/* Story */}
      <section className="bg-paper py-24 md:py-36">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Chapter no="01" label="The Property" />
          <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
            <div>
              <SectionHead
                eyebrow="A gated resort"
                title={
                  <>
                    A respite from <span className="serif-italic text-ocean">everyday life</span>
                  </>
                }
              />
              <Reveal delay={0.15}>
                <p className="lede mt-8 text-[1.15rem] text-ink/72 sm:text-[1.28rem]">
                  Discover Eleuthera's most secluded resort — 22 acres of oceanfront land rising to
                  145 feet, where the Atlantic lies on one side and the Caribbean on the other.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <p className="mt-6 font-sans text-[0.95rem] leading-relaxed text-ink/62">
                  Sky Beach Club offers the finest in modern accommodations with the standard of
                  service and luxury that you deserve — the perfect place to reconnect with
                  yourself, spend quality time with your partner, and bring families together.
                </p>
              </Reveal>
              <Reveal delay={0.28}>
                <ul className="mt-10 space-y-0 border-t hairline">
                  {VALUES.map((v) => (
                    <li key={v} className="flex items-baseline gap-4 border-b hairline py-3.5">
                      <span className="display-2 shrink-0 text-[0.95rem] text-coral">·</span>
                      <span className="font-sans text-[0.9rem] leading-relaxed text-ink/68">{v}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="lg:sticky lg:top-28">
              <Reveal delay={0.1}>
                <Parallax amount={35} className="img-frame aspect-[4/5]">
                  <SBCImage image={IMAGES.oceanTwo} className="h-full w-full object-cover" />
                </Parallax>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div className="img-frame aspect-square overflow-hidden">
                    <SBCImage image={IMAGES.poolView} className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105" />
                  </div>
                  <div className="img-frame aspect-square overflow-hidden">
                    <SBCImage image={IMAGES.pascals} className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Journal */}
      <section id="journal" className="bg-ivory py-24 md:py-36">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Chapter no="02" label="The Journal" />
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHead
              eyebrow="From the archive"
              title={
                <>
                  Stories from <span className="serif-italic text-ocean">Eleuthera</span>
                </>
              }
              lede="A curated selection from the Sky Beach Club journal — island guides, guest letters and occasions worth remembering."
            />
            <Reveal delay={0.15}>
              <a
                href="https://skybeachclub.com/blog/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline mb-2"
              >
                Full Archive <ArrowUpRight size={13} strokeWidth={1.5} />
              </a>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p, idx) => (
              <Reveal key={p.title} delay={0.06 * idx}>
                <a
                  href={p.slug}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col border hairline bg-paper transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_26px_50px_-24px_rgba(34,41,42,0.35)]"
                >
                  <div className="img-frame aspect-[16/10] overflow-hidden">
                    <div className="h-full w-full transition-transform duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
                      <SBCImage image={p.image} className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="eyebrow text-ink/42">{p.date}</p>
                    <h3 className="display-2 mt-3 text-[1.45rem] leading-snug transition-colors group-hover:text-ocean">
                      {p.title}
                    </h3>
                    <p className="mt-3 flex-1 font-sans text-[0.86rem] leading-relaxed text-ink/62">
                      {p.excerpt}
                    </p>
                    <span className="mt-5 flex items-center gap-2 font-sans text-[0.62rem] font-medium uppercase tracking-[0.24em] text-coral">
                      Read the story <ArrowUpRight size={12} strokeWidth={1.5} />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand image={IMAGES.oceanOne} />
    </>
  );
}
