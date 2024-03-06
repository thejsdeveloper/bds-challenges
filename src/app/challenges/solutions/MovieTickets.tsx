"use client";
import { MobileSkeleton } from "@/app/components/MobileSkeleton/MobileSkeleton";
import { cn } from "@/app/utils/cn";
import React from "react";
import { Movie, MOVIE } from "@/app/api/challenges/MovieTickets/data";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa6";

export const MovieTickets = () => {
  return (
    <div
      className={cn(
        "flex-1 flex flex-col items-center justify-center gap-4 md:gap-10 bg-teal-50/90 p-8 | rounded-xl | mb-6 relative overflow-clip"
      )}
    >
      <MobileSkeleton className="gap-0">
        {/* <MovieDetails movie={MOVIE} /> */}
        <Booking movie={MOVIE} />
      </MobileSkeleton>
    </div>
  );
};

const Booking = ({ movie }: { movie: Movie }) => {
  const [selectedShow, setSelectedShow] = React.useState(movie.showTimes[0]);
  const [selectedTimeIdx, setSelectedTimeIdx] = React.useState(0);

  return (
    <>
      <div className="h-2/3 bg-violet-600 p-4 text-white">
        <div className="flex items-center gap-6">
          <button
            className="p-1 rounded-full outline-none
          focus:text-black
          focus:bg-white
          hover:text-black
          hover:bg-white
          transition-all
          "
          >
            <FaChevronLeft />
            <span className="sr-only">Go Back</span>
          </button>
          <h1 className="text-lg font-medium tracking-wider">Choose Seats</h1>
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
    </>
  );
};

const SeatingPlan = ({}: { layout: string[] }) => {};

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

const MovieDetails = ({ movie }: { movie: Movie }) => {
  return (
    <>
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
    </>
  );
};
