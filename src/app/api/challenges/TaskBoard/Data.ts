import { Task } from "./types/Task";
import { User } from "./types/User";

export const USERS: User[] = [
  {
    id: "1",
    name: "John Doe",
    avatar: `https://i.pravatar.cc/200?u=${crypto.randomUUID()}`,
    email: "john@example.com",
  },
  {
    id: "2",
    name: "Jane Doe",
    avatar: `https://i.pravatar.cc/200?u=${crypto.randomUUID()}`,
    email: "jane@example.com",
  },
  {
    id: "3",
    name: "Raghav",
    avatar: `https://i.pravatar.cc/200?u=${crypto.randomUUID()}`,
    email: "jane@example.com",
  },
  {
    id: "4",
    name: "Sumit",
    avatar: `https://i.pravatar.cc/200?u=${crypto.randomUUID()}`,
    email: "jane@example.com",
  },
];

export const TASKS: Task[] = [
  {
    id: "1",
    date: new Date(),
    title: "Update Website Homepage",
    description:
      "Revise the content and layout of the homepage to highlight new features and improve user engagement",
    status: "In progress",
    imageUrl: "/assets/challenge/pattern/pattern2.jpeg",
    severity: "high",
    assignedUsers: [USERS[0], USERS[3]],
  },
  {
    id: "2",
    date: new Date(),
    title: "Bug Fix - User Registration",
    description: `Investigate and resolve the reported bug in the user registration process where some USERS are unable to sign up.`,
    status: "Under Review",
    assignedUsers: USERS,
    severity: "medium",
  },
  {
    id: "3",
    date: new Date(),
    title: "Social Media Campaign",
    description: `Plan and execute a social media campaign for the upcoming product launch in February, including creating posts and scheduling updates.`,
    status: "Done",
    imageUrl: "/assets/challenge/pattern/pattern1.jpeg",
    assignedUsers: [USERS[0], USERS[3]],
    severity: "low",
  },
  {
    id: "4",
    date: new Date(),
    title: "Mobile App Feature - Push Notifications",
    description: `Implement push notification feature for the mobile app to enhance user engagement. Ensure compatibility with both iOS and Android platforms.`,
    status: "To Do",
    assignedUsers: [USERS[2], USERS[3]],
    imageUrl: "/assets/challenge/pattern/pattern4.jpeg",
    severity: "high",
  },

  {
    id: "5",
    date: new Date(),
    title: "Content Creation - Blog Post",
    description: `Write and publish a blog post about industry trends and their impact on our products/services. Include relevant visuals and SEO optimization.`,
    status: "Done",
    imageUrl: "/assets/challenge/pattern/pattern3.jpeg",
    assignedUsers: [USERS[2]],
    severity: "high",
  },
  {
    id: "6",
    date: new Date(),
    title: "IT Security Audit",
    description: `Write and publish a blog post about industry trends and their impact on our products/services. Include relevant visuals and SEO optimization.`,
    status: "In progress",
    assignedUsers: [],
    severity: "high",
  },
];
