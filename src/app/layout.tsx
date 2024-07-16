import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";
import Theme from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GigManager",
  description: "Getting gigs is now easier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-gradient-to-r from-slate-200 to-slate-400 dark:bg-blue-950 dark:text-gray-300 dark:bg-gradient-to-r dark:from-purple-700 dark:to-blue-950 ${inter.className}`}>
        <Theme>
          <Header />
          {children}
        </Theme>
      </body>
    </html>
  );
}
