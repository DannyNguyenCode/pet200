"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

import TownPetCodex from "./TownPetCodex";

export default function PetCodexModal({ petId }: { petId: string }) {
  const router = useRouter();
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    closeRef.current?.focus();
  }, [petId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-inverse-surface/70 p-4 backdrop-blur-sm md:items-center md:p-8"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="pet-codex-title"
        className="relative my-4 w-full min-w-0 max-w-5xl rounded-lg border-4 border-[#D4AF37] bg-wood shadow-2xl md:my-0"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#D4AF37] bg-secondary text-on-secondary shadow-md transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-secondary"
          aria-label="Close pet profile"
        >
          <span className="material-symbols-outlined text-2xl" aria-hidden>
            close
          </span>
        </button>
        <div className="max-h-[min(92dvh,960px)] overflow-y-auto overflow-x-hidden rounded-[2px]">
          <TownPetCodex petId={petId} presentation="modal" />
        </div>
      </div>
    </div>
  );
}
