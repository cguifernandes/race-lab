import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Race Lab | GTA VI",
  description: "An educational project built with Next.js, NestJS, PostgreSQL, and Redis to demonstrate race conditions, optimistic and pessimistic locking, distributed locks, and high-concurrency scenarios through a GTA VI launch simulation",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
