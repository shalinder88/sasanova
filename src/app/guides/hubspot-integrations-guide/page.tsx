import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title:
    "HubSpot Integrations That Matter: What to Connect and What to Skip",
  description:
    "HubSpot connects to everything — but not everything is worth connecting. Native email with Gmail/Outlook, Zapier at $29.99/mo for middleware, Intercom at $39/seat for support, and which add-ons justify their cost.",
};

export default function HubspotIntegrationsGuide() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/guides"
              className="hover:text-accent transition-colors"
            >
              Guides
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">
              HubSpot Integrations Guide
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Integration Guide
            </span>
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            HubSpot Integrations That Matter: What to Connect and What to Skip
          </h1>
          <p className="text-lg text-muted">
            HubSpot&apos;s App Marketplace lists 1,700+ integrations. Most of
            them are noise. Here&apos;s what actually matters: which connections
            are native, which need middleware like Zapier ($29.99/mo) or Make
            ($10.59/mo), and which you should skip entirely.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* ── The Integration Decision Framework ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">
              Three Types of HubSpot Integrations
            </p>
            <ul className="text-sm text-muted space-y-1 list-none pl-0">
              <li>
                <strong className="text-foreground">Native (free):</strong>{" "}
                Built into HubSpot, no extra cost &mdash; Gmail, Outlook, Slack,
                Zoom
              </li>
              <li>
                <strong className="text-foreground">
                  Marketplace (free or paid):
                </strong>{" "}
                Third-party apps in HubSpot&apos;s ecosystem &mdash; Intercom,
                Asana, Shopify
              </li>
              <li>
                <strong className="text-foreground">
                  Middleware (always paid):
                </strong>{" "}
                Requires Zapier ($29.99/mo), Make ($10.59/mo), or n8n
                ($20/mo+) to bridge
              </li>
            </ul>
          </div>

          {/* ── Email: Gmail & Outlook ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Email: Gmail and Outlook (Native, Free)
          </h2>
          <p className="text-muted mb-4">
            HubSpot&apos;s Gmail and Outlook integrations are native and
            free on all plans including Free Tools. They log emails to
            contacts automatically, let you use HubSpot templates from your
            inbox, and track opens and clicks. This is genuinely one of
            HubSpot&apos;s best features &mdash; no middleware needed.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">What you get free:</strong>{" "}
            Email logging, tracking, templates, scheduling, CRM sidebar in
            your inbox. <strong className="text-foreground">
              What needs Starter ($20/seat/mo):
            </strong>{" "}
            Sequences (automated email follow-ups).{" "}
            <strong className="text-foreground">
              What needs Professional ($890/mo):
            </strong>{" "}
            Workflow-triggered emails, A/B testing, smart content.
          </p>

          {/* ── Automation Middleware ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Automation Middleware: Zapier vs Make
          </h2>
          <p className="text-muted mb-4">
            HubSpot has native workflow automation &mdash; but only on
            Professional ($890/mo) and above. If you&apos;re on Free or
            Starter ($20/seat/mo), you need middleware for any automation
            beyond basic email sequences.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Middleware
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Price
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Tasks/Ops Included
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">
                    Zapier Professional
                  </td>
                  <td className="px-4 py-2.5 text-muted">$29.99/mo</td>
                  <td className="px-4 py-2.5 text-muted">750 tasks/mo</td>
                  <td className="px-4 py-2.5 text-muted">
                    Non-technical users, simple workflows
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">
                    Make Core
                  </td>
                  <td className="px-4 py-2.5 text-muted">$10.59/mo</td>
                  <td className="px-4 py-2.5 text-muted">
                    10,000 ops/mo
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    Higher volume, cost-conscious teams
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">
                    n8n Starter (cloud)
                  </td>
                  <td className="px-4 py-2.5 text-muted">$20/mo</td>
                  <td className="px-4 py-2.5 text-muted">
                    2,500 executions
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    Technical teams wanting custom code
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            The math: HubSpot Professional ($890/mo) includes native
            automation. Zapier Professional ($29.99/mo) or Make Core
            ($10.59/mo) on top of HubSpot Starter ($20/seat/mo) saves you
            $840+/mo if you only need a few automations. The break-even
            point is roughly when you need 10+ complex workflows with
            branching logic.
          </p>

          {/* ── Advertising: Google & Facebook ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Ads: Google and Facebook (Native, Tier-Limited)
          </h2>
          <p className="text-muted mb-4">
            HubSpot&apos;s ad integration connects to Google Ads, Facebook
            Ads, and LinkedIn Ads natively. Free tier gets basic tracking.
            Starter ($20/seat/mo) adds audience sync. Professional ($890/mo)
            unlocks revenue attribution &mdash; seeing which ad spend
            produced which deals. The attribution is the real value;
            everything else you can get from the ad platforms directly.
          </p>

          {/* ── Support: Intercom ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Support: Intercom Integration
          </h2>
          <p className="text-muted mb-4">
            Intercom ($39/seat/mo Essential, $99/seat/mo Advanced) has a
            native HubSpot marketplace integration. It syncs conversations,
            leads, and companies between the two platforms. If you&apos;re
            using HubSpot as your CRM and Intercom for support, this
            integration is essential &mdash; your sales team sees support
            history, your support team sees deal context.
          </p>
          <p className="text-muted mb-4">
            However, HubSpot has its own Service Hub. If you&apos;re already
            paying for HubSpot Professional ($890/mo), the built-in
            ticketing might be enough for smaller support volumes, saving
            you Intercom&apos;s $39-99/seat cost.
          </p>

          {/* ── PM: Asana & ClickUp ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Project Management: Asana and ClickUp
          </h2>
          <p className="text-muted mb-4">
            Both Asana (Starter $13.49/seat/mo) and ClickUp (Unlimited
            $10/member/mo) have marketplace integrations with HubSpot. The
            integrations create tasks when deals move stages. The native
            integrations are basic &mdash; they sync one direction and
            require specific setup.
          </p>
          <p className="text-muted mb-4">
            For two-way sync or complex routing (different projects based
            on deal type), you&apos;ll need Zapier ($29.99/mo) or Make
            ($10.59/mo). Most teams start with the native integration and
            add middleware when the limitations become obvious.
          </p>

          {/* ── Slack: The One Everyone Uses ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Slack (Native, Free, Worth It)
          </h2>
          <p className="text-muted mb-4">
            HubSpot&apos;s Slack integration is native and free on all
            plans. Sends deal notifications, lets you create tasks from
            Slack messages, and provides CRM lookups via /hubspot commands.
            This is one of the few integrations that genuinely makes both
            tools better. Slack Pro is $8.75/user/mo; the HubSpot
            integration works on Slack&apos;s free tier too.
          </p>

          {/* ── What to Skip ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Integrations to Skip (And Why)
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li>
              <strong className="text-foreground">
                Social media posting:
              </strong>{" "}
              HubSpot&apos;s social tools are weak compared to Buffer
              ($6/channel/mo) or even free scheduling in native platforms.
              Don&apos;t pay for HubSpot Marketing Hub just for social
              posting.
            </li>
            <li>
              <strong className="text-foreground">
                Landing page builders:
              </strong>{" "}
              HubSpot&apos;s landing pages are adequate but locked behind
              Starter ($20/seat/mo). Carrd ($19/year) or a simple page on
              your existing site works fine for most use cases.
            </li>
            <li>
              <strong className="text-foreground">
                Document tracking integrations:
              </strong>{" "}
              Third-party document trackers rarely justify their cost.
              HubSpot&apos;s native document tracking (Starter+) is basic
              but sufficient for most sales teams.
            </li>
          </ul>

          {/* ── Cost Summary ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Monthly Integration Cost Summary
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Integration
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Type
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Extra Cost
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">
                    Gmail / Outlook
                  </td>
                  <td className="px-4 py-2.5 text-muted">Native</td>
                  <td className="px-4 py-2.5 text-muted">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">
                    Slack
                  </td>
                  <td className="px-4 py-2.5 text-muted">Native</td>
                  <td className="px-4 py-2.5 text-muted">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">
                    Google/Facebook Ads
                  </td>
                  <td className="px-4 py-2.5 text-muted">Native</td>
                  <td className="px-4 py-2.5 text-muted">
                    $0 (attribution needs $890/mo Pro)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">
                    Intercom
                  </td>
                  <td className="px-4 py-2.5 text-muted">Marketplace</td>
                  <td className="px-4 py-2.5 text-muted">
                    $39&ndash;$99/seat/mo
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">
                    Asana / ClickUp
                  </td>
                  <td className="px-4 py-2.5 text-muted">Marketplace</td>
                  <td className="px-4 py-2.5 text-muted">
                    $0 (basic) or $10.59&ndash;$29.99/mo (middleware)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">
                    Zapier (general middleware)
                  </td>
                  <td className="px-4 py-2.5 text-muted">Middleware</td>
                  <td className="px-4 py-2.5 text-muted">
                    $29.99/mo (750 tasks)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">
                    Make (general middleware)
                  </td>
                  <td className="px-4 py-2.5 text-muted">Middleware</td>
                  <td className="px-4 py-2.5 text-muted">
                    $10.59/mo (10,000 ops)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Frequently Asked Questions
          </h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Do I need Zapier if I have HubSpot Professional?
          </h3>
          <p className="text-muted mb-4">
            Usually not. HubSpot Professional ($890/mo) includes native
            workflow automation with 300+ built-in actions. Zapier
            ($29.99/mo) only makes sense if you need to connect a tool
            that HubSpot doesn&apos;t support natively &mdash; which is
            increasingly rare given 1,700+ marketplace apps.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Is Make always cheaper than Zapier for HubSpot automation?
          </h3>
          <p className="text-muted mb-4">
            At equivalent volumes, yes. Make Core ($10.59/mo) includes
            10,000 operations versus Zapier Professional&apos;s 750 tasks
            at $29.99/mo. But Zapier is simpler to set up and has more
            pre-built HubSpot templates. For 1-3 simple automations,
            Zapier&apos;s ease may be worth the premium. Beyond that, Make
            saves significant money.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Can I use HubSpot&apos;s free CRM with paid integrations?
          </h3>
          <p className="text-muted mb-4">
            Yes. HubSpot Free Tools supports most marketplace
            integrations. You can use HubSpot Free + Zapier ($29.99/mo)
            + Intercom ($39/seat/mo) without upgrading HubSpot. The
            integration limits are on HubSpot&apos;s side (e.g., 2,000
            email sends/mo on Free), not on the integration itself.
          </p>
        </div>

        <RelatedLinks
          guides={[
            "when-hubspot-stops-being-cheap",
            "hubspot-pricing-reality",
            "zapier-vs-native-integrations",
          ]}
          comparisons={["hubspot-crm-vs-pipedrive"]}
        />
      </article>
    </>
  );
}
