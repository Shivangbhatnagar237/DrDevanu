import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Flower2, Instagram, Linkedin, Youtube } from "lucide-react";
import { ArrowLink } from "@/components/ArrowLink";
import { BentoCard } from "@/components/BentoCard";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { Navbar } from "@/components/Navbar";
import { featuredPaths, homepageHighlights, images } from "@/lib/content";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-sanctuary">
      <Navbar theme="dark" />
      <section className="relative flex min-h-[820px] overflow-hidden bg-[#E7ECE7] pt-28 text-ink md:min-h-screen">
        <Image
          src={images.hero}
          alt="Dr. Devanu meditating in a serene mountain landscape"
          fill
          priority
          sizes="100vw"
          className="scale-[1.02] object-cover object-right saturate-[0.96] transition-transform duration-700 md:object-[52%_40%] md:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,33,29,0.54)_0%,rgba(24,33,29,0.20)_32%,rgba(24,33,29,0.06)_54%,rgba(232,236,231,0.02)_100%),linear-gradient(90deg,rgba(250,248,245,0.18)_0%,rgba(250,248,245,0.08)_24%,rgba(250,248,245,0.03)_45%,rgba(232,236,231,0)_100%)] md:bg-[linear-gradient(90deg,rgba(250,248,245,0.92)_0%,rgba(250,248,245,0.58)_28%,rgba(250,248,245,0.08)_58%,rgba(232,236,231,0)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_38%,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_56%,rgba(30,42,36,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-sanctuary/80 to-transparent" />

        <div className="luxury-container relative z-10 flex min-h-[680px] flex-col justify-between pb-14 pt-10 md:min-h-[calc(100vh-7rem)] md:pb-20">
          <div className="hidden justify-center pt-1 text-sm font-semibold text-ink/74 md:flex">
            Your Body, Your Ritual.
          </div>

          <div className="grid flex-1 items-end gap-10 pb-8 md:grid-cols-[1fr_0.72fr] md:pb-12">
            <div className="max-w-xl rounded-[2rem] bg-[rgba(29,39,34,0.26)] px-5 py-6 shadow-[0_20px_60px_rgba(16,20,18,0.18)] backdrop-blur-md md:max-w-3xl md:rounded-none md:bg-transparent md:px-0 md:py-0 md:shadow-none md:backdrop-blur-0">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/78 md:mb-6 md:text-sm md:tracking-normal md:text-ink/64">
                Mountain-born Psychospiritual Healing
              </p>
              <h1 className="max-w-[11ch] font-serif text-[2.8rem] leading-[0.98] text-white [text-wrap:balance] md:max-w-none md:text-7xl md:text-ink lg:text-8xl">
                Start Your Journey to Inner Peace
              </h1>
            </div>

            <div className="max-w-md justify-self-start rounded-[1.75rem] bg-white/18 p-5 shadow-[0_18px_50px_rgba(18,24,22,0.16)] backdrop-blur-md md:justify-self-end md:rounded-none md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0">
              <p className="text-base leading-7 text-white/88 md:text-lg md:leading-8 md:text-ink/72">
                Holistic psychospiritual therapy for emotional clarity, spiritual
                wellness, and a life shaped by joy, purpose, and peace.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/mentorship-programs">Explore Programs</ButtonLink>
                <Link
                  href="/therapy-programs"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/32 bg-white/20 px-7 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-white/58 hover:bg-white/30 md:border-ink/18 md:bg-white/42 md:text-ink md:hover:border-plum/28 md:hover:bg-white/70"
                >
                  View Therapy
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-6 text-ink">
            <div className="flex items-center gap-5">
              {[
                { label: "Instagram", Icon: Instagram },
                { label: "YouTube", Icon: Youtube },
                { label: "LinkedIn", Icon: Linkedin }
              ].map(({ label, Icon }) => (
                <Link
                  key={label}
                  href="/"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/36 backdrop-blur-md transition duration-300 hover:bg-white/70 hover:text-plum"
                >
                  <Icon className="h-4 w-4 stroke-[1.6]" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <Link
              href="/#insights"
              aria-label="Scroll to insights"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/44 backdrop-blur-md transition duration-300 hover:bg-white/76"
            >
              <ChevronDown className="h-5 w-5 stroke-[1.4]" aria-hidden="true" />
            </Link>
          </div>
        </div>

      </section>

      <section className="relative z-10 -mt-8 pb-10 md:-mt-14 md:pb-14">
        <div className="luxury-container grid gap-3 rounded-[2rem] border border-white/54 bg-white/58 p-3 shadow-[0_24px_80px_rgba(45,45,45,0.08)] backdrop-blur-2xl md:grid-cols-3">
          {homepageHighlights.map(([number, label]) => (
            <div
              key={number}
              className="flex min-h-24 items-center gap-5 rounded-[1.5rem] bg-sanctuary/70 px-6"
            >
              <span className="font-serif text-4xl text-plum/70">{number}</span>
              <p className="text-sm font-semibold text-ink/70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="insights" className="py-16 md:py-24">
        <div className="luxury-container grid gap-6 lg:grid-cols-[1.45fr_0.8fr]">
          <BentoCard className="relative min-h-[420px] bg-charcoal lg:min-h-[520px]">
            <Image
              src={images.stillness}
              alt="Person meditating in quiet morning light"
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
            />
            <div className="image-shade absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-12">
              <h2 className="max-w-xl font-serif text-4xl leading-tight md:text-6xl">
                Healing Through Stillness
              </h2>
              <ArrowLink href="/about" light className="mt-6">
                View Insights
              </ArrowLink>
            </div>
          </BentoCard>

          <BentoCard className="flex min-h-[360px] flex-col justify-between bg-mist p-8 md:p-10 lg:min-h-[520px]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-plum">
              <Flower2 className="h-8 w-8 stroke-[1.35]" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-serif text-4xl leading-tight text-ink">
                Curated Retreats
              </h3>
              <p className="mt-5 text-base leading-8 text-ink/66">
                Seasonal immersions designed for nervous system restoration,
                soul-alignment, contemplative clarity, and mindful reconnection.
              </p>
              <ArrowLink href="/#retreats" className="mt-7">
                Explore Retreats
              </ArrowLink>
            </div>
          </BentoCard>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="luxury-container grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <Heading title="Modern Sanctuaries for the Digital Age">
            <p>
              Dr. Devanu bridges ancient contemplative wisdom with the real
              emotional textures of modern life. As a Holistic Psychospiritual
              Therapist, she combines psychotherapy, spiritual growth, somatic
              practice, and lifestyle medicine into a grounded path of healing.
            </p>
            <p className="mt-5">
              Each sanctuary is designed as a spacious pause where you can move
              from survival patterns toward self-regulation, clarity, and a more
              conscious creation of your reality.
            </p>
          </Heading>

          <div className="relative aspect-[1.18/1] overflow-hidden rounded-[2rem] bg-mist soft-shadow md:aspect-[1.55/1]">
            <Image
              src={images.pottery}
              alt="Minimal ceramic vessels warmed by sunlight"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-28">
        <div className="luxury-container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Heading
              title="Programs, Therapies & Workshops"
              className="max-w-2xl"
            >
              <p>
                Explore the new offering architecture: mentorship pathways,
                therapy programs, and workshop tracks that help visitors move
                into the right depth of support.
              </p>
            </Heading>
            <ArrowLink href="/mentorship-programs" className="mb-2">
              Browse All Pathways
            </ArrowLink>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
            {featuredPaths.map((path) => (
              <article key={path.title} className="group">
                <div className="relative aspect-[0.74/1] overflow-hidden rounded-[2rem] bg-charcoal">
                  <Image
                    src={path.image}
                    alt={path.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-charcoal/10 transition duration-500 group-hover:bg-charcoal/0" />
                </div>
                <h3 className="mt-7 text-xl font-semibold text-ink">
                  {path.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink/62">
                  {path.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm leading-6 text-ink/58">
                  {path.preview.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ArrowLink href={path.href} className="mt-6">
                  Explore {path.title}
                </ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
