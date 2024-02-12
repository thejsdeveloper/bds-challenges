import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "BigDevSoon | 100 Challenges",
  description: "My solutions for BigDev Soon 100 challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* @ts-ignore */}
        <bds>This is bds tag</bds>
      </Head>
      <body className={roboto.className}>
        <main className="min-h-screen bg-gradient-to-b from-blue-500 to-cyan-500">
          {children}
        </main>
      </body>
    </html>
  );
}
