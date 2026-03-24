import Link from "next/link";

const footerSections = [
  {
    title: "Discover",
    links: [
      { href: "/tools", label: "Tools Directory" },
      { href: "/compare", label: "Compare" },
      { href: "/best", label: "Best Of" },
      { href: "/alternatives", label: "Alternatives" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/guides", label: "Guides" },
      { href: "/vault", label: "Vault Newsletter" },
    ],
  },
  {
    title: "Trust",
    links: [
      { href: "/about/editorial-policy", label: "Editorial Policy" },
      { href: "/about/source-policy", label: "Source Policy" },
      { href: "/about/methodology", label: "Methodology" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Use" },
      { href: "/disclosure", label: "Advertiser Disclosure" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-[10px]">S</span>
              </div>
              <span className="text-sm font-bold">Sasa<span className="text-accent">nova</span></span>
            </Link>
            <p className="text-xs text-muted leading-relaxed">
              Evidence-backed software comparisons. Normalized pricing. Honest scoring. Updated regularly.
            </p>
          </div>

          {footerSections.map((s) => (
            <div key={s.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">{s.title}</h4>
              <ul className="space-y-1.5">
                {s.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-xs text-muted hover:text-accent transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <div className="bg-surface-alt rounded-lg p-3 mb-4">
            <p className="text-[11px] text-muted leading-relaxed">
              <strong className="text-foreground">Disclosure:</strong> Sasanova is an independent, editorially driven comparison service. We may earn commissions when you click affiliate links or purchase through our site. This never influences our rankings or editorial scoring. All tools are evaluated using the same methodology regardless of affiliate status. <Link href="/disclosure" className="text-accent hover:underline">Learn more</Link>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-[11px] text-muted">&copy; {new Date().getFullYear()} Sasanova. All rights reserved.</p>
            <p className="text-[11px] text-muted">Data last verified: March 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
