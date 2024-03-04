import { MobileSkeleton } from "@/app/components/MobileSkeleton/MobileSkeleton";
import React from "react";
import { FaBell } from "react-icons/fa6";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

export const Messages = () => {
  return (
    <div className="flex-1 flex flex-col  items-center gap-10 bg-rose-50 p-10 | rounded-xl | mb-6 relative overflow-clip">
      <MobileSkeleton>
        <header className="flex justify-between items-center p-6">
          <h1 className="text-2xl text-black font-bold">Messages</h1>
          <div className="flex gap-4">
            <button
              className="outline-none p-1
             ring-orange-500 ring-offset-1 
              focus:bg-orange-200
               hover:bg-orange-200 
               rounded-full 
               hover:ring-1
               focus:ring-1 transition-all"
            >
              <FaBell />
            </button>
            <button className="outline-none ring-orange-500 ring-offset-2  focus:bg-orange-200 hover:bg-orange-200 rounded hover:ring-1 focus:ring-1 transition-all">
              <PiDotsThreeOutlineVerticalFill />
            </button>
          </div>
        </header>
      </MobileSkeleton>
    </div>
  );
};
