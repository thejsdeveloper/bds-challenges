import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Day 7 of 100",
  description: "Create Account Solution for 100 days UI Challenge",
};

export default function Challenges6Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
