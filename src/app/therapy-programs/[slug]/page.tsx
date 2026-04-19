import { notFound } from "next/navigation";
import { ProgramDetailPage } from "@/components/ProgramDetailPage";
import { getTherapyProgram, therapyPrograms } from "@/lib/content";

export function generateStaticParams() {
  return therapyPrograms.map((program) => ({ slug: program.slug }));
}

export default async function TherapyProgramDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getTherapyProgram(slug);

  if (!program) {
    notFound();
  }

  return (
    <ProgramDetailPage
      program={program}
      categoryLabel="Therapy Programs"
      categoryHref="/therapy-programs"
    />
  );
}
