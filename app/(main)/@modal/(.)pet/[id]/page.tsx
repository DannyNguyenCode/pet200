import PetCodexModal from "@components/townsquare/PetCodexModal";

export default function PetCodexInterceptedPage({
  params,
}: {
  params: { id: string };
}) {
  return <PetCodexModal petId={params.id} />;
}
