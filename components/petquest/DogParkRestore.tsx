import Image from "next/image";

const IMG_BEFORE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBhRhWPpJlCqHtIH9cSiL2F3C0c1X7zKtZoQJwSX7bjDFn_LTqEJR0FBYHDxoCO2p0i4lF7CNk9EUsRQsV2zSunKZn9L-fqJ08W0zEQbvKygpjJsumq-6GjgKpRdwQYESspsZuKDPoWyCKNiBamKOLdlEfogidlfOr2c1Oax3JUxWaRk93FdAkFvXrIkvsk_WpJ8iQm0_4pF7_UsoU2ybBr8xAoW-7BjbZ_LvtivIGBcvLFyHAQcsQHUqFXBWpXrUOtxV_65-fkYVHW";
const IMG_AFTER =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC_bQYOPRz0kxOblvYXGZDiICVmjOkDY5b_OU011XB4pygGON-wxv9ir_XrncQI412EZMzOmokRUO8zuKO-rh3OhPIuziumYdlk-9sOd9QfkrZkEekKIR08iQjJ10sWxMeqjmFECpnv6oUUWpHRIVYnlshst7gmOqX2OC84YB6nmXSk6sU2dPSn7D0v4mbPCobIioeWJQrc0SBCvujxo2GBlZ_ZjODGUPmUrVUPD18cuD8rp8yV5n6AJH4iTJufgWIvxmqO9NYd4XZy";
const PARTNER_1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB9hRK0t78CW_Xoi5pynsMxqDBAezpmpG5V3ynLy6argsGFXQX9bIFocwCMBCzRMnv9_okEGXXqiW8svhekBdFqOVELOg3WK7iTeTJkcFtIVlKxytl9EMrjgM1mdYnH4ebSOrzBqhO0WWHK_1Qb9b7Xj9Cwc_Q7wmEr9CYBi-a5nlS9mCq2hDWJVtKVFD2nWlJlqoQZBo7vOGt2EuGf8VTNX_b6IuYtCnwYDIiRqn0OTxGEw2-_uT6QUzvUkk13a42oGkd4B9PSakcg";
const PARTNER_2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBb2FuYaZ7a6G3Yj563erxExHVWk8E9dVuT3M_7r3dCelObpcBnxvMrr80oFdK5-DbILYG83Uq9KpOixluz3rpjL53-ntRl5NwryF3qm0KhTJ78TmyzqNCp-lhO1EzmLWAoecncJgYHokZesT0HChgLN016OqV1FECjtJ0Ga7PrYkxNkDxWGkeFaTV2Ex8YzWQjoWmETI_kkuLOkltaB9-PgpvIyyFrlrOu2jGaDsvzZJy27qeKAgDVmJCGFpxKMW073uwrHX-yNSPA";

