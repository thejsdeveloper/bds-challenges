"use client";
import { motion } from "framer-motion";

export const Pulse = ({
  n = 3,
  duration = 1,
  delay = 0.5,
  width = 10,
  gap = 20,
  color = "rgba(252, 252, 252, 0.3)",
  endColor = "#FCFCFC",
}) => {
  return (
    <motion.div
      style={{ display: "grid", placeItems: "center", position: "relative" }}
    >
      {Array.from({ length: n }, (_, i) => {
        const pulseDelay = delay * i;
        const pulseRepeatDelay = pulseDelay;
        const pulseDuration = duration + delay * (n - i);
        return (
          <motion.div
            key={i}
            style={{
              borderRadius: "50%",
              background: `radial-gradient(50% 50% at 50% 50%, ${color} 0%, ${
                i === 0 ? color : endColor
              } 100%)`,
              border: `1px solid ${color}`,
              gridArea: "1 / 1 / 2 / 2",
              width: `${width + gap * i}px`,
              aspectRatio: "1/1",
              zIndex: n - i,
            }}
            {...(i !== 0 && {
              initial: { opacity: 0 },
              animate: { opacity: [0, 1, 0], scale: 1.1 },
              transition: {
                duration: pulseDuration,
                delay: pulseDelay,
                ease: [0.05, 0.6, 0.3, 0.3],
                repeat: Infinity,
                repeatDelay: pulseRepeatDelay,
              },
            })}
          />
        );
      })}
    </motion.div>
  );
};
