import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Stack Audit — Find Where You're Overpaying",
  description:
    "Input your current software stack and get a detailed audit report showing where you're overpaying, cheaper alternatives, exact annual savings, and migration difficulty scores.",
  alternates: {
    canonical: "https://sasanova.com/audit",
  },
  openGraph: {
    title: "SaaS Stack Audit — Find Where You're Overpaying",
    description:
      "Audit your SaaS stack. Find hidden waste, discover cheaper alternatives, and calculate your exact annual savings.",
    url: "https://sasanova.com/audit",
    images: [{ url: "/og/default", width: 1200, height: 630 }],
  },
};

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
