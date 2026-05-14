"use client";

import { Pet } from "@interfaces/pet";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import optimizingImage from "@utils/optimizeImage";

function imgUrl(url: string) {
  if (!url) return "";
  return url.includes("upload") ? optimizingImage(url) : url;
}

function pseudoLevel(id: string | number) {
  const s = String(id);
  let n = 0;
  for (let i = 0; i < s.length; i++) n += s.charCodeAt(i);
  return (n % 45) + 1;
}

function staminaPct(id: string | number) {
  const s = String(id);
  let n = 0;
  for (let i = 0; i < s.length; i++) n += s.charCodeAt(i);
  const p = (n % 90) + 10;
  return p >= 85 ? 100 : p;
}

const FEED = [
  {
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAltCVkhUbOO74r7dxvoJyCpXPEUH3EqyyeLktDmS2tlc8KM4rdkbkKqCimh4n0FNzOiL6Qi50IdMiNNLagrzfz27t4rhQT8aq0mazeG2cNzoSyNq48AYi8Jc7UsPhh530PhkQPyYkL2lt7_V5pjVmlJXlO3CW6t5IMLnQtUpUF3E3h_Ptcj27pJyUrLqzo9lgLmR1ErdvEvaLgXTFNYODpwwkOdzz_NOqe4sdJtxOSpLbGa_3QXFnHq74QBTQaUXWmaV0d8MXrDkX2",
    title: (
      <>
        <strong>Oliver</strong> completed the{" "}
        <span className="font-bold text-secondary">&quot;Riverside Patrol&quot;</span>{" "}
        quest!
      </>
    ),
    sub: '+200 XP gained • Found a "Squeaky Orb of Silence"',
    meta: "2 minutes ago via Map",
  },
  {
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBY5ncmCwvjKu4U4ECdUWSms8BIU81i9vyTpJ-iwkzEgK7Z8Uul18j3PYsN64rl4yG69DxxbHdAsq4BB2HlzySVnIm7igKMgQyH-Q62ne3cJmt2vd73ZZ86a3Tv1PjF-DFt4pxFk_pzLtGN6XsiQkVhCLFtfst52wNBrrBQp6cgJAz0Vu0QMCzTsZBfb7rdh2g3kPoRiWuy6JLutNdEN5oZPQ12AjOpFwsf4AJBZ625hCUVZ8OUtep8fIHf2JftUYQAEfBY8GE9pbYO",
    title: (
      <>
        <strong>Mochi</strong> has ascended to{" "}
        <span className="font-bold text-tertiary">Level 10: Grand Sniffer</span>!
      </>
    ),
    sub: 'Unlocked Skill: "Find Hidden Treats"',
    meta: "15 minutes ago",
  },
];

const RESCUE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCCpf2TWfC5R0SKFlmK6jpkI_5eH1XPzFFTW5vhaRHjCl6OlOnEygsjwkWZE5cX8qUfPaWorI1NzNfI4wHnkNrAlmXi9286BCcV2OPM5XpxPD52N_AhWLsklJy6TPpM45aNjT5UKjeWLTbnG1MKS6pHMi73aXjDl2doG_iHmcU10fInPWw7Z79jhUwb0bVTMFobryUKc2ygFr0-xuNlW4Ew4UADmuTNCPtpZWqxXB5AyZ6IVc6oAvAHc4TY0DeTloTuCkU89tZaxYSL";

