"use client";
import { DateRangePicker } from "@/app/components/DateRangePicker/DateRangePicker";
import { motion } from "framer-motion";
import { pageVisitVariant } from "../animate";
import { Select, SelectItem } from "@/app/components/Select/Select";
import { Button, Form } from "react-aria-components";
import { useDateRangePicker } from "react-aria";
import { useDateRangePickerState } from "react-stately";
import React from "react";
import { today, getLocalTimeZone } from "@internationalized/date";
import type { Key } from "react-aria-components";
import { CarouselProvider } from "@/app/components/Carousel/CarouselProvider";
import Carousel, {
  ImagePreviewStrip,
  ImageSlider,
} from "@/app/components/Carousel/Carousel";

const START_DATE = today(getLocalTimeZone());
const MIN_DATE_RANGE = START_DATE;
const END_DATE = START_DATE.add({ weeks: 1 });
const Adults = [
  {
    id: 1,
    label: "1",
    value: 1,
  },
  {
    id: 2,
    label: "2",
    value: 2,
  },
];
const Children = [
  {
    id: "0",
    label: "0",
    value: 0,
  },
  {
    id: "1",
    label: "1",
    value: 1,
  },
  {
    id: "2",
    label: "2",
    value: 2,
  },
  {
    id: "3",
    label: "3",
    value: 3,
  },
  {
    id: "4",
    label: "4",
    value: 4,
  },
];

import image1 from "#/assets/challenge/carousel/hotel1.png";
import image2 from "#/assets/challenge/carousel/hotel2.png";
import image3 from "#/assets/challenge/carousel/hotel3.png";
import image4 from "#/assets/challenge/carousel/hotel4.png";
import { Image } from "@/app/components/Carousel/types";

const IMAGES: Image[] = [
  {
    src: image1,
    alt: "Image 1",
  },
  {
    src: image2,
    alt: "Image 2",
  },
  {
    src: image3,
    alt: "Image 3",
  },
  {
    src: image4,
    alt: "Image 4",
  },
];

export const HotelBooking = () => {
  let [range, setRange] = React.useState({
    start: START_DATE,
    end: END_DATE,
  });

  let [adult, setAdult] = React.useState<Key | null>(1);
  let [children, setChildren] = React.useState<Key | null>("0");

  return (
    <motion.section
      variants={pageVisitVariant}
      initial="initial"
      animate="animate"
      className="
      flex-1 flex flex-col-reverse justify-start
      lg:grid md:grid-cols-3 gap-3 | 
      p-2 md:p-10  mb-4  | 
    bg-white | md:rounded-lg overflow-hidden"
    >
      <Form
        className="flex gap-6 flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Your booking has been successfully submitted");
        }}
      >
        <DateRangePicker
          aria-label="Check in and checkout date"
          label="Check In - Check out"
          value={range}
          minValue={MIN_DATE_RANGE}
          onChange={setRange}
        />
        <div className="flex gap-2">
          <Select
            aria-label="Select adults"
            label="Adults"
            placeholder="Select Adults"
            items={Adults}
            selectedKey={adult}
            onSelectionChange={(selected) => {
              setAdult(selected);
            }}
          >
            {(item) => <SelectItem>{item.label}</SelectItem>}
          </Select>
          <Select
            aria-label="Select children"
            label="Children"
            placeholder="Select Children"
            items={Children}
            selectedKey={children}
            onSelectionChange={(selected) => {
              setChildren(selected);
            }}
          >
            {(item) => <SelectItem>{item.label}</SelectItem>}
          </Select>
        </div>
        <Button
          type="submit"
          className="bg-orange-500 text-white mt-auto py-3 rounded-full text-lg font-medium
            outline-none
            focus:ring-2 ring-offset-2 ring-orange-500 ring-offset-white
          
          "
        >
          Book Room
        </Button>
      </Form>
      <div className="col-span-2 md:p-2  h-3/4 lg:h-full">
        <CarouselProvider images={IMAGES}>
          <Carousel>
            <div className="flex justify-center items-center flex-1">
              <ImageSlider showControl={false} />
            </div>
            <div className={`grid grid-flow-col gap-1 h-[30%] py-3 px-2`}>
              <ImagePreviewStrip />
            </div>
          </Carousel>
        </CarouselProvider>
      </div>
    </motion.section>
  );
};
