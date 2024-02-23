"use client";

import { CarouselProvider } from "@/app/components/Carousel/CarouselProvider";
import { LikeIcon } from "@/app/components/LikeIcon/LikeIcon";
import { Rating } from "@/app/components/Rating/Rating";
import React, { useState } from "react";
import image1 from "#/assets/challenge/restaurant/photo1.png";
import image2 from "#/assets/challenge/restaurant/photo2.png";
import image3 from "#/assets/challenge/restaurant/photo3.png";
import image4 from "#/assets/challenge/restaurant/photo4.png";
import image5 from "#/assets/challenge/restaurant/photo5.png";
import { Image } from "@/app/components/Carousel/types";
import Carousel, {
  CarouselDotNav,
  ImageSlider,
} from "@/app/components/Carousel/Carousel";
import { useSlider } from "react-aria";

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
];
export const RestaurantReservation = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <CarouselProvider images={IMAGES}>
      <div className="relative grid justify-center |w-full h-full mb-6 p-4 rounded-lg">
        <div className="relative max-w-md flex flex-col gap-4 | rounded-lg bg-white overflow-hidden">
          <div className="h-1/3">
            <RestaurantCarousel />
          </div>
          <div className="p-4 flex flex-col gap-6">
            <header className="space-y-2">
              <h1 className="text-3xl font-bold text-tandoor">
                Tandoori House
              </h1>
              <h2 className="text-base font-medium text-gray-900">
                Kashmiri gate
              </h2>
              <div className="flex items-center gap-2">
                <Rating rating={4} size={24} className="fill-tandoor" />
                <p>(231 reviews)</p>
                <button
                  className="ml-auto outline-none rounded-full focus:ring-1 ring-tandoor p-1 "
                  onClick={() => setIsLiked((prev) => !prev)}
                >
                  <LikeIcon
                    size={24}
                    filled={isLiked}
                    fill={isLiked ? "#E9692C" : ""}
                  />
                </button>
              </div>
            </header>
            <p className="text-base text-gray-900 mt-4">
              Karim’s is an iconic Indian restaurant nestled near the historic
              Jama Masjid. It’s renowned for its{" "}
              <strong>authentic Mughlai cuisine</strong> and, in particular, its
              <strong> tandoori delights</strong>. The aroma of freshly baked
              naans and kebabs wafts through the air, enticing passersby. Don’t
              miss their <strong>tandoori raan</strong> —a succulent leg of lamb
              marinated in aromatic spices and slow-cooked in a tandoor. The
              tender meat practically melts in your mouth. Pair it with piping
              hot tandoori rotis and you’re in for a royal feast!
            </p>
          </div>
          <button
            className="mt-auto py-4 
            text-white text-center font-semibold text-lg outline-none
            transition ease-in-out duration-300
            bg-gradient-to-r from-tandoor-light via-tandoor  to-tandoor-light 
            hover:bg-gradient-to-t hover:via-10%  hover:text-black
            focus:bg-gradient-to-t focus:via-10% 
            focus:text-lg focus:text-black 
          "
          >
            Make a reservation
          </button>
        </div>
      </div>
    </CarouselProvider>
  );
};

const RestaurantCarousel = () => {
  return (
    <Carousel>
      <div className="relative h-full">
        <ImageSlider>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-30% to-transparent" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <CarouselDotNav size={16} />
          </div>
        </ImageSlider>
      </div>
    </Carousel>
  );
};
