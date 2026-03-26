import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Is Zapier Worth the Price? (Depends on Volume)",
  description:
    "Zapier Professional costs $29.99/mo for 750 tasks. Make Core costs $10.59/mo for 10,000 ops. Zapier is worth it below 750 simple tasks; above that, Make saves money.",
};

export default function IsZapierWorthThePricePage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Is Zapier Worth the Price?</span>
          </nav>
        </div>
      </div>
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">Quick Answer</span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">Is Zapier Worth the Price?</h1>
          <p className="text-muted text-lg leading-relaxed">
            <strong className="text-foreground">Yes, if you run fewer than 750 simple (two-step) tasks per month
            and value ease of use over cost.</strong> Above 750 tasks, or with multi-step
            workflows, Make Core at $10.59/month provides 13x more capacity for 65% less money.
            Zapier Professional costs $29.99/month for 750 tasks. The value equation flips
            at scale.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>8 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-3">When Zapier IS Worth It</h2>
            <ul className="list-disc list-inside text-muted space-y-1.5 text-sm">
              <li>You need an integration that only Zapier supports (7,000+ apps vs Make 1,800+)</li>
              <li>Your team is non-technical and needs the simplest possible setup</li>
              <li>You run fewer than 750 simple tasks per month</li>
              <li>You value support quality and documentation over cost savings</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">When Zapier is NOT Worth It</h2>
            <ul className="list-disc list-inside text-muted space-y-1.5 text-sm">
              <li>You run 1,000+ tasks/month (Make Core $10.59/mo handles 10,000)</li>
              <li>You use multi-step workflows (5-step Zap = 5 tasks per run)</li>
              <li>You need complex branching logic (Make visual builder is stronger)</li>
              <li>Budget is a primary concern (Make is 65% cheaper at comparable volume)</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">The Caveat</h2>
            <p className="text-muted leading-relaxed">
              The multi-step task counting is the hidden cost. A Zapier workflow with 5 steps
              burns 5 tasks per run. Running that 100 times per month uses 500 tasks from your
              750-task Professional plan. On Make, the same scenario uses 500 operations from
              your 10,000-operation Core plan. The effective cost per workflow execution is
              roughly 13x higher on Zapier at this scale. Zapier Team at $103.50/month only
              includes 2,000 tasks, while Make Core at $10.59/month includes 10,000 operations.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Is Zapier Free worth starting with?</h3>
                <p className="text-sm text-muted">Yes. Zapier Free gives 100 tasks/month with two-step Zaps. Good for testing. Make Free gives 1,000 operations but only 2 active scenarios.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">How hard is it to switch from Zapier to Make?</h3>
                <p className="text-sm text-muted">Nothing auto-migrates. Each Zap must be manually rebuilt as a Make scenario. Budget 15 minutes to 3 hours per workflow depending on complexity.</p>
              </div>
            </div>
          </section>
          <RelatedLinks
            tools={["zapier", "make"]}
            comparisons={["zapier-vs-make"]}
            guides={["when-zapier-costs-more-than-make", "zapier-vs-make-detailed", "who-should-not-use-zapier", "automation-pricing-compared"]}
          />
        </div>
      </article>
    </>
  );
}
