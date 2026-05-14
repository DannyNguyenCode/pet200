import TownPetCodex from "@components/townsquare/TownPetCodex";

export default function PetCodexPage({
  params,
}: {
  params: { id: string };
}) {
  return <TownPetCodex petId={params.id} presentation="page" />;
}
