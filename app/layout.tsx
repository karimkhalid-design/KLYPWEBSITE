import type { Metadata } from "next";
import { klyp } from "@/src/config/klyp";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || klyp.siteUrl;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: "KLYP — Capture Your Best Gaming Moments", template: "%s — KLYP" },
  description: "KLYP is a lightweight Windows gaming clip recorder built to capture the moments worth keeping.",
  keywords: ["gaming clip recorder", "instant replay", "Windows gaming", "game capture", "KLYP"],
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  openGraph: {
    type: "website",
    siteName: "KLYP",
    title: "KLYP — Capture Your Best Gaming Moments",
    description: "A lightweight Windows gaming clip recorder built to capture the moments worth keeping.",
    images: siteUrl ? [{ url: "/media/generated/og-klyp.webp", width: 1733, height: 908, alt: "Capture Your Best Gaming Moments — KLYP for Windows" }] : undefined,
  },
  twitter: { card: "summary_large_image", title: "KLYP — Capture Your Best Gaming Moments", description: "Capture the moments worth keeping.", images: siteUrl ? ["/media/generated/og-klyp.webp"] : undefined },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
