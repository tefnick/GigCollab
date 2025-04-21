import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header/Header";
import Theme from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GigCollab",
  description: "Getting gigs is now easier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="px-4 mt-4 `${inter.className}`">
        <Theme>
          <Header heading="GigCollab" text="Booking gigs is now easier"/>
          {children}
        </Theme>
      </body>
    </html>
  );
}
