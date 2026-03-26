import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Stack Audit Report",
  description: "See how much you could save on your SaaS stack. Free audit report powered by Sasanova.",
  openGraph: {
    title: "SaaS Stack Audit Report",
    description: "See how much you could save on your SaaS stack. Free audit report powered by Sasanova.",
    url: "https://sasanova.com/audit/report",
  },
  robots: { index: true, follow: true },
};

export default function ReportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
