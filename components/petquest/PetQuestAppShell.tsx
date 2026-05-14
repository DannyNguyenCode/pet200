"use client";

export default function PetQuestAppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex-1 pb-4">{children}</div>
    </div>
  );
}
