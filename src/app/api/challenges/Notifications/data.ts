import { Channel, Group, Notification, User } from "./types";

const users: User[] = [
  {
    id: "1",
    name: "Salman Khan",
    avatar: `https://i.pravatar.cc/200?u=1`,
  },
  {
    id: "2",
    name: "Priyanka Chopra",
    avatar: `https://i.pravatar.cc/200?u=2`,
  },
  {
    id: "3",
    name: "Vikrant Massey",
    avatar: `https://i.pravatar.cc/200?u=3`,
  },
  {
    id: "4",
    name: "Vicky Khaushal",
    avatar: `https://i.pravatar.cc/200?u=4`,
  },
];

const groups: Group[] = [
  {
    id: "1",
    name: "Design",
  },
  {
    id: "2",
    name: "Development",
  },
];

const channels: Channel[] = [
  {
    id: "1",
    name: "General",
  },
  {
    id: "2",
    name: "Random",
  },
];

export const notifications: Notification[] = [
  {
    id: "1",
    type: "groupJoin",
    sender: users[0],
    message: "John Doe joined the Design group.",
    timestamp: new Date(),
    group: groups[0],
  },
  {
    id: "2",
    type: "mention",
    sender: users[1],
    message: "Jane Doe mentioned you in a comment.",
    timestamp: new Date(),
    group: groups[1],
    channel: channels[0],
  },
  {
    id: "3",
    type: "friendRequest",
    sender: users[1],
    message: "Jane Doe sent you a friend request.",
    timestamp: new Date(),
  },
  {
    id: "4",
    type: "upload",
    sender: users[0],
    message: "John Doe uploaded a file.",
    timestamp: new Date(),
    channel: channels[1],
  },
];
