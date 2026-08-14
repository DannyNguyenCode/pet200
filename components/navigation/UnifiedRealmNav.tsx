"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";

type NavItem = {
  href: string;
  label: string;
  icon: string;
  isActive: (pathname: string) => boolean;
};

/** One row: Square → … → Royal Treasury. Order matches product flow. */
const LINKS: NavItem[] = [
  { href: "/", label: "The Square", icon: "home", isActive: (p) => p === "/" },
  {
    href: "/map",
    label: "Realm Map",
    icon: "map",
    isActive: (p) => p === "/map",
  },
  {
    href: "/marketplace",
    label: "Marketplace",
    icon: "storefront",
    isActive: (p) => p.startsWith("/marketplace"),
  },
  {
    href: "/quests/familiar-log",
    label: "Familiar",
    icon: "pets",
    isActive: (p) => p.startsWith("/quests/familiar-log"),
  },
  {
    href: "/quests/wilderness",
    label: "Quest Briefing",
    icon: "swords",
    isActive: (p) => p.startsWith("/quests/wilderness"),
  },
  {
    href: "/quests/bounty-board",
    label: "Community Board",
    icon: "assignment",
    isActive: (p) => p.startsWith("/quests/bounty-board"),
  },
  {
    href: "/quests/dog-park",
    label: "Active Quest",
    icon: "explore",
    isActive: (p) => p.startsWith("/quests/dog-park"),
  },
  {
    href: "/quests/hall-of-heroes",
    label: "Grand Archive",
    icon: "menu_book",
    isActive: (p) => p.startsWith("/quests/hall-of-heroes"),
  },
  {
    href: "/quests/treasury",
    label: "Royal Treasury",
    icon: "account_balance",
    isActive: (p) => p.startsWith("/quests/treasury"),
  },
];

function pill(active: boolean) {
  return active
    ? "flex shrink-0 items-center gap-1.5 rounded-lg border-2 border-primary-container bg-tertiary px-2 py-2 font-label-sm text-on-tertiary sm:px-2.5 text-label-sm"
    : "flex shrink-0 items-center gap-1.5 rounded-lg border-2 border-transparent px-2 py-2 font-label-sm text-on-secondary opacity-80 transition-colors hover:bg-tertiary-container hover:text-on-tertiary-container sm:px-2.5 text-label-sm";
}

function drawerRow(active: boolean) {
  return active
    ? "flex items-center gap-3 border-b border-tertiary-container/25 bg-tertiary px-4 py-3.5 text-on-tertiary"
    : "flex items-center gap-3 border-b border-tertiary-container/25 px-4 py-3.5 text-on-secondary transition-colors hover:bg-tertiary-container/40 hover:text-on-tertiary-container";
}

export default function UnifiedRealmNav() {
  const pathname = usePathname();
  const [openPathname, setOpenPathname] = useState<string | null>(null);
  const open = openPathname === pathname;
  const drawerId = useId();

  const close = useCallback(() => setOpenPathname(null), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) close();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [close]);

  return (
    <>
      <nav
        aria-label="Realm"
        className="fixed left-0 right-0 top-16 z-40 min-w-0 border-b-4 border-tertiary bg-secondary shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:px-margin-desktop"
      >
        <div className="mx-auto flex max-w-[100rem] items-center md:px-0">
          <div className="flex w-full items-center px-2 py-2 md:hidden">
            <button
              type="button"
              className="flex min-h-11 min-w-11 items-center gap-2 rounded-lg px-3 py-2 text-on-secondary transition-colors hover:bg-tertiary-container hover:text-on-tertiary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-secondary"
              aria-expanded={open}
              aria-controls={drawerId}
              onClick={() => setOpenPathname(pathname)}
            >
              <span className="material-symbols-outlined text-2xl" aria-hidden>
                menu
              </span>
              <span className="text-sm font-semibold uppercase tracking-wide">Menu</span>
            </button>
          </div>

          <div className="scrollbar-hide hidden w-full gap-1 overflow-x-auto px-2 py-2.5 md:flex md:gap-1.5">
            {LINKS.map(({ href, label, icon, isActive }) => {
              const active = isActive(pathname);
              return (
                <Link key={href} href={href} className={pill(active)} title={label}>
                  <span
                    className="material-symbols-outlined shrink-0 text-[17px] sm:text-[19px]"
                    style={
                      active ? { fontVariationSettings: "'FILL' 1" } : undefined
                    }
                    aria-hidden
                  >
                    {icon}
                  </span>
                  <span className="max-w-[8.5rem] truncate sm:max-w-none sm:whitespace-nowrap">
                    {label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {open ? (
        <div className="md:hidden">
          <button
            type="button"
            className="fixed inset-0 top-16 z-[90] bg-inverse-surface/60 backdrop-blur-sm"
            aria-label="Close realm menu"
            onClick={close}
          />
          <div
            id={drawerId}
            role="dialog"
            aria-modal="true"
            aria-label="Realm navigation"
            className="fixed bottom-0 left-0 top-16 z-[100] flex w-[min(22rem,88vw)] flex-col border-r-4 border-tertiary bg-secondary shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-tertiary-container/30 px-3 py-3">
              <span className="font-headline-md text-sm uppercase tracking-wide text-on-secondary">
                Realm
              </span>
              <button
                type="button"
                onClick={close}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-on-secondary transition-colors hover:bg-tertiary-container hover:text-on-tertiary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-secondary"
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined" aria-hidden>
                  close
                </span>
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain py-1">
              {LINKS.map(({ href, label, icon, isActive }) => {
                const active = isActive(pathname);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={drawerRow(active)}
                    aria-current={active ? "page" : undefined}
                    onClick={close}
                  >
                    <span
                      className="material-symbols-outlined shrink-0 text-[22px]"
                      style={
                        active ? { fontVariationSettings: "'FILL' 1" } : undefined
                      }
                      aria-hidden
                    >
                      {icon}
                    </span>
                    <span className="text-sm font-semibold leading-snug">{label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
