export type Question = {
  id: string;
  question: string;
  answer: string;
};

export type FAQType = Question[];

export const minionTrivia: FAQType = [
  {
    id: "1",
    question:
      "What is the name of the villain in the first Despicable Me movie?",
    answer: "Vector",
  },
  {
    id: "2",
    question: "What are the names of Gru’s adopted daughters?",
    answer: "Margo, Edith and Agnes",
  },
  {
    id: "3",
    question: "What is the favorite food of the Minions?",
    answer: "Bananas",
  },
  {
    id: "4",
    question: "What is the color of the Minions?",
    answer: "Yellow",
  },
  {
    id: "5",
    question: "Who is the leader of the Minions?",
    answer: "Kevin",
  },
];
