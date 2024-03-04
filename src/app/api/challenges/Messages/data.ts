import { Conversation, User } from "./types";

// Function to generate random ID
function generateId() {
  return Math.floor(Math.random() * 10000).toString();
}

// Function to generate random name
function generateName() {
  const names = [
    "John",
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

// Function to generate random avatar
function generateAvatar() {
  const avatars = [
    "avatar1.png",
    "avatar2.png",
    "avatar3.png",
    "avatar4.png",
    "avatar5.png",
  ];
  return avatars[Math.floor(Math.random() * avatars.length)];
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

// Generate users
const users: User[] = Array.from({ length: 10 }, (_, i) => ({
  id: generateId(),
  name: generateName(),
  avatar: `https://i.pravatar.cc/200?u=${i}`,
  conversations: [],
}));

// Generate conversations between users
users.forEach((user, index) => {
  const otherUser = users[(index + 1) % users.length]; // Get another user for conversation

  const conversation: Conversation = {
    id: generateId(),
    userId: otherUser.id,
    messages: Array.from({ length: 5 }, () => ({
      // Generate 5 messages per conversation
      id: generateId(),
      conversationId: user.id,
      sender: user.name,
      text: generateText(),
      timestamp: generateDate(),
    })),
  };

  user.conversations.push(conversation);
});

export { users as USERS };