export default function DogParkRestore() {
  return (
    <div className="bg-wood pb-8 font-body-md text-body-md text-on-background">
      <main className="mx-auto min-w-0 max-w-5xl space-y-6 px-margin-mobile pt-6 sm:space-y-8 sm:pt-8 md:px-margin-desktop">
        <section className="wood-border relative overflow-hidden rounded-xl bg-[#2c160e]">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="relative h-64 md:h-96">
              <Image
                src={IMG_BEFORE}
                alt=""
                fill
                className="object-cover brightness-50 grayscale"
                sizes="(max-width:768px) 100vw, 50vw"
                priority
              />
              <div className="absolute left-4 top-4 rounded bg-error px-3 py-1 font-label-sm uppercase tracking-widest text-on-error">
                Current State
              </div>
            </div>
            <div className="relative h-64 border-l-4 border-[#D4AF37] md:h-96">
              <Image
                src={IMG_AFTER}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              <div className="absolute right-4 top-4 rounded bg-secondary px-3 py-1 font-label-sm uppercase tracking-widest text-on-secondary">
                Concept Art
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2c160e] to-transparent p-6">
            <h2 className="mb-2 font-headline-md text-headline-md text-white">
              Quest: Restore the East District Dog Park
            </h2>
            <div className="flex items-center gap-2 text-tertiary-fixed">
              <span className="material-symbols-outlined">location_on</span>
              <span className="font-label-sm text-label-sm">PORTLAND, OREGON</span>
            </div>
          </div>
        </section>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            <div className="parchment-bg wood-border relative rounded-lg p-panel-padding text-on-background">
              <span className="material-symbols-outlined absolute right-4 top-4 text-6xl opacity-20">
                history_edu
              </span>
              <h3 className="mb-4 border-b border-outline-variant pb-2 font-headline-md text-headline-md">
                The Tale of East District
              </h3>
              <p className="mb-4 font-body-lg leading-relaxed text-body-lg">
                Once a thriving hub of wagging tails and joyful barks, the East District
                park has fallen into shadow. Rust has overtaken the gates, and the
                once-green meadows are now but dust and brambles.
              </p>
              <p className="font-body-lg leading-relaxed text-body-lg">
                Local companions like &quot;Barnaby the Brave&quot; and &quot;Luna of the
                Light&quot; have nowhere to train or meet their fellow adventurers. This
                quest isn&apos;t just about fences and grass—it&apos;s about reclaiming a
                sanctuary for our loyal familiars. Every coin of gold contributed brings
                us closer to restoring the magic of this communal gathering ground.
              </p>
            </div>

            <div className="space-y-4 rounded-xl border-2 border-primary bg-surface-container p-6">
              <h3 className="flex items-center gap-2 font-headline-md text-headline-md">
                <span className="material-symbols-outlined text-secondary">assignment</span>
                Quest Log Updates
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 border-l-2 border-secondary-fixed-dim pb-4 pl-4">
                  <div className="mt-1 text-secondary-fixed-dim">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Blueprint Finalized</p>
                    <p className="text-sm opacity-70">
                      The grand architects have approved the agility course designs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-l-2 border-outline pb-4 pl-4">
                  <div className="mt-1 text-outline">
                    <span className="material-symbols-outlined">radio_button_checked</span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Material Gathering</p>
                    <p className="text-sm opacity-70">
                      Currently sourcing recycled lumber for the new &apos;High-Jump&apos;
                      hurdles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="gold-border space-y-6 rounded-xl p-6 parchment-bg">
              <div>
                <div className="mb-2 flex items-end justify-between">
                  <span className="font-label-sm uppercase tracking-tighter text-label-sm">
                    Funding Progress
                  </span>
                  <span className="font-headline-md text-headline-md text-secondary">82%</span>
                </div>
                <div className="inner-bevel h-6 w-full overflow-hidden rounded-full border border-outline bg-surface-variant">
                  <div className="flex h-full w-[82%] items-center justify-end bg-secondary px-2">
                    <span
                      className="material-symbols-outlined text-xs text-white"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      bolt
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-right font-label-sm opacity-80 text-label-sm">
                  $4,100 of $5,000 goal
                </p>
              </div>
              <button
                type="button"
                className="pressed-state flex w-full items-center justify-center gap-2 rounded-lg border-2 border-[#D4AF37] bg-[#1B3022] px-6 py-4 font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-[#23501e]"
              >
                <span className="material-symbols-outlined">payments</span>
                Contribute Gold
              </button>
              <div className="space-y-3 border-t border-outline-variant pt-4">
                <h4 className="font-label-sm uppercase text-primary text-label-sm">
                  Top Contributors
                </h4>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-tertiary-container font-bold text-on-tertiary-container">
                    S
                  </div>
                  <span className="font-body-md text-body-md">Sir Fluffington III</span>
                  <span className="ml-auto font-bold text-secondary">500G</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-primary-container font-bold text-on-primary-container">
                    M
                  </div>
                  <span className="font-body-md text-body-md">Misty&apos;s Mom</span>
                  <span className="ml-auto font-bold text-secondary">250G</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 rounded-xl border-2 border-primary bg-surface-container-low p-6">
              <h3 className="text-center font-label-sm uppercase tracking-widest text-on-surface-variant text-label-sm">
                Quest Partners
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 rounded border border-outline-variant bg-white p-3 shadow-sm">
                  <Image
                    src={PARTNER_1}
                    alt="City of Portland"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                  <span className="text-sm font-bold">City of Portland</span>
                </div>
                <div className="flex items-center gap-4 rounded border border-outline-variant bg-white p-3 shadow-sm">
                  <Image
                    src={PARTNER_2}
                    alt="Paws and Play"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                  <span className="text-sm font-bold">Paws &amp; Play Non-profit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
