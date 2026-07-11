import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ChallengesSection from "@/components/home/ChallengesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import DesignedForSection from "@/components/home/DesignedForSection";

export const metadata: Metadata = {
  title: "Catalyx — Automate Catalogue. Scale Commerce.",
  description:
    "Catalyx gives product-based businesses the tools to digitise catalogues, manage assets, and sell everywhere — from one platform.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ChallengesSection />
      <HowItWorksSection />
      <DesignedForSection />
    </>
  );
}
