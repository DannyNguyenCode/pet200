import DogParkRestore from "@components/petquest/DogParkRestore";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restore the East District Dog Park | PetQuest Online",
  description:
    "Community quest to restore the East District dog park in Portland, Oregon.",
};

export default function DogParkPage() {
  return <DogParkRestore />;
}
