import { StaticImageData } from "next/image";

export type Image = {
  src: string | StaticImageData;
  alt: string;
};

export type CarouselProps = {
  transitionDuration?: number;
  height?: string;
  width?: string;
};

export type ImageSliderProps = {
  onNextClick: () => void;
  onPreviousClick: () => void;
};

export type Direction = 0 | 1 | -1;

export type CarouselContextType = {
  direction: Direction;
  images: Image[];
  currentImage: Image;
  setCurrentImageIndex: (index: number) => void;
  goToNext: () => void;
  goToPrevious: () => void;
  isLastImage: () => boolean;
  isFirstImage: () => boolean;
  currentIndex: number;
};
