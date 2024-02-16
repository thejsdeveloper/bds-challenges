"use client";
import avatarUrl from "#/assets/avatar.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaBell, FaQ, FaRegUser } from "react-icons/fa6";
import { IoIosArrowForward, IoIosPeople } from "react-icons/io";
import { IoMail, IoMailOutline, IoSettingsSharp } from "react-icons/io5";
import { MdLocationOn, MdPeopleAlt } from "react-icons/md";
import { RiHomeLine } from "react-icons/ri";
import { pageVisitVariant } from "../animate";

const USER_OPTIONS = [
  {
    icon: MdPeopleAlt,
    text: "Personal Data",
    url: "#",
  },
  {
    icon: IoMail,
    text: "Message",
    url: "#",
  },
  {
    icon: FaBell,
    text: "Notifications",
    url: "#",
  },
  {
    icon: MdLocationOn,
    text: "Location",
    url: "#",
  },
  {
    icon: IoIosPeople,
    text: "Community",
    url: "#",
  },
];

const APP_OPTIONS = [
  {
    icon: FaQ,
    text: "FAQs",
    url: "#",
  },
  {
    icon: IoSettingsSharp,
    text: "Settings",
    url: "#",
  },
];

const FOOTER_OPTIONS = [
  {
    icon: RiHomeLine,
    url: "#",
  },
  {
    icon: BsGraphUpArrow,
    url: "#",
  },
  {
    icon: IoMailOutline,
    url: "#",
  },
  {
    icon: FaRegUser,
    url: "#",
  },
];

export default function Challenge3() {
  return (
    <motion.section
      variants={pageVisitVariant}
      initial="initial"
      animate="animate"
      className=" bg-slate-100  flex-1 flex justify-center items-center my-4 rounded-lg"
    >
      <div className="flex flex-col p-4 | h-screen w-screen md:h-[70vh] md:w-[30vw] lg:w-[20vw] |  bg-white rounded-0 md:rounded-3xl shadow-lg">
        {/* HEADER */}
        <header className="flex gap-4 py-4">
          <Image
            src={avatarUrl}
            alt="Avatar"
            className="w-12 h-12 rounded-xl"
          />
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-black text-md">Ryan Chang</h1>
            <p className="text-gray text-sm">Senior Software Engineer</p>
          </div>
        </header>
        <hr />

        {/* OPTION */}
        <nav className="list-none py-4">
          {USER_OPTIONS.map((option) => {
            return <OptionItem key={option.text} {...option} />;
          })}
        </nav>

        <hr />
        {/* SETTINGS */}
        <div className="py-4">
          {APP_OPTIONS.map((option) => {
            return <OptionItem key={option.text} {...option} />;
          })}
        </div>

        {/* FOOTER */}
        <footer className="mt-auto flex justify-between py-4">
          {FOOTER_OPTIONS.map((option, i) => {
            // should decide the active based on current route
            const active = i === FOOTER_OPTIONS.length - 1;
            return <FooterItem key={option.url} {...option} active={active} />;
          })}
        </footer>
      </div>
    </motion.section>
  );
}

const OptionItem = ({
  icon,
  text,
  url,
}: {
  icon: IconType;
  text: string;
  url: string;
}) => {
  const Icon = icon;
  return (
    <ul className="flex items-center gap-4 py-4 ">
      <div className="bg-indigo-100 p-2 rounded-md">
        <Icon />
      </div>
      <h1 className="flex-1 font-bold text-black text-md">{text}</h1>
      <Link href={url}>
        <IoIosArrowForward />
      </Link>
    </ul>
  );
};

const FooterItem = ({
  url,
  icon,
  active,
}: {
  icon: IconType;
  url: string;
  active: boolean;
}) => {
  const Icon = icon;

  return (
    <div
      className={`p-4 rounded-full hover:bg-indigo-50 focus:bg-indigo-50 ${
        active ? "bg-indigo-50" : ""
      }`}
    >
      <Link href={url}>
        <Icon />
      </Link>
    </div>
  );
};
