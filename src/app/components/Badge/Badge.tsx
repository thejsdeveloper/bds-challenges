import React, { FC, HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}
export const Badge: FC<BadgeProps> = ({
  text,
  color = "primary",
  ...props
}) => {
  let className = "inline-block px-2 py-1 rounded-full";

  switch (color) {
    case "primary":
      className += " bg-blue-200 text-blue-800";
      break;
    case "secondary":
      className += " bg-gray-200 text-gray-800";
      break;
    case "success":
      className += " bg-green-200 text-green-800";
      break;
    case "danger":
      className += " bg-red-200 text-red-800";
      break;
    case "warning":
      className += " bg-yellow-200 text-yellow-800";
      break;
    case "info":
      className += " bg-teal-200 text-teal-800";
      break;
    case "light":
      className += " bg-white text-gray-800";
      break;
    case "dark":
      className += " bg-black text-white";
      break;
    default:
      break;
  }

  return (
    <span className={className} {...props}>
      {text}
    </span>
  );
};
