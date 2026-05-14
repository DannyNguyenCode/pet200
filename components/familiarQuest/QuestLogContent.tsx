import Link from "next/link";

const BOARD = [
  {
    icon: "groups",
    title: "Social Soirée",
    badge: "EASY",
    badgeClass: "bg-secondary-container text-secondary",
    desc: "A grand gathering for fellows of the four-legged variety.",
    rewards: [
      ["stars", "50 XP", "text-tertiary", true] as const,
      ["favorite", "Happiness", "text-error", true] as const,
    ],
    href: "/quests/wilderness",
  },
  {
    icon: "landscape",
    title: "Wilderness Trek",
    badge: "ADVENTUROUS",
    badgeClass: "bg-tertiary-container text-on-tertiary-container",
    desc: "Traverse the rugged terrain of the local park expansion.",
    rewards: [
      ["stars", "150 XP", "text-tertiary", true] as const,
      ["inventory_2", "Loot Drop", "text-primary", true] as const,
    ],
    href: "/quests/wilderness",
  },
  {
    icon: "fitness_center",
    title: "Training Montage",
    badge: "FOCUSED",
    badgeClass: "bg-primary-container text-on-primary-container",
    desc: "Hone thy pet's discipline and master new martial... or sitting... arts.",
    rewards: [
      ["stars", "200 XP", "text-tertiary", true] as const,
      ["psychology", "Wisdom", "text-on-secondary-container", true] as const,
    ],
    href: "/quests/wilderness",
  },
];

export default function QuestLogContent() {
  return (
    <main className="mx-auto min-w-0 max-w-5xl space-y-8 px-margin-mobile pb-8 pt-4 md:px-margin-desktop">
      <section className="space-y-4">
        <div className="wood-texture-stripes flex items-center gap-3 rounded-lg border-2 border-outline p-3">
          <span className="material-symbols-outlined text-tertiary-fixed">
            hourglass_empty
          </span>
          <h2 className="font-headline-md uppercase tracking-tight text-headline-md-mobile text-white">
            Current Quests
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="inner-bevel-strong relative overflow-hidden rounded-lg border-2 border-outline p-panel-padding parchment-bg-familiar">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="font-label-sm uppercase text-on-surface-variant text-label-sm">
                  Ongoing Adventure
                </p>
                <h3 className="font-headline-md text-headline-md-mobile text-on-surface">
                  The Oakwood Patrol
                </h3>
              </div>
              <div className="rounded border border-on-secondary-fixed bg-secondary px-3 py-1">
                <span className="font-label-sm text-white text-label-sm">42m REMAINING</span>
              </div>
            </div>
            <div className="h-4 w-full overflow-hidden rounded-full border border-outline bg-outline-variant">
              <div className="h-full w-[65%] bg-secondary" />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">pets</span>
              <p className="font-body-md text-body-md">Barnaby is sniffing out rare moss...</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="wood-texture-stripes flex items-center gap-3 rounded-lg border-2 border-outline p-3">
          <span className="material-symbols-outlined text-tertiary-fixed">assignment</span>
          <h2 className="font-headline-md uppercase tracking-tight text-headline-md-mobile text-white">
            Quest Board
          </h2>
        </div>
        <div className="space-y-6">
          {BOARD.map((q) => (
            <div key={q.title} className="space-y-0">
              <div className="scroll-edge-panels relative border-y-2 border-outline p-panel-padding shadow-md parchment-bg-familiar">
                <div className="flex gap-4">
                  <div className="inner-bevel-strong flex h-16 w-16 shrink-0 items-center justify-center border-2 border-outline bg-primary-fixed">
                    <span className="material-symbols-outlined text-4xl text-primary">{q.icon}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="font-headline-md text-headline-md-mobile text-on-surface">
                        {q.title}
                      </h3>
                      <span
                        className={`shrink-0 rounded px-2 font-label-sm text-label-sm ${q.badgeClass}`}
                      >
                        {q.badge}
                      </span>
                    </div>
                    <p className="mb-4 font-body-md italic text-body-md text-on-surface-variant">
                      {q.desc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {q.rewards.map(([icon, label, cls, fill]) => (
                        <div
                          key={label}
                          className="flex items-center gap-1 rounded border border-outline-variant bg-surface-container-low px-2 py-1"
                        >
                          <span
                            className={`material-symbols-outlined text-sm ${cls}`}
                            style={
                              fill ? { fontVariationSettings: "'FILL' 1" } : undefined
                            }
                          >
                            {icon}
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href={q.href}
                className="mt-4 flex w-full items-center justify-center rounded border-2 border-[#D4AF37] bg-[#2E7D32] py-2 font-bold uppercase text-white shadow-lg transition-transform active:translate-y-0.5"
              >
                Embark on Quest
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
