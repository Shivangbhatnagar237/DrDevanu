import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BentoCard } from "@/components/BentoCard";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { Program } from "@/lib/content";

type ProgramCategoryPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  programs: Program[];
  categoryLabel: string;
  basePath: string;
};

const listingStyles = [
  "bg-white/88",
  "bg-honey/88",
  "bg-mist/88"
];

export function ProgramCategoryPage({
  eyebrow,
  title,
  intro,
  programs,
  categoryLabel,
  basePath
}: ProgramCategoryPageProps) {
  return (
    <main className="min-h-screen bg-sanctuary">
      <Navbar theme="dark" />

      <section className="relative overflow-hidden pt-36 md:pt-44">
        <div className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_top_left,rgba(107,91,149,0.14),transparent_42%),radial-gradient(circle_at_top_right,rgba(253,252,231,0.9),transparent_40%)]" />
        <div className="luxury-container relative grid gap-8 pb-14 lg:grid-cols-[1fr_0.9fr] md:pb-18">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-plum">
              {eyebrow}
            </p>
            <h1 className="max-w-[11ch] font-serif text-5xl leading-[0.98] text-ink md:text-7xl">
              {title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-ink/68 md:text-lg">
              {intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-ink/8 bg-white/85 px-4 py-2 text-sm text-ink/62 shadow-[0_10px_30px_rgba(26,26,26,0.05)]">
                Personalized guidance
              </span>
              <span className="rounded-full border border-ink/8 bg-white/85 px-4 py-2 text-sm text-ink/62 shadow-[0_10px_30px_rgba(26,26,26,0.05)]">
                Psychospiritual support
              </span>
              <span className="rounded-full border border-ink/8 bg-white/85 px-4 py-2 text-sm text-ink/62 shadow-[0_10px_30px_rgba(26,26,26,0.05)]">
                Enquire by WhatsApp or form
              </span>
            </div>
          </div>

          <div className="grid gap-4 self-end sm:grid-cols-2">
            <div className="rounded-[1.8rem] border border-white/60 bg-white/82 p-5 shadow-[0_18px_60px_rgba(45,45,45,0.07)] backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/42">
                Catalogue
              </p>
              <p className="mt-3 font-serif text-4xl leading-none text-ink">
                {programs.length}
              </p>
              <p className="mt-3 text-sm leading-7 text-ink/62">
                Explore the current offerings and open the one that feels most aligned.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-ink/8 bg-charcoal p-5 text-white shadow-[0_18px_60px_rgba(26,26,26,0.12)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/42">
                Need help choosing?
              </p>
              <p className="mt-3 text-sm leading-7 text-white/68">
                If you are unsure which path fits you best, use the contact page
                and mention what you are moving through.
              </p>
              <ButtonLink href="/contact" variant="light" className="mt-5 bg-white/92">
                Contact Dr. Devanu
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="luxury-container grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program, index) => (
            <Link key={program.slug} href={`${basePath}/${program.slug}`} className="block">
              <BentoCard
                className={`group h-full border-white/60 p-7 transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_90px_rgba(45,45,45,0.10)] ${listingStyles[index % listingStyles.length]}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-plum">
                    {categoryLabel}
                  </p>
                  <span className="font-serif text-4xl leading-none text-plum/24">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>

                <h2 className="mt-4 font-serif text-3xl leading-tight text-ink">
                  {program.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-ink/66">
                  {program.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-ink/8 bg-white/75 px-3 py-2 text-xs font-medium text-ink/56">
                    {program.audience}
                  </span>
                  <span className="rounded-full border border-ink/8 bg-white/75 px-3 py-2 text-xs font-medium text-ink/56">
                    {program.duration}
                  </span>
                </div>

                <div className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-plum transition duration-300 group-hover:gap-3">
                  View details
                  <ArrowRight className="h-4 w-4 stroke-[1.6]" aria-hidden="true" />
                </div>
              </BentoCard>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
