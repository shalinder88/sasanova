import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Audit Reports | Sasanova Admin",
  robots: { index: false, follow: false },
};

export default function ExpertAuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
