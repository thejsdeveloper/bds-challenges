"use client";
import {
  Keys,
  LEADER_BOARDS_DATA,
  LeaderboardEntry,
} from "@/app/api/challenges/LeaderBoard/data";
import { MobileSkeleton } from "@/app/components/MobileSkeleton/MobileSkeleton";
import { cn } from "@/app/utils/cn";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanelProps,
  TabProps,
  Tabs,
} from "react-aria-components";

const tabs = ["Today", "Week", "Month", "Year"];

export const LeaderBoard = () => {
  const [data] = React.useState(LEADER_BOARDS_DATA);

  const [selectedTab, setSelectedTab] = React.useState<Keys>("today");

  const selectedData = data[selectedTab];
  const leaders = [selectedData[1], selectedData[0], selectedData[2]];

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4 md:gap-6 mx-2  | rounded-xl | mb-6 relative overflow-clip">
      <MobileSkeleton className="bg-black">
        <h1 className="text-xl font-semibold text-white py-4 text-center">
          Leaderboard
        </h1>
        <Tabs
          className="flex-1"
          onSelectionChange={(key) =>
            setSelectedTab(key.toString().toLowerCase() as Keys)
          }
        >
          <TabList aria-label="Leaders" className="flex w-full justify-around">
            {tabs.map((tab) => (
              <LeaderTab id={tab} key={tab}>
                {({ isSelected }) => {
                  return (
                    <>
                      {isSelected && (
                        <motion.div
                          className="absolute  inset-0 bg-neon/30  -z-10 rounded"
                          layoutId="tab-bg"
                        />
                      )}
                      <p className="z-50 px-2 py-1">{tab}</p>
                    </>
                  );
                }}
              </LeaderTab>
            ))}
          </TabList>
          {tabs.map((tab) => {
            return (
              <LeaderTabPanel id={tab} key={`tabpanel-${tab}`}>
                <motion.div
                  initial="initial"
                  animate="animate"
                  className="flex gap-6 items-end pb-5 relative "
                >
                  {leaders.map((leader, i) => {
                    return (
                      <motion.div
                        variants={{
                          initial: {
                            opacity: 0,
                            height: 0,
                          },
                          animate: {
                            opacity: 1,
                            height: "auto",
                            transition: {
                              duration: 0.5,
                              ease: "easeOut",
                            },
                          },
                        }}
                        key={leader.user.id}
                        className="flex flex-col gap-4 items-center"
                      >
                        {i === 0 && <p className="text-white text-base">2</p>}
                        {i === 2 && <p className="text-white text-base">3</p>}
                        {i === 1 && <p className="text-white text-base">👑</p>}

                        <Image
                          src={leader.user.avatar}
                          alt={leader.user.name}
                          width={60}
                          height={60}
                          className="rounded-full ring-2 ring-neon"
                        />
                        <motion.div
                          key={i}
                          className={cn(
                            "bg-neon w-24 rounded-lg flex flex-col items-center py-2",
                            i === 0 && "h-40",
                            i === 1 && "h-52",
                            i === 2 && "h-28"
                          )}
                        >
                          <p className="text-sm">{leader.user.name}</p>
                          <p className="text-xl font-semibold">
                            {leader.score}
                          </p>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </LeaderTabPanel>
            );
          })}
        </Tabs>
        <div className="h-1/3 overflow-y-auto pb-16 relative scroll">
          <div className="absolute z-50 bottom-0 h-20  w-full bg-gradient-to-t from-black/90 from-30% to-transparent" />
          {selectedData && (
            <LeaderList data={selectedData.slice(3)} tabName={selectedTab} />
          )}
        </div>
      </MobileSkeleton>
    </div>
  );
};

function LeaderTab(props: TabProps) {
  return (
    <Tab
      {...props}
      className={({ isSelected }) => `
        relative  rounded-lg  text-white font-medium text-sm text-center cursor-default outline-none transition-colors 
      `}
    />
  );
}

function LeaderTabPanel(props: TabPanelProps) {
  return (
    <TabPanel
      {...props}
      className="flex-1 flex justify-center gap-5  challenge-27-clip h-full px-10"
    />
  );
}

const LeaderList = ({
  data,
  tabName,
}: {
  data: LeaderboardEntry[];
  tabName: Keys;
}) => {
  return (
    <motion.div
      key={tabName}
      initial="initial"
      animate="animate"
      variants={{
        animate: {
          transition: { staggerChildren: 0.1 },
        },
      }}
      aria-label="Leader Board"
      className="flex flex-col "
    >
      {data.map((entry, i) => {
        return (
          <motion.div
            variants={{
              initial: { x: 20, opacity: 0 },
              animate: {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              },
            }}
            key={entry.user.name}
            className="w-full flex items-center gap-2 text-base text-white px-4 py-2 even:bg-black odd:bg-white/20"
          >
            <p className="w-6">{i + 4}</p>
            <div className="flex items-center  flex-1 gap-4">
              <Image
                width={40}
                height={40}
                src={entry.user.avatar}
                alt={entry.user.name}
                className="rounded-full ring-2 ring-white object-cover"
              />
              <p>{entry.user.name}</p>
            </div>
            <p className="text-neon font-medium">{entry.score}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
