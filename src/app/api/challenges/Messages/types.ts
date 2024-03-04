import { StaticImageData } from "next/image";

export type User = {
  id: string;
  name: string;
  avatar: string | StaticImageData;
  conversations: Conversation[];
};

export type Conversation = {
  id: string;
  userId: string;
  messages: Message[];
};

export type Message = {
  id: string;
  conversationId: string;
  sender: string;
  text: string;
  timestamp: Date;
};
