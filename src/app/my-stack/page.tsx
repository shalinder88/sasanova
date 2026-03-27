import { Suspense } from "react";
import MyStackClient from "./my-stack-client";

export default function MyStackPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-muted text-sm">Loading your stack...</div>
        </div>
      }
    >
      <MyStackClient />
    </Suspense>
  );
}
