import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

type LinkButtonProps = PropsWithChildren & LinkProps;

export const LinkButton = ({ children, href }: LinkButtonProps) => {
  return (
    <div className="relative group">
      <div className="bg-rose-500 h-full w-full -skew-x-6 absolute top-1 left-1 group-hover:left-3 group-hover:top-2 transition-all" />
      <Link
        href={href}
        className="-skew-x-6 challenge-btn hover:scale-105 transition-all"
      >
        {children}
      </Link>
    </div>
  );
};
