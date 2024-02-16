"use client";
import watch1 from "#/assets/challenge2/watch1.jpg";
import watch2 from "#/assets/challenge2/watch2.jpg";
import watch3 from "#/assets/challenge2/watch3.jpg";
import Image from "next/image";
import React from "react";

import watch1_1 from "#/assets/challenge2/watch1_1.jpg";
import watch2_2 from "#/assets/challenge2/watch2_2.jpg";
import watch3_3 from "#/assets/challenge2/watch3_3.jpg";
import { motion } from "framer-motion";
import { pageVisitVariant } from "../animate";

const PRODUCT = {
  brand: "LOUIS DEVIN",
  title:
    "LOUIS DEVIN Silicone Strap Analog Wrist Watch for Men (Black/Blue/Red)| LD-BK054",
  description: "Custom made watch with premium strap and thin dial",
  price: "132.00",
  currency: "$",
  discountedPrice: "99.00",
  discount: "25%",
  sizes: ["S", "M", "L"],
  images: [
    {
      small: watch1,
      large: watch1_1,
      alt: `Watch 1 alt`,
    },
    {
      small: watch2,
      large: watch2_2,
      alt: `Watch 2 alt`,
    },
    {
      small: watch3,
      large: watch3_3,
      alt: `Watch 3 alt`,
    },
  ],
};

function Challenge2() {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const [selectedSize, setSelectedSize] = React.useState("S");

  const selectedImage = PRODUCT.images[selectedImageIndex];

  return (
    <motion.main
      variants={pageVisitVariant}
      initial="initial"
      animate="animate"
      className="bg-white flex-1 flex justify-center items-center my-4 rounded-lg"
    >
      <section
        className="px-5 md:max-w-5xl
      flex flex-col-reverse 
      md:flex-row md:justify-center 
      items-center md:items-start
      gap-8"
      >
        {/* preview */}
        <div
          className="flex flex-row md:flex-col gap-4 
          justify-start md:justify-center md:items-start
        "
        >
          {PRODUCT.images.map((image, i) => {
            return (
              <button
                onClick={() => setSelectedImageIndex(i)}
                data-selected={i === selectedImageIndex}
                key={i}
                className="bg-gray-100 p-2 w-14 h-16 rounded-md overflow-hidden relative ring-sky-500 focus:ring-1 data-[selected=true]:ring-1"
              >
                <Image
                  src={image.small}
                  alt={image.alt}
                  className="mix-blend-multiply"
                />
              </button>
            );
          })}
        </div>
        {/* seleted image */}
        <div
          className="bg-gray-100 p-4 | 
            rounded-md overflow-hidden relative
            w-full md:w-1/2
            "
        >
          <Image
            src={selectedImage.large}
            alt={selectedImage.alt}
            className="mix-blend-multiply object-cover"
            objectFit="contain"
          />
        </div>
        {/* product details */}
        <div className="flex flex-col gap-4 py-4 w-100 md:w-1/2">
          <h2 className="text-sky-500 text-md font-bold">{PRODUCT.brand}</h2>
          <h1 className="text-black text-2xl font-bold">{PRODUCT.title}</h1>
          <p className="text-gray-400 text-sm">{PRODUCT.description}</p>
          <div>
            <div className="flex gap-4 items-center">
              <p className="text-black font-bold">
                <span className="text-3xl">{PRODUCT.currency}</span>
                <span className="text-2xl">{PRODUCT.discountedPrice}</span>
              </p>
              <span className="text-blue-500 text-[12px] font-bold  px-2 bg-sky-200 rounded-sm">
                -{PRODUCT.discount}
              </span>
            </div>
            <p className="text-gray-400">
              <del className="flex items-center">
                <span className="text-base">{PRODUCT.currency}</span>
                <span className="text-sm">{PRODUCT.price}</span>
              </del>
            </p>
          </div>

          <h3 className="text-black text-md font-semibold uppercase">
            Choose Size
          </h3>
          <div className="flex gap-2">
            {PRODUCT.sizes.map((size, i) => (
              <button
                className="text-base text-black
                 focus:text-white focus:bg-black
                  data-[selected-size=true]:bg-black data-[selected-size=true]:text-white 
                  hover:bg-sky-200
                  flex items-center justify-center py-2 px-3"
                key={`size_${i}`}
                data-selected-size={selectedSize === size}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <button className="w-full py-2 rounded-sm text-white bg-sky-500 uppercase text-base  hover:scale-105 transition-all duration-100">
            Add To Bag
          </button>
        </div>
      </section>
    </motion.main>
  );
}

export default Challenge2;
