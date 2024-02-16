"use client";
import avatarUrl from "#/assets/avatar.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { FaDribbble, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { pageVisitVariant } from "../animate";
export default function ProfileCard() {
  return (
    <motion.div
      variants={pageVisitVariant}
      initial="initial"
      animate="animate"
      className="flex-1 flex justify-center items-center"
    >
      <div className="rounded-3xl bg-white max-w-sm overflow-hidden">
        <div className="flex justify-center p-4 pb-12 bg-wave bg-no-repeat">
          <Image
            src={avatarUrl}
            alt="profile image"
            className="w-24 h-24 rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center p-4 text-center gap-6">
          <div>
            <h1 className="text-lg font-bold">Johnny Rogers</h1>
            <button className="text-sm text-slate-500 outline-none hover:text-[#98314F] focus:text-[#98314F] hover:scale-125  focus:scale-125 transition-all">
              <Link href="/challenges/1">@johnnyrogers</Link>
            </button>
          </div>
          <div className="flex justify-center gap-5">
            <IconButton href="/challenges/1">
              <FaFacebook />
            </IconButton>

            <IconButton href="/challenges/1">
              <FaLinkedin />
            </IconButton>

            <IconButton href="/challenges/1">
              <FaXTwitter />
            </IconButton>

            <IconButton href="/challenges/1">
              <RiInstagramFill />
            </IconButton>

            <IconButton href="/challenges/1">
              <FaDribbble />
            </IconButton>
          </div>
          <p className="text-base text-center">
            Crafting brand and communication strategies, creating visual
            designs, leading art direction, and copturing portraits throgh
            photography
          </p>
        </div>
        <div className="flex flex-wrap justify-center p-4 gap-4">
          <button className="rounded-full px-12 py-2 bg-pink-500 text-white text-sm hover:scale-110 focus:scale-110 transition-all outline-none">
            Follow
          </button>
          <button className="rounded-full px-12 py-2 text-slate-500 border text-sm hover:scale-110 focus:scale-110 transition-all outline-none">
            Message
          </button>
        </div>
      </div>
    </motion.div>
  );
}

type IconButtonProps = { href: string } & PropsWithChildren;

const IconButton = ({ children, href }: IconButtonProps) => {
  return (
    <Link
      href={href}
      className="outline-none text-xl hover:text-[#98314F] hover:scale-150 focus:text-[#98314F] focus:scale-150 transition-all"
    >
      {children}
    </Link>
  );
};
