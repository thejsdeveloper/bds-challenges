"use client";
import { motion } from "framer-motion";

import Carousel, {
  ImagePreviewStrip,
  ImageSlider,
} from "@/app/components/Carousel/Carousel";
import { CarouselProvider } from "@/app/components/Carousel/CarouselProvider";

import image1 from "#/assets/challenge/carousel/image1.jpeg";
import image2 from "#/assets/challenge/carousel/image2.jpeg";
import image3 from "#/assets/challenge/carousel/image3.jpeg";
import image4 from "#/assets/challenge/carousel/image4.jpeg";
import image5 from "#/assets/challenge/carousel/image5.jpeg";
import image6 from "#/assets/challenge/carousel/image6.jpeg";
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
  {
    src: image5,
    alt: "Image 5",
  },
  {
    src: image6,
    alt: "Image 6",
  },
];
export function CarouselPage() {
  return (
    <motion.section
      // variants={pageVisitVariant}
      initial="initial"
      animate="animate"
      className="my-4 md:rounded-lg flex-1 bg-black"
    >
      <CarouselProvider images={IMAGES}>
        <Carousel>
          <div className="flex justify-center items-center flex-1 py-10">
            <ImageSlider />
          </div>
          <div className={`grid grid-flow-col gap-2 h-[20%] py-3  px-6`}>
            <ImagePreviewStrip />
          </div>
        </Carousel>
      </CarouselProvider>
    </motion.section>
  );
}
