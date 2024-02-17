import { cycle } from "@/app/utils/cycle";
import React, { createContext } from "react";
import type { CarouselContextType, Direction, Image } from "./types";

export const CarouselContext = createContext<CarouselContextType | null>(null);

export const CarouselProvider = ({
  images = [],
  children,
}: {
  images: Image[];
  children: React.ReactNode;
}) => {
  const [storedImages] = React.useState(() => images);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const currentImage = storedImages[currentIndex];
  const [direction, setDirection] = React.useState<Direction>(0);

  const value = {
    direction,
    images: storedImages,
    currentImage,
    setCurrentImageIndex: (index: number) => {
      setDirection(() => (index > currentIndex ? 1 : -1));
      setCurrentIndex(() => {
        return cycle(0, storedImages.length - 1, index);
      });
    },
    goToNext: () => {
      setDirection(1);
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        const value = cycle(0, storedImages.length - 1, nextIndex);
        return value;
      });
    },
    goToPrevious: () => {
      setDirection(-1);
      setCurrentIndex((prev) => {
        const nextIndex = prev - 1;
        return cycle(0, storedImages.length - 1, nextIndex);
      });
    },
    isLastImage: () => currentIndex === storedImages.length - 1,
    isFirstImage: () => currentIndex === 0,
    currentIndex,
  };
  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarousel = () => {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error(
      "useCarouselContext must be used within a CarouselProvider"
    );
  }

  return context;
};
