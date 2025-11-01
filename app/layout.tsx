import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Socratic Homeschool",
  description: "Interactive, critical-thinking focused homeschooling platform.",
  metadataBase: new URL("https://agentic-078b7cb1.vercel.app"),
  openGraph: {
    title: "Socratic Homeschool",
    description:
      "Interactive worksheets and guided inquiry to build critical thinking.",
    url: "https://agentic-078b7cb1.vercel.app",
    siteName: "Socratic Homeschool",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-black/40">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-semibold">Socratic Homeschool</Link>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/worksheets" className="hover:underline">Worksheets</Link>
              <Link href="/dashboard" className="hover:underline">Dashboard</Link>
              <Link href="/subscribe" className="rounded-full bg-black px-4 py-1.5 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Subscribe</Link>
            </div>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <footer className="border-t border-zinc-200 px-6 py-10 text-center text-sm text-zinc-500 dark:border-zinc-800">
          ? {new Date().getFullYear()} Socratic Homeschool. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
