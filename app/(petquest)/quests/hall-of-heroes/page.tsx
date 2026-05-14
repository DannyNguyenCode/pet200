import HallOfHeroes from "@components/petquest/HallOfHeroes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donor Hall of Fame | PetQuest Online",
  description: "Top contributors, titles, and global achievements.",
};

export default function HallOfHeroesPage() {
  return <HallOfHeroes />;
}
