"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const REMEMBER_KEY = "realm_remember_email";

/** Same hero art as register for a consistent auth shell. */
const AUTH_REGISTER_HERO_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBUr8qZobvKUGStzQXwVJQSsijR35d26NdwNG2YMYq2LZlHxF-SbY5EkVbJzhr6_uJjCAalhXhoXCN7OIzc341I4j4J6oFuOHfdA-Jd1FoKNzb1rGif8Bl_ZJ35M7CwbeU5ZJod29oxEIqQNO5PycCtxI8XM-aKiLC2nOnRj7StyZLC3T234zSk6miUagu0h9esEFnUSwuy0eszLXF_OK8n0992hovjI5LBz9R4skK5qfscLX3pkFT4NmsY7--7rzieTZDFiAXFTSsP";

function firstMessage(message?: string | string[]) {
  if (Array.isArray(message)) return message[0];
  return message;
}

export default function LoginForm({
  message,
}: {
  message?: string | string[];
}) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const saved = localStorage.getItem(REMEMBER_KEY);
      if (saved) setEmail(saved);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const m = firstMessage(message);
    if (m === "SR") toast.success("Successfully registered — enter the realm.");
    if (m === "SUP") toast.success("Password updated — you may sign in again.");
  }, [message]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (res?.error === "CredentialsSignin") {
        toast.error("Those runes did not match our archives.");
        return;
      }
      if (res?.status === 200 && !res.error) {
        if (remember) localStorage.setItem(REMEMBER_KEY, email);
        else localStorage.removeItem(REMEMBER_KEY);
        router.push("/profile/SLI");
      } else {
        toast.error("Could not open the gates — try again.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-[max(884px,100dvh)] items-center justify-center bg-background p-gutter font-body-md text-on-background">
      <main className="wood-border relative w-full max-w-2xl overflow-hidden rounded-lg bg-[#5d4037] p-2">
        <div
          className="auth-register-hero pointer-events-none absolute inset-0 overflow-hidden opacity-20"
          aria-hidden
        >
          <Image
            src={AUTH_REGISTER_HERO_SRC}
            alt=""
            fill
            className="object-cover"
            sizes="672px"
            priority
            unoptimized
          />
        </div>

        <section
          aria-label="Sign-in form"
          className="parchment-texture-alt relative z-10 flex flex-col items-center rounded border-2 border-[#d4c69f] px-6 py-10 md:px-12 md:py-16"
        >
          <div
            className="absolute left-4 top-4 h-12 w-12 border-l-2 border-t-2 border-primary-fixed-dim opacity-40"
            aria-hidden
          />
          <div
            className="absolute right-4 top-4 h-12 w-12 border-r-2 border-t-2 border-primary-fixed-dim opacity-40"
            aria-hidden
          />
          <div
            className="absolute bottom-4 left-4 h-12 w-12 border-b-2 border-l-2 border-primary-fixed-dim opacity-40"
            aria-hidden
          />
          <div
            className="absolute bottom-4 right-4 h-12 w-12 border-b-2 border-r-2 border-primary-fixed-dim opacity-40"
            aria-hidden
          />

          <header className="mb-10 text-center">
            <span className="material-symbols-outlined mb-4 block text-5xl text-primary" aria-hidden>
              castle
            </span>
            <p className="mb-1 font-display-lg uppercase tracking-widest text-primary text-display-lg-mobile md:text-display-lg">
              Familiar Quest
            </p>
            <h1 className="mb-2 font-headline-md uppercase tracking-tight text-primary text-display-lg-mobile md:text-display-lg">
              Sign in
            </h1>
            <p className="mx-auto max-w-md text-body-lg leading-relaxed text-on-surface">
              Return to the realm — enter the email and password for your account.
            </p>
          </header>

          <form className="w-full max-w-md space-y-6" onSubmit={onSubmit} noValidate>
            <div className="space-y-1">
              <label
                htmlFor="login-email"
                className="ml-2 block text-sm font-semibold uppercase tracking-wide text-on-primary-fixed"
              >
                Email
                <span className="sr-only">(required)</span>
              </label>
              <div className="relative">
                <span
                  className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-primary"
                  aria-hidden
                >
                  mail
                </span>
                <input
                  id="login-email"
                  className="inner-bevel h-14 w-full rounded-lg border-2 border-outline-variant bg-primary-container py-3 pl-10 pr-4 font-body-md text-body-md text-on-surface transition-all focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  placeholder="you@example.com"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-required="true"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-end justify-between gap-2">
                <label
                  htmlFor="login-password"
                  className="ml-2 block text-sm font-semibold uppercase tracking-wide text-on-primary-fixed"
                >
                  Password
                  <span className="sr-only">(required)</span>
                </label>
                <Link
                  href="/forgotpassword"
                  className="shrink-0 text-sm font-semibold text-tertiary underline decoration-2 underline-offset-2 outline-offset-4 hover:text-on-surface focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-tertiary"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <span
                  className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-primary"
                  aria-hidden
                >
                  key
                </span>
                <input
                  id="login-password"
                  className="inner-bevel h-14 w-full rounded-lg border-2 border-outline-variant bg-primary-container py-3 pl-10 pr-12 font-body-md text-body-md text-on-surface transition-all focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-required="true"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-outline hover:text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                >
                  <span className="material-symbols-outlined text-[20px]" aria-hidden>
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="login-remember"
                className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-outline text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label
                htmlFor="login-remember"
                className="cursor-pointer text-body-md leading-relaxed text-on-surface"
              >
                Remember my email on this device
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="auth-gold-double flex w-full items-center justify-center gap-4 rounded-lg bg-secondary py-5 font-headline-md uppercase text-on-secondary shadow-lg transition-all hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-secondary active:translate-y-1 active:shadow-sm disabled:opacity-60 text-headline-md"
              >
                <span className="material-symbols-outlined" aria-hidden>
                  shield
                </span>
                {submitting ? "Signing in…" : "Sign in"}
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                  aria-hidden
                >
                  swords
                </span>
              </button>
            </div>
          </form>

          <footer className="mt-10 w-full max-w-md border-t-2 border-outline-variant pt-6 text-center">
            <p className="font-body-md text-body-md text-on-surface">
              New here?{" "}
              <Link
                href="/register"
                className="font-bold text-secondary underline decoration-2 underline-offset-4 outline-offset-4 hover:text-tertiary focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                Create an account
              </Link>
            </p>
          </footer>

          <div className="mt-8 flex justify-center gap-6 text-primary opacity-50" aria-hidden>
            <span className="material-symbols-outlined">pets</span>
            <span className="material-symbols-outlined">map</span>
            <span className="material-symbols-outlined">history_edu</span>
          </div>

          <fieldset className="mt-10 w-full max-w-md border-t border-outline-variant/60 pt-6">
            <legend className="mx-auto mb-3 w-full text-center text-sm font-semibold uppercase tracking-wide text-on-surface">
              Or continue with
            </legend>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => signIn("google", { callbackUrl: "/", redirect: true })}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-outline bg-surface-container-low px-4 py-3 text-sm font-semibold uppercase tracking-wide text-on-surface transition-colors hover:bg-surface-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:flex-initial sm:min-w-[10rem]"
              >
                <span className="font-bold text-primary" aria-hidden>
                  G
                </span>
                Sign in with Google
              </button>
              <button
                type="button"
                onClick={() => signIn("github", { callbackUrl: "/", redirect: true })}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-outline bg-surface-container-low px-4 py-3 text-sm font-semibold uppercase tracking-wide text-on-surface transition-colors hover:bg-surface-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:flex-initial sm:min-w-[10rem]"
              >
                <span className="font-bold text-on-surface" aria-hidden>
                  GH
                </span>
                Sign in with GitHub
              </button>
            </div>
          </fieldset>
        </section>
      </main>
      <ToastContainer theme="dark" position="top-center" limit={3} />
    </div>
  );
}
