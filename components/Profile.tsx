"use client";

import { Pet } from "@interfaces/pet";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import optimizingImage from "@utils/optimizeImage";

function imgUrl(url: string) {
  if (!url) return "";
  return url.includes("upload") ? optimizingImage(url) : url;
}

function staminaPct(id: string | number) {
  const s = String(id);
  let n = 0;
  for (let i = 0; i < s.length; i++) n += s.charCodeAt(i);
  return (n % 85) + 15;
}

const REPUTATION_REVIEWS = [
  {
    name: "Mistress Meow",
    accent: "secondary" as const,
    quote:
      "Barnaby is a legendary walking partner! Very calm and followed every command. 5/5 Stars",
  },
  {
    name: "Sir Barksalot",
    accent: "primary" as const,
    quote: "Perfect energy for a park session. Great social skills. 5/5 Stars",
  },
];

const PERSONALITY_STATS: {
  label: string;
  level: string;
  pct: number;
  barClass: string;
}[] = [
  { label: "Friendliness", level: "Lvl 18", pct: 75, barClass: "bg-secondary" },
  { label: "Energy", level: "Lvl 22", pct: 90, barClass: "bg-tertiary" },
  { label: "Playfulness", level: "Lvl 15", pct: 60, barClass: "bg-primary" },
  { label: "Walk Behavior", level: "Lvl 12", pct: 45, barClass: "bg-outline" },
];

function StarRow({ sizeClass, count = 5 }: { sizeClass: string; count?: number }) {
  return (
    <div className="mt-2 flex gap-0.5" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`material-symbols-outlined text-tertiary ${sizeClass}`}
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      ))}
    </div>
  );
}

function RatingSummaryStars() {
  return (
    <div className="mt-1 flex flex-wrap items-center gap-0.5" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="material-symbols-outlined text-sm text-tertiary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      ))}
      <span
        className="material-symbols-outlined text-sm text-tertiary"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        star_half
      </span>
    </div>
  );
}

const HERO_AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDg5Npip3asfekQgAls-ReF8SUvpi5aWUHL9B9AJGlF9EXVCWCPORzhfOtmG2BmnMGQ0-Al_Z-LAL8hVgK3bXfpjKOXUtMjxSjDEV9iw91ki9F4zUqxKqc0QtdhYXs1WMwA_-Qcc4nbClbmcTbIK0b_dnKEdkhafb62hfsRgY3RFj3CFqqXNUhpVuKgabYQ_6ATX2SmuYZjY_mQOY-sE7w0LV-TUMO8B6Ss941qkzvp0I3NZ_vSr_kIkzyYvwvw2v1FqSZVxVjNj7Se";

