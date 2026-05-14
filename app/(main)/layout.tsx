import TownSquareAppShell from "@components/townsquare/TownSquareAppShell";

export default function MainLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <TownSquareAppShell>
      {children}
      {modal}
    </TownSquareAppShell>
  );
}
