import React, { FC, HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
  color?: "primary" | "secondary" | "info";
}
export const Badge: FC<BadgeProps> = ({
  text,
  color = "primary",
  ...props
}) => {
  let className = "inline-block px-2 py-1 rounded-full";

  switch (color) {
    case "primary":
      return (
        <span
          className="p-1 rounded-lg bg-pink-500 text-white text-sm"
          {...props}
        >
          {text}
        </span>
      );
    case "secondary":
      return (
        <span
          className="p-1 rounded-lg bg-green-500 text-white text-sm"
          {...props}
        >
          {text}
        </span>
      );
    case "info":
      return (
        <span
          className="p-1 rounded-lg bg-sky-500 text-white text-sm"
          {...props}
        >
          {text}
        </span>
      );
  }
};
