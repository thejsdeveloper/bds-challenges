import type { Metadata } from "next";
import React from "react";
import Header from "../components/Header/Header";

export const metadata: Metadata = {
  title: "100 Days UI Challenge",
  description: "My solutions for BigDev Soon 100 challenges",
};

function Challenges({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`min-w-screen min-h-screen bg-gradient-to-b from-orange-300 to-orange-100 flex justify-center`}
    >
      <div className="container flex flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Challenges;
