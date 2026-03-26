import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pro — Unlock the Full Power of Sasanova",
  description:
    "Save unlimited scenarios, get priority alerts, export reports, share with your team, and access the Sasanova API. Start your 14-day free trial.",
  alternates: {
    canonical: "https://sasanova.com/pro",
  },
  openGraph: {
    title: "Sasanova Pro — Stop Guessing. Start Saving.",
    description:
      "Everything you love about Sasanova, plus tools that save your team money every month. $9/month or $79/year.",
    url: "https://sasanova.com/pro",
    images: [{ url: "/og/default", width: 1200, height: 630 }],
  },
};

export default function ProLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
