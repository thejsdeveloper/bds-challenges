import { Inter } from "next/font/google";
import React from "react";
import Header from "../components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

function Challenges({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${inter.className} w-screen h-screen bg-gradient-to-b from-orange-300 to-orange-100 flex justify-center`}
    >
      <div className="w-full max-w-screen-2xl flex flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Challenges;
