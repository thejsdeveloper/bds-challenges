import { OrderSummary, Product, ShoppingList } from "./types/types";

import photo1 from "#/assets/challenge/products/photo1.jpg";
import photo2 from "#/assets/challenge/products/photo2.jpg";
import photo3 from "#/assets/challenge/products/photo3.jpg";
import photo4 from "#/assets/challenge/products/photo4.jpg";

const products = [
  {
    name: "Illuminating face cream",
    image: photo1,
  },
  {
    name: "Illuminating face cream",
    image: photo2,
  },
  {
    name: "Illuminating left up serum",
    image: photo3,
  },
  {
    name: "Cbd Premium oil",
    image: photo4,
  },
];

function generateRandomProduct(): Product {
  const { name: productName, image } =
    products[Math.floor(Math.random() * products.length)];
  const quantity = Math.floor(Math.random() * 10);
  const itemPrice = Math.floor(Math.random() * 100);
  const productPrice = quantity * itemPrice;

  return {
    id: crypto.randomUUID(),
    productName,
    productPrice,
    quantity,
    image,
  };
}

function generateShoppingList(): ShoppingList {
  // Generate 5 random products
  const products = Array.from({ length: 5 }, generateRandomProduct);

  // Calculate the subtotal based on the prices of the products
  const subtotal = products.reduce(
    (total, product) => total + product.productPrice * (product.quantity || 1),
    0
  );

  // Calculate the tax and shipping based on the subtotal
  const tax = Math.floor(subtotal * 0.1); // 10% tax
  const shipping = Math.floor(subtotal * 0.05); // 5% shipping

  // Calculate the total
  const total = subtotal + tax + shipping;

  // Create the order summary
  const summary: OrderSummary = {
    subtotal,
    tax,
    shipping,
    total,
  };

  // Return the shopping list
  return {
    products,
    summary,
  };
}

// Generate a shopping list
export const shoppingList = generateShoppingList();
