import Image from "next/image";
import Link from "next/link";

const FEATURE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCAqh1wuIPXc_kTDBMghN2trLWsSYWP7ZdduuV3RHSnizUUhNab5PnDMVZ28Ytf6IMgzqlZy96bv_gr5GmqzF9_MOpwjWwZN2yEk_1aMGIfNThIiI0S1KxvVw9CilDLuZAXg-ulfeJso3yHR0He9uzwfxeQVYYt4LrQkhXueYYJVML0t0ZomTKL3lxcZWEg0i2Yo5EoB2N9cHfIbxSQk15UtE2Tri8Rk3D4TUILbuPXsbDF8hMgRfAN4LMcncBR_obpAH1N3REOXlP6";

const HEROES = [
  {
    name: "Sir Barksalot",
    tier: "LEGENDARY DONOR",
    tierClass: "text-secondary",
    border: "border-[#D4AF37]",
    premium: true,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRn2k8zcFT2ULTxzskoIjEGxrONDB85tEUbFuq6YOXqaW3azBjYl3KGqJe1eixzqBrWVf8kZ9ycJC6660_gG0ismyWNEt4h5yiaVqTSxrlCOeUe60kKrymvf7gTrVT5-ZzXnVA5OvGFsECJyO_k4Mzbqj4oE3mQZSRJfQWyl-_8GHsZHX5gQ9IgqQYUjLkxBv4Cse0EW6vULpmAKQYT1QfqRYJlNkoiNHCX2bJSW1xNYMmhY4fbaEpJlHyaiV73xDxw3yqHn8Xt2oE",
    badges: [
      ["shield", "text-tertiary", true],
      ["favorite", "text-secondary", true],
      ["bolt", "text-error", true],
    ],
  },
  {
    name: "Mistress Meow",
    tier: "NOBLE SUPPORTER",
    tierClass: "text-outline",
    border: "border-outline",
    premium: false,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDz0ZnliFq35e6PQ_9XsUuIvSWMOowV00viQmK6uFRppHVaermBAF9tbf6YGceXCkfYZUrl1ZzlMOEl3ye84JXWdgP8lxYUjIGSrHNxu4Y75XfYwSOLLof5_zB-yBT4I-K0zf9VbQEUo6YAizQe_dsMDQNEYV57vDSJnl4fNpzJc2e4vh-ykP-zOQKVE4q3L0eJKwhIwFdH0Wwa9N-zO6gv1rxcU7ww0ZCWsDZuXQjK9sUIrFaC_p_3nR2C1_xI1yOQO9swVR5PqvVrl",
    badges: [
      ["military_tech", "text-tertiary", true],
      ["eco", "text-secondary", true],
    ],
  },
  {
    name: "Captain Beagle",
    tier: "VALIANT SCOUT",
    tierClass: "text-outline",
    border: "border-outline",
    premium: false,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR6Wd7sbUoE5hkspEo4B_3wW5fD9Qxniyh93eQvUlmISSRM1WMzqNkDTiRlVveIib7d9gL1gSs4u3fj-ovaHxECUXh8DXjKiNXW1Kh4lIkRK5ug5AstrfZ6wwmAuLPpNIAlZc-ssGFC7raEK95S7NkVHJetrhsAY8VMXgyQ9K934LVg0ruiYvfPf1CA8vTizfxnzfmx5KDFjv2XYhajA-yEqZ7-Jx57P4-YXjG_eZBEP8UVkyzcHp6dEGIWI2P1C4_7JjU7_XmwUf2",
    badges: [["star", "text-tertiary", true]],
  },
  {
    name: "Lady Luna",
    tier: "GENEROUS PATRON",
    tierClass: "text-outline",
    border: "border-outline",
    premium: false,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYE0qyO-SrNmztIvbdsgzEpsw0g1zTr26VHgfev3-08PmjQeItjNCPu_6Mkinf4rX7KG-GCaSTNUGhV2glrLJ63pSlvnA2TQlaKgVR7s-lXp1f3d7SyIrHPxoPwB1hQ2ELMs2SuzaMff4Vx9fE75JKbtK94BcS9FtGCUoGjOGEX85Pk0wJ9VeFFAwgUnvyVChNeekzcX1lKuWqtRsuagUyzSLWNtsj3QiPdoGR7WnfhBFUwGLlD1qQpp_j3IK0TWID2OR7Tf2YFOyR",
    badges: [
      ["grade", "text-tertiary", true],
      ["volunteer_activism", "text-secondary", true],
    ],
  },
];

