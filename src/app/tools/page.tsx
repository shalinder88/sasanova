import type { Metadata } from "next";
import { categories } from "@/data/tools";
import { getToolsHybrid } from "@/lib/data-layer";
import ToolsDirectoryClient from "./ToolsDirectoryClient";

export const metadata: Metadata = {
  title: "All Tools — Software Directory",
  description:
    "Browse and compare software tools with honest multi-axis scoring, normalized pricing, and evidence-backed reviews.",
  alternates: {
    canonical: "https://sasanova.com/tools",
  },
  openGraph: {
    title: "All Tools — Sasanova Software Directory",
    description:
      "Browse and compare software tools with honest multi-axis scoring and normalized pricing.",
  },
};

export default async function ToolsPage() {
  const tools = await getToolsHybrid();

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
            Directory
          </p>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-2">
            All Tools
          </h1>
          <p className="text-sm text-muted max-w-2xl mb-6">
            Browse {tools.length} software tools with honest, multi-axis
            scoring and normalized pricing data.
          </p>

          <ToolsDirectoryClient tools={tools} categories={categories} />
        </div>
      </section>
    </>
  );
}
