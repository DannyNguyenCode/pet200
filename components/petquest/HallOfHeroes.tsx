import Image from "next/image";
import Link from "next/link";

const TOP1_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDY6ido0r5srWlE3qtXaEWiToCdIJizuAXW2basQb25Bhngfoo7EYQjrzQCeR44QL8G7o4E9GQJI1Zt-K7Kmqiohhb_kAFJGjDt93mgak_tyFHL1l0CfZSFLgX_7UIa1K_CHQjxk0mHm6yeB1BSUdNJKyd9zAhtwAAny5rwz4oySwHdVwFp0VuiDL_xmKu2F3BPZnm6HuQkqC-nbD9VHRDa27dmuwZH6L9MDUZmx0JoB4Ul-iXWXeCMAvH3xHPSG0L3yDyI-8dXrF9f";
const TOP2_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAWvBIacruKx0JjvO9V262PcRqXcF7sy_NaNU1nYIaHNBwCBT4QxdlE2ykVdapjhCqCqJr7m7O_b8CAaXHHpyAAphpt3ar0JWrPjV6Md7HJTYZnzxd4v12uwXN79ywW2Y-FfoxMIGJHEC1lcQrtXaEDghybRIZ-gyZY3RtQo4zw8fVH5tCQ1urWX6z_GEtWKD_nhy6M7-t6viuIwyl22w0B7X_66DDujgefSEe3TfNW49bV-XSEtyN4tS_DdkPY04VkzvkVI-pKN-1h";
const TOP3_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDsxK2ak6xfrQeKX9vE_PX7FI0LL-LrTIzX58JiacMp43b2JtTVTwCOheWHTnv4cmCHZpKZanYOz2BMIcfrPVUIA2AF4ZjtPth94_dqX21WLvJb1QDynNdkUuUwKsa_envXwJFCnPnDV7uNp5g1Fr1iowpv_7kxmlVuqtydQ8rePfW5xvlWlaDBONHiCzkkWzz-pZmLAS-3dpNMWock4dmZumAGSzeHbUVDY_EPSnc-4Lns3KUAjHY_bzYwnFvrtpudB4f2DWuV3O9R";

