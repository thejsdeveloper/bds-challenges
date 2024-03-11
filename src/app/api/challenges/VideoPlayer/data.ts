import { StaticImageData } from "next/image";
import cover1 from "#/assets/challenge/skateboarding/1.jpeg";
import cover2 from "#/assets/challenge/skateboarding/2.jpeg";
import cover3 from "#/assets/challenge/skateboarding/3.jpeg";
import cover4 from "#/assets/challenge/skateboarding/4.jpeg";
import cover5 from "#/assets/challenge/skateboarding/5.jpeg";
export type Video = {
  id: string;
  title: string;
  description: string;
  creator: User;
  views: number;
  createdAt: Date;
  source?: string;
  cover: string | StaticImageData;
};

export type User = {
  id: string;
  name: string;
  avatar: string | StaticImageData;
};

export const RELATED_VIDEOS: Video[] = [
  {
    id: "1",
    title: "Skateboarding For Beginners!",
    description: "Skateboard is a video game that is played on a skateboard.",
    creator: {
      id: "1",
      name: "James taylor",
      avatar: "https://i.pravatar.cc/200?u=James",
    },
    views: 1056430,
    createdAt: new Date(),
    cover: cover1,
  },
  {
    id: "2",
    title: "10 Easy Skate Tricks",
    description: "Skateboard is a video game that is played on a skateboard.",
    creator: {
      id: "2",
      name: "Paul james",
      avatar: "https://i.pravatar.cc/200?u=Paul",
    },
    views: 101320,
    createdAt: new Date(),
    cover: cover2,
  },
  {
    id: "3",
    title: "Learning to Skateboard!",
    description: "Skateboard is a video game that is played on a skateboard.",
    creator: {
      id: "2",
      name: "Paul james",
      avatar: "https://i.pravatar.cc/200?u=Paul",
    },
    views: 100,
    createdAt: new Date(),
    cover: cover3,
  },
  {
    id: "4",
    title: "Learning to Skateboard!",
    description: "Skateboard is a video game that is played on a skateboard.",
    creator: {
      id: "3",
      name: "Brandon",
      avatar: "https://i.pravatar.cc/200?u=Brandon",
    },
    views: 1003,
    createdAt: new Date(),
    cover: cover4,
  },
];

export const SKATEBOARD_VIDEO: Video = {
  id: "5",
  title: "Easy skateboard moves",
  description: "Skateboard is a video game that is played on a skateboard.",
  creator: {
    id: "3",
    name: "Brandon",
    avatar: "https://i.pravatar.cc/200?u=Brandon",
  },
  views: 1003,
  createdAt: new Date(),
  cover: cover5,
  source: "/assets/challenge/skateboarding/skate.mp4",
};
