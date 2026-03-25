import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Design Tools for People Who Can't Design: A Practical Guide",
  description:
    "Canva for quick graphics, Figma for UI, Framer and Webflow for sites. What you actually need vs what looks cool, plus budget options and free tier reality.",
};

export default function DesignToolsNonDesignersGuide() {
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
            <span className="text-foreground font-medium truncate">Design Tools for Non-Designers</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          Design
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          Design Tools for People Who Can&apos;t Design: A Practical Guide
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2026 &middot; 12 min read
        </p>

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted">
          <p>
            You don&apos;t need to learn design. You need to learn which tool does the job
            without requiring you to learn design. That&apos;s a different problem, and most
            tool guides conflate the two. Figma is incredible, but if you&apos;re a founder
            trying to make a social media graphic, opening Figma is like renting a bulldozer
            to plant a flower.
          </p>
          <p>
            This guide matches your actual task to the right tool. No design theory, no
            &ldquo;learn the fundamentals first&rdquo; lectures. Just which button to click
            to get a decent-looking result when you have zero design skills and 30 minutes.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Decision Tree: What Are You Actually Making?</h2>
            <div className="rounded-lg border border-border bg-surface p-5 mt-3 space-y-3">
              <div>
                <p className="text-foreground font-semibold">Social media graphics, presentations, simple marketing assets</p>
                <p className="mt-1">&rarr; <strong className="text-foreground">Canva.</strong> Not even close. Nothing else is as fast for non-designers.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">App or website UI mockups</p>
                <p className="mt-1">&rarr; <strong className="text-foreground">Figma.</strong> The industry standard. Free tier is generous enough.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">A marketing website or landing page</p>
                <p className="mt-1">&rarr; <strong className="text-foreground">Framer</strong> (if you want it to look premium) or <strong className="text-foreground">Webflow</strong> (if you need CMS features).</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">A logo</p>
                <p className="mt-1">&rarr; Pay someone $50&ndash;$200 on Fiverr. Logo makers produce generic garbage. This is the one thing worth outsourcing.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">Photo editing</p>
                <p className="mt-1">&rarr; <strong className="text-foreground">Photopea</strong> (free Photoshop clone in the browser). Or Canva if you just need basic crops and filters.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Full Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Paid Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Learning Curve</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Canva</td>
                    <td className="px-4 py-2.5">Very generous (most features)</td>
                    <td className="px-4 py-2.5">$13/mo (Pro)</td>
                    <td className="px-4 py-2.5">30 minutes</td>
                    <td className="px-4 py-2.5">Social, presentations, quick graphics</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Figma</td>
                    <td className="px-4 py-2.5">3 projects, unlimited files</td>
                    <td className="px-4 py-2.5">$15/editor/mo (Professional)</td>
                    <td className="px-4 py-2.5">2&ndash;5 hours</td>
                    <td className="px-4 py-2.5">UI design, prototyping, design systems</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Framer</td>
                    <td className="px-4 py-2.5">1 site, staging only</td>
                    <td className="px-4 py-2.5">$15/mo (Mini) / $30/mo (Basic)</td>
                    <td className="px-4 py-2.5">3&ndash;8 hours</td>
                    <td className="px-4 py-2.5">Marketing sites, portfolios</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Webflow</td>
                    <td className="px-4 py-2.5">2 projects, staging only</td>
                    <td className="px-4 py-2.5">$18/mo (Basic) / $29/mo (CMS)</td>
                    <td className="px-4 py-2.5">10&ndash;20 hours</td>
                    <td className="px-4 py-2.5">CMS sites, blogs, complex marketing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Photopea</td>
                    <td className="px-4 py-2.5">Full app (ad-supported)</td>
                    <td className="px-4 py-2.5">$5/mo (no ads)</td>
                    <td className="px-4 py-2.5">Varies (Photoshop knowledge helps)</td>
                    <td className="px-4 py-2.5">Photo editing, PSD files</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Canva: The 80% Solution for Everything Visual</h2>
            <p>
              Designers sneer at Canva. Ignore them. For non-designers, Canva solves 80% of visual
              tasks in 20% of the time any other tool would take. The template library is massive,
              the drag-and-drop editor is genuinely intuitive, and the free tier covers most of what
              you need.
            </p>
            <div className="rounded-lg border border-border bg-surface p-5 mt-3 space-y-3">
              <div>
                <p className="text-foreground font-semibold">Canva Free (what you get)</p>
                <p className="mt-1">250,000+ templates, 5GB storage, 1 million+ stock photos, basic background remover, exports in PNG/JPG/PDF. You lose access to brand kits, premium templates, and the magic resize feature.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">Canva Pro ($13/month, what it adds)</p>
                <p className="mt-1">100M+ stock photos, Brand Kit (save your colors/fonts/logos), Magic Resize (one-click resize to different formats), background remover, 1TB storage. The Brand Kit alone is worth the upgrade if you produce content regularly &mdash; it forces visual consistency without design knowledge.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">Canva Teams ($10/person/month, minimum 3)</p>
                <p className="mt-1">Everything in Pro plus shared brand assets, real-time collaboration, and approval workflows. Only needed if 3+ people create content for the same brand.</p>
              </div>
            </div>
            <p className="mt-3">
              <strong className="text-foreground">The non-obvious trick:</strong> Canva&apos;s best
              feature for non-designers is the &ldquo;Styles&rdquo; panel. Pick a template close to
              what you want, then use Styles to swap the entire color palette and font combination with
              one click. It&apos;s like having a designer pick your aesthetic for you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Figma: Only If You&apos;re Building Software UI</h2>
            <p>
              Figma is the best design tool in the world. It is also wildly overkill for anything
              that isn&apos;t software interface design. If someone tells you to &ldquo;learn Figma&rdquo;
              for making social media posts, they&apos;re giving you bad advice.
            </p>
            <p>
              Use Figma when you need to: design app screens, create UI component libraries, prototype
              user flows, or collaborate with a designer who already uses Figma. For everything else,
              use Canva.
            </p>
            <div className="rounded-lg border border-border bg-surface p-5 mt-3 space-y-3">
              <div>
                <p className="text-foreground font-semibold">Figma Free (Starter)</p>
                <p className="mt-1">3 Figma files, 3 FigJam files, unlimited personal files, unlimited viewers. The 3-file limit on team projects is the real constraint. For a solo founder designing one product, it&apos;s enough. For a team, you&apos;ll hit the wall fast.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">Figma Professional ($15/editor/month)</p>
                <p className="mt-1">Unlimited files, shared libraries, branching, dev mode. The jump is worth it when you have 2+ people editing designs or when you need a component library. &ldquo;Editor&rdquo; pricing means viewers are free &mdash; only people who edit pay.</p>
              </div>
            </div>
            <p className="mt-3">
              <strong className="text-foreground">Tip for non-designers using Figma:</strong> Don&apos;t
              start from scratch. Browse the Figma Community for free UI kits. Copy a kit into your
              project, then modify it. This is not cheating &mdash; this is how half the design industry
              works. The Untitled UI kit and shadcn/ui Figma file are both free and production-quality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Framer vs Webflow: Building Sites Without Code</h2>
            <p>
              Both build websites without code. The difference is philosophy.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Framer</strong> is designed like a design tool. You place elements on a canvas, add animations, and publish. The output looks polished with minimal effort. Best for: marketing sites, landing pages, portfolios. Worst for: blogs, content-heavy sites, anything needing a CMS.</li>
              <li><strong className="text-foreground">Webflow</strong> is designed like a web development tool. You work with actual CSS concepts (flexbox, grid, responsive breakpoints) in a visual interface. The output is a real website with a real CMS. Best for: content sites, blogs, complex marketing sites. Worst for: quick landing pages (too much setup for simple pages).</li>
            </ul>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Factor</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Framer</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Webflow</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Time to first page</td>
                    <td className="px-4 py-2.5">1&ndash;2 hours</td>
                    <td className="px-4 py-2.5">4&ndash;8 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">CMS (blog, content)</td>
                    <td className="px-4 py-2.5">Basic (limited)</td>
                    <td className="px-4 py-2.5">Powerful (full CMS)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Animations</td>
                    <td className="px-4 py-2.5">Excellent (built-in)</td>
                    <td className="px-4 py-2.5">Excellent (more manual)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">SEO control</td>
                    <td className="px-4 py-2.5">Basic</td>
                    <td className="px-4 py-2.5">Comprehensive</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Hosting included</td>
                    <td className="px-4 py-2.5">Yes (all plans)</td>
                    <td className="px-4 py-2.5">Yes (all paid plans)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Starting price (published)</td>
                    <td className="px-4 py-2.5">$15/mo (Mini, 1 page)</td>
                    <td className="px-4 py-2.5">$18/mo (Basic, 150 pages)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              <strong className="text-foreground">The honest take:</strong> if you&apos;re a non-designer
              building a marketing site, start with Framer. You&apos;ll get a better-looking result faster.
              Switch to Webflow only when you need a real CMS (blog with 50+ posts, dynamic content collections).
              Webflow&apos;s power comes with a learning curve that non-designers find frustrating for the
              first 10&ndash;20 hours.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">What You Actually Need vs What Looks Cool</h2>
            <div className="rounded-lg border border-border bg-surface p-5 mt-3 space-y-3">
              <div>
                <p className="text-foreground font-semibold">You think you need: Figma + Webflow + Adobe Creative Suite</p>
                <p className="mt-1">You actually need: Canva Pro ($13/month) and a Framer template ($15&ndash;$30/month).</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">You think you need: Custom illustrations and brand photography</p>
                <p className="mt-1">You actually need: Unsplash (free stock photos) + Canva&apos;s illustration library + consistent color palette.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">You think you need: A design system with components and variants</p>
                <p className="mt-1">You actually need: 2&ndash;3 Canva templates you reuse for every social post, branded with your colors. Consistency beats perfection.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Scenario</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tools</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">$0 setup (bootstrapping)</td>
                    <td className="px-4 py-2.5">Canva Free + Figma Free + Photopea Free</td>
                    <td className="px-4 py-2.5">$0/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Solo creator (content-focused)</td>
                    <td className="px-4 py-2.5">Canva Pro + Framer Mini</td>
                    <td className="px-4 py-2.5">$28/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Startup founder (product + marketing)</td>
                    <td className="px-4 py-2.5">Canva Pro + Figma Free + Framer Basic</td>
                    <td className="px-4 py-2.5">$43/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Small team (2&ndash;3 people designing)</td>
                    <td className="px-4 py-2.5">Canva Teams (3) + Figma Professional (2) + Webflow CMS</td>
                    <td className="px-4 py-2.5">$89/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Who Should NOT Use This Guide</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Professional designers.</strong> You already know Figma, you have opinions about it, and you don&apos;t need someone to tell you Canva exists. This guide is for the people you support who ask you to &ldquo;just make a quick graphic.&rdquo;</li>
              <li><strong className="text-foreground">E-commerce businesses needing product photography.</strong> Product photos need real photography (or AI-generated product shots via tools like Flair.ai). Canva can&apos;t fix bad product images.</li>
              <li><strong className="text-foreground">Companies needing print design.</strong> Brochures, packaging, and print materials still need Adobe InDesign or Affinity Publisher. Canva&apos;s print export is adequate for business cards but falls short for complex print layouts.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Common Mistakes</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Starting with Figma when you need Canva.</strong> Figma&apos;s blank canvas is paralyzing for non-designers. Canva&apos;s template-first approach gives you a starting point. Use the tool that matches your skill level, not the tool designers recommend.</li>
              <li><strong className="text-foreground">Paying for Webflow before understanding CSS concepts.</strong> Webflow is a visual CSS editor. If you don&apos;t understand padding vs margin, flexbox vs grid, or responsive breakpoints, you&apos;ll spend 20 hours confused before producing anything. Framer abstracts these concepts better.</li>
              <li><strong className="text-foreground">Using too many fonts.</strong> Pick two fonts: one for headings, one for body text. Canva&apos;s &ldquo;Brand Kit&rdquo; enforces this. Without a brand kit, non-designers inevitably use 5+ fonts and the result looks amateur.</li>
              <li><strong className="text-foreground">Ignoring templates.</strong> Templates are not training wheels. They&apos;re the entire point of tools like Canva and Framer. The best-looking startup sites are Framer templates with custom copy and images. Nobody cares if your site is a template. They care if it looks good.</li>
              <li><strong className="text-foreground">Subscribing to Adobe Creative Cloud ($60/month).</strong> Unless you&apos;re a professional designer or video editor, you don&apos;t need it. Canva + Figma + Photopea covers 95% of what non-designers need for a fraction of the cost. Adobe is the Mailchimp of design tools: legacy pricing for legacy workflows.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Bottom Line</h2>
            <p>
              Canva solves 80% of visual tasks for non-designers. Figma covers the other 20% if
              that 20% involves software UI. Framer builds marketing sites faster than Webflow for
              people who don&apos;t think in CSS. The total cost for a solo creator is $13&ndash;$43/month.
              The total cost for a bootstrapped startup is $0 if you&apos;re willing to use free tiers.
            </p>
            <p>
              Stop trying to become a designer. Start using the tools designed for people who aren&apos;t.
              The gap between &ldquo;designer-made&rdquo; and &ldquo;template-made&rdquo; has never been
              smaller, and your customers can&apos;t tell the difference.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the best design tool for someone with no design experience?</h3>
                <p>Canva. It has thousands of templates, a drag-and-drop editor, and you can produce professional-looking social media graphics, presentations, and marketing materials within 30 minutes of signing up. The free tier covers most needs; Pro at $13/month adds brand kits and premium assets.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I learn Figma if I&apos;m not a designer?</h3>
                <p>Only if you need to design software interfaces (app screens, dashboards, website UI). For social media, presentations, and marketing materials, Canva is faster and easier. Figma&apos;s free tier gives you 3 projects, which is enough for a solo founder designing one product.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Framer or Webflow better for building a website without code?</h3>
                <p>Framer is better for non-designers who want a polished marketing site fast (1&ndash;2 hours to first page). Webflow is better if you need a content management system (blog, resource library) and are willing to invest 10&ndash;20 hours learning its CSS-based editor. Start with Framer; migrate to Webflow if you outgrow it.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Do I need Adobe Creative Cloud?</h3>
                <p>Almost certainly not if you&apos;re a non-designer. Adobe Creative Cloud costs $60/month for the full suite. Canva ($13/month) + Figma (free) + Photopea (free) covers 95% of what non-designers need. Adobe is worth it for professional photographers, video editors, and print designers. For everyone else, it&apos;s expensive overkill.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["canva", "figma", "framer"]}
            comparisons={["figma-vs-canva", "webflow-vs-framer"]}
            guides={[
              "website-builder-for-business",
              "landing-page-builder-comparison",
              "social-media-management-stack",
            ]}
          />
        </div>
      </div>
    </>
  );
}
