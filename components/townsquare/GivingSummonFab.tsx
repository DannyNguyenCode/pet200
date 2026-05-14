"use client";

import type { CSSProperties } from "react";
import Link from "next/link";

const HEART_PARTICLES: { dx: string; dy: string; rot: string; delay: string }[] = [
  { dx: "-72px", dy: "-88px", rot: "-25deg", delay: "0ms" },
  { dx: "68px", dy: "-76px", rot: "18deg", delay: "35ms" },
  { dx: "-48px", dy: "-100px", rot: "12deg", delay: "70ms" },
  { dx: "84px", dy: "-52px", rot: "-15deg", delay: "20ms" },
  { dx: "-90px", dy: "-40px", rot: "22deg", delay: "90ms" },
  { dx: "40px", dy: "-96px", rot: "-8deg", delay: "50ms" },
  { dx: "-24px", dy: "-108px", rot: "30deg", delay: "10ms" },
  { dx: "96px", dy: "-28px", rot: "-20deg", delay: "100ms" },
  { dx: "-64px", dy: "-64px", rot: "8deg", delay: "60ms" },
  { dx: "56px", dy: "-84px", rot: "-12deg", delay: "40ms" },
  { dx: "0px", dy: "-112px", rot: "0deg", delay: "25ms" },
  { dx: "-100px", dy: "-20px", rot: "35deg", delay: "80ms" },
  { dx: "76px", dy: "-68px", rot: "-30deg", delay: "15ms" },
  { dx: "-36px", dy: "-92px", rot: "-5deg", delay: "55ms" },
  { dx: "28px", dy: "-104px", rot: "16deg", delay: "75ms" },
  { dx: "-80px", dy: "-56px", rot: "-18deg", delay: "45ms" },
  { dx: "92px", dy: "-44px", rot: "10deg", delay: "30ms" },
  { dx: "-12px", dy: "-118px", rot: "-22deg", delay: "65ms" },
];

export default function GivingSummonFab() {
  return (
    <Link
      href="/quests/dog-park"
      title="Donate your heart — join the Active Quest"
      aria-label="Donate your heart and open the Active Quest"
      className="group giving-fab-morph fixed bottom-6 right-6 z-40 flex h-16 min-h-16 min-w-16 w-16 items-center justify-center overflow-visible rounded-full border-2 border-[#D4AF37] bg-tertiary text-on-tertiary shadow-lg transition-[width,min-width,border-radius,transform,filter] duration-300 ease-out hover:w-44 hover:rounded-xl hover:px-4 hover:brightness-105 focus-visible:w-44 focus-visible:rounded-xl focus-visible:px-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.97] md:bottom-8"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-px w-px -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      >
        {HEART_PARTICLES.map((p, i) => (
          <span
            key={i}
            className="giving-fab-heart material-symbols-outlined absolute left-1/2 top-1/2 text-lg text-on-tertiary"
            style={
              {
                "--dx": p.dx,
                "--dy": p.dy,
                "--rot": p.rot,
                animationDelay: p.delay,
                fontVariationSettings: "'FILL' 1",
              } as CSSProperties
            }
          >
            favorite
          </span>
        ))}
      </div>

      <span
        className="material-symbols-outlined relative z-10 text-4xl transition-all duration-300 group-hover:pointer-events-none group-hover:scale-50 group-hover:opacity-0 group-focus-within:scale-50 group-focus-within:opacity-0"
        style={{ fontVariationSettings: "'FILL' 1, 'wght' 500" }}
        aria-hidden
      >
        volunteer_activism
      </span>

      <span className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center gap-1.5 px-2 font-label-sm font-bold uppercase tracking-wider text-label-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
        <span
          className="material-symbols-outlined text-[22px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          favorite
        </span>
        Donate
      </span>
    </Link>
  );
}
