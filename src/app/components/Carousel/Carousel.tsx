"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useCarousel } from "./CarouselProvider";
import { getPreviewVariants, sliderVariants, variantsKeys } from "./anim";
import { PropsWithChildren } from "react";

const SliderControl = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} className="p-6  | text-white text-2xl">
      {children}
    </button>
  );
};

export const ImageSlider = ({
  showControl = true,
}: {
  showControl?: boolean;
}) => {
  const { currentImage, goToNext, goToPrevious, direction } = useCarousel();

  return (
    <AnimatePresence initial={false} custom={direction}>
      {showControl && (
        <SliderControl onClick={goToPrevious}>
          <BsArrowLeft />
        </SliderControl>
      )}
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
      </div>
      {showControl && (
        <SliderControl onClick={goToNext}>
          <BsArrowRight />
        </SliderControl>
      )}
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
