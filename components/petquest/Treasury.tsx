import Image from "next/image";
import Link from "next/link";

const MISSIONS = [
  {
    title: "Emergency Rescue Transport",
    desc: '"The fleet moved through the shadow realm to bring safety to 40 puppies."',
    cost: "2,500 GP",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6BGyFTGqj8kyVB_awEuzoAD8exHIncQlS2qoLtI_noiDydmkYBmJxBdxyVx9z5zvSFDPjr0SuQv8zKGdgQBNSDEJF3e7vu4K7QaXFTUcwQSNidinEDZ3hqt9Qu7l5-6VTFR5nno8Cpm7vgfkqHJ8AKMZI6bt6JJCBvQQwStMtakCbCwU1WIOybkdNm336wIpgQlrns3A3IHED78GUMtLv2e_c0VsLIsbt-gH3Gxfbk68RTibP6PhNsnJceMjhSaYq2dXqZGQUAbqv",
  },
  {
    title: "Oakheart Shelter Roof",
    desc: '"Mending the shelter\'s defenses against the winter frost and heavy rains."',
    cost: "4,800 GP",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtiT_8o122dVnVgKnSIMhoSkz9Cpf850FpOkzwLOfJJkOIC-qTZMpFLmnNrw73CRG4SMvPy-ed9_AGzwkMFj7OOYLrSX85GVHOj4v5kkj_fb-va_V3hKNGbd9IHxIpVMRkfUKzMb2kp7OA_wR0xWXXf639-gMWrtCWTwwlyFnkwUUWq7NuAo7_zQhy8KW_9IdWQCvGhjirnPNShjrk0lHiBZtq1g0KmDKxUJ3xT7nOwNt-JrOtwEzJOD6jH3YrukhmP4i_ZnSc2CYI",
  },
  {
    title: "Great Winter Feast 2023",
    desc: '"Supplying a moon\'s worth of rations to the Northlands feral colony."',
    cost: "1,200 GP",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRn5lSwzsaljE7uB0l_IWEerHtBJHWqB_wRo61K4j0_hrAfzZ7oksMauMg1e7BMhhgcF4iS8R8DYlCfm5bZOXaS2BmuHWsZzacufniqQkH-hcLaQ5wIIrzMUlOsbFAbjyENrGSI_z4jxhMc-KZggBuB_MU9-qf8OvPiSWnACQm8gaJZGrE6jXcy94i9Cqx6cRpY9Dl-Twse9LFnfd2-1rvovqixC_51SurP7VWCsafWQCLoRUg4JoDoM02b1O09CzmamWF-uou-GV",
  },
];

