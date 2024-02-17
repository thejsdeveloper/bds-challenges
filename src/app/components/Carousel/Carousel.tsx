"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useCarousel } from "./CarouselProvider";
import { getPreviewVariants, sliderVariants, variantsKeys } from "./anim";

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

const ImageSlider = () => {
  const { currentImage, goToNext, goToPrevious, direction } = useCarousel();

  return (
    <AnimatePresence initial={false} custom={direction}>
      <SliderControl onClick={goToPrevious}>
        <BsArrowLeft />
      </SliderControl>
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
      <SliderControl onClick={goToNext}>
        <BsArrowRight />
      </SliderControl>
    </AnimatePresence>
  );
};

const ImagePreviewStrip = () => {
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

function Carousel() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-center items-center flex-1 py-10">
        <ImageSlider />
      </div>
      <div className={`grid grid-flow-col gap-2 h-[20%] py-3  px-6`}>
        <ImagePreviewStrip />
      </div>
    </div>
  );
}

export default Carousel;
