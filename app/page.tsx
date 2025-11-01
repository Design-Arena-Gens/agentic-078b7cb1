import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Homeschool that cultivates critical thinking
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Interactive, discussion-first worksheets designed to develop reasoning,
            curiosity, and intellectual humility. Built for parents and self-directed learners.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/worksheets"
              className="rounded-full bg-black px-6 py-2.5 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Try worksheets
            </Link>
            <Link
              href="/subscribe"
              className="rounded-full border px-6 py-2.5 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Subscribe for full access
            </Link>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-3 text-sm text-zinc-600 dark:text-zinc-400 md:grid-cols-2">
            <li className="rounded-lg border p-4 dark:border-zinc-800">
              ? Socratic dialogues that guide, not lecture
            </li>
            <li className="rounded-lg border p-4 dark:border-zinc-800">? Logic & argument mapping tools</li>
            <li className="rounded-lg border p-4 dark:border-zinc-800">? Evidence evaluation challenges</li>
            <li className="rounded-lg border p-4 dark:border-zinc-800">? Progress you can export and share</li>
          </ul>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-black/20">
          <h2 className="mb-4 text-xl font-semibold">Today?s thinking challenge</h2>
          <ol className="list-decimal space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
            <li>What is a claim you believe is true?</li>
            <li>What evidence would change your mind?</li>
            <li>Who disagrees, and why might they be reasonable?</li>
            <li>What experiment could reduce uncertainty?</li>
          </ol>
          <p className="mt-4 text-sm text-zinc-500">Start with humility. Follow evidence. Update honestly.</p>
        </div>
      </div>
    </section>
  );
}
