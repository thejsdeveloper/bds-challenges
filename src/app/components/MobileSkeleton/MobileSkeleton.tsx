import React, { forwardRef } from "react";
import { cn } from "@/app/utils/cn";
import { HTMLAttributes, PropsWithChildren } from "react";

type MobileSkeletonProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export const MobileSkeleton = forwardRef<HTMLDivElement, MobileSkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          "bg-white h-[700px] w-full max-w-sm rounded-3xl drop-shadow-2xl overflow-clip flex flex-col gap-4",
          className
        )}
      />
    );
  }
);

MobileSkeleton.displayName = "MobileSkeleton";
