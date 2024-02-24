import Image, { ImageProps } from "next/image";
import React from "react";

type Sizes = "small" | "medium" | "large";

type AvatarProps = { size: Sizes } & ImageProps;

export const Avatar = ({ size, ...props }: AvatarProps) => {
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
    <div className={className}>
      <Image {...props} />
    </div>
  );
};
