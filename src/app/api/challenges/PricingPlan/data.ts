import { Plans } from "./types";
export const PLANS: Plans[] = [
  {
    id: "1",
    variation: "All In One",
    title: "Professional",
    billing: {
      annual: 39.99,
      monthly: 39.99 * 12,
    },
    features: [
      "All core features",
      "Priority support",
      "Quarterly reviews",
      "Custom branding",
      "10GB storage",
    ],
  },
  {
    id: "2",
    variation: "Basic",
    title: "Standard",
    billing: {
      annual: 29.99,
      monthly: 29.99 * 12,
    },
    features: [
      "Most core features",
      "Email support",
      "Annual reviews",
      "Limited branding",
      "5GB storage",
    ],
  },
  {
    id: "3",
    variation: "Better Results",
    title: "Ultimate",
    billing: {
      annual: 49.99,
      monthly: 49.99 * 12,
    },
    features: [
      "All features, including premium",
      "24/7 priority support",
      "Dedicated account manager",
      "Fully customizable branding",
      "Unlimited storage",
    ],
  },
];