export default function HallOfHeroes() {
  return (
    <main className="mx-auto min-w-0 max-w-6xl px-margin-mobile py-8 pb-12 font-body-md selection:bg-tertiary-container md:px-margin-desktop md:pb-16">
      <section className="wood-frame parchment-texture relative mb-12 rounded-xl px-6 py-12 text-center">
        <div className="absolute -top-6 left-1/2 z-10 -translate-x-1/2 rounded-full border-2 border-[#d4af37] bg-[#5d4037] px-8 py-2">
          <span className="font-headline-md uppercase tracking-widest text-[#d4af37] text-headline-md">
            The Grand Archive
          </span>
        </div>
        <h2 className="mb-4 font-display-lg text-display-lg text-primary">
          Donor Hall of Fame
        </h2>
        <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          Honoring the legendary guardians whose generosity fuels the sanctuary quests and
          protects the realm&apos;s furry companions.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-1">
          <div className="wood-frame parchment-texture rounded-xl p-6">
            <h3 className="mb-6 flex items-center gap-2 font-headline-md text-headline-md text-primary">
              <span className="material-symbols-outlined">military_tech</span>
              Community Titles
            </h3>
            <div className="space-y-4">
              <div className="gold-trim inner-bevel flex items-center gap-4 rounded-lg bg-surface-container-low p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-white bg-[#cd7f32] text-3xl text-white shadow-sm">
                  <span className="material-symbols-outlined">workspace_premium</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Bronze Supporter</h4>
                  <p className="font-label-sm text-outline text-label-sm">Tier I Contributor</p>
                </div>
              </div>
              <div className="gold-trim inner-bevel glowing-accent flex items-center gap-4 rounded-lg bg-surface-container-low p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-white bg-[#d4af37] text-3xl text-white shadow-sm">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Gold Rescue Hero</h4>
                  <p className="font-label-sm text-on-tertiary-container text-label-sm">
                    Tier III Elite
                  </p>
                </div>
              </div>
              <div className="gold-trim inner-bevel flex items-center gap-4 rounded-lg bg-surface-container-low p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-white bg-[#3b6934] text-3xl text-white shadow-sm">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    shield
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Community Guardian</h4>
                  <p className="font-label-sm text-secondary text-label-sm">Legendary Status</p>
                </div>
              </div>
            </div>
          </div>

          <div className="wood-frame parchment-texture rounded-xl p-6">
            <h3 className="mb-4 font-headline-md text-headline-md text-primary">
              Shelter Hero Quests
            </h3>
            <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
              Earn prestigious badges and unique avatars through your recurring service to
              the kingdom.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary">
                  volunteer_activism
                </span>
                <div className="font-body-md text-body-md">
                  <strong>Weekly Warden:</strong> Complete 4 volunteer shifts in a month.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary">history_edu</span>
                <div className="font-body-md text-body-md">
                  <strong>Legacy Giver:</strong> Maintain a recurring donation for 6 moons.
                </div>
              </div>
            </div>
            <button
              type="button"
              className="inner-bevel mt-8 w-full rounded-lg border-2 border-[#d4af37] bg-[#3b6934] py-4 font-bold uppercase tracking-widest text-white transition-transform active:scale-95"
            >
              Accept Quest
            </button>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="wood-frame parchment-texture min-h-full rounded-xl p-8">
            <div className="mb-8 flex items-end justify-between border-b-2 border-outline-variant pb-4">
              <h3 className="font-display-lg text-display-lg text-on-surface">
                Top Contributors
              </h3>
              <span className="gold-trim rounded bg-tertiary-container px-3 py-1 font-label-sm text-on-tertiary-container text-label-sm">
                SEASON: HARVEST MOON
              </span>
            </div>

            <div className="space-y-6">
              <div className="group relative">
                <div className="absolute left-[-1rem] top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#5d4037] bg-[#d4af37] text-xl font-bold text-white shadow-lg">
                  1
                </div>
                <div className="glowing-accent ml-4 flex items-center gap-6 rounded-xl border-2 border-[#d4af37] bg-white p-6 transition-all hover:scale-[1.01]">
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg border-4 border-[#d4af37]">
                    <Image
                      src={TOP1_IMG}
                      alt=""
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-grow">
                    <div className="inline-block rounded-t-lg bg-[#5d4037] px-4 py-1 font-label-sm uppercase tracking-tighter text-[#d4af37] text-label-sm">
                      Arch-Guardian of the Realm
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-headline-md text-headline-md text-on-surface">
                        Elara Sunwalker
                      </h4>
                      <div className="text-right">
                        <div className="font-label-sm uppercase text-primary text-label-sm">
                          Contribution
                        </div>
                        <div className="font-headline-md text-headline-md text-secondary">
                          2,450 XP
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute left-[-0.75rem] top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#5d4037] bg-[#c0c0c0] text-lg font-bold text-white">
                  2
                </div>
                <div className="ml-4 flex items-center gap-6 rounded-xl border-2 border-outline-variant bg-surface-container-low p-5 transition-colors hover:bg-surface-container-high">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 border-outline">
                    <Image
                      src={TOP2_IMG}
                      alt=""
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-grow">
                    <div className="inline-block rounded-t-lg bg-outline px-3 py-1 font-label-sm uppercase text-white text-label-sm">
                      Master of the Hearth
                    </div>
                    <div className="flex justify-between">
                      <h4 className="text-lg font-bold text-on-surface">Kaelen Ironfoot</h4>
                      <div className="font-headline-md text-headline-md text-on-surface-variant opacity-70">
                        1,820 XP
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute left-[-0.75rem] top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#5d4037] bg-[#cd7f32] text-lg font-bold text-white">
                  3
                </div>
                <div className="ml-4 flex items-center gap-6 rounded-xl border-2 border-outline-variant bg-surface-container-low p-5 transition-colors hover:bg-surface-container-high">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 border-outline">
                    <Image
                      src={TOP3_IMG}
                      alt=""
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-grow">
                    <div className="inline-block rounded-t-lg bg-[#3b6934] px-3 py-1 font-label-sm uppercase text-white text-label-sm">
                      Scholar of Whispers
                    </div>
                    <div className="flex justify-between">
                      <h4 className="text-lg font-bold text-on-surface">Alaric the Wise</h4>
                      <div className="font-headline-md text-headline-md text-on-surface-variant opacity-70">
                        1,540 XP
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {[
                ["4.", "Sora the Swift", "Silver Shield", "1,210 XP"],
                ["5.", "Baron Valerius", "Merchant King", "980 XP"],
              ].map(([rank, name, sub, xp]) => (
                <div
                  key={name}
                  className="group ml-4 flex items-center justify-between rounded-lg border-b border-outline-variant p-4 transition-colors hover:bg-surface-container-low"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-6 font-label-sm text-label-sm">{rank}</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded border border-primary bg-primary-container">
                      <span className="material-symbols-outlined text-on-primary-container">
                        person
                      </span>
                    </div>
                    <div>
                      <div className="font-bold">{name}</div>
                      <div className="font-label-sm text-outline text-label-sm">{sub}</div>
                    </div>
                  </div>
                  <div className="font-bold text-label-sm text-label-sm">{xp}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/quests/treasury"
                className="font-label-sm text-primary underline underline-offset-4 hover:text-tertiary text-label-sm"
              >
                View Full Leaderboard Scroll
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="wood-frame parchment-texture mt-12 rounded-xl p-8">
        <h3 className="mb-8 text-center font-headline-md uppercase tracking-widest text-headline-md text-primary">
          Global Achievements
        </h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {[
            ["pets", "text-secondary", "opacity-50", false, false],
            ["favorite", "text-tertiary", "", true, true],
            ["auto_awesome", "text-primary", "", false, false],
            ["lock", "text-on-surface-variant", "opacity-30", false, false],
            ["forest", "text-secondary", "", false, false],
            ["lock", "text-on-surface-variant", "opacity-30", false, false],
            ["castle", "text-tertiary", "", false, false],
            ["handshake", "text-secondary", "", false, false],
          ].map(([icon, cls, extra, fill, dot], idx) => (
            <div
              key={idx}
              className="wood-frame inner-bevel group relative flex aspect-square cursor-help items-center justify-center bg-surface-container"
            >
              <span
                className={`material-symbols-outlined text-3xl ${cls} ${extra}`}
                style={fill ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {icon}
              </span>
              {dot && (
                <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full border border-white bg-error" />
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
