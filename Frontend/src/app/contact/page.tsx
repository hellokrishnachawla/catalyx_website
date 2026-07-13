import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="flex-1 py-16 flex justify-center">
      <div className="w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <ContactHero />
        <ContactSection />
      </div>
    </main>
  );
}