export default function Treasury() {
  return (
    <main className="mx-auto min-w-0 max-w-5xl space-y-8 px-margin-mobile py-8 pb-12 font-body-md md:px-margin-desktop md:pb-16">
      <section className="gold-border wood-frame parchment-bg relative overflow-hidden rounded-lg p-8 text-center">
        <div className="scroll-edge absolute left-0 top-0 h-4 w-full" />
        <h2 className="mb-2 font-display-lg uppercase tracking-tighter text-display-lg text-primary">
          The Royal Treasury
        </h2>
        <p className="mx-auto max-w-2xl font-body-lg italic text-body-lg text-on-surface-variant">
          &quot;Behold the ledger of PetQuest, where every coin is a sword against hunger and
          every gem a shield for the weak.&quot;
        </p>
        <div className="mt-6 flex justify-center gap-8">
          <div className="flex flex-col items-center">
            <span className="font-label-sm uppercase text-primary text-label-sm">
              Total Allocated
            </span>
            <span className="font-headline-md text-headline-md text-on-background">
              14,250 GP
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-label-sm uppercase text-primary text-label-sm">
              Active Missions
            </span>
            <span className="font-headline-md text-headline-md text-on-background">12</span>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="wood-frame parchment-bg flex flex-col rounded-xl p-6 md:col-span-8">
          <h3 className="mb-4 flex items-center gap-2 font-headline-md text-headline-md text-on-surface">
            <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
            Allocation Ledger
          </h3>
          <div className="grid flex-grow grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="relative flex aspect-square w-full max-w-xs items-center justify-center justify-self-center">
              <svg
                className="h-full w-full -rotate-90"
                viewBox="0 0 100 100"
                aria-hidden
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#3b6934"
                  strokeWidth="20"
                  strokeDasharray="100.5 150.5"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#ba1a1a"
                  strokeWidth="20"
                  strokeDasharray="75.4 175.6"
                  strokeDashoffset="-100.5"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#685e3e"
                  strokeWidth="20"
                  strokeDasharray="50.3 200.7"
                  strokeDashoffset="-175.9"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#735c00"
                  strokeWidth="20"
                  strokeDasharray="25.1 225.9"
                  strokeDashoffset="-226.2"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined text-4xl text-primary">map</span>
                <span className="font-label-sm text-label-sm">KINGDOM FUNDS</span>
              </div>
            </div>
            <div className="space-y-4">
              {[
                ["bg-secondary", "Shelter Support (40%)", "Gold for structural repairs and staffing."],
                ["bg-error", "Emergency Veterinary Care (30%)", "Healing potions and medical scrolls."],
                ["bg-primary", "Food and Supplies (20%)", "Rations for the hungry animal guild."],
                ["bg-tertiary", "Rehoming Programs (10%)", "Guidance for pets finding new realms."],
              ].map(([dot, title, sub]) => (
                <div key={title} className="flex items-center gap-3">
                  <div className={`h-4 w-4 rounded-sm ${dot}`} />
                  <div className="min-w-0 flex-grow">
                    <p className="font-body-md font-bold">{title}</p>
                    <p className="text-sm opacity-70">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="wood-frame parchment-bg rounded-xl p-6 md:col-span-4">
          <h3 className="mb-4 font-headline-md text-headline-md text-on-surface">
            Relics of Impact
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["medical_services", "Healed", "1.2k", "text-secondary"],
              ["nutrition", "Rations", "50k", "text-tertiary"],
              ["home", "Shelters", "84", "text-primary"],
              ["celebration", "Homes", "312", "text-secondary-container"],
            ].map(([icon, label, val, color]) => (
              <div
                key={label}
                className="inner-bevel flex aspect-square flex-col items-center justify-center border border-primary bg-surface-container-low p-2 text-center transition-colors group-hover:bg-primary-container hover:bg-primary-container"
              >
                <span className={`material-symbols-outlined mb-1 text-3xl ${color}`}>
                  {icon}
                </span>
                <span className="font-label-sm text-xs uppercase">{label}</span>
                <span className="font-bold text-headline-md">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section>
        <h3 className="mb-6 flex items-center gap-2 font-headline-md text-headline-md text-on-background">
          <span className="material-symbols-outlined text-primary">history_edu</span>
          Historical Impact Archives
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {MISSIONS.map((m) => (
            <div
              key={m.title}
              className="gold-border group overflow-hidden rounded-lg parchment-bg"
            >
              <div className="relative h-32 w-full">
                <Image
                  src={m.img}
                  alt=""
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute right-2 top-2 rounded bg-secondary px-2 py-1 text-xs font-bold uppercase tracking-widest text-on-secondary">
                  Completed
                </div>
              </div>
              <div className="border-t-2 border-primary p-4">
                <h4 className="mb-1 font-headline-md text-body-lg text-on-surface">{m.title}</h4>
                <p className="mb-3 font-body-md text-sm italic text-on-surface-variant">{m.desc}</p>
                <div className="flex items-center justify-between text-primary">
                  <span className="font-label-sm">COST: {m.cost}</span>
                  <span className="material-symbols-outlined">verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-center pt-8">
        <Link
          href="/quests/dog-park"
          className="inner-bevel flex items-center gap-3 rounded-sm border-2 border-[#D4AF37] bg-[#23501e] px-8 py-4 font-bold uppercase text-white shadow-xl transition-transform active:scale-95"
        >
          <span className="material-symbols-outlined">auto_awesome</span>
          Contribute to the Treasury
        </Link>
      </div>
    </main>
  );
}
