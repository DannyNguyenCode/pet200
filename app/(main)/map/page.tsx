import TownMapCanvas from "@components/townsquare/TownMapCanvas";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Realm Map | The Town Square",
  description: "Explore companions, shrines, and active quests near you.",
};

export default function MapPage() {
  return <TownMapCanvas />;
}
