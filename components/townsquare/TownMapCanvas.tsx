"use client";

import Image from "next/image";
import Link from "next/link";

const MAP_ART =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBKGKjUb0HdA0fd0xl8BR77Kq1BKZFBV4IDQ4heqaggkbM_t5rO9AcPNo8OJX2OBb2lT8pyTC3fq5IKKZ-uhxaHrqTSIGUGcMer7jwsOlOAxDjTZd9GzwdYL0JFS42BUaKzzcAcaE-OFf4zEu5fFkTnC82j_z4XuBi_ucT1WO5peVMjvNp_Q9s_GW4B1DaEf3zXFUSSMZZocSrD1aV-lD1T6k8dxIwc_BBsXDnwpl9zjGtnmpru8LyxqetjwcOiqAYvzX1GRtyKfM9E";

const MARKER_PET =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD05SO1hSBkMSc-0tsN8R5l30idCLOCSdPM6q8lla2bp6xeayDzer4V5lihDq92KlDa2rveBj1V3mVQln5WS4Zsde6YVG_246ZCh_aYBqf8eKQ2nzRy6qhPtY4HZ47oe8jXFl_l9xsX7ZhHE10_ABNcYSnAVym4P-gRqOgJmrm7Q3t3CX3lrTIQqGpevlgpUtijGQmGmQKsr6if0d4g_v5jyn0aWK7hYvr6xXZ79kdlHZW05vBq8XqxVRmbiFm7vtRtAS80abGM_rmN";

const QUESTS = [
  {
    icon: "sports_baseball",
    title: "Fetch the Golden Ball",
    meta: "0.2 LEAGUES • +50 XP",
    box: "bg-tertiary-container text-on-tertiary-container",
  },
  {
    icon: "groups",
    title: "The Barking Chorus",
    meta: "0.5 LEAGUES • +100 XP",
    box: "bg-secondary-container text-on-secondary-container",
  },
];

export default function TownMapCanvas() {
  return (
    <main className="relative flex min-h-[calc(100dvh-8.5rem)] flex-col overflow-hidden bg-inverse-surface md:min-h-[calc(100dvh-9rem)]">
      <div className="absolute left-1/2 top-4 z-40 w-[90%] max-w-md -translate-x-1/2">
        <div className="relative flex items-center gap-2 overflow-hidden rounded-sm border-y-2 border-primary bg-[#fcf3d9] px-6 py-2 shadow-lg">
          <div className="absolute bottom-0 left-0 top-0 w-3 border-r border-primary/20 bg-primary/10" />
          <div className="absolute bottom-0 right-0 top-0 w-3 border-l border-primary/20 bg-primary/10" />
          <span className="material-symbols-outlined shrink-0 text-primary">search</span>
          <input
            className="w-full border-none bg-transparent font-label-sm text-xs uppercase tracking-widest text-primary placeholder:text-primary/40 focus:ring-0"
            placeholder="Province or Zip Code..."
            type="text"
            aria-label="Search by province or zip code"
          />
        </div>
      </div>

      <div className="relative mx-2 mt-14 min-h-[min(520px,calc(100dvh-12rem))] flex-1 md:mx-4">
        <div className="wood-frame-map parchment-texture-fine relative h-full min-h-[420px] overflow-hidden rounded-sm md:min-h-[480px]">
          <Image
            src={MAP_ART}
            alt=""
            fill
            className="object-cover opacity-40 grayscale sepia"
            sizes="100vw"
            priority
          />

          <div
            className="marker-bounce absolute left-[30%] top-[20%] z-20 flex flex-col items-center"
            style={{ animationDelay: "0s" }}
          >
            <div className="h-14 w-14 rounded-full border-4 border-primary bg-background p-0.5 shadow-xl ring-2 ring-tertiary/20">
              <Image
                src={MARKER_PET}
                alt="Sir Wag-a-lot"
                width={48}
                height={48}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div className="mt-1 rounded border border-primary/30 bg-tertiary px-3 py-0.5 text-xs font-bold uppercase text-on-tertiary shadow-md">
              Sir Wag-a-lot
            </div>
          </div>

          <div
            className="marker-bounce absolute right-[20%] top-[45%] z-20 flex flex-col items-center"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-primary bg-primary-container text-primary shadow-lg">
              <span
                className="material-symbols-outlined scale-110"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                temple_buddhist
              </span>
            </div>
            <div className="mt-1 rounded border border-primary bg-background/90 px-2 py-0.5 text-[9px] font-bold uppercase text-primary">
              St. Paws Shrine
            </div>
          </div>

          <div
            className="marker-bounce absolute bottom-[40%] left-[25%] z-20 flex flex-col items-center"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-primary-container bg-secondary text-on-secondary shadow-lg">
              <span className="material-symbols-outlined">exercise</span>
            </div>
            <div className="mt-1 rounded bg-secondary/90 px-2 py-0.5 text-[9px] font-bold uppercase text-on-secondary">
              Wolf Run Field
            </div>
          </div>

          <Link
            href="/quests/bounty-board"
            className="marker-bounce absolute right-[40%] top-[35%] z-20 flex flex-col items-center"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-container bg-tertiary text-on-tertiary shadow-xl">
              <span className="material-symbols-outlined animate-pulse text-3xl">star</span>
            </div>
            <div className="mt-1 rounded bg-tertiary px-2 py-0.5 text-[9px] font-bold uppercase text-on-tertiary">
              Great Hunt
            </div>
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-4 left-margin-mobile right-margin-mobile z-40 md:left-margin-desktop md:right-margin-desktop">
        <div className="pointer-events-auto rounded-xl border-4 border-primary bg-primary-container shadow-2xl">
          <div className="flex items-center justify-between border-b border-primary/20 px-4 py-2">
            <h2 className="flex items-center gap-2 font-headline-md text-[12px] uppercase tracking-widest text-primary">
              <span className="material-symbols-outlined text-sm">scroll</span>
              Active Quests Nearby
            </h2>
            <span className="material-symbols-outlined text-primary">keyboard_arrow_up</span>
          </div>
          <div className="scrollbar-hide flex gap-3 overflow-x-auto p-3">
            {QUESTS.map((q) => (
              <div
                key={q.title}
                className="flex min-w-[220px] shrink-0 items-center gap-3 rounded-lg border-2 border-outline/30 bg-[#fcf3d9] p-3 shadow-sm"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded border border-primary/20 ${q.box}`}
                >
                  <span className="material-symbols-outlined">{q.icon}</span>
                </div>
                <div className="min-w-0 overflow-hidden">
                  <p className="truncate text-[11px] font-bold uppercase text-primary">
                    {q.title}
                  </p>
                  <p className="font-label-sm text-xs text-on-surface-variant">{q.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
