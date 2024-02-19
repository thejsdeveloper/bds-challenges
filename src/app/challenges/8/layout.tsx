import { Metadata } from "next";
import { Fredoka } from "next/font/google";

export const metadata: Metadata = {
  title: "Day 8 of 100",
  description: "Music Event Solution for 100 days UI Challenge",
};
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Challenges6Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={fredoka.className}>{children}</div>;
}
