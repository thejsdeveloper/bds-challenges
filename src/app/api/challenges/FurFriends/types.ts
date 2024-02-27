import { StaticImageData } from "next/image";

export interface Friend {
  id: number;
  name: string;
  breed: string;
  distance: number;
  age: number;
  height: number;
  weight: number;
  description: string;
  gender: string;
  image: string | StaticImageData;
  like: boolean;
}
