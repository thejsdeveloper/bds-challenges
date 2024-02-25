import Image, { ImageProps } from "next/image";
import React, { ReactNode, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

type CardHeaderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

type CardBodyProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

type CardTitleProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

type CardImageProps = ImageProps;

type CardContentProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

type CardFooterProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

const Card = ({ children, className, ...props }: CardProps) => (
  <div
    className={twMerge(
      "bg-white rounded-xl p-4 drop-shadow-2xl  flex flex-col gap-6",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ children, ...props }: CardHeaderProps) => (
  <div {...props}>{children}</div>
);

const CardBody = ({ children, ...props }: CardBodyProps) => (
  <div {...props}>{children}</div>
);

const CardTitle = ({ children, className, ...props }: CardTitleProps) => (
  <h2 className={twMerge("text-black text-lg font-bold", className)} {...props}>
    {children}
  </h2>
);

const CardImage = (props: CardImageProps) => <Image {...props} />;

const CardContent = ({ children, className, ...props }: CardContentProps) => (
  <p
    className={twMerge("text-black text-base line-clamp-6", className)}
    {...props}
  >
    {children}
  </p>
);

const CardFooter = ({ children, ...props }: CardFooterProps) => (
  <div {...props}>{children}</div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Image = CardImage;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
