import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert SaaS Stack Audit — Find Where You're Overpaying",
  description:
    "Our team manually audits your SaaS stack against 148+ alternatives. Get a detailed savings plan with exact pricing, switching costs, and a prioritized migration roadmap. 48-hour delivery. Money-back guarantee.",
  alternates: {
    canonical: "https://sasanova.com/services",
  },
  openGraph: {
    title: "Expert SaaS Stack Audit — Find Where You're Overpaying",
    description:
      "Manual SaaS stack audit by experts. Exact savings, switching costs, and migration roadmap delivered in 48 hours. Starting at $299.",
    url: "https://sasanova.com/services",
    images: [{ url: "/og/default", width: 1200, height: 630 }],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
