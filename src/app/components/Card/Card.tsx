import Image, { ImageProps } from "next/image";
import React, { ReactNode, HTMLAttributes } from "react";

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

const Card = ({ children, ...props }: CardProps) => (
  <div {...props}>{children}</div>
);

const CardHeader = ({ children, ...props }: CardHeaderProps) => (
  <div {...props}>{children}</div>
);

const CardBody = ({ children, ...props }: CardBodyProps) => (
  <div {...props}>{children}</div>
);

const CardTitle = ({ children, ...props }: CardTitleProps) => (
  <h2 {...props}>{children}</h2>
);

const CardImage = (props: CardImageProps) => <Image {...props} />;

const CardContent = ({ children, ...props }: CardContentProps) => (
  <p {...props}>{children}</p>
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
