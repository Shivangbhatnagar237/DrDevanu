import { ProgramCategoryPage } from "@/components/ProgramCategoryPage";
import { mentorshipPrograms } from "@/lib/content";

export default function MentorshipProgramsPage() {
  return (
    <ProgramCategoryPage
      eyebrow="Mentorship Programs"
      title="Guided mentorship pathways for deep and lasting inner change."
      intro="These mentorship offerings are designed for people who want support that goes beyond one-off insight. Each pathway is shaped around a clear life concern, a developmental theme, or a spiritual practice focus so healing can unfold with more continuity."
      programs={mentorshipPrograms}
      categoryLabel="Mentorship Program"
      basePath="/mentorship-programs"
    />
  );
}
