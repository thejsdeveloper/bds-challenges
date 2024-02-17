"use client";

import { Variants } from "framer-motion";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useCarousel } from "./CarouselProvider";

const variants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

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
  const { currentImage, goToNext, goToPrevious } = useCarousel();

  return (
    <>
      <SliderControl onClick={goToPrevious}>
        <BsArrowLeft />
      </SliderControl>
      <div className="h-full w-full relative">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          className="rounded-sm object-cover"
          fill
          priority
        />
      </div>
      <SliderControl onClick={goToNext}>
        <BsArrowRight />
      </SliderControl>
    </>
  );
};

const ImagePreviewStrip = () => {
  const { images, currentIndex, setCurrentImageIndex } = useCarousel();
  return images.map((image, i) => {
    const selected = i === currentIndex;
    const selectedClass = "border-white border-2 scale-105";
    return (
      <button
        onClick={() => setCurrentImageIndex(i)}
        key={i}
        className={`bg-teal-100 relative h-full w-full rounded-sm ${
          selected ? selectedClass : "scale-90"
        }`}
      >
        <Image src={image.src} alt={image.alt} fill />
      </button>
    );
  });
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
