import { StaticImageData } from "next/image";

export type Gallery = {
  src: string | StaticImageData;
  alt: string;
  title: string;
};
