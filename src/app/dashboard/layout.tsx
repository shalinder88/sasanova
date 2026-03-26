import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your SaaS Dashboard",
  description:
    "Track your SaaS spending, set budgets, and get optimization alerts — all in one place.",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
