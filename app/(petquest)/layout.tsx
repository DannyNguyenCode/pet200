import PetQuestAppShell from "@components/petquest/PetQuestAppShell";

export default function PetQuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PetQuestAppShell>{children}</PetQuestAppShell>;
}
