"use client";
import useCountdownTimer from "@/app/hooks/useCountDownTimer/useCountdownTimer";
import React from "react";
import { addDays } from "date-fns";
import Image from "next/image";

const TARGET_DATE = addDays(new Date(), 10);

export const WebsiteLaunch = () => {
  const { days, hours, minutes, seconds } = useCountdownTimer(TARGET_DATE);
  return (
    <div className=" flex-1 flex flex-col pt-40 gap-8 p-8 | bg-gradient-to-t from-sky-600 to-fuchsia-600  rounded-xl | mb-6 relative overflow-clip">
      <Image
        src="/assets/challenge/carousel/image3.jpeg"
        alt="bg"
        fill
        className="object-cover"
      />

      <h1 className="uppercase text-4xl  tracking-widest text-center z-50">
        We are launching soon
      </h1>
      <div className="border border-gray-100 py-8 rounded-2xl  shrink-0 flex items-center justify-around bg-white/10 backdrop-blur-lg">
        <div className="relative w-1/4 text-center">
          <h1 className="text-8xl font-semibold">{days}</h1>
          <p className="uppercase  font-extralight text-2xl tracking-widest absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50 text-white">
            Days
          </p>
        </div>
        <div className="relative w-1/4 text-center">
          <h1 className="text-8xl font-semibold">{hours}</h1>
          <p className="uppercase font-extralight text-2xl tracking-widest absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50 text-white">
            hours
          </p>
        </div>
        <div className="relative w-1/4 text-center">
          <h1 className="text-8xl font-semibold">{minutes}</h1>
          <p className="uppercase font-extralight text-2xl tracking-widest absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50 text-white">
            minutes
          </p>
        </div>

        <div className="relative w-1/4 text-center">
          <h1 className="text-8xl font-semibold">{seconds}</h1>
          <p className="uppercase font-extralight text-2xl tracking-widest absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50 text-white">
            seconds
          </p>
        </div>
      </div>
    </div>
  );
};
