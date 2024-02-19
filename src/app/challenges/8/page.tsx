"use client";
import { EVENTS_DATA } from "@/app/api/challenges/challenge8/data";
import { EventInfo } from "@/app/api/challenges/challenge8/event";
import { motion } from "framer-motion";
import { Button, GridList, GridListItem } from "react-aria-components";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
import { pageVisitVariant } from "../animate";

const COLORS = ["bg-rose-200", "bg-lime-200", "bg-sky-200", "bg-purple-200"];
function Challenge8() {
  return (
    <motion.section
      variants={pageVisitVariant}
      initial="initial"
      animate="animate"
      className="flex-1 flex-col | my-4 p-2 sm:p-20 |  bg-violet-100 | md:rounded-lg"
    >
      <h1 className="font-medium text-2xl md:text-3xl">Music events</h1>
      <p className="text-gray-600 text-base md:text-xl mt-2">
        in London, United Kingdom
      </p>
      <GridList
        aria-label="List of Music Events in London"
        items={EVENTS_DATA.events}
        className="flex flex-col gap-8 | mt-8"
      >
        {(item) => {
          const bgColor = COLORS[item.id % EVENTS_DATA.events.length];
          return <EventItem bgColor={bgColor} eventItem={item} />;
        }}
      </GridList>
    </motion.section>
  );
}

export default Challenge8;

const EventItem = ({
  eventItem,
  bgColor,
}: {
  eventItem: EventInfo;
  bgColor: string;
}) => {
  return (
    <GridListItem
      textValue={eventItem.name}
      id={eventItem.id}
      className="flex  flex-col md:grid grid-cols-12 place-items-center gap-4 | p-4  | bg-white rounded-xl
        focus:ring-red-200 focus:ring-2
        focus:shadow-lg focus:shadow-red-200
        outline-none
      "
    >
      <div
        className={twMerge(
          `w-1/2 md:w-auto col-span-2 xl:col-span-1 flex flex-row md:flex-col gap-2 items-center  justify-center md:justify-start| px-2 py-1 md:py-3 h-fit | rounded-lg`,
          bgColor
        )}
      >
        <p className="text-[12px] font-medium text-center">{eventItem.date}</p>
        <p className="text-base md:text-3xl font-normal">{eventItem.time}</p>
      </div>
      <div className="col-span-7 xl:col-span-9">
        <p className="text-xl md:text-2xl font-medium block">
          {eventItem.name}
        </p>
        <p className="text-gray-600 text-wrap mt-2 block text-sm md:text-base">
          {eventItem.description}
        </p>
      </div>

      <div className="col-span-3 xl:col-span-2 flex items-center justify-center text-base sm:text-xl">
        {eventItem.ticketsSoldOut ? (
          <p className="font-medium">Sold out!</p>
        ) : (
          <Button
            onPress={() => console.log("Buying tickets...")}
            aria-label={`Buy a ticket for ${eventItem.name}`}
            className="flex justify-center items-center gap-2 py-2 px-3 | bg-black text-white rounded-lg
              hover:bg-white hover:text-black hover:ring-black hover:ring-2
              focus:bg-white focus:text-black focus:ring-black focus:ring-2
              outline-none group
            "
          >
            <BsTicketPerforatedFill className="group-hover:animate-wiggle transition-all group-hover:text-red-500 " />
            Buy a Ticket
          </Button>
        )}
      </div>
    </GridListItem>
  );
};