export default function TownHome() {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/pet", { cache: "no-store" });
        const data: Pet[] = await res.json();
        setPets(data);
      } catch {
        setPets([]);
      }
    };
    load();
  }, []);

  const featured = pets.slice(0, 3);

  return (
    <main className="mx-auto min-w-0 max-w-7xl space-y-10 px-margin-mobile pb-8 pt-4 sm:space-y-12 md:px-margin-desktop">
      <section className="mt-4">
        <div className="wood-frame parchment-texture relative rounded-lg p-4 sm:p-6">
          <div className="absolute -top-4 left-1/2 z-10 max-w-[calc(100vw-2.5rem)] -translate-x-1/2 rounded-full border-2 border-[#D4AF37] bg-wood px-3 py-1 text-center font-headline-md text-xs uppercase leading-tight tracking-widest text-primary-container sm:max-w-none sm:px-6">
            Featured Companions Board
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featured.length === 0 ? (
              <div className="col-span-full rounded-lg border-2 border-outline-variant bg-white/50 p-8 text-center">
                <p className="font-body-lg text-on-surface">
                  The board is quiet… be the first to post a companion in the realm.
                </p>
                <Link
                  href="/register"
                  className="mt-4 inline-block rounded-lg border-2 border-[#D4AF37] bg-secondary px-6 py-3 font-headline-md uppercase tracking-widest text-on-secondary hover:brightness-110"
                >
                  Join the square
                </Link>
              </div>
            ) : (
              featured.map((pet) => {
                const lvl = pseudoLevel(pet._id);
                const st = staminaPct(pet._id);
                const tired = st < 30;
                return (
                  <Link
                    key={String(pet._id)}
                    href={`/pet/${pet._id}`}
                    scroll={false}
                    className="group rounded-lg border-2 border-outline-variant bg-white/50 p-4 transition-all hover:border-[#D4AF37]"
                  >
                    <div className="relative mb-4">
                      <Image
                        src={imgUrl(pet.croppedImage)}
                        alt={pet.name}
                        width={400}
                        height={192}
                        className="h-48 w-full rounded-lg border-2 border-[#D4AF37] object-cover transition-transform group-hover:scale-105"
                      />
                      <span className="absolute right-2 top-2 rounded border-2 border-[#D4AF37] bg-tertiary px-2 py-1 font-label-sm text-on-tertiary">
                        LVL {lvl}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-headline-md text-primary">{pet.name}</h3>
                      {tired ? (
                        <span
                          className="h-3 w-3 rounded-full bg-error"
                          title="Tuckered out"
                        />
                      ) : (
                        <span className="mana-orb" title="Available" />
                      )}
                    </div>
                    <p className="font-label-sm italic text-on-surface-variant">
                      &quot;{pet.breed}&quot;
                    </p>
                    <div className="mt-4 flex gap-2">
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-outline-variant">
                        <div
                          className={`h-full ${tired ? "bg-error" : "bg-secondary"}`}
                          style={{ width: `${st}%` }}
                        />
                      </div>
                      <span className="font-label-sm text-xs">STAMINA</span>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </section>

      {pets.length > 3 && (
        <section>
          <h2 className="mb-4 font-headline-md text-primary">
            More companions in the realm
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {pets.slice(3).map((pet) => (
              <Link
                key={String(pet._id)}
                href={`/pet/${pet._id}`}
                scroll={false}
                className="overflow-hidden rounded-lg border-2 border-outline-variant bg-primary-container transition-colors hover:border-[#D4AF37]"
              >
                <Image
                  src={imgUrl(pet.croppedImage)}
                  alt=""
                  width={200}
                  height={120}
                  className="h-28 w-full object-cover"
                />
                <p className="p-2 font-label-sm uppercase text-on-surface">
                  {pet.name}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="flex justify-center px-0">
        <div className="relative w-full min-w-0 max-w-2xl">
          <div className="inner-bevel flex items-center gap-2 rounded-3xl border-x-4 border-y-6 border-wood px-4 py-3 parchment-texture sm:gap-4 sm:border-x-[12px] sm:border-y-8 sm:px-6 md:border-x-[16px] md:px-8">
            <span className="material-symbols-outlined shrink-0 scale-110 text-primary sm:scale-125">
              search
            </span>
            <input
              className="min-w-0 flex-1 border-none bg-transparent font-label-sm text-base italic text-primary placeholder:text-outline focus:ring-0 sm:text-lg"
              placeholder="Enter Postal Code to Scry Nearby Quests..."
              type="text"
              readOnly
            />
            <span className="material-symbols-outlined shrink-0 text-primary">
              auto_fix_high
            </span>
          </div>
          <div className="absolute bottom-0 left-0 top-0 w-4 rounded-l-full bg-[#4e342e] max-md:hidden" />
          <div className="absolute bottom-0 right-0 top-0 w-4 rounded-r-full bg-[#4e342e] max-md:hidden" />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
        <Link
          href="/quests/bounty-board"
          className="stone-button flex min-h-[4.5rem] items-center justify-center gap-2 rounded-lg px-2 text-center font-headline-md text-headline-md-mobile text-on-primary transition-all hover:brightness-110 sm:gap-3 sm:text-headline-md"
        >
          <span className="material-symbols-outlined shrink-0">groups</span>
          <span className="leading-snug">Find Playmates</span>
        </Link>
        <Link
          href="/map"
          className="stone-button flex min-h-[4.5rem] items-center justify-center gap-2 rounded-lg px-2 text-center font-headline-md text-headline-md-mobile text-on-primary transition-all hover:brightness-110 sm:gap-3 sm:text-headline-md"
        >
          <span className="material-symbols-outlined shrink-0">select_all</span>
          <span className="leading-snug">Set Up Walk</span>
        </Link>
        <Link
          href="/quests/treasury"
          className="stone-button flex min-h-[4.5rem] items-center justify-center gap-2 rounded-lg px-2 text-center font-headline-md text-headline-md-mobile text-on-primary transition-all hover:brightness-110 sm:gap-3 sm:text-headline-md"
        >
          <span className="material-symbols-outlined shrink-0">volunteer_activism</span>
          <span className="leading-snug">Support Shelters</span>
        </Link>
      </section>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <section className="space-y-6 lg:col-span-2">
          <h2 className="flex items-center gap-2 font-headline-md text-primary">
            <span className="material-symbols-outlined">history_edu</span>
            Community Chronicles
          </h2>
          <div className="space-y-4">
            {FEED.map((item, i) => (
              <div
                key={i}
                className="inner-bevel flex flex-col gap-4 rounded-lg border-2 border-[#D4AF37] p-4 parchment-texture sm:flex-row sm:gap-6 sm:p-6"
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={64}
                  height={64}
                  className="mx-auto h-16 w-16 shrink-0 rounded border-2 border-primary bg-white/30 sm:mx-0"
                />
                <div className="min-w-0 flex-1 text-center sm:text-left">
                  <p className="break-words font-body-lg text-on-surface">{item.title}</p>
                  <p className="mt-1 break-words font-label-sm text-on-surface-variant">{item.sub}</p>
                  <div className="mt-2 font-label-sm text-xs uppercase text-outline">
                    {item.meta}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="flex items-center gap-2 font-headline-md text-primary">
            <span className="material-symbols-outlined">favorite</span>
            Seeking a Party Member
          </h2>
          <div className="wood-frame rounded-xl p-1">
            <div className="flex h-full flex-col overflow-hidden rounded-lg parchment-texture">
              <Image
                src={RESCUE_IMG}
                alt=""
                width={400}
                height={256}
                className="h-64 w-full border-b-4 border-wood object-cover"
              />
              <div className="flex-1 p-4">
                <h3 className="mb-1 font-headline-md text-primary">Barnaby</h3>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-primary bg-primary-container px-2 py-0.5 font-label-sm text-xs uppercase text-primary">
                    Paladin Class
                  </span>
                  <span className="rounded-full border border-secondary bg-secondary-container px-2 py-0.5 font-label-sm text-xs uppercase text-secondary">
                    3 Years Old
                  </span>
                </div>
                <p className="mb-6 text-body-md italic leading-snug text-on-surface-variant">
                  &quot;A loyal companion with a heart of gold, Barnaby is looking for a
                  brave adventurer to lead him on his forever quest.&quot;
                </p>
                <button
                  type="button"
                  className="w-full rounded-lg border-2 border-[#D4AF37] bg-secondary py-3 font-headline-md uppercase tracking-widest text-on-secondary transition-all hover:brightness-110 active:translate-y-1"
                >
                  Adopt Companion
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="grid grid-cols-2 gap-4 py-4 md:grid-cols-4">
        {[
          ["1,200", "Quests Completed"],
          ["450", "Treats Shared"],
          ["89", "Active Guilds"],
          ["5.2k", "Gold Donated"],
        ].map(([n, l]) => (
          <div
            key={l}
            className="rounded-lg border-2 border-outline-variant bg-white/30 p-4 text-center"
          >
            <div className="font-display-lg-mobile text-primary md:font-display-lg">
              {n}
            </div>
            <div className="font-label-sm uppercase tracking-widest text-on-surface-variant">
              {l}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
