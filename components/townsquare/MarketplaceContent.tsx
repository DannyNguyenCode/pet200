import Image from "next/image";

const MASTERS = [
  {
    name: "Master Alistair",
    title: "The Dog Whisperer",
    filledStars: 5,
    trailing: "none" as const,
    quote: '"Specialty: Beast Obedience & Loyalty Spells"',
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0VlXYagu5cI3VtJx0aEGBHI2ohyO0T9BVTZNUbGyUZO_Z4-UDUIIr7xVYPS_KI8MDcy5B155oI1a-VuNTRJlBnAq7heXoPpposqHnjk3KW68kagH7dLgXoh7xcatJ5whjaBjxK2mJT10J_k0tduJX-ApwpcETJ3hBPQLWXveZK9gLzZC0xlFbSsOztsZV9bQaGiPLMp9WkkcJ9zECDIWWNbKiCon9LEECNdVnV-rmkfc3YphJOSTCfOkJu-TnVra43jBjZ9l_ZOHA",
  },
  {
    name: "Lady Elowen",
    title: "Feline Grace Mistress",
    filledStars: 4,
    trailing: "empty" as const,
    quote: '"Specialty: Agility & Silent Prowling"',
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfTowEnCaZ5vlCPcPG29s94C4UFepvvmfulkkQaksFXj7Mp4dAHrbgTQYclZ39wtbwpCD-0nx5CvC_051g059GWwjjJtqPJ884IrAd2bAa4ioRAG0dou_ICa93-FE2EqIAfcmnWIHrYfNfP0cIZ2OG7LLoZUtZeyse-MmG0Nb26mO8eQpDQpXMCCoFvSEGNJFvBeoFIDn-9GUVgGfWw4jAKouBNzHDiOJdX3XhW0XSAEnvSletO6PYeptdX5nfoax1r21mS4J_3oFH",
  },
  {
    name: "Grom Heavyhand",
    title: "The Shield Guardian",
    filledStars: 4,
    trailing: "half" as const,
    quote: '"Specialty: Guarding & Socialization"',
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnxILvhqJO6b68I72PtS9DybsD5_sybwn7oBcFiLC8QVAtVOBufdj3fFJuW-zIwgK7mNs0O6h1XVwRfzwFhdW-t97-tR-ya5PLDKfKnKDqL68OPouUxdIU7tDwiTWyLk8RbGGwhs1ywibEhAiWvmIXEZyAGVfl9vPXvFXxwEaW-y-jPu5qqFzQOJCtKB0I2MGM34wTAnPJyNiY9TOUARqIg0TbZyA6-uevVSnUyiyyqLxIE62BVliPV4zRffWoZUs0Gfwv8vLSB1OW",
  },
] as const;

const SPECIALISTS = [
  {
    name: "Brother Silas",
    role: "Calm Presence Coach",
    rank: "12",
    price: "50",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDII0KE1LL5ZVrqHUwrbZyydHsbU8Mq7zjSdZEgtmqbNzVLf5i3e4V6xCxPbynMN2XKvu1o9metfV0apUX_z99OARCLHYc_2gsryFSpYy3BsFUU3o2bIC9A3qU41DAeaUDgIGn0gpJOj34g08zRfM4qRn-pUOCmSwxQyoadRejKhvez02OxWYvsH7fq396_siwoRahQeSHlbXZnqpmF9GsEzQDIdFDMgojIUmRY42KFdi3chj64FgkiOdxy1266P_28JrUq36NnaexW",
    tags: ["pets", "favorite"],
  },
  {
    name: "Finn the Tracker",
    role: "Scent Trail Expert",
    rank: "08",
    price: "35",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAACu-uB2zYmBD1U0JVQ8eAJ8GoW7i4gtXsNcwB5FECHeupkriqOV-n01q8zj_GT9r65NkcgtSRxVQSjxunBxc4flBsD11oS-h6ND7kskD2eLw4ghL_hWu5SqfXjUMU7zae3eRlhgF1ip-P4k7EOGK0e5syID9iB41WWJXxnNaTC7QXbHVmfF_eyiHdRB0pt5kk7HTYN3bdcjkv4EZvUSUJwQNcrjP6QYmRTyGLQ6CvZRnFYzSlCNUkwIVg6vbEy3p__lkrHjSNYc_4",
    tags: ["explore"],
  },
  {
    name: "Mystic Mara",
    role: "Focus & Mana Bonding",
    rank: "15",
    price: "75",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmeWH3f8ZvfPk0YEjr64i0vIo54ly2hM91xao1Jlky0ZZ9cUpPcrLZuFtPJUmfmFnylMFQRQ7Yo9ColrexZVCCkv6bi3vtqRTTIXqBz7uYH45Waa1SY18xvPARjeTm5jDjnzrwXDWhafDImPLgkeHqUmXNnBeaA3Ia44k0l1qeqroASbUw5-YhuC2p8hs37GLUpZ2ogY-qc02-jXAoGe5MHBMAi1_vgZDL_2Ev1Qi16jB-9-Zk_p76ZGlvFpWk9wKYpadup_j7qlcE",
    tags: ["auto_awesome"],
  },
  {
    name: "Apprentice Leo",
    role: "Basic Recall Training",
    rank: "05",
    price: "20",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxwaSBavnEfKZ1bNYsQ5RF2_OtgQF-M4ZMS1qPX3SyQiRrXcvlP784vN4K9cBAGJu9rSC58zaHBMwhE270V0vFFQ4IO8FeHtMqg5JasLoCWFDitM9NTc_bbBO8PFeJipye3h1QP4mIhYOGzU6GpcrdQDscKRWkuqV71U3ZMO2rlvCVQkmh1FI5NcSPhmUiP4CnIaXIzFsz0dv1jxGKo19VJLDZKoyq2xH0SY2SmFmSa6-kflnK6ib-gOWTAa-9672Grmje0cnHEqQI",
    tags: ["campaign"],
  },
];

