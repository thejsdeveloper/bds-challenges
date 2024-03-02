export type Card = {
  id: string;
  cardNumber: string;
  expiryDate: string;
  balance: number;
  transactions: Transaction[];
};

export type Transaction = {
  id: string;
  cardId: string;
  category: "Travel" | "Food" | "Shopping" | "Other";
  amount: number;
  date: Date;
  type: "deposit" | "withdraw";
};
