import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { WorkshopTrack } from "@/lib/content";
import { getWhatsAppHref } from "@/lib/whatsapp";

type WorkshopTrackDetailPageProps = {
  track: WorkshopTrack;
};

export function WorkshopTrackDetailPage({ track }: WorkshopTrackDetailPageProps) {
  const whatsappHref = getWhatsAppHref(
    `Hello Dr. Devanu, I would like to enquire about the ${track.title} workshop track.`
  );

  return (
    <main className="min-h-screen bg-sanctuary">
      <Navbar theme="dark" />

      <section className="relative overflow-hidden pt-36 md:pt-44">
        <div className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_top_left,rgba(107,91,149,0.16),transparent_42%),radial-gradient(circle_at_top_right,rgba(244,240,255,0.92),transparent_38%)]" />
        <div className="luxury-container relative pb-16 md:pb-20">
          <Link
            href="/workshops"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink/56 transition duration-300 hover:text-plum"
          >
            <ArrowLeft className="h-4 w-4 stroke-[1.6]" aria-hidden="true" />
            Back to Workshops
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-plum">
                Workshop Track
              </p>
              <h1 className="mt-5 max-w-[12ch] font-serif text-5xl leading-[0.98] text-ink md:text-7xl">
                {track.title}
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-ink/68 md:text-lg">
                {track.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact">Plan via form</ButtonLink>
                {whatsappHref ? <ButtonLink href={whatsappHref} variant="light">Ask on WhatsApp</ButtonLink> : null}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[1.9rem] border border-white/60 bg-white/82 p-6 shadow-[0_18px_60px_rgba(45,45,45,0.07)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/42">
                  Focus area
                </p>
                <p className="mt-3 text-sm leading-7 text-ink/64">{track.focus}</p>
              </div>
              <div className="rounded-[1.9rem] border border-ink/8 bg-charcoal p-6 text-white shadow-[0_18px_60px_rgba(26,26,26,0.12)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/42">
                  Topics included
                </p>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  {track.topics.length} workshop themes can be adapted for
                  shorter sessions, group learning, or special events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="luxury-container grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="rounded-[2.2rem] border border-white/60 bg-white/84 p-8 shadow-[0_20px_70px_rgba(45,45,45,0.06)] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-plum">
              Topics in this track
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {track.topics.map((topic, index) => (
                <div
                  key={topic}
                  className="rounded-[1.4rem] border border-ink/8 bg-sanctuary px-4 py-4 shadow-[0_10px_30px_rgba(26,26,26,0.04)] transition duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 font-serif text-xl leading-none text-plum/70">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-7 text-ink/66">{topic}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.2rem] border border-white/60 bg-honey/88 p-8 shadow-[0_20px_70px_rgba(45,45,45,0.06)] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-plum">
              Good fit for
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink">
              Groups, communities, institutions, or focused audiences looking for a shorter-format experience.
            </h2>
            <p className="mt-6 text-base leading-8 text-ink/66">
              These topics can work well for workshops, curated sessions, or
              event-based programming where people want a specific area of
              growth, healing, or emotional education without enrolling into a
              longer program first.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-[1.5rem] border border-ink/8 bg-white/74 px-5 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                  A good fit when
                </p>
                <p className="mt-3 text-sm leading-7 text-ink/64">
                  You are looking for a focused workshop experience around one
                  theme, or would like a curated combination for a group,
                  community, institution, or event.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-ink/8 bg-white/74 px-5 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                  To plan this workshop
                </p>
                <p className="mt-3 text-sm leading-7 text-ink/64">
                  Use the contact form or WhatsApp and mention this workshop
                  track by name to begin the conversation.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Contact Dr. Devanu</ButtonLink>
              <Link
                href="/workshops"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/10 bg-white px-7 text-sm font-semibold text-ink transition duration-300 hover:border-plum/24 hover:text-plum"
              >
                Explore more workshop tracks
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
