import Image from "next/image";
import Link from "next/link";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAGokh4JuqDEBR4Oh1dkU4mPixqleLZ3PJgNoU9qADFzNPFCxh58E3f59oy2r3UHb5GuFGKSqNM56ACvYvICq6o26YawxpYci3hBzratlsxj_mAvhqsZV0w2aBJNdC-k18hkbFwOPXDiSQUQnGTW9_-yVDOoX8N87ibu6gD623baNC6Abu_DA09eeefM2ATZ4n07KFVieArQs7WudJR8fTQcIZtER93gRxYvP8DUGde2njWsqhesTlfdTFHF-c_rN3HnATw05n3SNb9";

const LUNA =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD9vPTduswVKC13UZuQsKM0X6seh0kkp1xvOxxqPjIhY8KQs7g1aj1C_qDzzfmpfL5MhPZ0i_NDMAIZOyNMoQedeGs_VteXl8mKqrpbrJNW_ZCM8hpdBg60MrQkqtdyct8FYX8XoSOnGzZYXdXn5TgMSbu4KkXUVprLBULn3EymBXgS-z20hkZQuNC8yzlJkwV_EshyPUvqidWWfrxwdIaOSDfyTeLoTg51iqZjm9ULU_vVM0ogiJXK7q7Yh30llekI_2FbyAbPRt58";
const SHADOW =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDdjjft9b6kGghXJkaIi5H41OldT1GnHlohFHpZxWkC7jmc70tKVOQBV_GsOX1XrVybfQ8pYepaN5Aqeug9t0VQSom6XTdhls4RhFiIzkZE2Sgp9a-HeC3WLMKAW0al4-Q2ZtQTXKghhGSK5XxLutgNnRhbIOAyPnJFZTm6QumjhRrSfRb-TXpaXdTGoqDDhbmpHh91-KPqB8dcFcxPSrCO8GJrWQwy3CX_XX0jeqYXtKv_MOKyUbPTzQ6l0I2zOlNNYGXKbKKMWm-T";
const BARNABY =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAO8oyI5lsXvd5vwI3jH3uGDmCrbKc1Qmid9xx88fpAavQaemgALWwB7fBQbOXqLJjk8UBaTo0zlIheB2M1c7lFcYdf03GeuJQeja4ug-1dwbaW3dEIGwqNhKyvTNluX3VW7_g2LJEPGbpWiOGoEc6ECuHIW9j6W_XjPhwQQ2BOPlfGO-08YaEaaiRIb2wVVY42IvULsIx-_bgIhsO64njjW77sXsnCs9d7iRis46su__lXmc_zCfiM_l7grnfYlszXjCIneIfk2mbI";

