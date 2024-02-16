import type { Metadata } from "next";
import { Black_Ops_One, Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--ff-inter" });
const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--ff-black",
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
      <body className={`${blackOpsOne.variable} ${inter.variable}`}>
        {children}
      </body>
      {/* @ts-ignore */}
      <bds />
    </html>
  );
}
