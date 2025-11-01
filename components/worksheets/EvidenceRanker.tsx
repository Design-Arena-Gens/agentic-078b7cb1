'use client';
import { useEffect, useState } from 'react';

const START = [
  { id: 'e1', text: 'A randomized controlled trial with 500 participants' },
  { id: 'e2', text: 'An anecdote from a friend' },
  { id: 'e3', text: 'A small observational study' },
  { id: 'e4', text: 'Meta-analysis of high-quality trials' },
  { id: 'e5', text: 'Expert opinion without data' },
];

const IDEAL = ['Meta-analysis of high-quality trials', 'A randomized controlled trial with 500 participants', 'A small observational study', 'Expert opinion without data', 'An anecdote from a friend'];

export default function EvidenceRanker() {
  const [items, setItems] = useState(START);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('evidence-ranker');
      if (saved) setItems(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem('evidence-ranker', JSON.stringify(items));
  }, [items]);

  const move = (index: number, dir: -1 | 1) => {
    const next = [...items];
    const j = index + dir;
    if (j < 0 || j >= next.length) return;
    [next[index], next[j]] = [next[j], next[index]];
    setItems(next);
  };

  const score = items.reduce((acc, it, i) => (it.text === IDEAL[i] ? acc + 1 : acc), 0);

  return (
    <div>
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li key={it.id} className="flex items-center justify-between rounded border p-3">
            <span className="text-sm">{i + 1}. {it.text}</span>
            <div className="flex gap-2">
              <button onClick={() => move(i, -1)} className="rounded border px-2 py-1 text-xs hover:bg-zinc-50 dark:hover:bg-zinc-800">Up</button>
              <button onClick={() => move(i, 1)} className="rounded border px-2 py-1 text-xs hover:bg-zinc-50 dark:hover:bg-zinc-800">Down</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded border p-3 text-sm">
        <div className="font-medium">Alignment with evidence hierarchy: {score}/{items.length}</div>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">Discuss why stronger evidence is more reliable and when lower-tier evidence can still be useful.</p>
      </div>
    </div>
  );
}
