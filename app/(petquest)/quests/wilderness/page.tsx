import type { Metadata } from "next";
import WildernessBriefingContent from "@components/familiarQuest/WildernessBriefingContent";

export const metadata: Metadata = {
  title: "Quest Briefing | Realm Quests",
  description: "Schedule your quest, pick companions, and embark.",
};

export default function WildernessQuestPage() {
  return <WildernessBriefingContent />;
}
