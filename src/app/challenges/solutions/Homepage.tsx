"use client";
import { cn } from "@/app/utils/cn";
import { Marhey, Varela_Round } from "next/font/google";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight, BsPerson } from "react-icons/bs";
import { IoBagHandle, IoSearchCircleOutline } from "react-icons/io5";
import plant1 from "#/assets/challenge/plants/plant1.jpeg";
import plant2 from "#/assets/challenge/plants/plant2.jpeg";
import plant3 from "#/assets/challenge/plants/plant3.jpeg";
import Image from "next/image";
import { Avatar } from "@/app/components/Avatar/Avatar";
import { Rating } from "@/app/components/Rating/Rating";
import { FaQuoteRight } from "react-icons/fa6";

const marhey = Marhey({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "600", "700"],
});

const vareala = Varela_Round({
  subsets: ["latin"],
  style: "normal",
  weight: ["400"],
});

const activeClass =
  "underline underline-offset-8 text-emerald-600 transition-all";

export const Homepage = () => {
  const searchParams = useSearchParams();
  const activeLink = searchParams.get("active") ?? "homepage";
  return (
    <div
      className={cn(
        "flex-1 flex flex-col items-center gap-4 md:gap-10 bg-teal-50/90 p-8 | rounded-xl | mb-6 relative overflow-clip",
        vareala.className
      )}
    >
      <header className="flex items-baseline w-full font-bold text-emerald-700 ">
        <h1 className={cn("text-4xl font-semibold", marhey.className)}>
          GrowGreen
        </h1>
        <nav
          aria-label="Primary Navbar"
          className="w-full max-w-md mx-auto hidden md:block"
        >
          <ul className="flex flex-1 justify-around text-base  text-emerald-400">
            <li>
              <Link
                href={"?active=homepage"}
                className={cn(
                  "outline-none p-1 focus:bg-emerald-100 rounded",
                  activeLink.toLowerCase() === "homepage" && activeClass
                )}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"?active=Catalog"}
                className={cn(
                  "outline-none p-1 focus:bg-emerald-100 rounded",
                  activeLink.toLowerCase() === "catalog" && activeClass
                )}
              >
                Catalog
              </Link>
            </li>
            <li>
              <Link
                href={"?active=Blog"}
                className={cn(
                  "outline-none p-1 focus:bg-emerald-100 rounded",
                  activeLink.toLowerCase() === "blog" && activeClass
                )}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href={"?active=Contact"}
                className={cn(
                  "outline-none p-1 focus:bg-emerald-100 rounded",
                  activeLink.toLowerCase() === "contact" && activeClass
                )}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="gap-4 ml-auto items-baseline hidden md:flex">
          <button className="outline-none p-1 rounded-full hover:bg-emerald-200 transition-all focus:bg-emerald-200  focus:ring-1 ring-offset-1 ring-emerald-400">
            <BiSearch />
          </button>
          <button className="outline-none p-1 rounded-full hover:bg-emerald-200 transition-all focus:bg-emerald-200  focus:ring-1 ring-offset-1 ring-emerald-400">
            <BsPerson />
          </button>
          <button className="outline-none p-1 rounded-full hover:bg-emerald-200 transition-all focus:bg-emerald-200  focus:ring-1 ring-offset-1 ring-emerald-400">
            <IoBagHandle />
          </button>
        </div>
      </header>

      <div className="grid grid-clos-1 md:grid-cols-2 gap-4">
        <div className="md:px-6 h-[200px] md:h-auto bg-gray-200 relative w-full md:w-10/12 ml-auto rounded-md">
          <Image
            src={plant1}
            alt="hero plant"
            fill
            sizes="100%"
            className="rounded-md"
          />
          <FaQuoteRight className="hidden lg:block size-20 fill-emerald-900 z-100 absolute top-1/2 -left-[25%] -translate-y-1/3 " />
          <div className="hidden lg:block md:absolute z-50 top-1/2 -left-[20%]">
            <Card
              author={{
                name: "Debra D. Gilliam",
                avatar: "https://i.pravatar.cc/200?u=Debra",
              }}
              rating={4}
              review="Absolutely love this plant app! It's like having a green thumb in your pocket. So easy to use, with tons of helpful tips and reminders for plant care."
            />
          </div>
        </div>
        <div className="grid place-content-center px-2 md:px-10  md:w-9/12 space-y-6">
          <h2 className="text-4xl md:text-6xl text-emerald-700">
            Make your home beautiful with plants
          </h2>
          <p className="text-base text-emerald-500">
            Unlock the secrets of greenery and infuse every corner with life and
            serenity. From vibrant blooms to lush foliage, let your home reflect
            the timeless elegance of nature's bounty.
          </p>
          <div className="flex gap-6">
            <div className="pb-4 relative overflow-clip object-cover flex flex-col items-center gap-4">
              <Image
                src={plant2}
                alt="attachment 2"
                className="size-40 rounded-lg aspect-square"
                width={80}
                height={80}
              />
              <button className="outline-none ring-1 ring-gray-600 p-1 rounded bg-gray-200 hover:bg-gray-300 transition-all">
                <BsArrowRight />
              </button>
            </div>
            <div className="pb-4 relative overflow-clip flex flex-col items-center gap-4">
              <Image
                src={plant3}
                alt="attachment 3"
                className="size-40 rounded-lg aspect-square"
                width={80}
                height={80}
              />
              <button className="outline-none ring-1 ring-gray-600 p-1 rounded bg-gray-200 hover:bg-gray-300 transition-all">
                <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  author: {
    name: string;
    avatar: string;
  };
  rating: number;
  review: string;
}

const Card: React.FC<CardProps> = ({ author, rating, review }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xs m-4">
      <div className="md:flex">
        <div className="p-8">
          <div className="flex gap-4 items-center">
            <Avatar
              src={author.avatar}
              alt={author.name}
              size="medium"
              className="rounded-full border-2 border-emerald-300 "
            />
            <div>
              <p className="uppercase tracking-wide text-sm text-black font-semibold">
                {author.name}
              </p>
              <div className="flex gap-1 items-center">
                <p>{rating}</p>
                <Rating rating={rating} totalRating={5} />
              </div>
            </div>
          </div>

          <p className="mt-2 text-gray-500">"{review}"</p>
        </div>
      </div>
    </div>
  );
};
