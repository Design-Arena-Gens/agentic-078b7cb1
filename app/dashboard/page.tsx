import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function DashboardPage() {
  const jar = await cookies();
  const subscribed = jar.get('subscribed')?.value === 'true';

  return (
    <section className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded border p-6">
          <h2 className="font-semibold">Subscription</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Status: {subscribed ? 'Active (device-level demo)' : 'Inactive'}
          </p>
          {subscribed ? (
            <p className="mt-2 text-sm">Thank you for supporting this work. More features are coming soon.</p>
          ) : (
            <Link href="/subscribe" className="mt-3 inline-block rounded-md bg-black px-4 py-2 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Subscribe</Link>
          )}
        </div>
        <div className="rounded border p-6">
          <h2 className="font-semibold">Your progress</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Progress is saved locally in your browser. Export from each activity.</p>
        </div>
      </div>
    </section>
  );
}
