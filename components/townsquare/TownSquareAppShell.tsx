"use client";

import { usePathname } from "next/navigation";

import GivingSummonFab from "./GivingSummonFab";

export default function TownSquareAppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showFab = pathname === "/";

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex-1 pb-4">{children}</div>

      {showFab && <GivingSummonFab />}
    </div>
  );
}
