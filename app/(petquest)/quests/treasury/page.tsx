import Treasury from "@components/petquest/Treasury";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Royal Treasury | PetQuest Online",
  description: "Transparency ledger for how community gold is allocated.",
};

export default function TreasuryPage() {
  return <Treasury />;
}
