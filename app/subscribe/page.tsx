"use client";
import { useState } from 'react';

export default function SubscribePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/checkout', { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to start checkout');
      const data = await res.json();
      if (data?.url) window.location.assign(data.url);
      else throw new Error('No redirect URL provided');
    } catch (e: any) {
      setError(e.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-bold">Subscribe</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">Unlock all worksheets, progress syncing (coming soon), and new modules each month.</p>
      <div className="mt-8 rounded-lg border p-6">
        <div className="flex items-baseline gap-2">
          <div className="text-4xl font-bold">$7</div>
          <div className="text-sm text-zinc-500">/ month</div>
        </div>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
          <li>Full access to all interactive worksheets</li>
          <li>Parent guides and discussion prompts</li>
          <li>New critical thinking modules monthly</li>
        </ul>
        <button
          onClick={startCheckout}
          disabled={loading}
          className="mt-6 w-full rounded-md bg-black py-2.5 text-white hover:bg-zinc-800 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          {loading ? 'Starting checkout?' : 'Subscribe now'}
        </button>
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        <p className="mt-3 text-xs text-zinc-500">Payments are handled securely via Stripe. In demo mode, checkout is simulated.</p>
      </div>
    </section>
  );
}
