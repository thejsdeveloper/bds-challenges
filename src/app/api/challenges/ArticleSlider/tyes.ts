import { StaticImageData } from "next/image";

export interface User {
  id: string;
  name: string;
  avatar: string | StaticImageData;
}

export type Articles = {
  id: string;
  title: string;
  frontmatter: string;
  publishDate: Date;
  image: string | StaticImageData;
  user: User;
};
