import { StaticImageData } from "next/image";

export interface Seat {
  id: string;
  status: "selected" | "reserved" | "available";
}

export interface SeatLayout {
  seats: (Seat | null)[][];
}

export interface ShowTime {
  date: string;
  times: string[];
}

export interface CastMember {
  id: number;
  name: string;
  avatar: string | StaticImageData;
}

export interface Movie {
  id: number;
  title: string;
  poster: string | StaticImageData;
  genre: string;
  duration: string;
  description: string;
  cast: CastMember[];
  showTimes: ShowTime[];
}

export const MOVIE: Movie = {
  id: 1,
  title: "John Wick: Chapter 4",
  genre: "Action/Thriller/Crime",
  poster: "/assets/challenge/Movies/poster.webp",
  duration: "2h 50m",
  showTimes: [
    { date: "21 Feb", times: ["15:15", "18:00"] },
    { date: "22 Feb", times: ["17:45", "20:30"] },
    { date: "23 Feb", times: ["20:35", "23:00"] },
    { date: "24 Feb", times: ["22:15", "01:00"] },
  ],
  description:
    "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
  cast: [
    {
      id: 1,
      name: "Keanu Reeves",
      avatar: "/assets/challenge/Movies/keanu.webp",
    },
    {
      id: 2,
      name: "Donnie Yen",
      avatar: "/assets/challenge/Movies/Donnie.webp",
    },
    {
      id: 3,
      name: "Ian McShane",
      avatar: "/assets/challenge/Movies/ian.webp",
    },
    {
      id: 3,
      name: "Laurence Fishburne",
      avatar: "/assets/challenge/Movies/Laurance.webp",
    },
    {
      id: 3,
      name: "Lance Reddick",
      avatar: "/assets/challenge/Movies/lance.webp",
    },
  ],
};

export const SEAT_LAYOUT: SeatLayout = {
  seats: [
    [
      null,
      null,
      { id: "A1", status: "available" },
      { id: "A2", status: "available" },
      { id: "A3", status: "available" },
      { id: "A4", status: "available" },
      null,
      null,
    ],
    [
      null,
      null,
      { id: "B1", status: "available" },
      { id: "B2", status: "available" },
      { id: "B3", status: "available" },
      { id: "B4", status: "available" },
      null,
      null,
    ],
    [
      { id: "C1", status: "available" },
      { id: "C2", status: "available" },
      { id: "C3", status: "available" },
      { id: "C4", status: "available" },
      { id: "C5", status: "available" },
      { id: "C6", status: "available" },
      { id: "C7", status: "available" },
      { id: "C8", status: "available" },
    ],
    [
      { id: "D1", status: "available" },
      { id: "D2", status: "available" },
      { id: "D3", status: "available" },
      { id: "D4", status: "available" },
      { id: "D5", status: "available" },
      { id: "D6", status: "available" },
      { id: "D7", status: "available" },
      { id: "D8", status: "available" },
    ],
    [
      { id: "E1", status: "available" },
      { id: "E2", status: "available" },
      { id: "E3", status: "available" },
      { id: "E4", status: "available" },
      { id: "E5", status: "available" },
      { id: "E6", status: "available" },
      { id: "E7", status: "available" },
      { id: "E8", status: "available" },
    ],
    [
      { id: "F1", status: "available" },
      { id: "F2", status: "available" },
      { id: "F3", status: "available" },
      { id: "F4", status: "available" },
      { id: "F5", status: "available" },
      { id: "F6", status: "available" },
      { id: "F7", status: "available" },
      { id: "F8", status: "available" },
    ],
  ],
};
