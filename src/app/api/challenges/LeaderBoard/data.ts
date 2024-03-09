import { LeaderBoard } from "@/app/challenges/solutions";

export type User = {
  id: string;
  name: string;
  avatar: string;
};

export type LeaderboardEntry = {
  user: User;
  score: number;
};

export type Keys = keyof Leaderboard;

type Leaderboard = {
  today: LeaderboardEntry[];
  week: LeaderboardEntry[];
  month: LeaderboardEntry[];
  year: LeaderboardEntry[];
};
const users: User[] = [
  { id: "1", name: "Jane", avatar: "https://i.pravatar.cc/200?u=Jane" },
  { id: "2", name: "Moon", avatar: "https://i.pravatar.cc/200?u=Moon" },
  { id: "3", name: "Bradley", avatar: "https://i.pravatar.cc/200?u=Bradley" },
  { id: "4", name: "Katy", avatar: "https://i.pravatar.cc/200?u=Katy" },
  { id: "5", name: "Sam", avatar: "https://i.pravatar.cc/200?u=Sam" },
  { id: "6", name: "Nice", avatar: "https://i.pravatar.cc/200?u=Nice" },
  { id: "7", name: "Joshua", avatar: "https://i.pravatar.cc/200?u=Joshua" },
  { id: "8", name: "Akash", avatar: "https://i.pravatar.cc/200?u=User8" },
  { id: "9", name: "Raja", avatar: "https://i.pravatar.cc/200?u=User9" },
  { id: "10", name: "Amit", avatar: "https://i.pravatar.cc/200?u=User10" },
];

const todayLeaderboard: LeaderboardEntry[] = users.map((user, index) => ({
  user,
  score: Math.floor(Math.random() * 10000), // Generate a random score between 0 and 9999
}));

const weekLeaderboard: LeaderboardEntry[] = users.map((user, index) => ({
  user,
  score: Math.floor(Math.random() * 10000), // Generate a random score between 0 and 9999
}));

const monthLeaderboard: LeaderboardEntry[] = users.map((user, index) => ({
  user,
  score: Math.floor(Math.random() * 10000), // Generate a random score between 0 and 9999
}));

const yearLeaderboard: LeaderboardEntry[] = users.map((user, index) => ({
  user,
  score: Math.floor(Math.random() * 10000), // Generate a random score between 0 and 9999
}));

const sortLeaderboard = (
  leaderboard: LeaderboardEntry[]
): LeaderboardEntry[] => {
  return leaderboard.sort((a, b) => b.score - a.score);
};

export const LEADER_BOARDS_DATA: Leaderboard = {
  today: sortLeaderboard(todayLeaderboard),
  week: sortLeaderboard(weekLeaderboard),
  month: sortLeaderboard(monthLeaderboard),
  year: sortLeaderboard(yearLeaderboard),
};
