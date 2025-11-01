'use client';
import { useEffect, useMemo, useState } from 'react';

type Pair = { id: string; statement: string; fallacy: string };

const SAMPLE: Pair[] = [
  {
    id: 's1',
    statement: 'If we allow kids more screen time, society will collapse.',
    fallacy: 'Slippery slope',
  },
  {
    id: 's2',
    statement: 'Either you support this policy or you want chaos.',
    fallacy: 'False dilemma',
  },
  {
    id: 's3',
    statement: 'This claim is true because many people share it.',
    fallacy: 'Bandwagon',
  },
  {
    id: 's4',
    statement: 'We should ignore her argument; she failed last year.',
    fallacy: 'Ad hominem',
  },
];

const FALLACIES = Array.from(new Set(SAMPLE.map((p) => p.fallacy)));

export default function FallacyMatcher() {
  const [matches, setMatches] = useState<Record<string, string | null>>({});
  const [dragged, setDragged] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setMatches((m) => {
      const next = { ...m };
      for (const p of SAMPLE) if (!(p.id in next)) next[p.id] = null;
      return next;
    });
  }, []);

  const score = useMemo(() => {
    let correct = 0;
    for (const p of SAMPLE) if (matches[p.id] === p.fallacy) correct++;
    return { correct, total: SAMPLE.length };
  }, [matches]);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-3">
        {SAMPLE.map((p) => (
          <div key={p.id} className="rounded-lg border p-4">
            <p className="text-sm text-zinc-700 dark:text-zinc-300">{p.statement}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {FALLACIES.map((f) => (
                <button
                  key={f}
                  onClick={() => setMatches({ ...matches, [p.id]: f })}
                  className={`rounded-full border px-3 py-1 text-sm ${
                    matches[p.id] === f ? 'bg-black text-white dark:bg-white dark:text-black' : 'hover:bg-zinc-50 dark:hover:bg-zinc-800'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            {revealed && (
              <p className="mt-2 text-xs text-zinc-500">
                Answer: <span className="font-medium">{p.fallacy}</span>
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="rounded-lg border p-4">
        <h3 className="text-lg font-semibold">Your Score</h3>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          {score.correct} / {score.total} correct
        </p>
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => setRevealed((v) => !v)}
            className="rounded-md border px-4 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800"
          >
            {revealed ? 'Hide answers' : 'Reveal answers'}
          </button>
          <button
            onClick={() => setMatches({})}
            className="rounded-md border px-4 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800"
          >
            Reset
          </button>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Why it matters: Identifying patterns of poor reasoning helps you focus on
          the substance of arguments rather than rhetorical flair.
        </p>
      </div>
    </div>
  );
}
