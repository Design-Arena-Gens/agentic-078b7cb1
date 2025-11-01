'use client';
import FallacyMatcher from '@/components/worksheets/FallacyMatcher';
import ArgumentBuilder from '@/components/worksheets/ArgumentBuilder';
import EvidenceRanker from '@/components/worksheets/EvidenceRanker';
import SocraticGuide from '@/components/worksheets/SocraticGuide';

export default function WorksheetsClient({ subscribed }: { subscribed: boolean }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-6 text-3xl font-bold">Interactive worksheets</h1>
      <p className="mb-10 text-zinc-600 dark:text-zinc-400">Practice core habits of critical thinking. Your progress saves locally.</p>

      <div className="space-y-16">
        <section>
          <h2 className="mb-3 text-xl font-semibold">1) Spot the fallacy</h2>
          <FallacyMatcher />
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">2) Build an argument map {subscribed ? '' : <span className="ml-2 rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">Subscriber</span>}</h2>
          {subscribed ? (
            <ArgumentBuilder />
          ) : (
            <div className="rounded border p-6 text-sm">
              This activity is for subscribers. Subscribe for full access.
            </div>
          )}
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">3) Rank the evidence {subscribed ? '' : <span className="ml-2 rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">Subscriber</span>}</h2>
          {subscribed ? (
            <EvidenceRanker />
          ) : (
            <div className="rounded border p-6 text-sm">
              This activity is for subscribers. Subscribe for full access.
            </div>
          )}
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">4) Socratic guide {subscribed ? '' : <span className="ml-2 rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">Subscriber</span>}</h2>
          {subscribed ? (
            <SocraticGuide />
          ) : (
            <div className="rounded border p-6 text-sm">
              This activity is for subscribers. Subscribe for full access.
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
