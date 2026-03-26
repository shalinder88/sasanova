import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Price Alerts — Get Notified When Tools Change Pricing | Sasanova",
  description:
    "Watch your favorite SaaS tools and get email alerts when they raise prices, change plans, or reduce free tiers. Free pricing change notifications.",
  alternates: { canonical: "https://sasanova.com/alerts" },
  openGraph: {
    title: "Price Alerts — Get Notified When Tools Change Pricing | Sasanova",
    description:
      "Watch your favorite SaaS tools and get email alerts when they raise prices, change plans, or reduce free tiers. Free pricing change notifications.",
    url: "https://sasanova.com/alerts",
    images: [{ url: "/og/default", width: 1200, height: 630 }],
  },
};

export default function AlertsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
