import { Variants } from "framer-motion";
import { Direction } from "./types";

export const variantsKeys = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
};

export const sliderVariants: Variants = {
  initial: (direction: Direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: Direction) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

export const getPreviewVariants = (selected: boolean): Variants => {
  return {
    initial: {
      scale: 0.9,
    },
    animate: {
      scale: selected ? 1.1 : 0.9,
      transition: {
        duration: 0.2,
      },
    },
  };
};
