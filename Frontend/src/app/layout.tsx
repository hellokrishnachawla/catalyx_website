import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Catalyx",
    default: "Catalyx — Automate Catalogue. Scale Commerce.",
  },
  description:
    "Catalyx builds the digital foundation for product-based businesses to automate catalogue management and scale commerce across all channels.",
  keywords: ["catalyx", "ecommerce", "catalogue", "product digitisation", "digital commerce"],
  icons: {
    icon: "/Main_Logo.svg",
    shortcut: "/Main_Logo.svg",
    apple: "/Main_Logo.svg",
  },
  openGraph: {
    title: "Catalyx — Automate Catalogue. Scale Commerce.",
    description:
      "Catalyx builds the digital foundation for product-based businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
