import type { Metadata } from "next";
import QuestLogContent from "@components/familiarQuest/QuestLogContent";

export const metadata: Metadata = {
  title: "Familiar Quest Log | Realm Quests",
  description: "Your adventures and the quest board.",
};

export default function FamiliarQuestLogPage() {
  return <QuestLogContent />;
}
