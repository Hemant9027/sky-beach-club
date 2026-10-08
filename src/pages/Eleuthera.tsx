import { ArrowUpRight, Compass, MapPin, Phone, Plane, Car, Footprints } from "lucide-react";
import SBCImage from "../components/SBCImage";
import { CTABand, Chapter, PageHero, SectionHead } from "../components/ui";
import { Parallax, Reveal } from "../components/motion";
import { AIRLINES, EXPERIENCES, IMAGES, SITE } from "../data/content";

const ARRIVAL_STEPS = [
  {
    icon: Plane,
    step: "01 — Arrive",
    title: "Fly to Eleuthera",
    text: "Approximately a 25-minute flight from Nassau or 45 minutes from Ft. Lauderdale. Governor's Harbour Airport (GHB) is the closest — North Eleuthera (ELH) offers flexibility, and Rock Sound (RSD) serves the south.",
  },
  {
    icon: Car,
    step: "02 — Transfer",
    title: "Seven minutes south",
    text: "Taxis meet arriving flights at GHB — the ride to Sky Beach Club is about $20. Turn right out of the airport and head south on the Queen's Highway; remember, traffic flows on the left.",
  },
  {
    icon: Footprints,
    step: "03 — Exhale",
    title: "Sky Beach Club",
    text: "You'll find the Club on the left-hand side of the road, adjacent to Wykee Estates and Hut Pointe. Check in from 4 p.m., walk to the infinity pool, and let island time begin.",
  },
];

