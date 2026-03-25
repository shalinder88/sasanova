import Link from "next/link";

interface ReviewerBylineProps {
  reviewDate: string;
  testingNotes?: string;
  sourceCount?: number;
}

export default function ReviewerByline({
  reviewDate,
  testingNotes,
  sourceCount,
}: ReviewerBylineProps) {
  return (
    <div className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-xs leading-relaxed">
        <p className="text-foreground">
          <span className="font-bold">Reviewed by Singh</span>
          <span className="text-muted"> &middot; {reviewDate}</span>
        </p>
        <p className="text-muted mt-0.5">
          Founder of Sasanova. Tests software tools, tracks pricing changes
          weekly, and builds comparison data from first-party vendor sources.
        </p>
        {(testingNotes || sourceCount) && (
          <p className="text-muted mt-0.5">
            {testingNotes && <>Tested: {testingNotes}</>}
            {testingNotes && sourceCount && <> &middot; </>}
            {sourceCount && <>{sourceCount} sources verified</>}
          </p>
        )}
        <Link
          href="/about/methodology"
          className="text-accent hover:underline text-xs mt-1 inline-block"
        >
          See our methodology &rarr;
        </Link>
      </div>
    </div>
  );
}
