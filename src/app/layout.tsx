import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100 flex justify-center">
          <div className="w-full lg:max-w-screen-2xl">
            <Header />
            {children}
          </div>
        </div>
      </body>
      {/* @ts-ignore */}
      <bds />
    </html>
  );
}
