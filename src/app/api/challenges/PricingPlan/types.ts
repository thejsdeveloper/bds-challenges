export type Plans = {
  id: string;
  variation: "All In One" | "Basic" | "Better Results";
  title: string;
  billing: {
    annual: number;
    monthly: number;
  };
  features: string[];
};
