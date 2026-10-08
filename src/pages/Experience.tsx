import { ArrowUpRight, Waves } from "lucide-react";
import { Link } from "../lib/router";
import SBCImage from "../components/SBCImage";
import { CTABand, Chapter, PageHero, SectionHead } from "../components/ui";
import { Parallax, Reveal } from "../components/motion";
import { AMENITIES, EXPERIENCES, IMAGES, SITE } from "../data/content";

function AmenityFeature() {
  const items = [
    {
      img: IMAGES.poolView,
      title: "Infinity-Edge Beachfront Pool",
      text: "Relax in the infinity-edge beachfront pool and swim up for a cocktail — the social heart of Sky Beach Club, overlooking the Atlantic.",
    },
    {
      img: IMAGES.pascals,
      title: "Swim-Up Cocktail Bar",
      text: "After a day of watersports or lounging on the beach, have our famous bartender fix that perfect cocktail or tropical drink.",
    },
  ];
  return (
    <div className="space-y-20 md:space-y-28">
      {items.map((it, idx) => (
        <Reveal key={it.title}>
          <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <Parallax amount={40} className="aspect-[4/3]">
              <SBCImage image={it.img} className="h-full w-full object-cover" />
            </Parallax>
            <div>
              <p className="eyebrow text-coral">{String(idx + 1).padStart(2, "0")}</p>
              <h3 className="display-2 mt-4 text-[2rem] leading-[1.06] md:text-[2.6rem]">{it.title}</h3>
              <p className="lede mt-6 text-[1.1rem] text-ink/70">{it.text}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <PageHero
        eyebrow="Experience — Amenities & Adventures"
        title={
          <>
            Days shaped <span className="serif-italic">by the sea</span>
          </>
        }
        lede="Be pampered with total luxury — from the infinity-edge beachfront pool and swim-up bar to a mile of pink sand and the reefs beyond."
        image={IMAGES.poolView}
      />

      {/* Amenities */}
      <section className="bg-paper py-24 md:py-36">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Chapter no="01" label="Amenities" />
          <SectionHead
            eyebrow="At the resort"
            title={
              <>
                Simple, perfect <span className="serif-italic text-ocean">luxuries</span>
              </>
            }
            lede="While our guest, relax and enjoy one of the island's most popular venues — Pascal's Oceanfront Seafood Restaurant with our famous swim-up pool bar."
          />
          <div className="mt-16 md:mt-20">
            <AmenityFeature />
          </div>
          <div className="mt-20 grid gap-x-10 gap-y-10 border-t hairline pt-14 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map((a, idx) => (
              <Reveal key={a.title} delay={0.06 * idx}>
                <div className="flex gap-4">
                  <p className="display-2 text-[1rem] text-coral">{String(idx + 1).padStart(2, "0")}</p>
                  <div>
                    <h3 className="display-2 text-[1.35rem] leading-snug">{a.title}</h3>
                    <p className="mt-2.5 font-sans text-[0.86rem] leading-relaxed text-ink/62">{a.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Beach interlude */}
      <section className="relative overflow-hidden bg-abyss text-paper">
        <Parallax amount={70} className="h-[60svh] min-h-[440px] md:h-[80svh]">
          <SBCImage image={IMAGES.snorkel} className="h-full w-full object-cover" />
        </Parallax>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss/85 via-transparent to-abyss/30" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-[1600px] px-5 pb-16 md:px-10 md:pb-24">
            <Reveal>
              <p className="eyebrow text-blush">Beyond the shore</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lede mt-5 max-w-2xl text-[1.5rem] leading-snug text-paper sm:text-[2.1rem]">
                “Beautiful reefs offshore provide ideal snorkeling — home to every imaginable
                saltwater species, from butterfly fish to dolphins and rays.”
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Adventure tours */}
      <section id="adventures" className="bg-ivory py-24 md:py-36">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Chapter no="02" label="Adventure Tours" />
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHead
              eyebrow="Freedom · Adventure · Romance"
              title={
                <>
                  Sky Beach Resort <span className="serif-italic text-ocean">adventure</span>
                </>
              }
              lede="Just beyond a colorful barrier reef, on a pink-sand beach lapped by turquoise, gin-clear waters — the most centrally located of all resorts to everything there is to adventure, see and do."
            />
            <Reveal delay={0.15}>
              <a href={`tel:${SITE.office.tel}`} className="btn btn-outline mb-2">
                Ask Our Concierge
              </a>
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
                    <Waves size={18} strokeWidth={1.2} className="text-lagoon" />
                    <h3 className="display-2 mt-5 text-[1.6rem] leading-snug transition-colors group-hover:text-ocean">
                      {e.title}
                    </h3>
                    <p className="mt-3 font-sans text-[0.87rem] leading-relaxed text-ink/62">{e.text}</p>
                  </div>
                  <span className="mt-7 flex items-center gap-2 font-sans text-[0.62rem] font-medium uppercase tracking-[0.26em] text-coral">
                    Explore <ArrowUpRight size={13} strokeWidth={1.5} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-12 max-w-3xl font-sans text-[0.88rem] leading-relaxed text-ink/58">
              Guests are encouraged to rent a car from one of the Club's preferred discount vendors
              to explore — our concierges are pleased to help arrange horseback riding on the beach,
              diving, deep-sea fishing, spear fishing, boating and watersports.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand image={IMAGES.oceanTwo} />
    </>
  );
}
