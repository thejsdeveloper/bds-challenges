import first from "#/assets/challenge/songs/1.jpeg";
import second from "#/assets/challenge/songs/2.png";
import third from "#/assets/challenge/songs/3.jpeg";
import fourth from "#/assets/challenge/songs/4.png";
import fifth from "#/assets/challenge/songs/5.jpeg";
import sixth from "#/assets/challenge/songs/6.jpeg";
import seventh from "#/assets/challenge/songs/7.jpeg";
import eighth from "#/assets/challenge/songs/8.jpeg";
import ninth from "#/assets/challenge/songs/9.jpeg";
import tenth from "#/assets/challenge/songs/10.png";
import cover from "#/assets/challenge/songs/cover.jpeg";
import { StaticImageData } from "next/image";

export type Track = {
  id: string;
  title: string;
  artist: string;
  duration: string;
  cover: string | StaticImageData;
};

export type Playlist = {
  id: string;
  title: string;
  likes: number;
  duration: string;
  cover: string | StaticImageData;
  tracks: Track[];
};

let tracks = [
  {
    id: "1",
    title: "Bad Guy",
    artist: "Billie Eilish",
    duration: "3:14",
    cover: first,
  },
  {
    id: "2",
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: "3:20",
    cover: second,
  },
  {
    id: "3",
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    duration: "2:53",
    cover: third,
  },
  {
    id: "4",
    title: "Circles",
    artist: "Post Malone",
    duration: "3:35",
    cover: fourth,
  },
  {
    id: "5",
    title: "Dance Monkey",
    artist: "Tones and I",
    duration: "3:29",
    cover: fifth,
  },
  {
    id: "6",
    title: "Rockstar",
    artist: "DaBaby featuring Roddy Ricch",
    duration: "3:01",
    cover: sixth,
  },
  {
    id: "7",
    title: "Life Is Good",
    artist: "Future featuring Drake",
    duration: "3:57",
    cover: seventh,
  },
  {
    id: "8",
    title: "Don't Start Now",
    artist: "Dua Lipa",
    duration: "3:03",
    cover: eighth,
  },
  {
    id: "9",
    title: "Everything I Wanted",
    artist: "Billie Eilish",
    duration: "4:05",
    cover: ninth,
  },
  {
    id: "10",
    title: "Savage Love",
    artist: "Jawsh 685 and Jason Derulo",
    duration: "2:51",
    cover: tenth,
  },
];

// Calculate total duration in seconds
let totalDurationInSeconds = tracks.reduce((total, track) => {
  let [minutes, seconds] = track.duration.split(":").map(Number);
  return total + minutes * 60 + seconds;
}, 0);

// Convert total duration back to 'minutes:seconds' format
let totalMinutes = Math.floor(totalDurationInSeconds / 60);
let totalSeconds = totalDurationInSeconds % 60;
let totalDuration = `${totalMinutes}:${
  totalSeconds < 10 ? "0" : ""
}${totalSeconds}`;

// Create the playlist
export const PLAYLIST: Playlist = {
  id: "1",
  title: "Top Hits",
  likes: 100,
  duration: totalDuration,
  cover: cover,
  tracks: tracks,
};
