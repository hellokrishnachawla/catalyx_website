import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="py-16">
      <ContactHero />
      <ContactSection />
    </main>
  );
}