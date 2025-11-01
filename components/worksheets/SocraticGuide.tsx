'use client';
import { useMemo, useState } from 'react';

const PROMPTS = [
  'What would change your mind?',
  'How could we test this?',
  'What assumptions are we making?',
  'What is the strongest counterargument?',
  'What alternative explanations exist?',
  'Where is uncertainty highest?',
  'What is the base rate here?',
  'How might incentives bias sources?',
  'What would convince a skeptic?',
  'How could we operationalize this claim?'
];

export default function SocraticGuide() {
  const [history, setHistory] = useState<string[]>([]);
  const next = useMemo(() => PROMPTS[Math.floor(Math.random() * PROMPTS.length)], [history]);

  return (
    <div>
      <div className="rounded border p-4">
        <p className="text-sm text-zinc-700 dark:text-zinc-300">Click to generate questions that deepen inquiry. Answer out loud or in writing.</p>
        <button
          onClick={() => setHistory((h) => [next, ...h])}
          className="mt-3 rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Ask next question
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {history.map((q, i) => (
          <li key={i} className="rounded border p-3 text-sm">{q}</li>
        ))}
      </ul>
    </div>
  );
}
