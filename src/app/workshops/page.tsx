import { WorkshopTracksPage } from "@/components/WorkshopTracksPage";
import { workshopTracks } from "@/lib/content";

export default function WorkshopsPage() {
  return (
    <WorkshopTracksPage
      title="Short, focused workshop tracks for practical growth and inner balance."
      intro="Alongside longer mentorship and therapy journeys, these workshops offer shorter formats that help people develop a specific life skill, emotional capacity, or contemplative practice. The tracks below reorganize the referenced workshop catalog into clearer themes."
      tracks={workshopTracks}
    />
  );
}
