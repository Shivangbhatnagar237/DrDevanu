import { notFound } from "next/navigation";
import { ProgramDetailPage } from "@/components/ProgramDetailPage";
import { getMentorshipProgram, mentorshipPrograms } from "@/lib/content";

export function generateStaticParams() {
  return mentorshipPrograms.map((program) => ({ slug: program.slug }));
}

export default async function MentorshipProgramDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getMentorshipProgram(slug);

  if (!program) {
    notFound();
  }

  return (
    <ProgramDetailPage
      program={program}
      categoryLabel="Mentorship Programs"
      categoryHref="/mentorship-programs"
    />
  );
}
