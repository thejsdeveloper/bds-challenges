import React, { ReactNode, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ColumnProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

type ColumnHeaderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

type ColumnContentProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

type ColumnTitleProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

type ColumnFooterProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

const Column = ({ children, className, ...props }: ColumnProps) => (
  <div className={twMerge("flex flex-col gap-4 w-full", className)} {...props}>
    {children}
  </div>
);

const ColumnHeader = ({ children, className, ...props }: ColumnHeaderProps) => (
  <div className={twMerge(className)} {...props}>
    {children}
  </div>
);

const ColumnTitle = ({ children, className, ...props }: ColumnTitleProps) => (
  <h2
    className={twMerge("text-lg font-semibold text-black", className)}
    {...props}
  >
    {children}
  </h2>
);

const ColumnContent = ({
  children,
  className,
  ...props
}: ColumnContentProps) => (
  <div
    className={twMerge("flex flex-col gap-4 text-gray-400", className)}
    {...props}
  >
    {children}
  </div>
);

const ColumnFooter = ({ children, ...props }: ColumnFooterProps) => (
  <div {...props}>{children}</div>
);

Column.Header = ColumnHeader;
Column.Body = ColumnContent;
Column.Title = ColumnTitle;
Column.Content = ColumnContent;
Column.Footer = ColumnFooter;

export default Column;
