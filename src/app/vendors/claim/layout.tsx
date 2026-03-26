import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claim Your Vendor Profile | Sasanova",
  description:
    "Are you a SaaS vendor? Claim your profile on Sasanova to correct pricing, update features, and earn a Vendor Verified badge.",
  openGraph: {
    title: "Claim Your Vendor Profile | Sasanova",
    description:
      "Are you a SaaS vendor? Claim your profile on Sasanova to correct pricing, update features, and earn a Vendor Verified badge.",
    url: "https://sasanova.com/vendors/claim",
    images: [{ url: "/og/default", width: 1200, height: 630 }],
  },
};

export default function VendorClaimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
