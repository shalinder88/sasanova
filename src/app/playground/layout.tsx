import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tool Comparison Playground — Compare Any Tools Side by Side",
  description:
    "Drag-and-drop or select 2-4 software tools and compare them side by side in real time. Scores, pricing, features, and more — all auto-generated.",
  alternates: {
    canonical: "https://sasanova.com/playground",
  },
  openGraph: {
    title: "Tool Comparison Playground | Sasanova",
    description:
      "Select up to 4 tools and instantly compare scores, pricing, features, and more side by side.",
    url: "https://sasanova.com/playground",
    images: [{ url: "/og/default", width: 1200, height: 630 }],
  },
};

export default function PlaygroundLayout({ children }: { children: React.ReactNode }) {
  return children;
}
