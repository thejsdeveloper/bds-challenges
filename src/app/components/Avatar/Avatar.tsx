import Image, { ImageProps } from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

export type Sizes = "small" | "medium" | "large";

export type AvatarProps = { size: Sizes } & ImageProps;

export const Avatar = ({
  size,
  className: imageClassName,
  ...props
}: AvatarProps) => {
  let className = "rounded-full";

  switch (size) {
    case "small":
      className += " w-8 h-8";
      break;
    case "medium":
      className += " w-12 h-12";
      break;
    case "large":
      className += " w-16 h-16";
      break;
    default:
      break;
  }

  return (
    <div className={twMerge("relative overflow-hidden", className)}>
      <Image
        className={twMerge(
          "object-contain ring-2 ring-offset-2 ring-black shadow-md",
          imageClassName
        )}
        {...props}
        fill
      />
    </div>
  );
};
