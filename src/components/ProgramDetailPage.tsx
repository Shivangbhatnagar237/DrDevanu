import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
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

function splitMetadataLine(line: string) {
  const match = line.match(/^([^–:]+?)\s*(?:–|:)\s*(.+)$/);

  if (!match) {
    return null;
  }

  return {
    label: match[1].trim(),
    value: match[2].trim()
  };
}

function renderSectionLines(lines: string[]) {
  const blocks: React.JSX.Element[] = [];
  let bulletBuffer: string[] = [];

  const flushBullets = (key: string) => {
    if (!bulletBuffer.length) {
      return;
    }

    blocks.push(
      <ul key={key} className="space-y-3 text-sm leading-7 text-ink/68 md:text-base">
        {bulletBuffer.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-plum/55" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );

    bulletBuffer = [];
  };

  lines.forEach((line, index) => {
    if (line.startsWith("- ")) {
      bulletBuffer.push(line.slice(2));
      return;
    }

    flushBullets(`bullets-${index}`);

    if (line.startsWith("### ")) {
      blocks.push(
        <h3
          key={`subheading-${line}-${index}`}
          className="pt-3 font-serif text-2xl leading-tight text-ink"
        >
          {line.slice(4)}
        </h3>
      );
      return;
    }

    blocks.push(
      <p key={`line-${line}-${index}`} className="text-sm leading-8 text-ink/68 md:text-base">
        {line}
      </p>
    );
  });

  flushBullets("bullets-final");

  return blocks;
}

function getSectionPreview(lines: string[], isMetadataSection: boolean) {
  if (isMetadataSection) {
    return `${lines.length} details included`;
  }

  const firstContentLine = lines.find((line) => !line.startsWith("### "));

  if (!firstContentLine) {
    return null;
  }

  const normalized = firstContentLine.startsWith("- ")
    ? firstContentLine.slice(2)
    : firstContentLine;

  return normalized.length > 110
    ? `${normalized.slice(0, 107).trimEnd()}...`
    : normalized;
}

function isLongSection(lines: string[], isMetadataSection: boolean) {
  if (isMetadataSection) {
    return lines.length > 3;
  }

  const substantiveLines = lines.filter((line) => !line.startsWith("### "));
  const bulletCount = substantiveLines.filter((line) => line.startsWith("- ")).length;
  const paragraphCount = substantiveLines.filter((line) => !line.startsWith("- ")).length;
  const totalCharacters = substantiveLines.reduce((count, line) => count + line.length, 0);

  return paragraphCount > 1 || bulletCount > 5 || totalCharacters > 340;
}

export function ProgramDetailPage({
  program,
  categoryLabel,
  categoryHref
}: ProgramDetailPageProps) {
  const whatsappHref = getWhatsAppHref(
    `Hello Dr. Devanu, I would like to know more about the ${program.title}.`
  );
  const sections =
    program.sections && program.sections.length
      ? program.sections
      : [
          {
            heading: "Overview",
            lines: [program.summary]
          },
          {
            heading: "How this program can help",
            lines: program.benefits.map((benefit) => `- ${benefit}`)
          }
        ];
  const sectionLinks = sections.map((section, index) => ({
    ...section,
    id: `${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "section"}-${index}`
  }));
  const headerMetadataSection =
    categoryLabel.toLowerCase().includes("mentorship")
      ? sections.find((section) => /more details|program delivery/i.test(section.heading))
      : null;
  const headerMetadata =
    headerMetadataSection?.lines
      .map(splitMetadataLine)
      .filter((item): item is NonNullable<ReturnType<typeof splitMetadataLine>> => Boolean(item)) ?? [];
  const topCards =
    headerMetadata.length >= 3
      ? headerMetadata.slice(0, 3)
      : [
          {
            label: "Best suited for",
            value: program.audience
          },
          {
            label: "Format",
            value: program.format
          },
          {
            label: "Duration",
            value: program.duration
          }
        ];
  const visibleSectionLinks = sectionLinks.filter(
    (section) => section.heading !== headerMetadataSection?.heading
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
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {topCards.map((item, index) => (
                <div
                  key={`${item.label}-${index}`}
                  className={`rounded-[1.9rem] p-6 shadow-[0_18px_60px_rgba(45,45,45,0.07)] ${
                    index === 2
                      ? "border border-ink/8 bg-charcoal text-white shadow-[0_18px_60px_rgba(26,26,26,0.12)]"
                      : index === 1
                        ? "border border-white/60 bg-mist/86"
                        : "border border-white/60 bg-white/82"
                  }`}
                >
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
                      index === 2 ? "text-white/42" : "text-ink/42"
                    }`}
                  >
                    {item.label}
                  </p>
                  <p
                    className={`mt-3 text-sm leading-7 ${
                      index === 2 ? "text-white/70" : "text-ink/64"
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="luxury-container grid gap-6 xl:grid-cols-[0.28fr_0.72fr] xl:items-start">
          <aside className="xl:sticky xl:top-28">
            <div className="rounded-[2rem] border border-white/60 bg-white/84 p-6 shadow-[0_20px_70px_rgba(45,45,45,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-plum">
                On This Page
              </p>
              <nav className="mt-5 space-y-2">
                {visibleSectionLinks.map((section) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-[1rem] border border-transparent bg-sanctuary/75 px-4 py-3 text-sm leading-6 text-ink/68 transition duration-300 hover:border-plum/18 hover:bg-white hover:text-plum"
                  >
                    {section.heading}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <div className="grid gap-6">
          {visibleSectionLinks.map((section, index) => {
            const metadata = section.lines
              .map(splitMetadataLine)
              .filter((item): item is NonNullable<ReturnType<typeof splitMetadataLine>> => Boolean(item));
            const isMetadataSection =
              metadata.length === section.lines.length &&
              /delivery|details/i.test(section.heading);
            const isCollapsible = isLongSection(section.lines, isMetadataSection);
            const preview = getSectionPreview(section.lines, isMetadataSection);

            if (!isCollapsible) {
              return (
                <article
                  id={section.id}
                  key={`${section.heading}-${index}`}
                  className={`rounded-[2.2rem] border border-white/60 px-8 py-7 shadow-[0_20px_70px_rgba(45,45,45,0.06)] md:px-10 ${
                    index % 2 === 0 ? "bg-white/84" : "bg-honey/88"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-plum">
                    {categoryLabel}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl leading-tight text-ink md:text-4xl">
                    {section.heading}
                  </h2>
                  <div className="mt-6 border-t border-ink/8 pt-6">
                    {isMetadataSection ? (
                      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        {metadata.map((item) => (
                          <div
                            key={`${item.label}-${item.value}`}
                            className="rounded-[1.5rem] border border-ink/8 bg-white/80 px-5 py-5"
                          >
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                              {item.label}
                            </p>
                            <p className="mt-3 text-sm leading-7 text-ink/68">
                              {item.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4">{renderSectionLines(section.lines)}</div>
                    )}
                  </div>
                </article>
              );
            }

            return (
              <details
                id={section.id}
                key={`${section.heading}-${index}`}
                open={index === 0}
                className={`group rounded-[2.2rem] border border-white/60 shadow-[0_20px_70px_rgba(45,45,45,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-plum/18 hover:shadow-[0_26px_90px_rgba(45,45,45,0.09)] ${
                  index % 2 === 0 ? "bg-white/84" : "bg-honey/88"
                }`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-8 py-7 md:px-10">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-plum">
                      {categoryLabel}
                    </p>
                    <h2 className="mt-3 font-serif text-3xl leading-tight text-ink md:text-4xl">
                      {section.heading}
                    </h2>
                    {preview ? (
                      <p className="group-open:hidden mt-3 max-w-2xl text-sm leading-7 text-ink/58 transition duration-300 group-hover:text-ink/68 md:text-base">
                        {preview}
                      </p>
                    ) : null}
                  </div>
                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-white/78 text-ink/48 transition duration-300 group-hover:translate-x-0.5 group-hover:scale-[1.04] group-hover:border-[#B7ADD8] group-hover:bg-[#B7ADD8] group-hover:text-white group-open:rotate-180 group-open:border-[#B7ADD8] group-open:bg-[#B7ADD8] group-open:text-white">
                    <ChevronDown className="h-5 w-5 stroke-[1.8]" aria-hidden="true" />
                  </span>
                </summary>

                <div className="border-t border-ink/8 px-8 pb-8 pt-6 md:px-10 md:pb-10">
                  {isMetadataSection ? (
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {metadata.map((item) => (
                        <div
                          key={`${item.label}-${item.value}`}
                          className="rounded-[1.5rem] border border-ink/8 bg-white/80 px-5 py-5"
                        >
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                            {item.label}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-ink/68">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">{renderSectionLines(section.lines)}</div>
                  )}
                </div>
              </details>
            );
          })}

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2.2rem] border border-white/60 bg-charcoal p-8 text-white shadow-[0_20px_70px_rgba(26,26,26,0.12)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/44">
                Enquire About This Program
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-white">
                If this feels aligned, reach out with the exact program title.
              </h2>
              <p className="mt-5 text-sm leading-8 text-white/72 md:text-base">
                You can mention <span className="font-semibold text-white">{program.title}</span> in
                your inquiry so the response is more relevant to what you are seeking.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact">Contact Dr. Devanu</ButtonLink>
                {whatsappHref ? <ButtonLink href={whatsappHref} variant="light">Ask on WhatsApp</ButtonLink> : null}
              </div>
            </div>

            <div className="rounded-[2.2rem] border border-white/60 bg-white/84 p-8 shadow-[0_20px_70px_rgba(45,45,45,0.06)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-plum">
                Explore More
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink">
                Continue through the wider {categoryLabel.toLowerCase()} catalogue.
              </h2>
              <p className="mt-5 text-sm leading-8 text-ink/68 md:text-base">
                Browse the remaining programs to understand the full range of support available on the site.
              </p>

              <Link
                href={categoryHref}
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-ink/10 bg-sanctuary px-7 text-sm font-semibold text-ink transition duration-300 hover:border-plum/24 hover:text-plum"
              >
                Explore more in {categoryLabel}
                <ArrowRight className="ml-2 h-4 w-4 stroke-[1.6]" aria-hidden="true" />
              </Link>
            </div>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
