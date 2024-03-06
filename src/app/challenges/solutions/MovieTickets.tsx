"use client";
import { MobileSkeleton } from "@/app/components/MobileSkeleton/MobileSkeleton";
import { cn } from "@/app/utils/cn";
import React from "react";
import {
  Movie,
  MOVIE,
  SEAT_LAYOUT,
  SeatLayout,
} from "@/app/api/challenges/MovieTickets/data";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

export const MovieTickets = () => {
  const [showBookingScreen, setShowBookingScreen] = React.useState(false);
  return (
    <div
      className={cn(
        "flex-1 flex flex-col items-center justify-center gap-4 md:gap-10 bg-teal-50/90 p-8 | rounded-xl | mb-6 relative overflow-clip"
      )}
    >
      <MobileSkeleton className="gap-0">
        <AnimatePresence mode="sync" initial={false}>
          {showBookingScreen && (
            <Booking movie={MOVIE} onBack={() => setShowBookingScreen(false)} />
          )}
        </AnimatePresence>
        <MovieDetails
          movie={MOVIE}
          onClick={() => setShowBookingScreen(true)}
        />
      </MobileSkeleton>
    </div>
  );
};

const Booking = ({ movie, onBack }: { movie: Movie; onBack: () => void }) => {
  const [selectedShow, setSelectedShow] = React.useState(movie.showTimes[0]);
  const [selectedTimeIdx, setSelectedTimeIdx] = React.useState(0);

  return (
    <motion.div
      className="flex-1 flex flex-col z-50 bg-white"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: {
          opacity: 0,
          x: 500,
        },
        animate: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.2,
          },
        },
        exit: {
          x: 500,
          transition: {
            duration: 0.2,
          },
        },
      }}
    >
      <div className="flex flex-col h-2/3 bg-violet-600 p-4 text-white">
        <div className="flex items-center gap-6">
          <button
            className="p-1 rounded-full outline-none
          focus:text-black
          focus:bg-white
          hover:text-black
          hover:bg-white
          transition-all
          "
            aria-label="Go back"
            onClick={onBack}
          >
            <FaChevronLeft />
          </button>
          <h1 className="text-lg font-medium tracking-wider">Choose Seats</h1>
        </div>

        <div className="absolute top-20 left-0 right-0">
          <Screen />
        </div>
        <div className="relative mt-auto grid gap-8 place-content-center">
          <div className="relative">
            <TheatreSeatLayout layout={SEAT_LAYOUT} />
          </div>
          <div className="flex justify-around mb-10 text-sm">
            <div className="flex items-center gap-1">
              <div className="size-3 rounded-sm bg-orange-500" /> Selected
            </div>

            <div className="flex items-center gap-1">
              <div className="size-3 rounded-sm bg-gray-200" /> Reserved
            </div>

            <div className="flex items-center gap-1">
              <div className="size-3  rounded-sm border border-gray-200" />{" "}
              Selected
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/3 -mt-8 rounded-t-3xl bg-white overflow-y-auto overflow-clip pt-4 pb-10 px-8 space-y-3">
        <p className="text-base">Date</p>
        <div className="flex flex-wrap gap-4">
          {movie.showTimes.map((show, i) => {
            const selected = show.date === selectedShow.date;
            return (
              <Pill
                key={`show-${i}`}
                text={show.date}
                onClick={() => setSelectedShow(show)}
                selected={selected}
              />
            );
          })}
        </div>

        <p className="text-base">Time</p>
        <div className="flex flex-wrap gap-4">
          {selectedShow.times.map((time, i) => {
            const selected = i === selectedTimeIdx;
            return (
              <Pill
                key={`time-${i}`}
                text={time}
                onClick={() => setSelectedTimeIdx(i)}
                selected={selected}
              />
            );
          })}
        </div>
        <button
          className="py-2
          absolute bottom-4 left-4 right-4
          bg-black rounded text-white
          outline-none
          hover:bg-orange-600  hover:ring-2 
          focus:bg-orange-600  focus:ring-2 
            ring-offset-2 ring-orange-500 transition-all"
        >
          Pay
        </button>
      </div>
    </motion.div>
  );
};

