import { Task } from "./types/Task";
import { User } from "./types/User";

export const USERS: User[] = [
  {
    id: "1",
    name: "John Doe",
    avatar: "https://example.com/avatar1.png",
    email: "john@example.com",
  },
  {
    id: "2",
    name: "Jane Doe",
    avatar: "https://example.com/avatar2.png",
    email: "jane@example.com",
  },
];

export const TASKS: Task[] = [
  {
    date: new Date(),
    title: "Update Website Homepage",
    description:
      "Revise the content and layout of the homepage to highlight new features and improve user engagement",
    status: "In progress",
    imageUrl: "https://example.com/image1.png",
    assignedUser: USERS[0],
    severity: "high",
  },
  {
    date: new Date(),
    title: "Bug Fix - User Registration",
    description: `Investigate and resolve the reported bug in the user registration process where some USERS are unable to sign up.`,
    status: "Under Review",
    assignedUser: USERS[1],
    severity: "medium",
  },
  {
    date: new Date(),
    title: "Social Media Campaign",
    description: `Plan and execute a social media campaign for the upcoming product launch in February, including creating posts and scheduling updates.`,
    status: "Done",
    imageUrl: "https://example.com/image3.png",
    assignedUser: USERS[0],
    severity: "low",
  },
  {
    date: new Date(),
    title: "Mobile App Feature - Push Notifications",
    description: `Implement push notification feature for the mobile app to enhance user engagement. Ensure compatibility with both iOS and Android platforms.`,
    status: "To Do",
    assignedUser: USERS[1],
    severity: "high",
  },

  {
    date: new Date(),
    title: "Content Creation - Blog Post",
    description: `Write and publish a blog post about industry trends and their impact on our products/services. Include relevant visuals and SEO optimization.`,
    status: "Done",
    assignedUser: USERS[1],
    severity: "high",
  },
  {
    date: new Date(),
    title: "IT Security Audit",
    description: `Write and publish a blog post about industry trends and their impact on our products/services. Include relevant visuals and SEO optimization.`,
    status: "Done",
    assignedUser: USERS[1],
    severity: "high",
  },
];
