import { ProgramCategoryPage } from "@/components/ProgramCategoryPage";
import { therapyPrograms } from "@/lib/content";

export default function TherapyProgramsPage() {
  return (
    <ProgramCategoryPage
      eyebrow="Therapy Programs"
      title="Focused therapy support for emotional pain, trauma, and life transitions."
      intro="These therapy programs hold specific emotional and psychological concerns with more structure and clarity. The goal is to help visitors understand where they can seek support, what each therapeutic pathway addresses, and which offering best matches their current reality."
      programs={therapyPrograms}
      categoryLabel="Therapy Program"
      basePath="/therapy-programs"
    />
  );
}
