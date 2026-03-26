import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Price Alerts | Sasanova",
  description: "Manage your SaaS pricing watchlist. Remove tools or add more to your price change alerts.",
  robots: { index: false, follow: false },
};

export default function ManageAlertsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
