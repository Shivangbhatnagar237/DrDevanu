import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Instagram, Linkedin, Youtube } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { Navbar } from "@/components/Navbar";
import { featuredPaths, homepageHighlights, images } from "@/lib/content";

const homepageOfferingTitles: Record<string, string> = {
  "Mentorship Programs": "Mentorship",
  "Therapy Programs": "Therapy",
  Workshops: "Workshops"
};

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

          <div className="grid flex-1 items-end gap-10 pb-8 md:pb-12">
            <div className="max-w-xl rounded-[2rem] bg-[rgba(29,39,34,0.26)] px-5 py-6 shadow-[0_20px_60px_rgba(16,20,18,0.18)] backdrop-blur-md md:max-w-3xl md:rounded-none md:bg-transparent md:px-0 md:py-0 md:shadow-none md:backdrop-blur-0">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/78 md:mb-6 md:text-sm md:tracking-normal md:text-ink/64">
                Heal your Mind, Body, Energy & Soul
              </p>
              <h1 className="max-w-[11ch] font-serif text-[2.8rem] leading-[0.98] text-white [text-wrap:balance] md:max-w-none md:text-7xl md:text-ink lg:text-8xl">
                Start Your Journey to Inner Peace
              </h1>
              <div className="mt-5 max-w-[20rem] rounded-[1.6rem] border border-white/18 bg-white/10 px-4 py-4 text-white/82 shadow-[0_18px_48px_rgba(16,20,18,0.12)] backdrop-blur-sm md:hidden">
                <p className="text-sm leading-6">
                  Mentorship, therapy, and workshops designed for emotional clarity,
                  spiritual wellness, and grounded inner transformation.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-6 text-ink">
            <div className="flex items-center gap-5">
              {[
                {
                  label: "Instagram",
                  Icon: Instagram,
                  href: "https://www.instagram.com/drdevanu/"
                },
                {
                  label: "YouTube",
                  Icon: Youtube,
                  href: "https://www.youtube.com/@Drdevanu"
                },
                {
                  label: "LinkedIn",
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/devanu-bhatnagar/"
                }
              ].map(({ label, Icon, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/36 backdrop-blur-md transition duration-300 hover:bg-white/70 hover:text-plum"
                >
                  <Icon className="h-4 w-4 stroke-[1.6]" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <Link
              href="/#services"
              aria-label="Scroll to programs"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/44 backdrop-blur-md transition duration-300 hover:bg-white/76"
            >
              <ChevronDown className="h-5 w-5 stroke-[1.4]" aria-hidden="true" />
            </Link>
          </div>
        </div>

      </section>

      <section className="relative z-10 -mt-8 pb-6 md:-mt-14 md:pb-8">
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

      <section id="services" className="py-8 md:py-16">
        <div className="luxury-container">
          <Heading
            title="Programs, Therapies & Workshops"
            className="max-w-none"
          />

          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8 items-stretch">
            {featuredPaths.map((path, index) => (
              <Link
                key={path.title}
                href={path.href}
                className="group flex flex-col h-full overflow-hidden rounded-[2.15rem] border border-white/65 bg-white/84 shadow-[0_22px_70px_rgba(45,45,45,0.08)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_100px_rgba(45,45,45,0.12)]"
              >
                <div className="relative aspect-[0.92] overflow-hidden bg-charcoal">
                  <Image
                    src={path.image}
                    alt={path.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(20,20,20,0.04)_0%,rgba(20,20,20,0.12)_34%,rgba(20,20,20,0.44)_100%)]" />
                  <div className="absolute inset-x-0 top-0 flex items-start justify-end p-5">
                    <span className="font-serif text-4xl leading-none text-white/28">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="max-w-[10ch] font-serif text-[2rem] leading-[1.02] text-white md:text-[2.15rem]">
                      {homepageOfferingTitles[path.title] ?? path.title}
                    </h3>
                    <p className="mt-3 max-w-[20rem] text-sm leading-6 text-white/76">
                      {path.preview[0]}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <p className="text-sm leading-7 text-ink/60">
                    {path.description}
                  </p>
                  {/* Divider is now optional. Remove border for a cleaner look, or keep for separation. Here, we remove it for visual balance. */}
                  <div className="mt-auto flex items-center justify-between gap-4 pt-5">
                    <span className="text-sm font-medium text-ink/80">
                      Explore {homepageOfferingTitles[path.title] ?? path.title}
                    </span>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-plum text-white shadow-[0_16px_40px_rgba(107,91,149,0.2)] transition duration-300 group-hover:translate-x-1 group-hover:bg-plum-light">
                      <ArrowRight className="h-4 w-4 stroke-[1.9]" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
