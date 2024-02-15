import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

type LinkButtonProps = PropsWithChildren & LinkProps;

export const LinkButton = ({ children, href }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className="border p-3 rounded-md text-white text-md font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500"
    >
      {children}
    </Link>
  );
};
