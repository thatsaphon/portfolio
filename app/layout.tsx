import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

const inter = Noto_Sans_Thai({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thatsaphon",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="fixed flex h-24 w-full items-center justify-between bg-indigo-200 p-5 text-slate-800 dark:border-b-2 dark:bg-slate-900 dark:text-white">
            <a href="/#start" className="text-2xl font-bold">
              Portfolio 🔥
            </a>
            <div className="hidden gap-5 text-2xl md:flex">
              <button type="button" className="hover:cursor-pointer">
                <a href="/#about">About Me</a>
              </button>
              <button type="button" className="hover:cursor-pointer">
                <a href="/#project">Project</a>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <ModeToggle />
              <a href={"/#contact"}>
                <button className="rounded-md bg-blue-700 p-3 text-lg font-bold text-white dark:bg-slate-200 dark:text-slate-900 sm:text-2xl">
                  Contact Me
                </button>
              </a>
            </div>
          </header>
          <div className="bg-gradient-to-b from-indigo-200 to-violet-200 text-blue-600 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 dark:text-white">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
