import { Conversation, User } from "./types";

// Function to generate random ID
function generateId() {
  return Math.floor(Math.random() * 10000).toString();
}

function generateOnlineStatus() {
  return Math.random() < 0.5;
}

// Function to generate random name
function generateName() {
  const names = [
    "Jane",
    "Mary",
    "James",
    "Emma",
    "Noah",
    "Olivia",
    "Liam",
    "Sophia",
    "Mason",
  ];
  return names[Math.floor(Math.random() * names.length)];
}

// Function to generate random text
function generateText() {
  const texts = [
    "Hello",
    "How are you?",
    "Good morning",
    "Good night",
    "See you later",
  ];
  return texts[Math.floor(Math.random() * texts.length)];
}

// Function to generate random date
function generateDate() {
  return new Date(+new Date() - Math.floor(Math.random() * 10000000000));
}

const Avatars = Array.from(
  { length: 10 },
  (_, i) => `https://i.pravatar.cc/200?u=${i}`
);

// Generate users
const users: User[] = Array.from({ length: 9 }, (_, i) => ({
  id: generateId(),
  name: generateName(),
  avatar: Avatars[i],
  online: generateOnlineStatus(),
  conversations: [],
}));

users.push({
  id: generateId(),
  name: "John",
  avatar: `https://i.pravatar.cc/200?u=john`,
  online: generateOnlineStatus(),
  conversations: [],
});

const john = users.find((user) => user.name === "John");

// Generate conversations between John and all other users

users.forEach((user) => {
  // Skip if the user is John himself
  if (user.name === "John") return;
  if (!john) {
    console.log("John not found", { john });
    return;
  }

  const conversation: Conversation = {
    id: generateId(),
    userId: user.id,
    messages: [],
  };

  // Generate 5 messages per conversation, alternating between John and the other user
  for (let i = 0; i < 5; i++) {
    const sender = i % 2 === 0 ? john.name : user.name;
    const message = {
      id: generateId(),
      conversationId: john.id,
      sender: sender,
      text: generateText(),
      timestamp: generateDate(),
    };
    conversation.messages.push(message);
  }

  john.conversations.push(conversation);

  // const conversation: Conversation = {
  //   id: generateId(),
  //   userId: user.id,
  //   messages: Array.from({ length: 5 }, () => ({
  //     // Generate 5 messages per conversation
  //     id: generateId(),
  //     conversationId: john.id,
  //     sender: john.name,
  //     text: generateText(),
  //     timestamp: generateDate(),
  //   })),
  // };

  // john.conversations.push(conversation);
});

export const DATA = {
  loggedInUser: john,
  others: users
    .filter((user) => user.name.toLowerCase() !== "john")
    .sort((a, b) => (b.online ? 1 : -1)),
};
