import { StaticImageData } from "next/image";

export interface Product {
  id: string;
  productName: string;
  productPrice: number;
  image: string | StaticImageData;
  quantity: number; // Optional, in case you want to track quantity of each product
}

export interface OrderSummary {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

export type ShoppingList = {
  products: Product[];
  summary: OrderSummary;
};
