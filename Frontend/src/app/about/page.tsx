import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import BeforeCommerce from "@/components/about/BeforeCommerce";
import OurMission from "@/components/about/OurMission";
import VisionBanner from "@/components/about/VisionBanner";
import HowDifferent from "@/components/about/HowDifferent";
import MeetTeamBanner from "@/components/about/MeetTeamBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Catalyx is building the digital foundation for product-based businesses to automate catalogue management and scale commerce.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <BeforeCommerce />
      <OurMission />
      <VisionBanner />
      <HowDifferent />
      <MeetTeamBanner />
    </>
  );
}
