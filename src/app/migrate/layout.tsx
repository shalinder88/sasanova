import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Migration Cost Estimator — Know Before You Switch",
  description:
    "Calculate the true cost of switching between software tools. Includes time, data migration, productivity loss, break-even analysis, and risk assessment.",
  alternates: { canonical: "https://sasanova.com/migrate" },
  openGraph: {
    title: "Migration Cost Estimator | Sasanova",
    description:
      "Calculate the real cost of switching tools — not just subscription difference, but time, effort, and risk.",
    images: [{ url: "/og/default", width: 1200, height: 630 }],
  },
};

export default function MigrateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
