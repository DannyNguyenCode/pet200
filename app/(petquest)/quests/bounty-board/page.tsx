import BountyBoard from "@components/petquest/BountyBoard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Bounty Board | PetQuest Online",
  description: "Track community goals, gold raised, and featured quests.",
};

export default function BountyBoardPage() {
  return <BountyBoard />;
}
