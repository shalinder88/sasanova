import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Software Stack — Sasanova",
  description:
    "Track your SaaS stack, monitor pricing changes, and find optimization opportunities. Your personal software dashboard.",
  robots: { index: false, follow: false },
};

export default function MyStackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
