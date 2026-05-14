"use client";

import { Pet } from "@interfaces/pet";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import optimizingImage from "@utils/optimizeImage";

function imgUrl(url: string) {
  if (!url) return "";
  return url.includes("upload") ? optimizingImage(url) : url;
}

export default function TownPetCodex({
  petId,
  presentation = "page",
}: {
  petId: string;
  presentation?: "page" | "modal";
}) {
  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/pet/${petId}`, { cache: "no-store" });
        if (!res.ok) {
          if (!cancelled) setPet(null);
          return;
        }
        const data = await res.json();
        if (!cancelled) setPet(data);
      } catch {
        if (!cancelled) setPet(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [petId]);

  if (loading) {
    return (
      <div
        className={
          presentation === "modal"
            ? "flex min-h-[40vh] items-center justify-center bg-wood font-label-sm uppercase tracking-widest text-primary-container"
            : "flex min-h-[50vh] items-center justify-center bg-wood font-label-sm uppercase tracking-widest text-primary-container"
        }
      >
        Consulting the codex…
      </div>
    );
  }

  if (!pet) {
    return (
      <div className="mx-auto max-w-lg bg-wood px-4 py-16 text-center text-primary-container">
        <p className="font-headline-md text-white">This companion is not in the archives.</p>
        <Link
          href="/"
          className="mt-6 inline-block border-2 border-[#D4AF37] bg-secondary px-6 py-3 font-label-sm uppercase tracking-widest text-on-secondary"
        >
          Return to the square
        </Link>
      </div>
    );
  }

  const happiness = 92;
  const social = 75;
  const xpPct = 45;

  const Root = presentation === "modal" ? "div" : "main";

  return (
    <Root
      className={`mx-auto min-w-0 max-w-5xl bg-wood px-margin-mobile pb-8 text-on-surface md:px-margin-desktop ${
        presentation === "modal" ? "pt-14" : "pt-4"
      }`}
    >
      <section className="relative mb-12">
        <div className="relative overflow-hidden border-4 border-[#D4AF37] bg-primary-container p-2 shadow-xl">
          <div className="relative aspect-[16/9] overflow-hidden border-2 border-outline-variant">
            <Image
              src={imgUrl(pet.croppedImage)}
              alt={pet.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
            <div className="absolute right-4 top-4 flex flex-col gap-3">
              <div
                className="flex h-14 w-14 rotate-6 cursor-help items-center justify-center rounded-full border-2 border-[#D4AF37] bg-tertiary-fixed shadow-lg transition-transform hover:rotate-0"
                title="Master Trainer Certification"
              >
                <span
                  className="material-symbols-outlined text-on-tertiary-fixed"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  military_tech
                </span>
              </div>
              <div
                className="flex h-14 w-14 -rotate-6 cursor-help items-center justify-center rounded-full border-2 border-[#D4AF37] bg-secondary-fixed shadow-lg transition-transform hover:rotate-0"
                title="Behavioral Merit"
              >
                <span
                  className="material-symbols-outlined text-on-secondary-fixed"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2 border-2 border-[#D4AF37] bg-[#5D4037]/80 px-4 py-2 backdrop-blur">
              <div className="h-3 w-3 animate-pulse rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
              <span className="font-label-sm text-xs uppercase tracking-widest text-on-secondary">
                Available to Walk (Blue Spirit)
              </span>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-6 left-1/2 z-10 -translate-x-1/2 border-4 border-[#D4AF37] bg-wood px-8 py-2">
          <h2
            id="pet-codex-title"
            className="font-headline-md uppercase tracking-[0.2em] text-white"
          >
            {pet.name}
          </h2>
        </div>
      </section>

      <div className="mt-16 grid grid-cols-1 gap-gutter md:grid-cols-3">
        <div className="space-y-gutter md:col-span-2">
          <div className="relative overflow-hidden border-2 border-outline-variant bg-primary-container p-panel-padding shadow-inner">
            <div
              className="pointer-events-none absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(#7c776b 0.5px, transparent 0.5px)",
                backgroundSize: "10px 10px",
              }}
            />
            <h3 className="mb-6 flex items-center gap-2 font-label-sm uppercase text-on-primary-container">
              <span className="material-symbols-outlined text-primary">analytics</span>
              Companion Vitals
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-end justify-between">
                  <span className="font-label-sm uppercase text-on-surface-variant">
                    Happiness
                  </span>
                  <span className="font-label-sm text-secondary">{happiness}%</span>
                </div>
                <div className="h-4 border border-outline bg-wood p-[2px]">
                  <div
                    className="h-full border border-secondary bg-secondary-container"
                    style={{ width: `${happiness}%` }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-end justify-between">
                  <span className="font-label-sm uppercase text-on-surface-variant">
                    Social Synergy
                  </span>
                  <span className="font-label-sm text-tertiary">{social}%</span>
                </div>
                <div className="h-4 border border-outline bg-wood p-[2px]">
                  <div
                    className="h-full border border-tertiary bg-tertiary-container"
                    style={{ width: `${social}%` }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-end justify-between">
                  <span className="font-label-sm uppercase text-on-surface-variant">
                    Training XP (Lvl 14)
                  </span>
                  <span className="font-label-sm text-primary">450 / 1000</span>
                </div>
                <div className="h-4 border border-outline bg-wood p-[2px]">
                  <div
                    className="h-full border border-on-primary-container bg-primary"
                    style={{ width: `${xpPct}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-outline-variant bg-primary-container p-panel-padding">
            <h3 className="mb-6 flex items-center gap-2 font-label-sm uppercase text-on-primary-container">
              <span className="material-symbols-outlined text-primary">menu_book</span>
              Codex Entries
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <p className="font-label-sm text-xs uppercase text-outline">Breed</p>
                <p className="font-body-md font-bold text-on-surface">{pet.breed}</p>
              </div>
              <div>
                <p className="font-label-sm text-xs uppercase text-outline">Gender</p>
                <p className="font-body-md font-bold text-on-surface capitalize">
                  {pet.gender}
                </p>
              </div>
              <div>
                <p className="font-label-sm text-xs uppercase text-outline">Age</p>
                <p className="font-body-md font-bold text-on-surface">
                  {String(pet.age)} Seasons (Years)
                </p>
              </div>
              <div>
                <p className="font-label-sm text-xs uppercase text-outline">Colors</p>
                <p className="font-body-md font-bold text-on-surface">
                  {pet.primaryColor}
                </p>
              </div>
              <div className="col-span-2 border-t border-outline-variant pt-4">
                <p className="mb-2 font-label-sm text-xs uppercase text-outline">
                  Quest Description
                </p>
                <p className="font-body-md italic leading-relaxed text-on-surface-variant">
                  &quot;{pet.desc || "A noble companion whose tale is still being written."}
                  &quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-gutter">
          <div className="border-2 border-[#D4AF37] bg-secondary p-panel-padding text-on-secondary shadow-lg">
            <div className="flex flex-col items-center gap-3 text-center">
              <span
                className="material-symbols-outlined text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
              <div>
                <p className="mb-1 font-label-sm uppercase opacity-80">Current State</p>
                <p className="font-headline-md">VIGOROUS</p>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toast.info("Quest requests (playdates) coming soon.")}
            className="group flex w-full flex-col items-center gap-1 border-4 border-[#D4AF37] bg-secondary py-6 font-headline-md uppercase tracking-widest text-on-secondary shadow-lg transition-all hover:brightness-110 active:scale-95"
          >
            <span className="font-headline-md">Request Quest</span>
            <span className="font-label-sm opacity-70 group-hover:opacity-100">
              (Schedule Playdate)
            </span>
          </button>
          <div className="border-2 border-outline-variant bg-primary-container p-panel-padding">
            <p className="mb-4 font-label-sm uppercase text-outline">Equipped Loot</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                ["Alarm", "Magic Bandana"],
                ["toys", "Legendary Squeaker"],
                ["water_drop", "Endless Water Bowl"],
              ].map(([icon, title]) => (
                <div
                  key={title}
                  title={title}
                  className="group flex aspect-square cursor-pointer items-center justify-center border-2 border-outline-variant bg-[#4b463c]/10 transition-colors hover:bg-surface-variant"
                >
                  <span className="material-symbols-outlined text-outline group-hover:text-primary">
                    {icon}
                  </span>
                </div>
              ))}
              <div className="flex aspect-square items-center justify-center border-2 border-outline-variant bg-[#4b463c]/10">
                <span className="material-symbols-outlined text-outline/30">add</span>
              </div>
              <div className="flex aspect-square items-center justify-center border-2 border-outline-variant bg-[#4b463c]/10">
                <span className="material-symbols-outlined text-outline/30">lock</span>
              </div>
              <div className="flex aspect-square items-center justify-center border-2 border-outline-variant bg-[#4b463c]/10">
                <span className="material-symbols-outlined text-outline/30">lock</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
