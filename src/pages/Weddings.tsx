import { ArrowRight, Heart, Phone, Shell, Waves } from "lucide-react";
import { Link } from "../lib/router";
import SBCImage from "../components/SBCImage";
import { CTABand, Chapter, PageHero, SectionHead } from "../components/ui";
import { Parallax, Reveal } from "../components/motion";
import { IMAGES, SITE, TESTIMONIALS } from "../data/content";

const SETTINGS = [
  {
    icon: Shell,
    title: "The Pink-Sand Beach",
    text: "A dream-like location for weddings — a spectacular deserted beach lapped by gin-clear water, stretching for more than a mile.",
  },
  {
    icon: Waves,
    title: "Oceanfront & Poolside",
    text: "Celebrate beside the infinity-edge beachfront pool, with Pascal's Oceanfront Restaurant and the swim-up bar as your reception backdrop.",
  },
  {
    icon: Heart,
    title: "The Whole Resort",
    text: "Reserve the entire Club for your wedding weekend — seven oceanview accommodations for family and friends, and the island to yourselves.",
  },
];

export default function Weddings() {
  return (
    <>
      <PageHero
        eyebrow="Weddings & Events"
        title={
          <>
            Celebrate somewhere <span className="serif-italic">extraordinary</span>
          </>
        }
        lede="Sky Beach Club hosts more beach weddings than any Out Island resort of its size — perfect for honeymooners and lovers."
        image={IMAGES.wedding}
      >
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link to="/contact" className="btn btn-coral">
            Plan Your Event <ArrowRight size={13} strokeWidth={1.5} />
          </Link>
          <a href={`tel:${SITE.office.tel}`} className="btn btn-outline-light">
            <Phone size={14} strokeWidth={1.5} /> Inquire — 242-820-5996
          </a>
        </div>
      </PageHero>

      {/* Settings */}
      <section className="bg-paper py-24 md:py-36">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Chapter no="01" label="The Settings" />
          <SectionHead
            eyebrow="Where you'll say it"
            title={
              <>
                Three ways to say <span className="serif-italic text-ocean">“I do”</span>
              </>
            }
            lede="From barefoot ceremonies on the sand to evenings around the pool terrace, the Club shapes itself around your celebration."
          />
          <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
            {SETTINGS.map((s, idx) => (
              <Reveal key={s.title} delay={0.08 * idx}>
                <div className="border-t hairline pt-7">
                  <s.icon size={22} strokeWidth={1.1} className="text-coral" />
                  <h3 className="display-2 mt-5 text-[1.6rem] leading-snug">{s.title}</h3>
                  <p className="mt-3 font-sans text-[0.9rem] leading-relaxed text-ink/62">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* editorial image pair */}
          <div className="mt-20 grid gap-6 md:grid-cols-2 md:gap-10">
            <Reveal>
              <div className="img-frame aspect-[4/3] overflow-hidden">
                <SBCImage image={IMAGES.wedding} className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105" />
              </div>
              <p className="mt-4 font-sans text-[0.7rem] uppercase tracking-[0.24em] text-ink/45">
                A beachfront ceremony at Sky Beach Club
              </p>
            </Reveal>
            <Reveal delay={0.12} className="md:mt-16">
              <div className="img-frame aspect-[4/3] overflow-hidden">
                <SBCImage image={IMAGES.forever} className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105" />
              </div>
              <p className="mt-4 font-sans text-[0.7rem] uppercase tracking-[0.24em] text-ink/45">
                Celebrations on the sand, Eleuthera
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-shell py-24 md:py-32">
        <div className="mx-auto max-w-[1000px] px-5 text-center md:px-10">
          <Reveal>
            <p className="eyebrow text-coral">From our journal — July 2011</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede mt-8 text-[1.5rem] leading-[1.38] text-ink/85 sm:text-[1.9rem]">
              “{TESTIMONIALS[2].quote}”
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="eyebrow mt-8 text-ink/45">Best Resort on Eleuthera — a bride's account</p>
          </Reveal>
        </div>
      </section>

      {/* Dream wedding note */}
      <section className="relative overflow-hidden bg-abyss text-paper">
        <Parallax amount={60} className="h-[62svh] min-h-[460px] md:h-[85svh]">
          <SBCImage image={IMAGES.sunset} className="h-full w-full object-cover" />
        </Parallax>
        <div className="absolute inset-0 bg-abyss/55" />
        <div className="relative mx-auto flex min-h-[62svh] max-w-[1600px] items-center px-5 md:min-h-[85svh] md:px-10">
          <div className="max-w-2xl py-20">
            <Reveal>
              <p className="eyebrow text-blush">A noted occasion</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-2 mt-5 text-[2.4rem] leading-[1.05] sm:text-[3.4rem]">
                The Bahamas 16 Islands <span className="serif-italic">Wedding Invitation</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-6 font-sans text-[0.95rem] leading-relaxed text-paper/75">
                When the Bahamas Tourist Office invited sixteen couples to marry simultaneously on
                sixteen islands, Sky Beach Club provided the setting for the 'Barefoot Lovers'
                Bliss' wedding on Eleuthera — a dream beach wedding for one lucky London couple,
                coordinated with Weddings Eleuthera.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <Link to="/contact" className="btn btn-coral mt-9">
                Inquire About Weddings
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand image={IMAGES.forever} />
    </>
  );
}
