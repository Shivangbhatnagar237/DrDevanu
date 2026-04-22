import { WorkshopTracksPage } from "@/components/WorkshopTracksPage";
import { workshopTracks } from "@/lib/content";

export default function WorkshopsPage() {
  return (
    <WorkshopTracksPage
      title="Short, focused workshop tracks for practical growth and inner balance."
      intro="Alongside longer mentorship and therapy journeys, these workshops offer shorter formats for building specific life skills, emotional capacity, and contemplative practice in a practical and engaging way."
      tracks={workshopTracks}
    />
  );
}
