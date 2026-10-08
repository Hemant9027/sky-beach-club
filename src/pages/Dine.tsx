import { Phone, UtensilsCrossed } from "lucide-react";
import SBCImage from "../components/SBCImage";
import { CTABand, Chapter, PageHero, SectionHead } from "../components/ui";
import { Parallax, Reveal } from "../components/motion";
import { IMAGES, PASCALS_HOURS, SITE, TESTIMONIALS } from "../data/content";

export default function Dine() {
  return (
    <>
      <PageHero
        eyebrow="Dine — Pascal's"
        title={
          <>
            Pascal's Oceanfront <span className="serif-italic">Restaurant & Bar</span>
          </>
        }
        lede="Contemporary dining above the shore, and one of the island's most popular venues — home of the famous swim-up pool bar."
        image={IMAGES.pascals}
      >
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a href={`tel:${SITE.pascals.tel}`} className="btn btn-coral">
            <Phone size={14} strokeWidth={1.5} /> Reserve at Pascal's
          </a>
          <a href="#hours" className="btn btn-outline-light">View Hours</a>
        </div>
      </PageHero>

      {/* Story */}
      <section className="bg-paper py-24 md:py-36">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Chapter no="01" label="The Table" />
          <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <div>
              <SectionHead
                eyebrow="Fine dining, Out Island style"
                title={
                  <>
                    International cuisine, <span className="serif-italic text-ocean">island catch</span>
                  </>
                }
              />
              <Reveal delay={0.15}>
                <p className="lede mt-8 text-[1.15rem] text-ink/72 sm:text-[1.28rem]">
                  Pascal's is Sky Beach Club's exclusive fine-dining experience, combining
                  international cuisine with daily specials inspired by local Grouper, Hog Fish
                  Snapper and Lobster.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <p className="mt-6 font-sans text-[0.95rem] leading-relaxed text-ink/62">
                  Not to mention traditional dishes with a twist that will keep your palate wanting
                  more. On Sundays, the terrace hosts the island's favorite pool party and BBQ with
                  live music — and every evening ends the same way: bare feet, salt air, and a
                  famous swim-up cocktail bar.
                </p>
              </Reveal>
              <Reveal delay={0.28}>
                <blockquote className="mt-10 border-l-2 border-coral pl-6">
                  <p className="lede text-[1.2rem] italic text-ink/80">
                    “{TESTIMONIALS[3].quote.split("…")[0]}.”
                  </p>
                  <cite className="eyebrow mt-4 block not-italic text-coral">A guest's letter — February 2012</cite>
                </blockquote>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="lg:sticky lg:top-28">
              <div className="img-frame aspect-[4/5] overflow-hidden">
                <Parallax amount={30} className="h-full">
                  <SBCImage image={IMAGES.pascals} className="h-full w-full object-cover" />
                </Parallax>
              </div>
              <p className="mt-4 font-sans text-[0.7rem] uppercase tracking-[0.24em] text-ink/45">
                Pascal's — oceanfront & poolside at Sky Beach Club
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section id="hours" className="bg-ocean py-24 text-paper md:py-32">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <Reveal>
                <p className="eyebrow text-blush">Hours & Reservations</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="display-2 mt-5 text-[2.4rem] leading-[1.04] md:text-[3.2rem]">
                  Join us at <span className="serif-italic">the water's edge</span>
                </h2>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-6 font-sans text-[0.95rem] leading-relaxed text-paper/70">
                  For reservations, group parties or additional information, please call the
                  restaurant directly. Sundays bring the pool party and BBQ with live music;
                  Pascal's rests on Mondays.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <a href={`tel:${SITE.pascals.tel}`} className="btn btn-coral mt-9">
                  <Phone size={14} strokeWidth={1.5} /> {SITE.pascals.phone}
                </a>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <ul className="divide-y divide-paper/15 border-y border-paper/15">
                {PASCALS_HOURS.map((h) => (
                  <li key={h.day} className="flex items-baseline justify-between gap-4 py-4">
                    <span className="display-2 text-[1.3rem]">{h.day}</span>
                    <span className="flex items-center gap-3 text-right">
                      {h.note && (
                        <span className="hidden font-sans text-[0.68rem] uppercase tracking-[0.18em] text-blush sm:inline">
                          {h.note}
                        </span>
                      )}
                      <span className="font-sans text-[0.9rem] text-paper/80">{h.hours}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex items-center gap-3 font-sans text-[0.75rem] uppercase tracking-[0.2em] text-paper/50">
                <UtensilsCrossed size={13} strokeWidth={1.5} /> Oceanfront · Poolside · Swim-up bar
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand image={IMAGES.poolView} />
    </>
  );
}
