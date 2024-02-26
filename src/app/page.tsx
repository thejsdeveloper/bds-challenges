"use client";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { Meteors } from "./components/Meteor/Meteors";

const r1 = "47% 53% 61% 39% / 36% 49% 51% 64%";
const r2 = "59% 41% 68% 32% / 52% 45% 55% 48% ";
const r3 = "36% 64% 59% 41% / 34% 49% 51% 66% ";

const variants: Variants = {
  initial: {
    borderRadius: r1,
  },
  animate: {
    borderRadius: [r1, r2, r3, r2, r1],
    transition: {
      duration: 5,
      ease: "linear",
      repeat: Infinity,
    },
  },
  hover: {
    animation: "none",
  },
};

export default function Home() {
  return (
    <main
      className="bg-black/90
      h-screen w-screen flex flex-col justify-center items-center gap-8 font-designer relative"
    >
      <div>
        <h1 className="text-white text-6xl ">UI CHALLENGE</h1>
      </div>
      <motion.div
        className="relative w-[500px] h-[500px] 
        flex flex-col justify-center items-center 
        bg-gradient-to-t from-orange-500 to-orange-50"
        initial="initial"
        animate="animate"
        variants={variants}
      >
        <div className="z-50 flex flex-col justify-center items-center ">
          <h1 className="font-bold text-[150px] leading-[150px]">1 0 0</h1>
          <div className="h-1 w-2/3 bg-black" />
          <h2 className="text-2xl my-6">days coding challenge</h2>
          <div className="h-1 w-1/3 bg-black" />
        </div>
        <div className="rounded-full bg-gradient-to-t from-orange-500 to-orange-50 absolute inset-0 blur-2xl" />
      </motion.div>
      <Link
        href="/challenges"
        className="glowing-btn uppercase mt-5 hover:animate-none"
      >
        <span className="glowing-text">C</span>
        <span className="faulty-letter">L</span>
        <span className="glowing-text">I</span>
        <span className="glowing-text">C</span>
        <span className="glowing-text">K</span>
      </Link>
      <Meteors />
    </main>
  );
}
