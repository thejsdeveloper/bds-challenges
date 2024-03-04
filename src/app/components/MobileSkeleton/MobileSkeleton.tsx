import { cn } from "@/app/utils/cn";
import { HTMLAttributes, PropsWithChildren } from "react";

type MobileSkeletonProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export const MobileSkeleton = ({
  className,
  ...props
}: MobileSkeletonProps) => {
  return (
    <div
      {...props}
      className={cn(
        "bg-white  h-[700px] w-full max-w-sm rounded-3xl drop-shadow-2xl overflow-clip flex flex-col gap-4",
        className
      )}
    />
  );
};
