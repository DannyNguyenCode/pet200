"use client";

import RealmAppHeader from "./RealmAppHeader";
import UnifiedRealmNav from "./UnifiedRealmNav";

/** Shared fixed header + realm link strip for the whole app. */
export default function RealmTopChrome() {
  return (
    <>
      <RealmAppHeader />
      <UnifiedRealmNav />
    </>
  );
}