export default function WildernessBriefingContent() {
  return (
    <div className="min-h-full bg-[#5D4037]">
    <main className="mx-auto min-w-0 max-w-4xl space-y-6 px-margin-mobile pb-12 pt-4 text-on-surface md:px-margin-desktop md:pb-16">
      <section className="wood-frame gold-frame relative h-64 w-full overflow-hidden rounded-xl">
        <Image
          src={HERO_IMG}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width:896px) 100vw, 896px"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2c160e] to-transparent p-4">
          <h2 className="font-headline-md text-headline-md-mobile text-primary-fixed">
            Quest: Wilderness Trek
          </h2>
          <p className="flex items-center gap-2 font-label-sm uppercase tracking-widest text-primary-fixed-dim">
            <span className="material-symbols-outlined text-sm">landscape</span>
            Tier II Exploration
          </p>
        </div>
      </section>

      <section className="inner-bevel rounded-lg border-2 border-[#D4AF37] p-panel-padding parchment-texture">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-headline-md text-headline-md-mobile text-on-surface">
            Select Companion
          </h3>
          <span className="rounded bg-secondary-container px-2 py-1 font-label-sm text-secondary">
            2/3 SLOTS
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="group relative cursor-pointer">
            <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-[#D4AF37] bg-primary-container shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] transition-transform active:scale-95">
              <Image src={LUNA} alt="Luna" width={200} height={200} className="h-full w-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-secondary/20">
                <span
                  className="material-symbols-outlined text-4xl text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              </div>
            </div>
            <p className="mt-2 text-center font-bold text-on-surface">Luna</p>
            <div className="flex justify-center gap-1">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <div className="h-2 w-2 rounded-full bg-blue-500" />
            </div>
          </div>
          <div className="group relative cursor-pointer">
            <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-[#D4AF37] bg-primary-container shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] transition-transform active:scale-95">
              <Image
                src={SHADOW}
                alt="Shadow"
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-secondary/20">
                <span
                  className="material-symbols-outlined text-4xl text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              </div>
            </div>
            <p className="mt-2 text-center font-bold text-on-surface">Shadow</p>
            <div className="flex justify-center gap-1">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <div className="h-2 w-2 rounded-full bg-orange-500" />
            </div>
          </div>
          <div className="group relative cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-lg border-2 border-dashed border-outline bg-primary-container/50">
              <Image
                src={BARNABY}
                alt="Barnaby"
                width={200}
                height={200}
                className="h-full w-full object-cover opacity-50 grayscale"
              />
            </div>
            <p className="mt-2 text-center font-bold text-outline">Barnaby</p>
            <p className="text-center text-xs font-bold text-error">TUCKERED OUT</p>
          </div>
          <Link
            href="/addPet"
            className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-outline bg-primary-container/20 hover:bg-primary-container/40"
          >
            <span className="material-symbols-outlined text-outline">add</span>
            <span className="text-xs font-bold uppercase text-outline">Summon</span>
          </Link>
        </div>
      </section>

      <section className="inner-bevel rounded-lg border-2 border-[#D4AF37] p-panel-padding parchment-texture">
        <h3 className="mb-4 font-headline-md text-headline-md-mobile text-on-surface">
          Chronicle of Events
        </h3>
        <div className="space-y-4">
          <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-2">
            <div className="flex h-20 w-16 shrink-0 flex-col items-center justify-center rounded-md border-2 border-[#23501e] bg-secondary text-white">
              <span className="font-label-sm">OCT</span>
              <span className="text-xl font-bold">24</span>
              <span className="text-xs font-bold">TODAY</span>
            </div>
            {["25", "26", "27"].map((d) => (
              <div
                key={d}
                className="flex h-20 w-16 shrink-0 flex-col items-center justify-center rounded-md border-2 border-outline bg-primary-container"
              >
                <span className="font-label-sm text-outline">OCT</span>
                <span className="text-xl font-bold text-on-surface">{d}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block font-label-sm uppercase tracking-wider text-on-surface-variant">
                Departure Hour
              </label>
              <div className="inner-bevel flex items-center justify-between border-b-2 border-outline bg-primary-container p-3">
                <span className="font-bold">High Noon (12:00 PM)</span>
                <span className="material-symbols-outlined">schedule</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block font-label-sm uppercase tracking-wider text-on-surface-variant">
                Questing Grounds
              </label>
              <div className="inner-bevel flex items-center justify-between border-b-2 border-outline bg-primary-container p-3">
                <span className="font-bold">Whispering Woods Park</span>
                <span className="material-symbols-outlined">distance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inner-bevel rounded-lg border-2 border-[#D4AF37] p-panel-padding parchment-texture">
        <h3 className="mb-4 font-headline-md text-headline-md-mobile text-on-surface">Required Gear</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 rounded border border-outline/30 bg-[#EADCB4] p-3">
            <span
              className="material-symbols-outlined text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_box
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-bold leading-tight">Reinforced Tether</p>
              <p className="text-xs text-on-surface-variant">Standard 6ft leash for wilderness control.</p>
            </div>
            <span className="material-symbols-outlined text-outline">link</span>
          </li>
          <li className="flex items-center gap-3 rounded border border-outline/30 bg-[#EADCB4] p-3">
            <span
              className="material-symbols-outlined text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_box
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-bold leading-tight">Flask of Vitality</p>
              <p className="text-xs text-on-surface-variant">Portable water bowl and fresh hydration.</p>
            </div>
            <span className="material-symbols-outlined text-outline">water_drop</span>
          </li>
          <li className="flex items-center gap-3 rounded border-2 border-dashed border-outline bg-primary-container/40 p-3">
            <span className="material-symbols-outlined text-outline">check_box_outline_blank</span>
            <div className="min-w-0 flex-1">
              <p className="font-bold leading-tight text-outline">Social Temperament</p>
              <p className="text-xs text-outline-variant">
                Requires &quot;Friendly&quot; or &quot;Indifferent&quot; stat.
              </p>
            </div>
            <span className="material-symbols-outlined text-outline">groups</span>
          </li>
        </ul>
      </section>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-4 rounded-xl border-4 border-[#D4AF37] bg-secondary py-6 font-display-lg-mobile uppercase tracking-widest text-white shadow-2xl transition-all text-display-lg-mobile active:translate-y-1 active:shadow-none"
      >
        <span className="material-symbols-outlined text-4xl">swords</span>
        Embark on Quest
        <span className="material-symbols-outlined text-4xl">swords</span>
      </button>
    </main>
    </div>
  );
}
