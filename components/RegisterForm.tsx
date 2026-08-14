"use client";

import Link from "next/link";
import { useId } from "react";
import Image from "next/image";
import { registerPasswordSchema } from "@utils/registerPasswordSchema";

export default function RegisterForm({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  confirm,
  setConfirm,
  familiarName,
  setFamiliarName,
  onSubmit,
  ToastContainer,
  isLoading,
  showPassword,
  setShowPassword,
  showConfirm,
  setShowConfirm,
}: {
  username: string;
  setUsername: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  password: string;
  setPassword: (v: string) => void;
  confirm: string;
  setConfirm: (v: string) => void;
  familiarName: string;
  setFamiliarName: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  ToastContainer: React.ReactNode;
  isLoading: boolean;
  showPassword: boolean;
  setShowPassword: (v: boolean) => void;
  showConfirm: boolean;
  setShowConfirm: (v: boolean) => void;
}) {
  const passwordHintId = useId();
  const confirmHintId = useId();
  const validationResult = registerPasswordSchema.safeParse({
    passwordz: password,
    confirmz: confirm,
  });
  const validationIssue =
    password || confirm
      ? validationResult.success
        ? undefined
        : validationResult.error.errors[0]
      : undefined;
  const isPassValid = validationIssue?.path[0] !== "passwordz";
  const isConfirmValid = validationIssue?.path[0] !== "confirmz";
  const validationError = validationIssue?.message ?? "";

  const canSubmit =
    username.trim().length > 0 &&
    email.trim().length > 0 &&
    password.length > 0 &&
    confirm.length > 0 &&
    !validationError &&
    isPassValid &&
    isConfirmValid;

  const passErrId = !isPassValid && password && validationError ? passwordHintId : undefined;
  const confirmErrId = !isConfirmValid && confirm && validationError ? confirmHintId : undefined;

  return (
    <div className="flex min-h-[max(884px,100dvh)] items-center justify-center bg-background p-gutter font-body-md text-on-background">
      <main className="wood-border relative w-full max-w-2xl overflow-hidden rounded-lg bg-[#5d4037] p-2">
        <div className="auth-register-hero pointer-events-none absolute inset-0 overflow-hidden opacity-20" aria-hidden>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUr8qZobvKUGStzQXwVJQSsijR35d26NdwNG2YMYq2LZlHxF-SbY5EkVbJzhr6_uJjCAalhXhoXCN7OIzc341I4j4J6oFuOHfdA-Jd1FoKNzb1rGif8Bl_ZJ35M7CwbeU5ZJod29oxEIqQNO5PycCtxI8XM-aKiLC2nOnRj7StyZLC3T234zSk6miUagu0h9esEFnUSwuy0eszLXF_OK8n0992hovjI5LBz9R4skK5qfscLX3pkFT4NmsY7--7rzieTZDFiAXFTSsP"
            alt=""
            fill
            className="object-cover"
            sizes="672px"
            priority
            unoptimized
          />
        </div>

        <section className="parchment-texture-alt relative z-10 flex flex-col items-center rounded border-2 border-[#d4c69f] px-6 py-10 md:px-12 md:py-16">
          <div className="absolute left-4 top-4 h-12 w-12 border-l-2 border-t-2 border-primary-fixed-dim opacity-40" aria-hidden />
          <div className="absolute right-4 top-4 h-12 w-12 border-r-2 border-t-2 border-primary-fixed-dim opacity-40" aria-hidden />
          <div className="absolute bottom-4 left-4 h-12 w-12 border-b-2 border-l-2 border-primary-fixed-dim opacity-40" aria-hidden />
          <div className="absolute bottom-4 right-4 h-12 w-12 border-b-2 border-r-2 border-primary-fixed-dim opacity-40" aria-hidden />

          <header className="mb-10 text-center">
            <span className="material-symbols-outlined mb-4 block text-5xl text-primary" aria-hidden>
              castle
            </span>
            <h1 className="mb-2 font-headline-md uppercase tracking-tight text-primary text-display-lg-mobile md:text-display-lg">
              Create your account
            </h1>
            <p className="mx-auto max-w-md text-body-lg leading-relaxed text-on-surface">
              Join the community and register your companion.
            </p>
          </header>

          <form className="w-full max-w-md space-y-6" onSubmit={onSubmit} noValidate>
            <div className="space-y-1">
              <label
                htmlFor="register-username"
                className="ml-2 block text-sm font-semibold uppercase tracking-wide text-on-primary-fixed"
              >
                Display name
              </label>
              <div className="group relative">
                <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-primary" aria-hidden>
                  edit_note
                </span>
                <input
                  id="register-username"
                  className="inner-bevel w-full rounded-lg border-2 border-outline-variant bg-primary-container py-3 pl-10 pr-4 font-body-md text-body-md text-on-surface transition-all focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  placeholder="How you appear to other players"
                  type="text"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  aria-required="true"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="register-email"
                className="ml-2 block text-sm font-semibold uppercase tracking-wide text-on-primary-fixed"
              >
                Email
              </label>
              <div className="relative">
                <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-primary" aria-hidden>
                  mail
                </span>
                <input
                  id="register-email"
                  className="inner-bevel w-full rounded-lg border-2 border-outline-variant bg-primary-container py-3 pl-10 pr-4 font-body-md text-body-md text-on-surface transition-all focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
              <label
                htmlFor="register-password"
                className="ml-2 block text-sm font-semibold uppercase tracking-wide text-on-primary-fixed"
              >
                Password
              </label>
              <div className="relative">
                <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-primary" aria-hidden>
                  key
                </span>
                <input
                  id="register-password"
                  className="inner-bevel w-full rounded-lg border-2 border-outline-variant bg-primary-container py-3 pl-10 pr-10 font-body-md text-body-md text-on-surface transition-all focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-required="true"
                  aria-invalid={!isPassValid && !!password}
                  aria-describedby={passErrId}
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-outline hover:text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                >
                  <span className="material-symbols-outlined text-[20px]" aria-hidden>
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
              {!isPassValid && password ? (
                <p id={passwordHintId} className="ml-2 text-sm text-error" role="alert">
                  {validationError}
                </p>
              ) : null}
            </div>

            <div className="space-y-1">
              <label
                htmlFor="register-confirm-password"
                className="ml-2 block text-sm font-semibold uppercase tracking-wide text-on-primary-fixed"
              >
                Confirm password
              </label>
              <div className="relative">
                <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-primary" aria-hidden>
                  key
                </span>
                <input
                  id="register-confirm-password"
                  className="inner-bevel w-full rounded-lg border-2 border-outline-variant bg-primary-container py-3 pl-10 pr-10 font-body-md text-body-md text-on-surface transition-all focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  placeholder="••••••••"
                  type={showConfirm ? "text" : "password"}
                  autoComplete="new-password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                  aria-required="true"
                  aria-invalid={!isConfirmValid && !!confirm}
                  aria-describedby={confirmErrId}
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-outline hover:text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  onClick={() => setShowConfirm(!showConfirm)}
                  aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
                  aria-pressed={showConfirm}
                >
                  <span className="material-symbols-outlined text-[20px]" aria-hidden>
                    {showConfirm ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
              {!isConfirmValid && confirm ? (
                <p id={confirmHintId} className="ml-2 text-sm text-error" role="alert">
                  {validationError}
                </p>
              ) : null}
            </div>

            <div className="space-y-1">
              <label
                htmlFor="register-familiar"
                className="ml-2 block text-sm font-semibold uppercase tracking-wide text-on-primary-fixed"
              >
                Primary companion name{" "}
                <span className="font-normal normal-case text-on-surface">(optional)</span>
              </label>
              <div className="relative">
                <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-primary" aria-hidden>
                  pets
                </span>
                <input
                  id="register-familiar"
                  className="inner-bevel w-full rounded-lg border-2 border-outline-variant bg-primary-container py-3 pl-10 pr-4 font-body-md text-body-md text-on-surface transition-all focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  placeholder="Your pet or familiar"
                  type="text"
                  autoComplete="off"
                  value={familiarName}
                  onChange={(e) => setFamiliarName(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !canSubmit}
              className="w-full rounded-lg border-b-4 border-[#1b3318] bg-secondary py-4 font-headline-md uppercase tracking-wider text-on-secondary shadow-lg transition-all hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-secondary active:translate-y-1 active:border-b-0 disabled:opacity-50 text-headline-md"
            >
              {isLoading ? "Creating account…" : "Create account"}
            </button>
          </form>

          <footer className="mt-10 w-full max-w-xs border-t-2 border-outline-variant pt-6 text-center">
            <Link
              href="/login"
              className="group inline-flex items-center justify-center gap-1 text-body-md text-primary transition-colors hover:text-secondary-fixed-dim focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span>Already have an account?</span>
              <span className="font-bold underline decoration-2 underline-offset-4">Sign in</span>
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1" aria-hidden>
                arrow_forward
              </span>
            </Link>
          </footer>

          {ToastContainer}
        </section>
      </main>
    </div>
  );
}
