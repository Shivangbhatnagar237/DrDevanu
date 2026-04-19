import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BentoCard } from "@/components/BentoCard";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { images, type WorkshopTrack } from "@/lib/content";

type WorkshopTracksPageProps = {
  title: string;
  intro: string;
  tracks: WorkshopTrack[];
};

const listingStyles = [
  "bg-honey/88",
  "bg-white/88",
  "bg-mist/88"
];

export function WorkshopTracksPage({
  title,
  intro,
  tracks
}: WorkshopTracksPageProps) {
  return (
    <main className="min-h-screen bg-sanctuary">
      <Navbar theme="dark" />

      <section className="relative overflow-hidden pt-36 md:pt-44">
        <div className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_top_left,rgba(107,91,149,0.14),transparent_42%),radial-gradient(circle_at_top_right,rgba(244,240,255,0.92),transparent_40%)]" />
        <div className="luxury-container relative grid gap-8 pb-14 lg:grid-cols-[1fr_0.9fr] md:pb-18">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-plum">
              Workshops
            </p>
            <h1 className="max-w-[11ch] font-serif text-5xl leading-[0.98] text-ink md:text-7xl">
              {title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-ink/68 md:text-lg">
              {intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-ink/8 bg-white/85 px-4 py-2 text-sm text-ink/62 shadow-[0_10px_30px_rgba(26,26,26,0.05)]">
                Short-format learning
              </span>
              <span className="rounded-full border border-ink/8 bg-white/85 px-4 py-2 text-sm text-ink/62 shadow-[0_10px_30px_rgba(26,26,26,0.05)]">
                Practical takeaways
              </span>
              <span className="rounded-full border border-ink/8 bg-white/85 px-4 py-2 text-sm text-ink/62 shadow-[0_10px_30px_rgba(26,26,26,0.05)]">
                Group-friendly topics
              </span>
            </div>
          </div>

          <div className="grid gap-4 self-end sm:grid-cols-2">
            <div className="relative min-h-[500px] overflow-hidden rounded-[1.8rem] border border-white/60 bg-charcoal shadow-[0_18px_60px_rgba(45,45,45,0.08)] sm:col-span-2">
              <Image
                src={images.stillness}
                alt="Supportive workshop gathering visual"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,20,20,0.10)_0%,rgba(20,20,20,0.56)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                  Workshop Experience
                </p>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/60 bg-white/82 p-5 shadow-[0_18px_60px_rgba(45,45,45,0.07)] backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/42">
                Tracks
              </p>
              <p className="mt-3 font-serif text-4xl leading-none text-ink">
                {tracks.length}
              </p>
              <p className="mt-3 text-sm leading-7 text-ink/62">
                Explore the themed workshop streams and open the one that fits your interest.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-ink/8 bg-charcoal p-5 text-white shadow-[0_18px_60px_rgba(26,26,26,0.12)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/42">
                Planning a session?
              </p>
              <p className="mt-3 text-sm leading-7 text-white/68">
                Use the contact page if you want help selecting a workshop topic
                for a group, event, or ongoing learning series.
              </p>
              <ButtonLink href="/contact" variant="light" className="mt-5 bg-white/92">
                Contact Dr. Devanu
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div
          className={`luxury-container grid gap-6 md:grid-cols-2 xl:grid-cols-3 ${
            tracks.length % 3 === 2 ? "[&>*:last-child]:xl:col-span-2" : ""
          }`}
        >
          {tracks.map((track, index) => (
            <Link key={track.slug} href={`/workshops/${track.slug}`} className="block">
              <BentoCard
                className={`group h-full border-white/60 p-7 transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_90px_rgba(45,45,45,0.10)] ${listingStyles[index % listingStyles.length]}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-plum">
                    Workshop track
                  </p>
                  <span className="font-serif text-4xl leading-none text-plum/24">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>

                <h2 className="mt-4 font-serif text-3xl leading-tight text-ink">
                  {track.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-ink/66">
                  {track.summary}
                </p>

                <div className="mt-6 rounded-full border border-ink/8 bg-white/75 px-3 py-2 text-xs font-medium text-ink/56">
                  {track.topics.length} topics inside this stream
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