const Screen = () => {
  return (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 1877 1341"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M259 195.613L414.341 128.472L590.147 68.2423L763.45 30.7222L956.149 9L1331.54 68.2423L1528.61 128.472L1623.71 162.043L1711.5 195.613L2042 1340.5L-113.5 1287L259 195.613Z"
        fill="url(#paint0_linear_21_788)"
      />
      <path
        d="M258.59 190.766C258.59 190.766 601.835 11.0258 935.066 10.9355C1268.3 10.8452 1708.64 190.372 1708.64 190.372"
        stroke="white"
        strokeWidth="20"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_21_788"
          x1="994"
          y1="9"
          x2="994"
          y2="1290.61"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9848D7" />
          <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.03" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const TheatreSeatLayout = ({ layout }: { layout: SeatLayout }) => {
  const rows = layout.seats.length;
  const cols = layout.seats[0].length;
  const seats = layout.seats.flat();

  const [selectedSeats, setSelectedSeats] = React.useState<string[]>([]);

  return (
    <div
      className={cn(
        `grid gap-3`,
        cols && `grid-rows-${rows} grid-cols-${cols}`
      )}
    >
      {seats.map((seat) => {
        if (!seat) return <div></div>;
        const selected = selectedSeats.includes(seat.id);
        return (
          <button
            className={cn(
              "outline-none size-6 ring-1 ring-white rounded-sm",
              seat.status === "reserved" && "bg-gray-200 cursor-default",
              selected && "bg-orange-500 ring-orange-500"
            )}
            onClick={() => {
              if (seat.status === "reserved") return;
              if (selected) {
                setSelectedSeats(selectedSeats.filter((s) => s !== seat.id));
              } else {
                setSelectedSeats([...selectedSeats, seat.id]);
              }
            }}
          />
        );
      })}
    </div>
  );
};

const Pill = ({
  text,
  onClick,
  selected = false,
}: {
  text: string;
  onClick: () => void;
  selected?: boolean;
}) => {
  return (
    <button
      className={cn(
        "outline-none rounded text-sm py-1 text-gray-600 ring-2 ring-gray-400  w-16 transition-all hover:scale-105",
        selected
          ? "ring-orange-500 text-orange-600"
          : "focus:ring-gray-500 hover:ring-gray-500 "
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const MovieDetails = ({
  movie,
  onClick,
}: {
  movie: Movie;
  onClick: () => void;
}) => {
  return (
    <motion.div className="flex-1 absolute inset-0 z-0">
      <div
        className="h-[55%] bg-top bg-cover"
        style={{
          backgroundImage: `url(${movie.poster})`,
        }}
      />
      <div className="h-[45%] -mt-8 rounded-t-3xl bg-white py-4 px-8 overflow-y-auto overflow-clip">
        <h1 className="text-xl font-bold text-black">{movie.title}</h1>
        <div className="flex justify-between text-xs text-gray-500 my-2">
          <p>{movie.genre}</p>
          <p className="text-gray-600">{movie.duration}</p>
        </div>
        <p className="text-sm text-gray-500 line-clamp-3 my-4">
          {movie.description}
        </p>
        <h2 className="text-base font-bold">Cast</h2>
        <div className="flex flex-wrap gap-2 my-4">
          {movie.cast.map((cast) => {
            return (
              <Image
                key={cast.id}
                src={cast.avatar}
                alt={cast.name}
                width={100}
                height={100}
                className="size-20 aspect-square rounded-md object-cover"
              />
            );
          })}
        </div>
        <button
          aria-label="Book movie ticket"
          onClick={onClick}
          className="py-2
          absolute bottom-4 left-4 right-4
          bg-orange-500 rounded text-white
          outline-none
          hover:bg-orange-600  hover:ring-2 
          focus:bg-orange-600  focus:ring-2 
            ring-offset-2 ring-orange-500 transition-all"
        >
          Buy Tickets
        </button>
      </div>
    </motion.div>
  );
};
