import { ProgramCategoryPage } from "@/components/ProgramCategoryPage";
import { therapyPrograms } from "@/lib/content";

export default function TherapyProgramsPage() {
  return (
    <ProgramCategoryPage
      eyebrow="Therapy Programs"
      title="Focused therapy support for emotional pain, trauma, and life transitions."
      intro="These therapy programs support specific emotional and psychological concerns with care, depth, and a more focused therapeutic container. Each pathway addresses a distinct area of pain, healing, or transition."
      programs={therapyPrograms}
      categoryLabel="Therapy Program"
      basePath="/therapy-programs"
    />
  );
}
