import type { Metadata } from "next";
import MarketplaceContent from "@components/townsquare/MarketplaceContent";

export const metadata: Metadata = {
  title: "Marketplace | The Town Square",
  description: "Hire trainers and browse specialists for your familiar.",
};

export default function MarketplacePage() {
  return <MarketplaceContent />;
}
