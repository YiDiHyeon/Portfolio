"use client"
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-bg text-text-primary transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-8">이지현 | Frontend Portfolio</h1>
      <ThemeToggle />
    </main>
  );
}
