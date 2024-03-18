"use client";
import { PLAYLIST, Track } from "@/app/api/challenges/Playlist/data";
import { LikeIcon } from "@/app/components/LikeIcon/LikeIcon";
import { MobileSkeleton } from "@/app/components/MobileSkeleton/MobileSkeleton";
import { useSound } from "@/app/hooks/useSound/useSound";
import { cn } from "@/app/utils/cn";
import { formatTime } from "@/app/utils/number";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { PropsWithChildren, useState } from "react";
import {
  Label,
  ProgressBar,
  Slider,
  SliderThumb,
  SliderTrack,
} from "react-aria-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBackward, FaChevronLeft, FaForward } from "react-icons/fa6";
import { IoPause, IoPlay } from "react-icons/io5";
import { LuDot } from "react-icons/lu";

export const Playlist = () => {
  const [songs] = React.useState(() => PLAYLIST.tracks);
  const [selectedSong, setSelectedSong] = React.useState(0);
  const currentSong = songs[selectedSong];

  const handleNextClick = () => {
    if (selectedSong < songs.length - 1) {
      setSelectedSong(selectedSong + 1);
    } else {
      setSelectedSong(0);
    }
  };

  const handlePrevClick = () => {
    if (selectedSong > 0) {
      setSelectedSong(selectedSong - 1);
    } else {
      setSelectedSong(songs.length - 1);
    }
  };
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4 md:gap-6 mx-2  | rounded-xl | mb-6 relative overflow-clip">
      <MobileSkeleton className="relative bg-violet-950">
        <HomePage onSongChange={(i) => setSelectedSong(i)} />
        <Player
          track={currentSong}
          onNextClick={handleNextClick}
          onPrevClick={handlePrevClick}
        />
      </MobileSkeleton>
    </div>
  );
};

const HomePage = ({ onSongChange }: { onSongChange: (i: number) => void }) => {
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
        <SongsList onClick={onSongChange} />
      </main>
    </div>
  );
};

const SongsList = ({ onClick }: { onClick: (i: number) => void }) => {
  return (
    <div className="grid gap-4 pb-16 overflow-y-auto max-h-[60%]  scroll ">
      {PLAYLIST.tracks.map((track: Track, i) => {
        return (
          <PlaylistItem
            key={track.id}
            track={track}
            onClick={() => onClick(i)}
          />
        );
      })}
    </div>
  );
};

export const PlaylistItem = ({
  track,
  onClick,
}: {
  track: Track;
  onClick: () => void;
}) => {
  return (
    <div className="flex items-center  gap-4 cursor-pointer " onClick={onClick}>
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

const Player = ({
  track,
  onNextClick,
  onPrevClick,
}: {
  track: Track;
  onNextClick: () => void;
  onPrevClick: () => void;
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const {
    toggleSound,
    isPlaying,
    duration,
    currentTime,
    updateCurrentTime,
    updateSound,
  } = useSound(`/assets/challenge/songs/audio/${track.audio}`);

  React.useEffect(() => {
    updateSound(`/assets/challenge/songs/audio/${track.audio}`);
  }, [track]);

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
            <button
              className="rounded-full p-2 hover:bg-violet-100 flex items-center justify-center size-12 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                toggleSound();
              }}
            >
              {!isPlaying ? (
                <IoPlay className="size-full fill-violet-500" />
              ) : (
                <IoPause className="size-full fill-violet-500" />
              )}
            </button>
          </div>
        ) : (
          <div className="flex flex-col p-6 gap-4 h-full">
            <motion.div layoutId={track.id} className="h-2/3">
              <Image
                src={track.cover}
                alt={track.title}
                width={1000}
                height={1000}
                className="rounded-xl object-cover h-full w-full"
              />
            </motion.div>
            <div className="flex items-center">
              <motion.div className="space-y-1 flex-1 ">
                <p className="text-base">{track.title}</p>
                <p className="text-xs text-gray-500">{track.artist}</p>
              </motion.div>
              <LikeIcon size={24} />
            </div>

            <Progress
              progress={currentTime}
              duration={duration}
              onChange={updateCurrentTime}
            />

            <div className="flex gap-4 justify-center  ">
              <button
                className="rounded-full p-2 hover:bg-violet-100 flex items-center justify-center size-12 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  onPrevClick();
                }}
              >
                <FaBackward className="size-6 fill-violet-300 mr-1" />
              </button>
              <button
                className="rounded-full p-2 hover:bg-violet-100 flex items-center justify-center size-12 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSound();
                }}
              >
                {!isPlaying ? (
                  <IoPlay className="size-full fill-violet-500 ml-1" />
                ) : (
                  <IoPause className="size-full fill-violet-500" />
                )}
              </button>
              <button
                className="rounded-full p-2 hover:bg-violet-100 flex items-center justify-center size-12 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  onNextClick();
                }}
              >
                <FaForward className="size-6 fill-violet-300 ml-1" />
              </button>
            </div>
          </div>
        )}
      </div>
    </BottomSheet>
  );
};

type ProgressProps = {
  progress: number;
  duration: number;
  onChange: (value: number) => void;
};
const Progress = ({ progress, duration, onChange }: ProgressProps) => {
  return (
    <Slider
      maxValue={Math.floor(duration)}
      value={Math.floor(progress)}
      onChange={onChange}
      className="text-sm text-gray-950/80 relative items-center justify-center flex flex-col w-full"
    >
      <SliderTrack className="relative w-full group h-7">
        {({ state }) => (
          <>
            {/* track */}
            <div className="absolute h-2 top-[50%] translate-y-[-50%] w-full rounded-full bg-violet-300" />
            {/* fill */}
            <SliderThumb
              className="h-5 w-5 top-[50%] rounded-full bg-violet-700 outline-none transition peer z-50
            focus-visible:opacity-100 focus-visible:outline-2 outline-offset-2 focus-visible:outline-yellow-400 opacity-0 dragging:opacity-100 group-hover:opacity-100"
            />
            <div
              style={{ width: state.getThumbPercent(0) * 100 + "%" }}
              className="absolute h-2 top-[50%] translate-y-[-50%] rounded-full bg-violet-700 
              peer-focus-visible:bg-violet-700 peer-dragging:bg-violet-700 group-hover:bg-violet-700
              transition"
            />
          </>
        )}
      </SliderTrack>
      <div className="flex items-center justify-between -mt-1 w-full">
        <span>{formatTime(progress, false)}</span>
        <Label>{formatTime(duration, false)}</Label>
      </div>
    </Slider>
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
          className="fixed bottom-0 left-0 right-0 h-[80%] "
          onClick={handleOpen}
        >
          <div className="w-16 h-2 bg-gray-200 hover:bg-white rounded mx-auto absolute -top-4 left-1/2 -translate-x-1/2 cursor-grab" />
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
