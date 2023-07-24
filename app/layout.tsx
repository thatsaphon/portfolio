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
          <header className="hidden md:fixed md:w-full md:bg-slate-800 md:h-24 md:flex md:justify-between md:p-5 md:items-center">
            <span className="text-2xl text-white font-bold">Portfolio 🔥</span>
            <div className="text-2xl text-white flex gap-5">
              <button type="button" className="hover:cursor-pointer">
                About Me
              </button>
              <button type="button" className="hover:cursor-pointer">
                Experiences
              </button>
              <button type="button" className="hover:cursor-pointer">
                Portfolio
              </button>
            </div>
            <div className="flex items-center">
              <span className="mr-5">
                <ModeToggle />
              </span>
              <button className="bg-white rounded-md text-2xl font-bold p-3">
                Contact Me
              </button>
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
