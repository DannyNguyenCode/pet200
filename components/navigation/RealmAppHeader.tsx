"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const DEFAULT_AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAFTskxQ77JmKPVrFPf91-HK5x8B0NZXH1MMdBBGFlBMq3-pwmO95X5SFHkITCf3RUV2DKgk025DKuDhMlhGHa4XjOnL1aykUkF5YkTM8VrMyM08fjzDHx8TzjGEJPwQJ4Ff319iTNH0jSGdT-iNYbaPTdkTumb6HpPkNNRRHVl9WN1-S6SFcSHlq7Ez9YH14Nqijqyk_eHkLYYn-Xvc7Sg4Af1zz54Aq3VeaZ2OUyYHMOFxXwY-MKURRfBnY7RQOb5-mQDxnU1uQia";

/** Fixed app bar: avatar, title, auth actions. Used on every page via root layout. */
export default function RealmAppHeader() {
  const { data: session, status } = useSession();

  return (
    <header className="fixed left-0 top-0 z-50 flex h-16 w-full min-w-0 items-center justify-between gap-2 border-b-4 border-primary bg-primary-container px-3 sm:px-margin-mobile md:px-margin-desktop">
      <Link href="/" className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-primary shadow-inner">
          <Image
            src={(session?.user?.image as string) || DEFAULT_AVATAR}
            alt=""
            width={40}
            height={40}
            className="h-full w-full object-cover"
            unoptimized={Boolean(session?.user?.image)}
          />
        </div>
        <h1 className="truncate text-sm font-bold uppercase tracking-wide text-primary sm:text-headline-md-mobile md:font-headline-md md:text-headline-md">
          The Town Square
        </h1>
      </Link>
      <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
        {status === "authenticated" ? (
          <>
            <Link
              href="/profile"
              className="material-symbols-outlined rounded-lg p-2 text-primary transition-colors hover:bg-surface-variant"
              title="Profile"
            >
              settings
            </Link>
            <button
              type="button"
              title="Sign out"
              onClick={() => signOut({ callbackUrl: "/", redirect: true })}
              className="material-symbols-outlined rounded-lg p-2 text-primary transition-colors hover:bg-surface-variant"
            >
              logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="rounded-lg px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary hover:bg-surface-variant sm:px-3 sm:py-2 sm:text-sm"
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="rounded-lg px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-on-secondary bg-secondary hover:brightness-110 sm:px-3 sm:py-2 sm:text-sm"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