export default function Profile({
  pets,
  message,
}: {
  pets: Pet[];
  message?: string[];
}) {
  const { data: session } = useSession();

  useEffect(() => {
    if (message?.[0] === "SLI") {
      toast("Successfully Logged In");
    }
  }, [message]);

  const displayName = session?.user?.name || "Sir Reginald of Suburbia";
  const avatar = (session?.user?.image as string) || HERO_AVATAR;

  return (
    <div className="bg-inverse-surface font-body-md text-on-surface-variant">
      <ToastContainer theme="dark" />
      <main className="mx-auto mb-10 max-w-5xl min-w-0 px-margin-mobile pt-4 md:mb-12 md:px-margin-desktop">
        <section className="wood-border parchment-texture relative mb-8 flex flex-col items-center gap-8 p-4 sm:p-6 md:flex-row">
          <div className="group relative shrink-0">
            <div className="gold-frame relative h-32 w-32 overflow-hidden bg-surface-container-highest md:h-48 md:w-48">
              <Image
                src={avatar}
                alt=""
                fill
                className="object-cover"
                sizes="192px"
                unoptimized={Boolean(session?.user?.image)}
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 z-10 max-w-[min(100%,18rem)] -translate-x-1/2 border-2 border-[#D4AF37] bg-secondary px-3 py-1 text-center font-label-sm uppercase leading-tight text-on-secondary sm:whitespace-nowrap sm:px-4">
              Lvl 20 Pet Parent
            </div>
          </div>
          <div className="min-w-0 flex-1 text-center md:text-left">
            <h2 className="mb-2 break-words font-display-lg-mobile text-on-surface md:font-display-lg">
              {displayName}
            </h2>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:items-start md:justify-start">
              <div className="flex items-center gap-2">
                <div className="mana-orb-lg h-4 w-4 shrink-0 rounded-full" />
                <span className="font-label-sm uppercase">Mana: Full</span>
              </div>
              <div className="flex max-w-full items-start gap-2 sm:items-center">
                <span className="material-symbols-outlined shrink-0 text-primary">
                  location_on
                </span>
                <span className="break-words text-left font-label-sm uppercase tracking-wide text-on-surface sm:tracking-widest">
                  The Whispering Woods (Portland, OR)
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="space-y-8 md:col-span-7">
            <section className="wood-border parchment-texture relative p-panel-padding">
              <div className="absolute -top-4 left-6 bg-primary px-3 py-1 font-label-sm uppercase text-on-primary">
                About the Hero
              </div>
              <p className="mt-2 font-body-lg leading-relaxed text-on-surface">
                Guardian of furry companions and seeker of the legendary
                &quot;Hidden Tennis Ball.&quot; I have spent my years mastering the art of
                the 6:00 AM walk and the ancient technique of &quot;Perfect Ear
                Scratches.&quot; Currently on a quest to visit every dog-friendly tavern
                in the realm.
              </p>
            </section>

            <section className="wood-border parchment-texture relative p-panel-padding">
              <div className="absolute -top-4 left-6 bg-primary px-3 py-1 font-label-sm uppercase text-on-primary">
                Deeds &amp; Valor
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-6">
                {[
                  ["wb_sunny", "Early Bird: 100 Sunrise Walks", "text-tertiary"],
                  ["pets", "Beast Tamer: 3 Pets Max Lvl", "text-secondary"],
                  ["verified_user", "Steward of the Realm: 50 Reviews", "text-primary"],
                  ["directions_run", "Marathoner: 500 Miles Walked", "text-error"],
                ].map(([icon, title, cls]) => (
                  <div
                    key={title}
                    title={title}
                    className="inner-bevel-deep flex aspect-square cursor-help items-center justify-center bg-surface-container group"
                  >
                    <span className={`material-symbols-outlined text-3xl ${cls}`}>
                      {icon}
                    </span>
                  </div>
                ))}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="inner-bevel-deep aspect-square bg-surface-container-low opacity-40"
                  />
                ))}
              </div>
            </section>

            <section className="wood-border parchment-texture relative space-y-8 p-panel-padding">
              <div className="absolute -top-4 left-6 bg-secondary px-3 py-1 font-label-sm uppercase text-on-secondary">
                Reputation Rank
              </div>

              <div className="mt-4 flex flex-col items-start justify-between gap-4 border-2 border-primary bg-primary-container p-4 sm:flex-row sm:items-center">
                <div className="min-w-0">
                  <h3 className="font-headline-md text-primary text-headline-md">
                    Trusted Adventurer
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <RatingSummaryStars />
                    <span className="font-label-sm text-on-primary-container text-label-sm">
                      4.9/5 (48 reviews)
                    </span>
                  </div>
                </div>
                <div className="w-full text-left sm:w-auto sm:text-right">
                  <div className="font-label-sm uppercase text-primary text-label-sm">
                    Community trust
                  </div>
                  <div className="font-display-lg-mobile text-secondary md:font-display-lg md:text-display-lg">
                    98%
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  ["32", "Playdates"],
                  ["15", "Walks"],
                  ["2", "Certs"],
                ].map(([n, l]) => (
                  <div
                    key={l}
                    className="inner-bevel border border-outline-variant bg-surface-container p-3 text-center"
                  >
                    <div className="text-2xl font-bold text-primary">{n}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
                      {l}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="border-b border-outline-variant pb-1 font-label-sm uppercase text-on-surface text-label-sm">
                  Personality stats
                </h4>
                <div className="space-y-3">
                  {PERSONALITY_STATS.map((row) => (
                    <div key={row.label} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold uppercase text-on-surface">
                        <span>{row.label}</span>
                        <span className="text-on-surface-variant">{row.level}</span>
                      </div>
                      <div className="inner-bevel h-3 overflow-hidden bg-surface-container-high">
                        <div
                          className={`h-full ${row.barClass}`}
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-outline-variant bg-surface-container p-4">
                <div className="mb-2 flex flex-wrap items-end justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
                    Path to legendary companion
                  </span>
                  <span className="font-label-sm text-secondary text-label-sm">850 / 1000 XP</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-surface-container-highest">
                  <div
                    className="h-full bg-gradient-to-r from-secondary to-tertiary"
                    style={{ width: "85%" }}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="flex items-center gap-2 font-label-sm uppercase text-on-surface text-label-sm">
                  <span className="material-symbols-outlined text-base text-primary" aria-hidden>
                    history_edu
                  </span>
                  Community quest logs
                </h4>
                {REPUTATION_REVIEWS.map((r) => {
                  const border =
                    r.accent === "secondary"
                      ? "border-l-4 border-secondary"
                      : "border-l-4 border-primary";
                  const badgeBg =
                    r.accent === "secondary" ? "bg-secondary/10" : "bg-primary/10";
                  const badgeText =
                    r.accent === "secondary" ? "text-secondary" : "text-primary";
                  return (
                    <div
                      key={r.name}
                      className={`relative bg-[#FFF8E1] p-4 shadow-sm ${border}`}
                    >
                      <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex min-w-0 items-center gap-2">
                          <span className="truncate font-headline-md text-sm text-on-surface">
                            {r.name}
                          </span>
                          <span
                            className="material-symbols-outlined shrink-0 text-xs text-secondary"
                            title="Trusted member"
                            aria-label="Trusted member"
                          >
                            verified
                          </span>
                        </div>
                        <div
                          className={`flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 ${badgeBg}`}
                        >
                          <span
                            className={`material-symbols-outlined text-[12px] ${badgeText}`}
                            aria-hidden
                          >
                            workspace_premium
                          </span>
                          <span className={`text-xs font-bold uppercase ${badgeText}`}>
                            Verified quest
                          </span>
                        </div>
                      </div>
                      <p className="text-sm italic leading-relaxed text-on-surface-variant">
                        &quot;{r.quote}&quot;
                      </p>
                      <StarRow sizeClass="text-xs" />
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap justify-center gap-6 border-t border-outline-variant pt-4 opacity-80 sm:gap-8">
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-3xl text-secondary" aria-hidden>
                    verified_user
                  </span>
                  <span className="text-center text-xs font-semibold uppercase text-on-surface-variant">
                    Trainer approved
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-3xl text-primary" aria-hidden>
                    gpp_maybe
                  </span>
                  <span className="text-center text-xs font-semibold uppercase text-on-surface-variant">
                    Safety verified
                  </span>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8 md:col-span-5">
            <section className="wood-border parchment-texture relative p-panel-padding">
              <div className="absolute -top-4 left-6 bg-primary px-3 py-1 font-label-sm uppercase text-on-primary">
                Active Party
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {pets.map((pet) => {
                  const st = staminaPct(pet._id);
                  const tired = st < 25;
                  return (
                    <Link
                      key={String(pet._id)}
                      href={`/pet/${pet._id}`}
                      scroll={false}
                      className="group"
                    >
                      <div
                        className={`aspect-square overflow-hidden bg-surface-container inner-bevel transition-transform duration-200 hover:scale-105 ${
                          tired ? "border-2 border-outline" : "gold-frame"
                        }`}
                      >
                        <Image
                          src={imgUrl(pet.croppedImage)}
                          alt={pet.name}
                          width={200}
                          height={200}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="mt-2 text-center">
                        <h4 className="font-label-sm uppercase text-on-surface">
                          {pet.name}
                        </h4>
                        <div className="mt-1 h-1.5 w-full overflow-hidden bg-surface-variant">
                          <div
                            className={`h-full ${tired ? "bg-error" : "bg-secondary"}`}
                            style={{ width: `${st}%` }}
                          />
                        </div>
                        {tired && (
                          <span className="text-xs font-bold uppercase text-error">
                            Tuckered Out
                          </span>
                        )}
                      </div>
                    </Link>
                  );
                })}
                <div className="inner-bevel flex aspect-square items-center justify-center border-2 border-dashed border-outline bg-surface-container-low opacity-50">
                  <Link href="/addPet">
                    <span className="material-symbols-outlined text-outline">
                      add_circle
                    </span>
                  </Link>
                </div>
                <div className="inner-bevel flex aspect-square items-center justify-center border-2 border-dashed border-outline bg-surface-container-low opacity-50">
                  <span className="material-symbols-outlined text-outline">lock</span>
                </div>
              </div>
            </section>

            <div className="flex flex-col gap-4">
              <Link
                href="/addPet"
                className="gold-frame inner-bevel bg-secondary px-6 py-4 text-center font-label-sm font-bold uppercase tracking-widest text-on-secondary transition-transform active:scale-95"
              >
                Add New Companion
              </Link>
              <button
                type="button"
                className="border-2 border-wood bg-primary-container px-6 py-4 font-label-sm uppercase tracking-widest text-on-primary-container transition-transform active:scale-95"
              >
                Manage Party
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
