"use client";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { HTMLAttributes } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

export const MusicFestival = () => {
  return (
    <div
      className="relative h-view flex flex-col gap-4 md:gap-6 mx-2 | rounded-t-xl | overflow-clip 
      bg-[url('/assets/electro.jpeg')]
      bg-cover"
    >
      <Header />
      <HeroText />
      <div className="absolute left-40 bottom-20">
        <HeroCard />
      </div>
      <div className="absolute left-10 bottom-16 ">
        <ScrollIndicator />
      </div>
    </div>
  );
};

const ScrollIndicator = () => {
  return (
    <motion.button
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          y: -20,
          rotate: -90,
        },
        animate: {
          y: 0,
          rotate: -90,
          transition: {
            duration: 1,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          },
        },
      }}
      className="flex items-center gap-2  text-sm bg-gradient-to-l from-black/30 to-transparent px-4 py-2 rounded-full"
    >
      <FaArrowLeft className="fill-white" />
      <p className="text-white">Scroll down</p>
    </motion.button>
  );
};

const HeroCard = () => {
  return (
    <div className=" space-y-4 bg-gradient-to-t from-black/50 to-black/20 backdrop-blur border border-gray-200 rounded-lg p-4 size-80 ">
      <h3 className="text-lg text-white font-semibold">
        What is electro festival
      </h3>
      <p className="text-xs text-white/60">
        The term "Electro Festival" typically refers to a music festival that
        features electronic music.
      </p>
      <div className="relative rounded-lg w-full h-40 overflow-clip">
        <Image src="/assets/electro-people.jpeg" alt="video" fill />
      </div>
      <p className="text-xs text-white/60">2024 official trailer</p>
    </div>
  );
};

const HeroText = () => {
  return (
    <div className="text-right text-white text-8xl font-bold px-10 space-y-4">
      <p>2024</p>
      <p>Electro</p>
      <p>Music</p>
      <p>Festival</p>
    </div>
  );
};

const MusicBadge = (props: BadgeProps) => {
  return (
    <Badge
      {...props}
      className="px-3 py-1 shadow-md transition-all hover:scale-105  text-green-400 border-3 border-green-400 font-semibold  bg-black/10"
    />
  );
};

const MusicButton = ({
  active = false,
  ...props
}: { active?: boolean } & HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={cn(
        "rounded-full px-3 py-1 flex justify-center items-center transition-all",
        active
          ? "bg-green-400 text-black shadow-md"
          : "text-white hover:bg-green-50 hover:text-black"
      )}
    />
  );
};
const Header = () => {
  const { toast } = useToast();
  const [activeButton, setActive] = React.useState("Tickets");

  const handleNavigation = (button: string) => {
    setActive(button);
    toast({
      title: "Navigation Button Action",
      description: `You have clicked on ${button}`,
    });
  };

  return (
    <header
      className="h-20 flex w-full items-center px-6 gap-4 bg-black/20 backdrop-blur-sm shadow-lg"
      aria-label="Music festival header"
    >
      <h1 className="text-3xl font-bold text-white">Electro Festival</h1>

      <div className="flex gap-2">
        <MusicBadge>3 - 6 July</MusicBadge>
        <MusicBadge>Delhi, India</MusicBadge>
      </div>

      <div className="flex gap-4 ml-auto">
        <MusicButton
          active={activeButton === "Tickets"}
          onClick={() => handleNavigation("Tickets")}
        >
          Tickets
        </MusicButton>
        <MusicButton
          active={activeButton === "Lineup"}
          onClick={() => handleNavigation("Lineup")}
        >
          Lineup
        </MusicButton>
        <MusicButton
          active={activeButton === "News"}
          onClick={() => handleNavigation("News")}
        >
          News
        </MusicButton>
        <MusicButton
          active={activeButton === "Articles"}
          onClick={() => handleNavigation("Articles")}
        >
          Articles
        </MusicButton>
        <MusicButton
          active={activeButton === "Explore"}
          onClick={() => handleNavigation("Explore")}
        >
          Explore
        </MusicButton>
      </div>
    </header>
  );
};
