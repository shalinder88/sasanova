import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center py-32 px-4 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight mb-3">Page not found</h1>
      <p className="text-base text-muted mb-8 max-w-md">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or no longer exists.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 text-sm font-semibold bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
      >
        Back to homepage
      </Link>
    </section>
  );
}
