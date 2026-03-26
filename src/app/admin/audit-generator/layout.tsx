import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit Report Generator | Sasanova Admin",
  robots: { index: false, follow: false },
};

export default function AuditGeneratorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
