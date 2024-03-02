import { Card, Transaction } from "./types";

const generateRandomTransaction = (cardId: string): Transaction => {
  const categories = ["Travel", "Food", "Shopping", "Other"];
  const types = ["deposit", "withdraw"];
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  const randomType = types[Math.floor(Math.random() * types.length)];
  const randomAmount = Math.floor(Math.random() * 1000);
  const randomDate = new Date(
    +new Date() - Math.floor(Math.random() * 10000000000)
  );
  return {
    id: Math.random().toString(36).substring(2, 15),
    cardId,
    category: randomCategory as "Travel" | "Food" | "Shopping" | "Other",
    amount: randomAmount,
    date: randomDate,
    type: randomType as "deposit" | "withdraw",
  };
};

const generateRandomCard = (): Card => {
  const cardNumber =
    "**** **** **** " + Math.floor(1000 + Math.random() * 9000);
  const balance = Math.floor(Math.random() * 10000);
  const transactions = Array.from({ length: 5 }, () =>
    generateRandomTransaction(cardNumber)
  );
  return {
    id: Math.random().toString(36).substring(2, 15),
    cardNumber,
    expiryDate: "04/26",
    balance,
    transactions,
  };
};

// Generate 2 cards
export const CARDS: Card[] = Array.from({ length: 3 }, generateRandomCard);
