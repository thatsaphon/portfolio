import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import { ModeToggle } from "@/components/mode-toggle";

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
          <header className="hidden border-b-2 md:fixed md:flex md:h-24 md:w-full md:items-center md:justify-between md:bg-slate-800 md:p-5">
            <span className="text-2xl font-bold text-white">Portfolio 🔥</span>
            <div className="flex gap-5 text-2xl text-white">
              <button type="button" className="hover:cursor-pointer">
                About Me
              </button>
              <button type="button" className="hover:cursor-pointer">
                Experiences
              </button>
              <button type="button" className="hover:cursor-pointer">
                Service
              </button>
              <button type="button" className="hover:cursor-pointer">
                Project
              </button>
            </div>
            <div className="flex items-center gap-3">
              <ModeToggle />
              <button className="rounded-md bg-white p-3 text-2xl font-bold text-slate-500">
                Contact Me
              </button>
            </div>
          </header>
          <div className="bg-gradient-to-b from-indigo-200 to-white text-blue-600 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 dark:text-white">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
