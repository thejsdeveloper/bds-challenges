import React, { SVGAttributes } from "react";
import { IconBaseProps } from "react-icons";
import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";

export const LikeIcon = ({
  filled = false,
  ...props
}: {
  filled?: boolean;
} & IconBaseProps) => {
  return (
    <>
      {filled ? (
        <TiHeartFullOutline {...props} />
      ) : (
        <TiHeartOutline {...props} />
      )}
    </>
  );
};
