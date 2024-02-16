import { Variants } from "framer-motion";

export const pageVisitVariant: Variants = {
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
