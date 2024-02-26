export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Group {
  id: string;
  name: string;
}

export interface Channel {
  id: string;
  name: string;
}

type NotificationType = "groupJoin" | "mention" | "friendRequest" | "upload";

export interface BaseNotification {
  id: string;
  type: NotificationType;
  sender: User;
  message: string;
  timestamp: Date;
}

export interface GroupJoinNotification extends BaseNotification {
  type: "groupJoin";
  group: Group;
}

export interface MentionNotification extends BaseNotification {
  type: "mention";
  group?: Group;
  channel?: Channel;
}

export interface FriendRequestNotification extends BaseNotification {
  type: "friendRequest";
}

export interface UploadNotification extends BaseNotification {
  type: "upload";
  channel: Channel;
}

export type Notification =
  | GroupJoinNotification
  | MentionNotification
  | FriendRequestNotification
  | UploadNotification;
