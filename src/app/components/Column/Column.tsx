import React, { ReactNode, HTMLAttributes } from "react";

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

const Column = ({ children, ...props }: ColumnProps) => (
  <div
    {...props}
    style={{
      display: "flex",
      flexDirection: "column",
    }}
  >
    {children}
  </div>
);

const ColumnHeader = ({ children, ...props }: ColumnHeaderProps) => (
  <div {...props}>{children}</div>
);

const ColumnTitle = ({ children, ...props }: ColumnTitleProps) => (
  <h2 {...props}>{children}</h2>
);

const ColumnContent = ({ children, ...props }: ColumnContentProps) => (
  <div {...props}>{children}</div>
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
