import Image from "next/image";
import { Brain, Quote, Sparkles, Waves } from "lucide-react";
import { BentoCard } from "@/components/BentoCard";
import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { Navbar } from "@/components/Navbar";
import {
  aboutStory,
  healingPillars,
  images,
  lifeJourney,
  methodology,
  transformations
} from "@/lib/content";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-sanctuary">
      <Navbar theme="dark" />

      <section className="pt-36 md:pt-44">
        <div className="luxury-container grid items-center gap-12 pb-20 md:pb-28 lg:grid-cols-[0.96fr_1fr] lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase text-plum">
              About Dr. Devanu
            </p>
            <h1 className="font-serif text-6xl leading-[1.02] text-ink md:text-7xl lg:text-8xl">
              From Mountains to Mind.
            </h1>
            <div className="mt-8 space-y-5 text-base leading-8 text-ink/68 md:text-lg">
              {aboutStory.slice(0, 2).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-[0.82/1] w-full max-w-[540px] overflow-hidden rounded-[2.25rem] bg-mist soft-shadow">
            <Image
              src={images.founder}
              alt="Portrait of Dr. Devanu"
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover object-[center_42%]"
            />
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="luxury-container grid gap-6 lg:grid-cols-[0.78fr_0.58fr_1.08fr]">
          <BentoCard className="bg-mist p-8 md:p-10 lg:min-h-[520px]">
            <p className="text-xs font-semibold uppercase text-plum">
              Scientist & Technologist
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
              A rigorous mind with a devotional heart.
            </h2>
            <p className="mt-6 text-base leading-8 text-ink/64">
              {aboutStory[2]}
            </p>
          </BentoCard>

          <BentoCard className="relative min-h-[520px] bg-[#EEE4D9]">
            <Image
              src={images.editorial}
              alt="Dr. Devanu smiling warmly"
              fill
              sizes="(min-width: 1024px) 24vw, 100vw"
              className="object-cover object-[center_33%] saturate-[0.86]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,248,245,0)_42%,rgba(45,45,45,0.36)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white">
              <p className="max-w-[14rem] text-sm leading-6 text-white/82">
                A grounded presence shaped by devotion, resilience, and the
                choice to serve.
              </p>
            </div>
          </BentoCard>

          <BentoCard className="grid gap-6 bg-white p-8 md:grid-cols-3 md:p-10 lg:min-h-[520px] lg:grid-cols-1">
            {lifeJourney.map((paragraph, index) => (
              <article key={paragraph}>
                <span className="font-serif text-4xl text-plum/60">
                  0{index + 1}
                </span>
                <p className="mt-5 text-sm leading-7 text-ink/64">
                  {paragraph}
                </p>
              </article>
            ))}
          </BentoCard>
        </div>
      </section>

      <section id="methodology" className="bg-charcoal py-20 text-white md:py-28">
        <div className="luxury-container grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <div>
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Work & Methodology
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-white/58">
              Therapy systems and practices that embrace the spiritual dimension
              of human experience as fundamental to mental, physical, and
              emotional health.
            </p>
          </div>

          <div>
            {methodology.map((item) => (
              <article
                key={item.number}
                className="grid gap-5 border-b border-white/12 py-8 md:grid-cols-[100px_1fr]"
              >
                <span className="font-serif text-5xl leading-none text-white/32">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-2xl font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/58">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="luxury-container">
          <Heading
            title="Empowering Self-Healing"
            align="center"
            className="max-w-3xl"
          />

          <div className="mt-12 grid auto-rows-[minmax(260px,auto)] gap-6 lg:grid-cols-4">
            <BentoCard className="relative min-h-[420px] bg-charcoal lg:col-span-2 lg:row-span-2">
              <Image
                src={images.subconscious}
                alt="Serene landscape at sunrise"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="image-shade absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-10">
                <Sparkles className="mb-6 h-8 w-8 stroke-[1.35]" aria-hidden="true" />
              <h3 className="font-serif text-4xl leading-tight">
                Subconscious Integration
              </h3>
              <p className="mt-4 max-w-lg text-base leading-7 text-white/72">
                  Manifestation alchemy and subconscious reprogramming support
                  the release of old identities, inherited fear, and harmful
                  inner narratives.
              </p>
              </div>
            </BentoCard>

            <BentoCard className="flex min-h-[300px] flex-col justify-center bg-honey p-8 text-center lg:col-span-2">
              <Waves
                className="mx-auto mb-6 h-11 w-11 stroke-[1.25] text-plum"
                aria-hidden="true"
              />
              <h3 className="font-serif text-4xl leading-tight text-ink">
                Somatic Trauma Release
              </h3>
              <p className="mx-auto mt-4 max-w-md text-base leading-7 text-ink/64">
                Breathwork, bio-energetics, vibrational healing, and somatic
                experiencing help the body regain safety and self-trust.
              </p>
            </BentoCard>

            <BentoCard className="flex min-h-[300px] flex-col justify-center bg-[#EFEFEA] p-8 lg:col-span-2">
              <h3 className="font-serif text-4xl leading-tight text-ink">
                Quantum Manifestation
              </h3>
              <p className="mt-5 text-base leading-8 text-ink/64">
                Her mission is to prove that a joyful, abundant life is possible
                when aligned with universal laws, conscious choice, and inner
                coherence.
              </p>
            </BentoCard>

            <BentoCard className="flex min-h-[300px] flex-col justify-center bg-white p-8 lg:col-span-2">
              <Brain
                className="mb-6 h-10 w-10 stroke-[1.25] text-plum"
                aria-hidden="true"
              />
              <h3 className="font-serif text-4xl leading-tight text-ink">
                Integrative Therapy
              </h3>
              <p className="mt-5 text-base leading-8 text-ink/64">
                Integrative counseling, mindfulness, affirmations, lifestyle
                medicine, and spiritual mentorship meet in a grounded rhythm of
                transformation.
              </p>
            </BentoCard>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="luxury-container">
          <div className="grid gap-6 md:grid-cols-3">
            {healingPillars.map((pillar) => (
              <BentoCard key={pillar.title} className="bg-white p-8">
                <h3 className="font-serif text-3xl leading-tight text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-ink/64">
                  {pillar.description}
                </p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28">
        <div className="luxury-container text-center">
          <h2 className="font-serif text-4xl leading-tight text-ink md:text-6xl">
            Path to Transformation
          </h2>
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {transformations.map(([before, after]) => (
              <div key={before} className="flex flex-col items-center">
                <span className="text-3xl font-semibold text-ink/34 md:text-4xl">
                  From {before}
                </span>
                <span className="my-5 text-2xl text-plum/60">↓</span>
                <span className="font-serif text-5xl leading-none text-plum md:text-6xl">
                  to {after}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="luxury-container mx-auto max-w-5xl text-center">
          <Quote
            className="mx-auto mb-8 h-12 w-12 fill-plum/10 stroke-[1.2] text-plum"
            aria-hidden="true"
          />
          <blockquote className="font-serif text-4xl leading-[1.18] text-ink md:text-6xl">
            “Give a woman the tools to heal, and she becomes the master of her
            own destiny.”
          </blockquote>
          <p className="mt-8 text-sm font-semibold uppercase text-ink/46">
            Dr. Devanu
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
