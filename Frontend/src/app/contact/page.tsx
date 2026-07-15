import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="flex flex-1 justify-center px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-8">
      <div className="w-full max-w-[1020px]">
        <ContactHero />
        <ContactSection />
      </div>
    </main>
  );
}