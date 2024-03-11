"use client";
import { PLAYLIST, Track } from "@/app/api/challenges/Playlist/data";
import { LikeIcon } from "@/app/components/LikeIcon/LikeIcon";
import { MobileSkeleton } from "@/app/components/MobileSkeleton/MobileSkeleton";
import { cn } from "@/app/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { PropsWithChildren, useState } from "react";
import { ProgressBar } from "react-aria-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBackward, FaChevronLeft, FaForward } from "react-icons/fa6";
import { IoPlay } from "react-icons/io5";
import { LuDot } from "react-icons/lu";

export const Playlist = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4 md:gap-6 mx-2  | rounded-xl | mb-6 relative overflow-clip">
      <MobileSkeleton className="relative bg-violet-950 relative">
        <HomePage />
        <Player track={PLAYLIST.tracks[0]} />;
      </MobileSkeleton>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="text-white px-4 py-6">
      <header className="flex">
        <FaChevronLeft />
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={PLAYLIST.cover}
            alt={PLAYLIST.title}
            width={100}
            height={100}
            className="rounded-xl size-24 object-cover"
          />
        </div>
      </header>

      <main className="grid gap-6 mt-4">
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold flex-1">{PLAYLIST.title}</h1>
            <LikeIcon size={24} />
            <BsThreeDotsVertical size={24} />
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-300">
            <p>{PLAYLIST.likes} likes</p>
            <LuDot />
            <p>{PLAYLIST.duration} min</p>
          </div>
        </div>
        <SongsList />
      </main>
    </div>
  );
};

const SongsList = () => {
  return (
    <div className="grid gap-4 pb-16 overflow-y-auto max-h-[60%]  scroll">
      {PLAYLIST.tracks.map((track: Track) => {
        return <PlaylistItem key={track.id} track={track} />;
      })}
    </div>
  );
};

export const PlaylistItem = ({ track }: { track: Track }) => {
  return (
    <div className="flex items-center  gap-4">
      <Image
        src={track.cover}
        alt={track.title}
        width={100}
        height={100}
        className="rounded-xl size-14 object-cover"
      />
      <div className="flex-1 space-y-1">
        <p className="text-sm">{track.title}</p>
        <p className="text-xs text-gray-300">{track.artist}</p>
      </div>
      <p className="text-xs text-gray-300">{track.duration}</p>
    </div>
  );
};

const Player = ({ track }: { track: Track }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <BottomSheet onToggle={() => setShowDetails((prev) => !prev)}>
      <div className="w-full h-full rounded-t-3xl bg-white">
        {!showDetails ? (
          <div className="flex items-center gap-4 text-black p-4">
            <motion.div layoutId={track.id}>
              <Image
                src={track.cover}
                alt={track.title}
                width={100}
                height={100}
                className="rounded-xl size-14 object-cover"
              />
            </motion.div>
            <motion.div className="flex-1 space-y-1">
              <p className="text-sm">{track.title}</p>
              <p className="text-xs text-gray-300">{track.artist}</p>
            </motion.div>
            <IoPlay className="size-10 fill-violet-500" />
          </div>
        ) : (
          <div className="flex flex-col p-6 gap-4 h-full">
            <motion.div layoutId={track.id} className="w-full h-2/3">
              <Image
                src={track.cover}
                alt={track.title}
                width={500}
                height={500}
                className="rounded-xl w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex items-center">
              <motion.div className="space-y-1 flex-1 ">
                <p className="text-base">{track.title}</p>
                <p className="text-xs text-gray-500">{track.artist}</p>
              </motion.div>
              <LikeIcon size={24} />
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <ProgressBar
                className="flex flex-row items-center gap-3 text-white flex-1"
                value={50}
                minValue={0}
                maxValue={100}
              >
                {({ percentage }) => (
                  <>
                    <div className="h-2 w-full bg-violet-300 relative rounded">
                      <div
                        className="absolute h-2 top-[50%] transform translate-y-[-50%] rounded bg-violet-500"
                        style={{ width: percentage + "%" }}
                      />
                    </div>
                  </>
                )}
              </ProgressBar>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <p>2:42</p>
                <p>{track.duration}</p>
              </div>
            </div>

            <div className="flex gap-4 justify-center items-center mt-auto">
              <FaBackward className="size-6 fill-violet-300" />
              <IoPlay className="size-10 fill-violet-400" />
              <FaForward className="size-6 fill-violet-300" />
            </div>
          </div>
        )}
      </div>
    </BottomSheet>
  );
};

type BottomSheetProps = { onToggle: () => void } & PropsWithChildren;
const BottomSheet = ({ children, onToggle }: BottomSheetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
    onToggle();
  };

  const variants = {
    open: { y: 0 },
    closed: { y: "84%" },
  };

  return (
    <AnimatePresence mode="sync" initial={false}>
      <div
        className={cn(
          "fixed flex items-center",
          isOpen && "bg-white/10 backdrop-blur-sm  inset-0 z-10"
        )}
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 h-3/4 "
          onClick={handleOpen}
        >
          <div className="w-16 h-2 bg-gray-200 hover:bg-white rounded mx-auto absolute -top-4 left-1/2 -translate-x-1/2 cursor-grab" />
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
