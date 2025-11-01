import Link from 'next/link';

export default function SuccessPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-bold">Welcome! You?re subscribed.</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">Full access is now unlocked on this device.</p>
      <div className="mt-8 rounded border p-6">
        <p className="text-sm">Head to the worksheets to begin.</p>
        <Link href="/worksheets" className="mt-4 inline-block rounded-md bg-black px-4 py-2 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Open worksheets</Link>
      </div>
    </section>
  );
}
