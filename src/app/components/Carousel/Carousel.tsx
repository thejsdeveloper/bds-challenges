"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useCarousel } from "./CarouselProvider";
import { getPreviewVariants, sliderVariants, variantsKeys } from "./anim";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { generateRange } from "@/app/utils/range";
import { Button, Group } from "react-aria-components";

export const SliderControl = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge("p-6  | text-white text-2xl", className)}
    >
      {children}
    </button>
  );
};

export const CarouselDotNav = ({ size }: { size: number }) => {
  const { images, currentIndex, setCurrentImageIndex } = useCarousel();
  const dots = generateRange(1, images.length);

  return (
    <>
      {dots.map((_, i) => {
        const selected = i === currentIndex;
        return (
          <Button
            onPress={() => setCurrentImageIndex(i)}
            key={i}
            className="rounded-full bg-white z-50 border border-white outline-none focus:scale-150 focus:bg-slate-500 "
            style={{
              height: `${size}px`,
              width: `${size}px`,
              backgroundColor: selected ? "white" : "transparent",
            }}
          />
        );
      })}
    </>
  );
};

export const ImageSlider = ({
  children,
}: PropsWithChildren<{
  showControl?: boolean;
}>) => {
  const { currentImage, direction } = useCarousel();

  return (
    <AnimatePresence initial={false} custom={direction}>
      <div className="h-full w-full relative overflow-hidden">
        <motion.div
          variants={sliderVariants}
          {...variantsKeys}
          key={crypto.randomUUID()}
          custom={direction}
          className="absolute inset-0 w-full h-full object-center"
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            className="rounded-sm object-cover"
            fill
            priority
          />
        </motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
};

export const ImagePreviewStrip = () => {
  const { images, currentIndex, setCurrentImageIndex } = useCarousel();
  return (
    <AnimatePresence initial={false}>
      {images.map((image, i) => {
        const selected = i === currentIndex;
        const selectedClass = "border-white border-2";
        return (
          <motion.button
            onClick={() => setCurrentImageIndex(i)}
            key={i}
            className={`relative h-full w-full rounded-sm ${
              selected ? selectedClass : ""
            }`}
            variants={getPreviewVariants(selected)}
            {...variantsKeys}
          >
            <Image src={image.src} alt={image.alt} fill priority />
          </motion.button>
        );
      })}
    </AnimatePresence>
  );
};

function Carousel({ children }: PropsWithChildren) {
  return <div className="w-full h-full flex flex-col">{children}</div>;
}

export default Carousel;
