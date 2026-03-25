import Link from "next/link";

interface ReviewerBylineProps {
  reviewDate: string;
  testingNotes?: string;
  sourceCount?: number;
  reviewer?: "singh" | "kaur" | "team" | "both";
}

const reviewers = {
  singh: {
    name: "Singh",
    role: "Founder & Lead Reviewer",
    bio: "Tests software tools, tracks pricing changes weekly, and builds comparison data from first-party vendor sources.",
  },
  kaur: {
    name: "Kaur",
    role: "Co-Founder & Developer",
    bio: "Builds Sasanova's comparison engine, verifies data integrity, and develops the scoring methodology.",
  },
  team: {
    name: "Sasanova Team",
    role: "Editorial",
    bio: "Independent software comparison team. All data verified from first-party vendor sources.",
  },
};

export default function ReviewerByline({
  reviewDate,
  testingNotes,
  sourceCount,
  reviewer = "singh",
}: ReviewerBylineProps) {
  const people = reviewer === "both"
    ? [reviewers.singh, reviewers.kaur]
    : [reviewers[reviewer as keyof typeof reviewers]];

  return (
    <div className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-xs leading-relaxed">
        {people.map((person) => (
          <div key={person.name} className="mb-1">
            <p className="text-foreground">
              <span className="font-bold">{person.name}</span>
              <span className="text-muted"> · {person.role}</span>
              <span className="text-muted"> · {reviewDate}</span>
            </p>
            <p className="text-muted mt-0.5">{person.bio}</p>
          </div>
        ))}
        {(testingNotes || sourceCount) && (
          <p className="text-muted mt-0.5">
            {testingNotes && <>Tested: {testingNotes}</>}
            {testingNotes && sourceCount && <> · </>}
            {sourceCount && <>{sourceCount} sources verified</>}
          </p>
        )}
        <Link
          href="/about/methodology"
          className="text-accent hover:underline text-xs mt-1 inline-block"
        >
          See our methodology →
        </Link>
      </div>
    </div>
  );
}