function StarRow({
  filledStars,
  trailing,
}: {
  filledStars: number;
  trailing: "none" | "empty" | "half";
}) {
  const nodes = [];
  for (let i = 0; i < filledStars; i++) {
    nodes.push(
      <span
        key={i}
        className="material-symbols-outlined text-tertiary"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        star
      </span>,
    );
  }
  if (trailing === "half") {
    nodes.push(
      <span
        key="h"
        className="material-symbols-outlined text-tertiary"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        star_half
      </span>,
    );
  } else if (trailing === "empty") {
    nodes.push(
      <span key="e" className="material-symbols-outlined text-tertiary">
        star
      </span>,
    );
  }
  return <div className="mb-4 flex text-tertiary">{nodes}</div>;
}

export default function MarketplaceContent() {
  return (
    <div className="bg-wood pb-10 font-body-md text-on-surface md:pb-16">
      <main className="mx-auto min-w-0 max-w-7xl px-margin-mobile pt-4 md:px-margin-desktop">
        <div className="mb-6 mt-8 text-center">
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary-container drop-shadow-md uppercase md:font-display-lg md:text-display-lg">
            The Marketplace
          </h2>
          <p className="mt-2 font-label-sm uppercase tracking-widest text-primary-fixed text-label-sm">
            Hire legendary trainers for your familiar
          </p>
        </div>

        <section className="mb-10">
          <div className="wood-border-thin flex flex-col items-center gap-4 rounded-xl p-4 parchment-texture md:flex-row">
            <div className="relative w-full md:w-1/3">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary">
                search
              </span>
              <input
                className="w-full rounded-lg border-2 border-primary bg-surface-container-low py-2 pl-10 pr-4 font-body-md ring-tertiary focus:outline-none focus:ring-2"
                placeholder="Search Skill Books..."
                type="search"
              />
            </div>
            <div className="scrollbar-hide flex w-full gap-2 overflow-x-auto pb-2 md:pb-0">
              {(
                [
                  ["bolt", "Agility", true],
                  ["verified", "Obedience", false],
                  ["groups", "Socialization", false],
                  ["search", "Tracking", false],
                ] as const
              ).map(([icon, label, active]) => (
                <button
                  key={label}
                  type="button"
                  className={
                    active
                      ? "flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border-2 border-primary-container bg-secondary px-4 py-2 font-label-sm text-on-secondary text-label-sm"
                      : "flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border-2 border-outline bg-primary-container px-4 py-2 font-label-sm text-on-primary-container text-label-sm hover:bg-surface-variant"
                  }
                >
                  <span className="material-symbols-outlined">{icon}</span>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary">military_tech</span>
            <h3 className="font-headline-md uppercase text-primary-container text-headline-md">
              Master Trainers
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MASTERS.map((m) => (
              <div
                key={m.name}
                className="wood-border-thin relative flex flex-col items-center overflow-visible rounded-xl p-panel-padding parchment-texture"
              >
                <div className="gold-frame absolute -top-6 rounded-lg bg-tertiary px-3 py-1 font-label-sm uppercase tracking-tighter text-on-tertiary text-label-sm">
                  Guild Certified
                </div>
                <div className="mb-4 mt-2 h-24 w-24 overflow-hidden rounded-full border-2 border-[#D4AF37] bg-surface-container shadow-lg">
                  <Image src={m.img} alt="" width={96} height={96} className="h-full w-full object-cover" />
                </div>
                <h4 className="mb-1 text-center font-headline-md text-headline-md text-on-surface">
                  {m.name}
                </h4>
                <p className="mb-3 font-label-sm font-bold uppercase text-secondary text-label-sm">
                  {m.title}
                </p>
                <StarRow filledStars={m.filledStars} trailing={m.trailing} />
                <div className="inner-bevel-strong mb-4 w-full rounded-lg bg-surface-container-low p-3 text-center">
                  <p className="font-body-md italic text-on-surface">{m.quote}</p>
                </div>
                <button
                  type="button"
                  className="gold-frame w-full rounded-lg bg-secondary py-3 font-headline-md uppercase text-white shadow-md transition-transform hover:bg-on-secondary-container active:scale-95 text-headline-md"
                >
                  Request Quest
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary">inventory_2</span>
            <h3 className="font-headline-md uppercase text-primary-container text-headline-md">
              Available Specialists
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {SPECIALISTS.map((s) => (
              <div
                key={s.name}
                className="flex flex-col gap-3 rounded-lg border-2 border-primary p-4 shadow-inner parchment-texture"
              >
                <div className="flex items-start justify-between">
                  <div className="inner-bevel-strong h-16 w-16 overflow-hidden rounded-lg bg-surface-container">
                    <Image src={s.img} alt="" width={64} height={64} className="h-full w-full object-cover" />
                  </div>
                  <div className="text-right">
                    <span className="block font-label-sm uppercase text-tertiary text-label-sm">
                      Rank {s.rank}
                    </span>
                    <div className="flex items-center justify-end gap-1 font-bold text-secondary">
                      <span>{s.price}</span>
                      <span className="material-symbols-outlined text-sm">payments</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-body-lg font-bold text-on-surface text-body-lg">{s.name}</h5>
                  <p className="font-label-sm text-on-surface-variant text-label-sm">{s.role}</p>
                </div>
                <div className="flex gap-1">
                  {s.tags.map((t) => (
                    <div
                      key={t}
                      className="flex h-6 w-6 items-center justify-center rounded border border-outline bg-primary-container"
                    >
                      <span className="material-symbols-outlined text-[14px]">{t}</span>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="w-full rounded border border-primary bg-primary-container py-2 font-label-sm font-bold uppercase text-on-primary-container transition-all hover:bg-surface-variant active:scale-95 text-label-sm"
                >
                  Book Session
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <div className="wood-border-thin rounded-xl p-panel-padding parchment-texture">
            <div className="mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">military_tech</span>
              <h3 className="font-headline-md uppercase text-on-surface text-headline-md">
                Earnable Certifications
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex w-32 flex-col items-center gap-2">
                <div className="inner-bevel-strong relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#D4AF37] bg-surface-container-high">
                  <span className="material-symbols-outlined text-4xl text-tertiary">detector_status</span>
                  <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary-container bg-secondary">
                    <span className="material-symbols-outlined text-[12px] text-white">check</span>
                  </div>
                </div>
                <span className="text-center font-label-sm font-bold uppercase text-label-sm">
                  Grand Sniffer
                </span>
              </div>
              {[
                ["location_city", "Urban Explorer"],
                ["shield", "Village Guardian"],
                ["forest", "Wilderness Ranger"],
              ].map(([icon, label]) => (
                <div key={label} className="flex w-32 flex-col items-center gap-2 opacity-60">
                  <div className="inner-bevel-strong flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#D4AF37] bg-surface-container-high">
                    <span className="material-symbols-outlined text-4xl text-primary">{icon}</span>
                  </div>
                  <span className="text-center font-label-sm font-bold uppercase text-label-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
