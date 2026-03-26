import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Stack Recommender — Personalized Tool Picks",
  description:
    "Tell us your team size, budget, and needs. Get a personalized software stack recommendation with real pricing, hidden costs, and upgrade triggers.",
  alternates: {
    canonical: "https://sasanova.com/recommend",
  },
  openGraph: {
    title: "Software Stack Recommender — Personalized Tool Picks",
    description:
      "Tell us your team size, budget, and needs. Get a personalized software stack with real pricing and hidden cost warnings.",
    url: "https://sasanova.com/recommend",
    images: [{ url: "/og/default", width: 1200, height: 630 }],
  },
};

export default function RecommendLayout({ children }: { children: React.ReactNode }) {
  return children;
}
