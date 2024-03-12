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
  audio: string;
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
    title: "Ethereal Vistas",
    artist: "Star Jam",
    duration: "4:01",
    cover: first,
    audio: "ethereal-vistas.mp3",
  },
  {
    id: "2",
    title: "Perfect Beauty",
    artist: "Daddy_s_music",
    duration: "7:20",
    cover: second,
    audio: "perfect-beauty.mp3",
  },
  {
    id: "3",
    title: "Better Day",
    artist: "penguin music",
    duration: "1:30",
    cover: third,
    audio: "better-day.mp3",
  },
  {
    id: "4",
    title: "Coverless book",
    artist: "My audio vision",
    duration: "4:24",
    cover: fourth,
    audio: "coverless-book.mp3",
  },
  {
    id: "5",
    title: "Sad Soul (Chasing a Feeling)",
    artist: "Alex Grohl",
    duration: "1:56",
    cover: fifth,
    audio: "sad-soul-chasing-a-feeling.mp3",
  },
  {
    id: "6",
    title: "Separation",
    artist: "William king",
    duration: "3:01",
    cover: sixth,
    audio: "separation.mp3",
  },
  {
    id: "7",
    title: "Midnight Forest",
    artist: " Syouki_Takahashi",
    duration: "2:48",
    cover: seventh,
    audio: "midnight-forest.mp3",
  },
  {
    id: "8",
    title: "Mellow Future Bass (Bounce On it)",
    artist: "Alex grohi",
    duration: "2:09",
    cover: eighth,
    audio: "mellow-future-bass-bounce-on-it-184234.mp3",
  },
  {
    id: "9",
    title: "Drive Breakbeat",
    artist: "Rokot",
    duration: "1:49",
    cover: ninth,
    audio: "drive-breakbeat-173062.mp3",
  },
  {
    id: "10",
    title: "Titanium",
    artist: "AlisiaBeats",
    duration: "1:49",
    cover: tenth,
    audio: "titanium.mp3",
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
  title: "Soulful Songs",
  likes: 100,
  duration: totalDuration,
  cover: cover,
  tracks: tracks,
};
