import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Leave Mailchimp Without Losing Your List: A Step-by-Step Migration Guide",
  description:
    "Mailchimp's pricing got worse. Here's exactly how to move to beehiiv, ConvertKit, or Brevo without losing subscribers, breaking automations, or tanking deliverability.",
};

export default function MigrateFromMailchimp() {
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
              Migrate from Mailchimp
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Email Migration
            </span>
            <span className="text-[11px] text-muted">12 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            How to Leave Mailchimp Without Losing Your List: A Step-by-Step Migration Guide
          </h1>
          <p className="text-lg text-muted">
            Mailchimp was once the obvious choice for email. Then Intuit bought it, killed the free tier for new users, and pushed pricing up across every plan. The Standard plan now starts at $20/month for 500 contacts &mdash; and that price scales steeply. At 10,000 contacts you&apos;re paying $100+/month. At 50,000, north of $350. If you&apos;ve been meaning to leave, this is the guide that walks you through it without losing subscribers or breaking things.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-bold mt-10 mb-4">Why People Leave Mailchimp</h2>
          <p className="text-muted mb-4">
            Three triggers push most people out. The first is price. Mailchimp charges by contacts, including unsubscribed and inactive contacts unless you manually clean them. A list of 5,000 where 1,500 never open emails? You&apos;re paying for all 5,000.
          </p>
          <p className="text-muted mb-4">
            The second is complexity creep. Mailchimp added landing pages, websites, social posting, and CRM features. If you just want to send newsletters, you&apos;re navigating around features you&apos;ll never use. The interface got cluttered.
          </p>
          <p className="text-muted mb-4">
            The third is deliverability. This one&apos;s harder to prove at scale, but a consistent complaint: smaller senders report declining open rates on Mailchimp compared to dedicated newsletter platforms. Shared IP reputation on lower-tier plans may be a factor.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Before You Migrate: The Prep Work</h2>
          <p className="text-muted mb-4">
            Don&apos;t rush this. Bad migrations break signup forms, tank deliverability, and lose subscriber segments. Budget 2&ndash;4 weeks for the full process.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Step 1: Clean your list first.</strong> Remove bounced, unsubscribed, and never-opened contacts in Mailchimp before exporting. Moving dead weight to a new platform wastes money and hurts sender reputation. Go to Audience &rarr; Manage contacts &rarr; View contacts, filter by &ldquo;Did not open&rdquo; last 12 months, and archive or unsubscribe them.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Step 2: Export everything.</strong> Go to Audience &rarr; All contacts &rarr; Export Audience. You&apos;ll get a CSV with email addresses, names, tags, and signup dates. Also export your templates (Email &rarr; Templates &rarr; each template has an Export option). Download campaign reports if you want historical data &mdash; you won&apos;t be able to access them after you leave.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Step 3: Document your automations.</strong> Screenshot or write down every automation workflow: welcome sequences, drip campaigns, abandoned cart flows, birthday emails. Note the triggers, delays, and conditions. You&apos;ll rebuild these manually in the new platform.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Step 4: List every signup form location.</strong> Embedded forms on your website, popup forms, landing pages, link-in-bio forms. You need to replace every single one.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Migration Path 1: Mailchimp to beehiiv</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Best for:</strong> Newsletter-first creators, content publishers, anyone who wants growth tools built in.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Cost comparison:</strong> Mailchimp Standard at 5,000 contacts costs ~$75/month. beehiiv Scale handles up to 10,000 subscribers for $39/month. At 25,000 contacts, Mailchimp charges $270+/month while beehiiv Max is $99/month.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Import process:</strong> In beehiiv, go to Settings &rarr; Import Subscribers &rarr; Upload CSV. Map your columns (email, first name, last name, tags). beehiiv handles de-duplication automatically. Imported contacts won&apos;t trigger double opt-in unless you enable it. Tag imported subscribers as &ldquo;migrated-from-mailchimp&rdquo; so you can track their engagement separately.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Recreate automations:</strong> beehiiv&apos;s automation builder is simpler than Mailchimp&apos;s. You get sequences (time-based drip emails) and automations (trigger-based). Rebuild your welcome sequence first. If you had complex conditional branching in Mailchimp, beehiiv may not match every scenario &mdash; it&apos;s designed for newsletter workflows, not e-commerce automation.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Swap signup forms:</strong> Replace every embedded Mailchimp form with beehiiv&apos;s embed code. Update landing pages. Redirect any Mailchimp-hosted signup page URLs to your new beehiiv landing pages.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Migration Path 2: Mailchimp to ConvertKit (Kit)</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Best for:</strong> Creators selling digital products, course builders, anyone who wants tag-based organization.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Cost comparison:</strong> ConvertKit Creator plan at 5,000 subscribers is $79/month. At 10,000, it&apos;s $119/month. Not always cheaper than Mailchimp &mdash; the value is in the workflow, not the price.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Key difference:</strong> ConvertKit is tag-based, not list-based. Mailchimp organizes subscribers into lists and segments. ConvertKit puts everyone in one pool and uses tags and segments to filter. You&apos;ll need to rethink your organization. Convert Mailchimp lists to tags. Convert Mailchimp groups to tags. If you had subscribers on multiple lists, they&apos;ll merge into one subscriber with multiple tags.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Import process:</strong> ConvertKit has a direct Mailchimp migration tool. Go to Subscribers &rarr; Import &rarr; select Mailchimp. Authorize the connection and ConvertKit pulls subscribers, tags, and basic segments. Not everything transfers perfectly &mdash; verify your tag mapping after import.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Migration Path 3: Mailchimp to Brevo</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Best for:</strong> Cost-conscious senders with large lists who don&apos;t email frequently.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Cost comparison:</strong> This is where the math gets interesting. Brevo charges by emails sent, not contacts stored. Their Starter plan is $25/month for 20,000 emails. You can have 100,000 contacts and pay $25/month &mdash; as long as you send 20,000 or fewer emails. Mailchimp would charge $800+/month for 100,000 contacts regardless of send frequency.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The catch:</strong> Brevo&apos;s interface isn&apos;t as polished. Template design tools are functional but not elegant. Marketing automation is solid on the Business plan ($65/month) but basic on Starter. If you&apos;re migrating purely for cost savings and your email design needs are modest, Brevo wins.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Import process:</strong> Upload CSV, map fields, assign to lists. Brevo uses a list + attribute system. Map Mailchimp tags to Brevo attributes or list assignments.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">What You&apos;ll Lose in Any Migration</h2>
          <p className="text-muted mb-4">
            Be honest about what goes away. <strong className="text-foreground">Historical campaign data</strong> stays in Mailchimp. Open rates, click rates, revenue attribution &mdash; none of that transfers. Export reports before you cancel. <strong className="text-foreground">Subscriber engagement history</strong> resets. Your new platform won&apos;t know that Jane opened your last 15 emails. Every subscriber starts fresh.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Integrations break.</strong> Every tool connected to Mailchimp (Shopify, WordPress, Zapier automations, lead capture forms) needs to be reconnected to the new platform. List these integrations before you start.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Embedded forms stop working.</strong> Every Mailchimp form on your website will keep collecting subscribers &mdash; but into your old Mailchimp account. Replace them immediately or you&apos;ll lose new signups.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">The Deliverability Warning Nobody Mentions</h2>
          <p className="text-muted mb-4">
            When you switch email platforms, you get a new sending IP and domain reputation. Even if you had excellent deliverability on Mailchimp, your new platform starts with a neutral reputation. Send 50,000 emails on day one and you&apos;ll land in spam folders.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Warm up your sender reputation.</strong> Week 1: send only to your most engaged segment (opened in last 30 days). Week 2: expand to opened in last 60 days. Week 3: opened in last 90 days. Week 4: full list. This gradual ramp tells inbox providers that recipients want your emails.
          </p>
          <p className="text-muted mb-4">
            Set up SPF, DKIM, and DMARC records for your sending domain. Every platform has documentation for this. Skip it and your deliverability suffers from day one.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Leave Mailchimp</h2>
          <p className="text-muted mb-4">
            If you have complex e-commerce automations (abandoned cart, browse abandonment, purchase follow-ups) deeply integrated with Shopify through Mailchimp, migration is painful. Mailchimp&apos;s e-commerce features are decent, and rebuilding those automations elsewhere takes 20&ndash;40 hours.
          </p>
          <p className="text-muted mb-4">
            If you have under 500 contacts and send fewer than 1,000 emails per month, the savings from switching are minimal. Your time is worth more than the $10&ndash;20/month difference.
          </p>
          <p className="text-muted mb-6">
            If your team already knows Mailchimp well and your open rates are healthy (20%+ for newsletters, 30%+ for transactional), the switching cost may not justify the savings. Migration is worth it when you&apos;re paying significantly more than you should, or when Mailchimp&apos;s limitations are actively holding you back.
          </p>
        </div>
      </article>
    </>
  );
}
