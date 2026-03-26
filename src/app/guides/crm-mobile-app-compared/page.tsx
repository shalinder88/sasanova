import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "CRM Mobile Apps Ranked: Which Actually Work on Your Phone?",
  description:
    "HubSpot, Pipedrive, Salesforce, Zoho, Close, and Freshsales mobile CRM apps compared. Pipeline views, offline access, calling features, and exact pricing for mobile-relevant tiers.",
};

export default function CrmMobileAppCompared() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">
              Guides
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">
              CRM Mobile Apps Compared
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              CRM
            </span>
            <span className="text-[11px] text-muted">15 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            CRM Mobile Apps Ranked: Which Actually Work on Your Phone?
          </h1>
          <p className="text-lg text-muted">
            Most CRM mobile apps are an afterthought &mdash; a shrunken version of the desktop UI that&apos;s painful to use. A few actually work well on mobile. This guide ranks HubSpot, Pipedrive, Salesforce, Zoho CRM, Close, and Freshsales mobile apps by what matters: pipeline view, deal updates, calling, and whether you&apos;d actually use it in the field.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Mobile App Comparison Table ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mobile App Feature Comparison</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">HubSpot</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Pipedrive</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Salesforce</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Zoho CRM</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Close</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Freshsales</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">iOS &amp; Android</td>
                  <td className="px-4 py-2.5 text-green-400">Both</td>
                  <td className="px-4 py-2.5 text-green-400">Both</td>
                  <td className="px-4 py-2.5 text-green-400">Both</td>
                  <td className="px-4 py-2.5 text-green-400">Both</td>
                  <td className="px-4 py-2.5 text-red-400">Web only</td>
                  <td className="px-4 py-2.5 text-green-400">Both</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Pipeline view on mobile</td>
                  <td className="px-4 py-2.5 text-green-400">Good (card view)</td>
                  <td className="px-4 py-2.5 text-green-400">Excellent (native drag)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Functional (list view)</td>
                  <td className="px-4 py-2.5 text-green-400">Good (kanban)</td>
                  <td className="px-4 py-2.5 text-red-400">No native app</td>
                  <td className="px-4 py-2.5 text-green-400">Good (card view)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Offline access</td>
                  <td className="px-4 py-2.5 text-yellow-400">Limited</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (contacts, deals)</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (configurable)</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (records)</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-yellow-400">Limited</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Built-in calling</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (Starter+)</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (Growth+)</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (via Dialer)</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (Standard+)</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (Power Dialer)</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (built-in phone)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Business card scanner</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (Einstein)</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Push notifications</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                  <td className="px-4 py-2.5 text-red-400">N/A</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Lowest tier with mobile</td>
                  <td className="px-4 py-2.5">Free ($0)</td>
                  <td className="px-4 py-2.5">Lite ($14/seat/mo)</td>
                  <td className="px-4 py-2.5">Starter Suite ($25/seat/mo)</td>
                  <td className="px-4 py-2.5">Free ($0, 3 users)</td>
                  <td className="px-4 py-2.5">N/A (web only)</td>
                  <td className="px-4 py-2.5">Free ($0, 3 users)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Rankings ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mobile App Rankings</h2>

          <h3 className="text-lg font-bold mt-6 mb-3">1. Pipedrive &mdash; Best Mobile Pipeline Experience</h3>
          <p className="text-muted mb-4">
            Pipedrive&apos;s mobile app is the best for pipeline-focused sales reps. The kanban pipeline view works natively with drag-and-drop on mobile, deal details are accessible in 2 taps, and offline access caches contacts and deals for field use. Available on Lite ($14/seat/mo) and up. Growth ($39/seat/mo) adds email sync and calling.
          </p>

          <h3 className="text-lg font-bold mt-6 mb-3">2. HubSpot &mdash; Best Free Mobile CRM</h3>
          <p className="text-muted mb-4">
            HubSpot&apos;s mobile app is the most fully-featured free CRM on mobile. Free tier ($0) includes contact management, deal tracking, tasks, and a business card scanner. Starter ($20/seat/mo) adds calling and removes branding. The app is polished and well-maintained on both iOS and Android.
          </p>

          <h3 className="text-lg font-bold mt-6 mb-3">3. Freshsales &mdash; Best Built-In Phone on Mobile</h3>
          <p className="text-muted mb-4">
            Freshsales stands out for its built-in phone on mobile, available even on Growth ($11/seat/mo). Call logging, AI contact scoring, and pipeline management work well on the app. Free tier ($0, 3 users) gives you basic mobile CRM without calling features.
          </p>

          <h3 className="text-lg font-bold mt-6 mb-3">4. Zoho CRM &mdash; Best Offline Access</h3>
          <p className="text-muted mb-4">
            Zoho&apos;s mobile app has the most robust offline access, letting you view and edit records without connectivity. Free ($0, 3 users) includes the mobile app. Standard ($20/seat/mo) and Professional ($35/seat/mo) unlock more features. The business card scanner is a useful field sales feature.
          </p>

          <h3 className="text-lg font-bold mt-6 mb-3">5. Salesforce &mdash; Powerful but Complex</h3>
          <p className="text-muted mb-4">
            Salesforce&apos;s mobile app mirrors the complexity of its desktop version. Configurable offline access and Einstein AI features are powerful but require admin setup. Starting at $25/seat/mo (Starter Suite). The learning curve on mobile mirrors the desktop &mdash; functional but not intuitive.
          </p>

          <h3 className="text-lg font-bold mt-6 mb-3">6. Close &mdash; No Native Mobile App</h3>
          <p className="text-muted mb-4">
            Close does not have a native mobile app. It&apos;s web-only, which means responsive browser access on mobile but no push notifications, offline access, or native pipeline view. Close is designed for inside sales teams working from desks, not field reps. Starting at Solo ($19/seat/mo).
          </p>

          {/* ── The Opinionated Verdict ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Opinionated Verdict</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">If mobile is critical (field sales):</strong> Pipedrive. Best pipeline view on mobile, offline access, and the app is genuinely usable for managing deals on the go. Lite at $14/seat/mo is the entry point.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">If you need free mobile CRM:</strong> HubSpot. The free tier gives you a polished mobile experience with contact management, deals, and a business card scanner.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">If you need mobile calling:</strong> Freshsales. Built-in phone on mobile starting at Growth ($11/seat/mo) is the cheapest option with integrated calling and call logging.
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">If you never leave your desk:</strong> Close. No mobile app, but the best inside sales CRM with built-in Power Dialer starting at Essentials ($49/seat/mo).
            </p>
          </div>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which CRM has the best mobile pipeline view?</h3>
                <p className="text-muted">Pipedrive. Its mobile kanban pipeline with drag-and-drop deal movement is the most intuitive mobile pipeline experience. HubSpot and Freshsales have good card-based views but are not as fluid as Pipedrive&apos;s.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Close have a mobile app?</h3>
                <p className="text-muted">No. Close is web-only with no native iOS or Android app. You can access Close through a mobile browser, but there are no push notifications, offline access, or native mobile features. Close is designed for inside sales teams working from computers.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which free CRM has the best mobile app?</h3>
                <p className="text-muted">HubSpot Free. It gives you contact management, deals, tasks, and a business card scanner on both iOS and Android for $0. Zoho Free and Freshsales Free also offer mobile apps but are limited to 3 users.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Do I need offline access in my CRM?</h3>
                <p className="text-muted">Only if your sales team works in the field without reliable internet (construction, real estate, trade shows). For inside sales and office-based teams, offline access is a nice-to-have that rarely matters in practice.</p>
              </div>
            </div>
          </section>

          {/* ── Related Guides ── */}
          <div className="border-t border-border mt-12 pt-8">
            <h2 className="text-lg font-bold mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/guides/crm-automation-compared"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">CRM Automation Compared</span>
                <span className="block text-xs text-muted mt-1">What you can automate at each price tier</span>
              </Link>
              <Link
                href="/guides/crm-reporting-features-ranked"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">CRM Reporting Features Ranked</span>
                <span className="block text-xs text-muted mt-1">Reporting and analytics across 6 platforms</span>
              </Link>
              <Link
                href="/guides/best-crm-sales-teams"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">CRM for Sales Teams</span>
                <span className="block text-xs text-muted mt-1">HubSpot vs Pipedrive vs Close for 5-25 reps</span>
              </Link>
              <Link
                href="/guides/best-crm-real-estate"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">CRM for Real Estate</span>
                <span className="block text-xs text-muted mt-1">Mobile-first CRM for agents in the field</span>
              </Link>
            </div>
          </div>

          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "salesforce", "zoho-crm", "close-crm", "freshsales"]}
            comparisons={[]}
            guides={[
              "crm-automation-compared",
              "crm-reporting-features-ranked",
              "best-crm-sales-teams",
            ]}
          />
        </div>
      </article>
    </>
  );
}
