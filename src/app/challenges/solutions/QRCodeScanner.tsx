import { MobileSkeleton } from "@/app/components/MobileSkeleton/MobileSkeleton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaChevronLeft } from "react-icons/fa6";

export const QRCodeScanner = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4 md:gap-10 p-8 | rounded-xl | mb-6 relative overflow-clip">
      <MobileSkeleton className="bg-black ">
        <div className=" h-1/3 flex flex-col">
          <div className="flex items-center gap-6 text-white p-4">
            <button
              className="p-1 rounded-full outline-none
            focus:text-black
            focus:bg-white
            hover:text-black
            hover:bg-white
              transition-all
          "
              aria-label="Go back"
            >
              <FaChevronLeft />
            </button>
            <h1 className="text-xl font-bold tracking-wider text-center flex-1 -translate-x-8">
              Scan QR code
            </h1>
          </div>
          <div className="flex-1 grid place-items-center ">
            <p className="px-8 text-white text-base text-center">
              Position the QR code within the frame for fast scanning. Minimize
              shaking to expedite results.
            </p>
          </div>
        </div>
        <div className="bg-white h-2/3 rounded-t-3xl px-6 flex flex-col items-center justify-center gap-6">
          <Image
            src="/assets/QR.png"
            alt="QR"
            width={200}
            height={200}
            className="w-full object-cover"
          />
          <Button className="w-full">Scan QR Code</Button>
        </div>
      </MobileSkeleton>
    </div>
  );
};
