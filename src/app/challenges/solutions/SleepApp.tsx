"use client";
import { MobileSkeleton } from "@/app/components/MobileSkeleton/MobileSkeleton";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CircularProgress, NextUIProvider } from "@nextui-org/react";
import { CheckCircleIcon, Info } from "lucide-react";
import Image from "next/image";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { FcLandscape, FcNightLandscape } from "react-icons/fc";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { MdAutoAwesome } from "react-icons/md";

import { motion } from "framer-motion";
import { HiMenuAlt2 } from "react-icons/hi";

export const SleepApp = () => {
  const [showDetails, setShowDetails] = React.useState(false);
  return (
    <NextUIProvider>
      <div className="flex-1 flex flex-col items-center justify-center gap-4 md:gap-6 mx-2  | rounded-xl | overflow-clip">
        <MobileSkeleton className="relative bg-violet-950">
          {!showDetails ? (
            <HomePage onClick={() => setShowDetails(true)} />
          ) : (
            <DetailPage />
          )}
        </MobileSkeleton>
      </div>
    </NextUIProvider>
  );
};

const HomePage = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <div className="h-2/3 challenge-36-clip relative">
        <Image
          src="/assets/challenge/nightsky.jpeg"
          alt="Night Sky"
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>
      <div className="h-1/3 flex flex-col gap-4 px-4 py-6  items-center ">
        <h1 className="text-xl text-white font-semibold">Track your sleep</h1>
        <p className="text-sm text-white text-center flex-1">
          Upgrade your sleep quality with our cutting-edge tracking app.
          Experience deeper rest and wake up revitalized. Sleep better, live
          better.
        </p>
        <Button
          onClick={onClick}
          className="w-full bg-[#EB7F63] text-white hover:bg-white hover:text-[#EB7F63] hover:ring-1 ring-[#EB7F63]"
        >
          Get Started
        </Button>
      </div>
    </>
  );
};

const DetailPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
          x: -500,
        },
        animate: {
          opacity: 1,
          x: 0,
        },
      }}
      className="p-4 text-white space-y-6"
    >
      <div className="flex flex-row items-center justify-between gap-2">
        <button className="p-2 bg-violet-200/20 hover:bg-violet-200/50 transition-colors hover:text-black rounded-md ">
          <HiMenuAlt2 size={16} />
        </button>
        <Avatar>
          <AvatarImage src="/assets/challenge/dogs/photo1.jpeg" alt="avatar" />
        </Avatar>
      </div>
      <main className="py-6 flex flex-col gap-6 items-center">
        <div className="flex gap-4 justify-center items-center">
          <IoArrowBackCircleOutline className="text-white/50 hover:text-white hover:scale-125 transition-all  cursor-pointer" />
          <div className="flex flex-col justify-center">
            <p className="text-base text-white font-semibold">Wednesday</p>
            <p className="text-sm text-white/50">4 march 2024</p>
          </div>
          <IoArrowForwardCircleOutline className="text-white/50 hover:text-white hover:scale-125  transition-all cursor-pointer" />
        </div>
        <div className="rounded-full border-[20px] border-violet-500 flex items-center justify-center">
          <CircularProgress
            classNames={{
              svg: "w-36 h-36 drop-shadow-md",
              indicator: "stroke-pink-500",
              track: "stroke-white/10",
              value: "text-3xl font-semibold text-white",
            }}
            value={90}
            strokeWidth={4}
            valueLabel={
              <div className="flex flex-col">
                <p className="text-4xl text-center">90</p>
                <span className="text-[10px] text-center">Sleep Score</span>
              </div>
            }
            showValueLabel={true}
          />
        </div>
      </main>
      <div className="grid grid-flow-col gap-2 ">
        <Card className="bg-violet-200/20 ring-0 border-0 !p-2 h-fit space-y-2">
          <CardHeader className="p-0 text-violet-200  flex flex-row items-center justify-between">
            <p className="text-white/50">Sleep time</p>
            <button className="flex justify-center items-center p-1 size-6 text-white/50  hover:text-white">
              <Info />
            </button>
          </CardHeader>
          <CardContent className="p-0">
            <h2 className="text-3xl text-white font-bold">
              8<span className="text-xs">h</span> 21
              <span className="text-xs">m</span>
            </h2>
          </CardContent>
          <CardFooter className="p-0 text-sm flex gap-2 text-green-500">
            <CheckCircleIcon size={14} />
            <p>Normal</p>
          </CardFooter>
        </Card>

        <Card className="bg-violet-200/20 ring-0 border-0 !p-2 h-fit space-y-2">
          <CardHeader className="p-0 text-violet-200  flex flex-row items-center justify-between">
            <p className="text-white/50">Sleep Quality</p>
            <button className="flex justify-center items-center p-1 size-6 text-white/50  hover:text-white">
              <Info />
            </button>
          </CardHeader>
          <CardContent className="p-0">
            <h2 className="text-3xl text-white font-bold">
              92<span className="text-xs">%</span>
            </h2>
          </CardContent>
          <CardFooter className="p-0 text-sm flex gap-2 text-yellow-400">
            <MdAutoAwesome size={14} />
            <p>Excellent</p>
          </CardFooter>
        </Card>
      </div>

      <div>
        <div className="flex flex-row gap-1">
          <div className="w-[10%] h-10 rounded-md bg-violet-400 "></div>
          <div className="w-[20%] h-10 rounded-md bg-sky-400"></div>
          <div className="w-[10%] h-10 rounded-md bg-red-400"></div>
          <div className="w-[20%] h-10 rounded-md bg-blue-400"></div>
          <div className="w-[5%] h-10 rounded-md bg-red-400"></div>
          <div className="w-[10%] h-10 rounded-md bg-violet-400"></div>
          <div className="w-[5%] h-10 rounded-md bg-red-400"></div>
          <div className="w-[20%] h-10 rounded-md bg-fuchsia-300"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <FcNightLandscape />
            <p>11:24 PM</p>
          </div>
          <div className="flex gap-1 items-center">
            <FcLandscape />
            <p>7:30 AM</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
