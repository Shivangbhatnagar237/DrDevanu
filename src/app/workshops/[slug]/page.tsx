import { notFound } from "next/navigation";
import { WorkshopTrackDetailPage } from "@/components/WorkshopTrackDetailPage";
import { getWorkshopTrack, workshopTracks } from "@/lib/content";

export function generateStaticParams() {
  return workshopTracks.map((track) => ({ slug: track.slug }));
}

export default async function WorkshopTrackPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const track = getWorkshopTrack(slug);

  if (!track) {
    notFound();
  }

  return <WorkshopTrackDetailPage track={track} />;
}
