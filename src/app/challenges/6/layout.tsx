import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Day 6 of 100",
  description: "Image carousel Solution for 100 days UI Challenge",
};

export default function Challenges6Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
