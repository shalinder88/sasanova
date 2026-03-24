import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Sasanova",
  description: "Get in touch with the Sasanova team for corrections, vendor submissions, partnerships, or general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Contact</p>
      <h1 className="text-3xl font-extrabold tracking-tight mb-4">Get in Touch</h1>
      <p className="text-base text-muted mb-8">
        We take accuracy seriously. If you find an error, have a correction, or want to
        submit updated vendor information, we want to hear from you.
      </p>

      <div className="space-y-6">
        <div className="border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold mb-2">Data Corrections</h2>
          <p className="text-sm text-muted mb-3">
            Found incorrect pricing, a missing feature, or outdated information? Send us
            the correction with a link to the official source, and we will verify and
            update within 48 hours.
          </p>
          <p className="text-sm">
            Email: <a href="mailto:corrections@sasanova.com" className="text-accent hover:underline">corrections@sasanova.com</a>
          </p>
        </div>

        <div className="border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold mb-2">Vendor Submissions</h2>
          <p className="text-sm text-muted mb-3">
            If you work at a software company and want to submit or update your tool&apos;s
            listing, we welcome factual corrections backed by evidence. Vendor-submitted
            data is tagged as &quot;Vendor-claimed&quot; until independently verified.
            Submissions never influence our editorial scores.
          </p>
          <p className="text-sm">
            Email: <a href="mailto:vendors@sasanova.com" className="text-accent hover:underline">vendors@sasanova.com</a>
          </p>
          <p className="text-xs text-muted mt-2">
            Please review our{" "}
            <Link href="/about/editorial-policy" className="text-accent hover:underline">editorial policy</Link>{" "}
            and{" "}
            <Link href="/about/source-policy" className="text-accent hover:underline">source policy</Link>{" "}
            before submitting.
          </p>
        </div>

        <div className="border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold mb-2">Partnerships & Newsletter</h2>
          <p className="text-sm text-muted mb-3">
            For newsletter sponsorship inquiries, content partnerships, or other
            business-related questions.
          </p>
          <p className="text-sm">
            Email: <a href="mailto:hello@sasanova.com" className="text-accent hover:underline">hello@sasanova.com</a>
          </p>
        </div>

        <div className="border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold mb-2">Legal & DMCA</h2>
          <p className="text-sm text-muted mb-3">
            For copyright concerns, takedown requests, or legal inquiries.
          </p>
          <p className="text-sm">
            Email: <a href="mailto:legal@sasanova.com" className="text-accent hover:underline">legal@sasanova.com</a>
          </p>
        </div>
      </div>

      <div className="mt-8 text-xs text-muted">
        <p>
          Response times: Corrections within 48 hours. Vendor submissions within 5 business
          days. Partnership inquiries within 3 business days.
        </p>
      </div>
    </div>
  );
}
