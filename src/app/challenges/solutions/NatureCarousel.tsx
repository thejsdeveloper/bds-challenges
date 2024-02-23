import Carousel, {
  ImagePreviewStrip,
  ImageSlider,
  SliderControl,
} from "@/app/components/Carousel/Carousel";
import { useCarousel } from "@/app/components/Carousel/CarouselProvider";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const NatureCarousel = () => {
  const { goToNext, goToPrevious } = useCarousel();
  return (
    <Carousel>
      <div className="flex justify-center items-center flex-1 py-10">
        <SliderControl onClick={goToPrevious}>
          <BsArrowLeft />
        </SliderControl>
        <ImageSlider />
        <SliderControl onClick={goToNext}>
          <BsArrowRight />
        </SliderControl>
      </div>
      <div className={`grid grid-flow-col gap-2 h-[20%] py-3  px-6`}>
        <ImagePreviewStrip />
      </div>
    </Carousel>
  );
};
