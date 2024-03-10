import React, { PropsWithChildren, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/app/utils/cn";

type BottomSheetProps = PropsWithChildren;

export const BottomSheet = ({ children }: BottomSheetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: { y: 0 },
    closed: { y: "80%" },
  };

  return (
    <AnimatePresence>
      <motion.div
        drag="y"
        dragConstraints={{ top: 100, bottom: 0 }}
        onDragEnd={(event, { velocity }) => {
          if (velocity.y > 20) {
            setIsOpen(false);
          } else if (velocity.y < 0) {
            setIsOpen(true);
          }
        }}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "70%",
          background: "#fff",
          boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
        }}
        variants={variants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        exit="closed"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default BottomSheet;
