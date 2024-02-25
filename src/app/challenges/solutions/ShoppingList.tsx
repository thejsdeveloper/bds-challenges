"use client";

import Image from "next/image";
import React, { PropsWithChildren, useState } from "react";
import vegetableSrc from "#/assets/challenge/vegetable.jpg";
import {
  OrderSummary,
  Product,
} from "@/app/api/challenges/ShoppingList/types/types";
import {
  Button,
  ButtonProps,
  GridList,
  GridListItem,
  Input,
} from "react-aria-components";
import { IoCloseSharp } from "react-icons/io5";
import { shoppingList as shoppingData } from "@/app/api/challenges/ShoppingList/data";

export const ShoppingList = () => {
  const [{ products, summary }, setShoppingList] = useState(shoppingData || []);

  return (
    <div className="flex-1 flex justify-center items-center  | rounded-xl | mb-6 relative overflow-clip">
      <Backdrop />
      <div className="grid grid-col-1 lg:grid-cols-3 gap-8 p-6 w-full max-w-4xl">
        <div className="lg:col-span-2">
          <ProductList products={products} />
        </div>
        <div className="lg:col-span-1 flex flex-col gap-6">
          <OrderSummary summery={summary} />
          <PromoCode />
        </div>
      </div>
    </div>
  );
};

const PromoCode = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold">Promo Code</h1>
        <Input
          className="outline-none ring-1 ring-black w-full rounded-md p-2 focus:ring-2 ring-offset-2"
          placeholder="Enter promo code"
        />
      </div>
    </Container>
  );
};
const OrderSummary = ({ summery }: { summery: OrderSummary }) => {
  return (
    <Container>
      <h1 className="text-xl font-bold">Order Summary</h1>
      <div className="grid gap-2">
        <Row>
          <p className="text-base text-black">Subtotal</p>
          <p className="text-base text-black">
            ₹ {summery.subtotal.toFixed(2)}
          </p>
        </Row>
        <Row>
          <p className="text-base text-black">Tax</p>
          <p className="text-base text-black">₹ {summery.tax.toFixed(2)}</p>
        </Row>
        <Row>
          <p className="text-base text-black">Shipping</p>
          <p className="text-base text-black">
            ₹ {summery.shipping.toFixed(2)}
          </p>
        </Row>
      </div>
      <hr />
      <Row>
        <p className="text-xl font-bold text-black">Total</p>
        <p className="text-xl font-bold text-black">
          ₹ {summery.total.toFixed(2)}
        </p>
      </Row>
      <Row>
        <Button className="bg-black text-white flex items-center justify-center py-3 w-full rounded-md outline-none focus:ring-2 ring-black ring-offset-2 hover:scale-105 transition-all">
          Pay now
        </Button>
      </Row>
    </Container>
  );
};

type ContainerProps = PropsWithChildren;

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="rounded-2xl overflow-clip bg-white px-6 py-8 space-y-10 drop-shadow-lg w-full">
      {children}
    </div>
  );
};

const Row = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-between">{children}</div>
);

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <Container>
      <Row>
        <h1 className="text-xl font-bold">Your product list</h1>
        <p className="text-lg text-gray-800">{products.length} Items</p>
      </Row>
      <GridList
        items={products}
        aria-label="Shopping List"
        className="z-50 space-y-6"
      >
        {(item) => <ShoppingListItem {...item} />}
      </GridList>
    </Container>
  );
};

export const ShoppingListItem = ({
  image,
  productName,
  productPrice,
  quantity,
}: Product) => {
  return (
    <GridListItem
      textValue={`Shopping Item - ₹ {productName}`}
      className="flex gap-4 outline-none focus:scale-105 focus:ring-2 ring-black ring-offset-4 rounded-lg  transition-all"
      aria-label={`Shopping Item - ₹ {productName}`}
    >
      <Image
        src={image}
        alt={`₹ {productName}`}
        className="object-cover aspect-square size-28 rounded-lg"
      />
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex flex-row items-center  justify-between gap-4 p-2">
          <p className="text-base font-medium">{productName}</p>
          <button
            className="text-2xl outline-none rounded-full flex items-center justify-center p-2
          hover:bg-stone-200 focus:bg-stone-400
          focus:ring-1 ring-black ring-offset-2"
          >
            <IoCloseSharp />
          </button>
        </div>
        <div className="flex flex-row items-center justify-between gap-4 p-2">
          <div className="flex items-center gap-3">
            <QuantityButton>-</QuantityButton>
            <p className="text-base">{quantity}</p>
            <QuantityButton>+</QuantityButton>
          </div>
          <p className="text-base p-2">₹ {productPrice}</p>
        </div>
      </div>
    </GridListItem>
  );
};

type QuantityButtonProps = ButtonProps;

const QuantityButton = (props: QuantityButtonProps) => {
  return (
    <Button
      className="rounded-lg bg-stone-200 hover:bg-stone-400 
      outline-none focus:ring-2 focus:scale-110 ring-black ring-offset-2
      
      transition-all p-2 size-7 flex justify-center items-center text-lg"
      {...props}
    />
  );
};
const Backdrop = () => {
  return (
    <>
      <Image src={vegetableSrc} alt="Vegetable background" fill />
      <div className="absolute inset-0 backdrop-blur-2xl" />
    </>
  );
};