export default function Eleuthera() {
  return (
    <>
      <PageHero
        eyebrow="The Island — Eleuthera"
        title={
          <>
            Freedom, adventure <span className="serif-italic">& romance</span>
          </>
        }
        lede="110 miles long and, in places, little more than a mile wide — rolling green hills, sleepy villages, and not a single traffic light."
        image={IMAGES.oceanOne}
      />

      {/* Position */}
      <section className="bg-paper py-24 md:py-36">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Chapter no="01" label="Island Time" />
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <SectionHead
                eyebrow="Centrally located"
                title={
                  <>
                    The heart of the <span className="serif-italic text-ocean">Out Islands</span>
                  </>
                }
              />
              <Reveal delay={0.15}>
                <p className="lede mt-8 text-[1.15rem] text-ink/72 sm:text-[1.28rem]">
                  Sky Beach is centrally located on the island — the closest resort to Governor's
                  Harbour International Airport, and minutes from the restaurants, shops, banks and
                  nightly entertainment of the Governor's Harbour area.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <p className="mt-6 font-sans text-[0.95rem] leading-relaxed text-ink/62">
                  Governor's Harbour boasts more restaurants and nightlife with entertainment than
                  anywhere — and the Club sits close to multiple beautiful private beaches. With so
                  much to do and see, you'll soon find out why Eleuthera is known as the island of
                  Freedom, Adventure and Romance.
                </p>
              </Reveal>
              <Reveal delay={0.28}>
                <div className="mt-9 flex flex-wrap gap-4">
                  <span className="flex items-center gap-2 border hairline px-4 py-2.5 font-sans text-[0.68rem] uppercase tracking-[0.2em] text-ink/60">
                    <MapPin size={12} strokeWidth={1.5} className="text-coral" /> 7 min from GHB
                  </span>
                  <span className="flex items-center gap-2 border hairline px-4 py-2.5 font-sans text-[0.68rem] uppercase tracking-[0.2em] text-ink/60">
                    <Compass size={12} strokeWidth={1.5} className="text-coral" /> Atlantic & Caribbean
                  </span>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.12} className="lg:sticky lg:top-28">
              <Parallax amount={35} className="img-frame aspect-[4/5]">
                <SBCImage image={IMAGES.snorkel} className="h-full w-full object-cover" />
              </Parallax>
              <p className="mt-4 font-sans text-[0.7rem] uppercase tracking-[0.24em] text-ink/45">
                Reefs off Eleuthera — diving & snorkeling
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="bg-ivory py-24 md:py-36">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Chapter no="02" label="Things to Do" />
          <SectionHead
            eyebrow="Seventy miles of beaches"
            title={
              <>
                An island made <span className="serif-italic text-ocean">for exploring</span>
              </>
            }
            lede="Regular visitors are surprised to find anyone on their favorite beach — Eleuthera is a paradise for those who enjoy privacy and unspoiled natural beauty."
          />
          <div className="mt-16 grid gap-px bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCES.map((e, idx) => (
              <Reveal key={e.title} delay={0.05 * idx} className="bg-ivory">
                <div className="group h-full p-7 transition-colors duration-500 hover:bg-paper md:p-9">
                  <p className="display-2 text-[1rem] text-coral">{String(idx + 1).padStart(2, "0")}</p>
                  <h3 className="display-2 mt-4 text-[1.5rem] leading-snug">{e.title}</h3>
                  <p className="mt-3 font-sans text-[0.86rem] leading-relaxed text-ink/62">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.18}>
            <a
              href="https://skybeachclub.com/things-to-do-on-eleuthera/"
              target="_blank"
              rel="noreferrer"
              className="u-link mt-12 inline-flex items-center gap-3 font-sans text-[0.7rem] font-medium uppercase tracking-[0.26em] text-ink"
            >
              Read the Club's full island guide <ArrowUpRight size={13} strokeWidth={1.5} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Sunset interlude */}
      <section className="relative overflow-hidden bg-abyss text-paper">
        <Parallax amount={70} className="h-[56svh] min-h-[420px] md:h-[74svh]">
          <SBCImage image={IMAGES.sunset} className="h-full w-full object-cover" />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-abyss/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1600px] px-5 pb-14 md:px-10 md:pb-20">
          <Reveal>
            <p className="lede max-w-2xl text-[1.5rem] leading-snug text-paper sm:text-[2rem]">
              “Inspiring sunrises and amazing sunsets — 360 degrees of both at the top.”
            </p>
          </Reveal>
        </div>
      </section>

      {/* Getting here */}
      <section id="getting-here" className="bg-paper py-24 md:py-36">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Chapter no="03" label="Getting Here" />
          <SectionHead
            eyebrow="Destination… paradise"
            title={
              <>
                Arrive, transfer, <span className="serif-italic text-ocean">exhale</span>
              </>
            }
            lede="From major airlines to private charters, a variety of carriers offer convenient flights to Eleuthera from Nassau, Miami and Ft. Lauderdale."
          />

          <div className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
            {ARRIVAL_STEPS.map((s, idx) => (
              <Reveal key={s.step} delay={0.08 * idx}>
                <div className="relative h-full border hairline bg-ivory p-8">
                  <s.icon size={22} strokeWidth={1.1} className="text-coral" />
                  <p className="eyebrow mt-6 text-ink/45">{s.step}</p>
                  <h3 className="display-2 mt-3 text-[1.55rem] leading-snug">{s.title}</h3>
                  <p className="mt-3 font-sans text-[0.87rem] leading-relaxed text-ink/62">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <Reveal>
                <h3 className="display-2 text-[2rem] leading-tight">Airlines serving Eleuthera</h3>
              </Reveal>
              <div className="mt-8 space-y-8">
                {AIRLINES.map((g) => (
                  <Reveal key={g.region}>
                    <div className="border-t hairline pt-6">
                      <p className="eyebrow text-coral">{g.region}</p>
                      <ul className="mt-4 space-y-2.5">
                        {g.rows.map((r) => (
                          <li key={r} className="font-sans text-[0.9rem] leading-relaxed text-ink/68">
                            — {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={0.12} className="lg:sticky lg:top-28">
              <div className="bg-ocean p-8 text-paper md:p-10">
                <p className="display-2 text-[1.8rem] leading-snug">We'll make getting here easy</p>
                <p className="mt-4 font-sans text-[0.9rem] leading-relaxed text-paper/72">
                  Need help figuring out the most convenient way to our beautiful resort? Call and
                  we'll make getting here as easy as lying on the beach. Car rentals and taxi
                  contacts are available from the Club.
                </p>
                <div className="mt-8 space-y-3">
                  <a href={`tel:${SITE.gettingHere.tel}`} className="flex items-center gap-3 font-sans text-[0.88rem] text-paper/85 transition-colors hover:text-blush">
                    <Phone size={13} strokeWidth={1.5} /> Travel help — {SITE.gettingHere.phone}
                  </a>
                  <a href={`tel:${SITE.reservations.tel}`} className="flex items-center gap-3 font-sans text-[0.88rem] text-paper/85 transition-colors hover:text-blush">
                    <Phone size={13} strokeWidth={1.5} /> Reservations — {SITE.reservations.phone}
                  </a>
                </div>
                <a
                  href="https://maps.google.com/maps?q=Sky+Beach+Club,+Eleuthera,+Bahamas"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-coral mt-9"
                >
                  Get Directions <ArrowUpRight size={13} strokeWidth={1.5} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand image={IMAGES.beach} />
    </>
  );
}
