import { User } from "./User";

export type Status = "To Do" | "In progress" | "Under Review" | "Done";
export type Severity = "high" | "medium" | "low";

export type Task = {
  id: string;
  date: Date;
  title: string;
  description: string;
  status: Status;
  imageUrl?: string;
  severity: Severity;
  assignedUsers: User[];
};
