import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Cost Calculator — Compare Real Pricing",
  description:
    "Calculate and compare SaaS pricing across categories. Estimate switching savings, build your ideal tool stack on budget, and find the cheapest option for your team size.",
  alternates: {
    canonical: "https://sasanova.com/calculate",
  },
  openGraph: {
    title: "SaaS Cost Calculator — Compare Real Pricing",
    description:
      "Calculate and compare SaaS pricing across categories. Estimate switching savings and build your ideal tool stack on budget.",
    url: "https://sasanova.com/calculate",
    images: [{ url: "/og/default", width: 1200, height: 630 }],
  },
};

export default function CalculateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
