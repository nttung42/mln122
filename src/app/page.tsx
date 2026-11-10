import { FloorJourneyContainer } from "@/components/floor-journey/floor-journey-container";

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight-navy text-off-white selection:bg-electric-blue/30 selection:text-white relative overflow-hidden">
      <FloorJourneyContainer />
    </main>
  );
}