export default function BountyBoard() {
  return (
    <main className="mx-auto min-w-0 max-w-screen-xl px-margin-mobile py-6 font-body-md sm:py-8 md:px-margin-desktop">
      <div className="mb-10 text-center">
        <h2 className="mb-2 font-display-lg text-display-lg text-primary">
          Community Bounty Board
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Heroes gathering gold for the greater good of all familiars.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
        <div className="grid grid-cols-1 gap-4 lg:col-span-4">
          {[
            ["monetization_on", "Total Gold Raised", "$12,450", "text-secondary"],
            ["medical_services", "Emergency Surgeries Funded", "14", "text-tertiary"],
            ["flag", "Active Community Goals", "3", "text-primary"],
          ].map(([icon, label, value, color]) => (
            <div
              key={label}
              className="parchment-texture relative flex flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-outline p-6 text-center shadow-sm"
            >
              <span className={`material-symbols-outlined mb-2 text-4xl ${color}`}>
                {icon}
              </span>
              <span className="font-label-sm uppercase text-outline text-label-sm">
                {label}
              </span>
              <span className="font-display-lg text-display-lg text-on-background">
                {value}
              </span>
            </div>
          ))}
        </div>

        <div className="wood-texture relative rounded-xl border-2 border-primary p-4 lg:col-span-8">
          <div className="flex h-full flex-col gap-6 rounded-lg border-2 border-[#D4AF37] p-4 parchment-texture sm:gap-8 sm:p-6 md:flex-row md:p-8">
            <div className="md:w-1/2">
              <div className="mb-4 inline-block rounded-full bg-tertiary-container px-3 py-1 font-label-sm text-on-tertiary-container text-label-sm">
                EPIC QUEST
              </div>
              <h3 className="mb-4 font-headline-md text-headline-md text-primary">
                Restore the East District Dog Park
              </h3>
              <p className="mb-6 font-body-md leading-relaxed text-body-md text-on-surface-variant">
                The training grounds have fallen into disrepair. We need the community to
                come together to fix the hurdles and re-seed the mana-grass for our
                four-legged apprentices.
              </p>
              <div className="mb-6">
                <div className="mb-2 flex items-end justify-between">
                  <span className="font-bold text-label-sm text-secondary text-label-sm">
                    82% FUNDED
                  </span>
                  <span className="font-label-sm text-outline text-label-sm">
                    $8,200 / $10,000
                  </span>
                </div>
                <div className="h-6 w-full overflow-hidden rounded-full border border-outline-variant bg-surface-container p-1">
                  <div className="h-full w-[82%] rounded-full bg-secondary" />
                </div>
              </div>
              <Link
                href="/quests/dog-park"
                className="inline-block w-full rounded-lg border-2 border-[#D4AF37] bg-[#3b6934] px-4 py-3 text-center text-sm font-bold uppercase text-white shadow-md transition-transform hover:scale-105 active:bg-[#23501e] sm:px-8 sm:text-base md:w-auto"
              >
                Donate Gold
              </Link>
            </div>
            <div className="relative min-h-[240px] w-full overflow-hidden rounded-xl border-2 border-primary md:min-h-[320px] md:w-1/2">
              <Image
                src={FEATURE_IMG}
                alt=""
                fill
                className="object-cover sepia-[10%] grayscale-[20%]"
                sizes="(max-width:1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <div className="mb-6 flex items-center gap-4">
          <div className="h-0.5 flex-grow bg-primary" />
          <h3 className="px-4 font-headline-md text-headline-md text-primary">
            Recent Heroes
          </h3>
          <div className="h-0.5 flex-grow bg-primary" />
        </div>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
          {HEROES.map((h) => (
            <div
              key={h.name}
              className={`flex flex-col items-center rounded-lg border-2 border-outline p-5 parchment-texture transition-colors hover:bg-surface-container-low ${h.premium ? "group" : ""}`}
            >
              <div className="relative mb-4">
                <div
                  className={`h-20 w-20 overflow-hidden rounded-full border-2 bg-white p-1 ${h.border}`}
                >
                  <Image
                    src={h.img}
                    alt=""
                    width={80}
                    height={80}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                {h.premium && (
                  <div className="absolute -bottom-1 -right-1 rounded-full border border-white bg-[#D4AF37] p-1 text-white">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      workspace_premium
                    </span>
                  </div>
                )}
              </div>
              <span className="mb-1 text-center font-headline-md text-headline-md text-on-surface-variant">
                {h.name}
              </span>
              <span className={`mb-3 font-label-sm text-label-sm ${h.tierClass}`}>
                {h.tier}
              </span>
              <div className="flex gap-2">
                {h.badges.map(([icon, cls, fill], bi) => (
                  <div
                    key={`${h.name}-${icon}-${bi}`}
                    className="inset-shadow-custom flex h-10 w-10 items-center justify-center rounded border border-outline bg-surface-container"
                    title=""
                  >
                    <span
                      className={`material-symbols-outlined ${cls}`}
                      style={
                        fill ? { fontVariationSettings: "'FILL' 1" } : undefined
                      }
                    >
                      {icon}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
