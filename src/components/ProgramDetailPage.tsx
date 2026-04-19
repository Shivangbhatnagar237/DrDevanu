import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { Program } from "@/lib/content";
import { getWhatsAppHref } from "@/lib/whatsapp";

type ProgramDetailPageProps = {
  program: Program;
  categoryLabel: string;
  categoryHref: string;
};

export function ProgramDetailPage({
  program,
  categoryLabel,
  categoryHref
}: ProgramDetailPageProps) {
  const whatsappHref = getWhatsAppHref(
    `Hello Dr. Devanu, I would like to know more about the ${program.title}.`
  );

  return (
    <main className="min-h-screen bg-sanctuary">
      <Navbar theme="dark" />

      <section className="relative overflow-hidden pt-36 md:pt-44">
        <div className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_top_left,rgba(107,91,149,0.16),transparent_42%),radial-gradient(circle_at_top_right,rgba(253,252,231,0.92),transparent_38%)]" />
        <div className="luxury-container relative pb-16 md:pb-20">
          <Link
            href={categoryHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink/56 transition duration-300 hover:text-plum"
          >
            <ArrowLeft className="h-4 w-4 stroke-[1.6]" aria-hidden="true" />
            Back to {categoryLabel}
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-plum">
                {categoryLabel}
              </p>
              <h1 className="mt-5 max-w-[12ch] font-serif text-5xl leading-[0.98] text-ink md:text-7xl">
                {program.title}
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-ink/68 md:text-lg">
                {program.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact">Enquire via form</ButtonLink>
                {whatsappHref ? <ButtonLink href={whatsappHref} variant="light">Ask on WhatsApp</ButtonLink> : null}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-[1.9rem] border border-white/60 bg-white/82 p-6 shadow-[0_18px_60px_rgba(45,45,45,0.07)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/42">
                  Best suited for
                </p>
                <p className="mt-3 text-sm leading-7 text-ink/64">
                  {program.audience}
                </p>
              </div>
              <div className="rounded-[1.9rem] border border-white/60 bg-mist/86 p-6 shadow-[0_18px_60px_rgba(45,45,45,0.05)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/42">
                  Format
                </p>
                <p className="mt-3 text-sm leading-7 text-ink/64">
                  {program.format}
                </p>
              </div>
              <div className="rounded-[1.9rem] border border-ink/8 bg-charcoal p-6 text-white shadow-[0_18px_60px_rgba(26,26,26,0.12)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/42">
                  Duration
                </p>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  {program.duration}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="luxury-container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.2rem] border border-white/60 bg-honey/88 p-8 shadow-[0_20px_70px_rgba(45,45,45,0.06)] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-plum">
              What this journey can support
            </p>
            <div className="mt-6 space-y-4">
              {program.benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="rounded-[1.5rem] border border-ink/8 bg-white/72 px-5 py-5 shadow-[0_12px_35px_rgba(26,26,26,0.05)] transition duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-plum/12 font-serif text-lg text-plum">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-7 text-ink/66">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.2rem] border border-white/60 bg-white/84 p-8 shadow-[0_20px_70px_rgba(45,45,45,0.06)] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-plum">
              How this offering is held
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink">
              Grounded support with emotional depth, practical direction, and a clear next step.
            </h2>
            <p className="mt-6 text-base leading-8 text-ink/66">
              This page gives the visitor a quieter, more focused way to
              understand the offering before reaching out. It avoids the long
              same-page drop below the catalogue and instead creates a dedicated
              space for the program itself.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-ink/8 bg-sanctuary px-5 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                  Suitable when
                </p>
                <p className="mt-3 text-sm leading-7 text-ink/64">
                  You want more than general inspiration and are looking for a
                  path with continuity, guidance, and thoughtful integration.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-ink/8 bg-sanctuary px-5 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                  Best next move
                </p>
                <p className="mt-3 text-sm leading-7 text-ink/64">
                  Reach out through the contact form or WhatsApp and mention this
                  exact program title for a more relevant response.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Contact Dr. Devanu</ButtonLink>
              <Link
                href={categoryHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/10 bg-white px-7 text-sm font-semibold text-ink transition duration-300 hover:border-plum/24 hover:text-plum"
              >
                Explore more in {categoryLabel}
                <ArrowRight className="ml-2 h-4 w-4 stroke-[1.6]" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
