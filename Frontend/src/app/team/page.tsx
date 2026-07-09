import type { Metadata } from "next";

import TeamHero from "@/components/team/TeamHero";
import TeamMembers from "@/components/team/TeamMembers";
import "./team.css";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the people building Catalyx.",
};

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamMembers />
    </>
  );
}