"use client";
import { CARDS } from "@/app/api/challenges/CardWallet/data";
import { Card, Transaction } from "@/app/api/challenges/CardWallet/types";
import { Blob1, Blob2, Blob3, Blob4 } from "@/app/components/Blob/Blob";
import { cn } from "@/app/utils/cn";
import { formatDate } from "@/app/utils/dateFormat";
import { AnimatePresence, motion } from "framer-motion";
import React, { HTMLAttributes, PropsWithChildren } from "react";
import { MdFastfood, MdOutlineWork } from "react-icons/md";
import { PiShoppingCartFill } from "react-icons/pi";
import { SiYourtraveldottv } from "react-icons/si";

const CARD_WIDTH = 320;

export const CardWallet = () => {
  const [cards] = React.useState(CARDS);
  const [selectedCardIndex, setSelectedCardIndex] = React.useState(0);

  return (
    <div className="flex-1 flex items-center justify-center | my-4 p-2 sm:p-20 |  bg-sky-50 | md:rounded-lg overflow-clip">
      <MobileSkeleton>
        <Hero
          cards={cards}
          selectedCardIndex={selectedCardIndex}
          onCardChange={setSelectedCardIndex}
        />
        <h2 className="text-xl font-bold px-6">Transactions</h2>
        <AnimatePresence mode="wait">
          <TransactionList
            transactions={cards[selectedCardIndex].transactions}
            key={cards[selectedCardIndex].id}
          />
        </AnimatePresence>
      </MobileSkeleton>
    </div>
  );
};

type MobileSkeletonProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

const MobileSkeleton = ({ className, ...props }: MobileSkeletonProps) => {
  return (
    <div
      {...props}
      className={cn(
        "bg-white  h-[700px] w-full max-w-sm rounded-3xl drop-shadow-2xl overflow-clip flex flex-col gap-4",
        className
      )}
    />
  );
};

const Hero = ({
  cards,
  selectedCardIndex,
  onCardChange,
}: {
  cards: Card[];
  selectedCardIndex: number;
  onCardChange: (index: number) => void;
}) => {
  return (
    <div className="bg-black h-1/2 rounded-b-3xl pt-4 pl-4 text-white space-y-3 pb-2">
      <p className="text-sm">Welcome</p>
      <h1 className="text-3xl font-medium">My Cards</h1>
      <motion.div
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
            x: 0,
          },
          animate: {
            opacity: 1,
            x: -selectedCardIndex * CARD_WIDTH,
            transition: {
              duration: 0.5,
              ease: "easeOut",
            },
          },
        }}
        className="flex shrink-0 gap-3  relative"
      >
        {cards.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </motion.div>
      <div className="flex justify-center items-center gap-2">
        {cards.map((card, i) => {
          const selected = i === selectedCardIndex;
          return (
            <button
              onClick={() => onCardChange(i)}
              key={card.id}
              className={cn(
                "transition-all size-3 rounded-full bg-stone-500 outline-none hover:bg-stone-700 focus:ring-1 ring-offset-1 ring-white",
                selected && "bg-violet-500 hover:bg-violet-700 hover:scale-105"
              )}
            />
          );
        })}
      </div>
    </div>
  );
};

const TransactionList = ({
  transactions,
  key,
}: {
  transactions: Transaction[];
  key: string;
}) => {
  return (
    <motion.div
      key={key}
      initial="initial"
      animate="animate"
      variants={{
        animate: {
          transition: { staggerChildren: 0.2 },
        },
      }}
      className="grid gap-4 px-6 h-1/2"
    >
      <div className="grid gap-4 overflow-y-auto pb-16 pr-2">
        {transactions.map((transaction) => (
          <motion.div
            variants={{
              initial: { x: 10, opacity: 0 },
              animate: {
                x: 0,
                opacity: 1,
                transition: { staggerChildren: 0.5 },
              },
            }}
            key={transaction.id}
            className="flex items-center gap-4"
          >
            <div
              className={cn(
                "flex justify-center items-center p-2 rounded-xl",
                transaction.category === "Travel" && "bg-sky-100",
                transaction.category === "Food" && "bg-green-100",
                transaction.category === "Shopping" && "bg-rose-100",
                transaction.category === "Other" && "bg-orange-100"
              )}
            >
              {transaction.category === "Travel" && (
                <SiYourtraveldottv className="size-10 fill-sky-600" />
              )}
              {transaction.category === "Food" && (
                <MdFastfood className="size-10 fill-emerald-600" />
              )}
              {transaction.category === "Other" && (
                <MdOutlineWork className="size-10 fill-orange-600" />
              )}
              {transaction.category === "Shopping" && (
                <PiShoppingCartFill className="size-10 fill-rose-500" />
              )}
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <p className="text-base text-black font-bold">
                {transaction.category}
              </p>
              <p className="text-xs text-gray-500">
                {formatDate(transaction.date)}
              </p>
            </div>
            <p
              className={cn(
                "text-base text-black py-1 px-2 rounded-md",
                transaction.type === "deposit" && "bg-green-200 text-green-600",
                transaction.type === "withdraw" && "bg-red-200 text-red-600"
              )}
            >
              {transaction.type === "withdraw" && "-"}₹{" "}
              {transaction.amount.toFixed(2)}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Card = ({ card }: { card: Card }) => {
  const isEven = Math.ceil(Math.random() * 2) % 2 === 0;
  return (
    <div className="relative min-w-80">
      <div className="absolute w-1/3 h-2/3 bottom-0 left-0">
        {isEven ? <Blob1 /> : <Blob3 />}
      </div>
      <div className="absolute w-1/3 h-2/3 right-5">
        {isEven ? <Blob2 /> : <Blob4 />}
      </div>

      <div className="rounded-3xl grid p-4 gap-2 w-full bg-white/20 backdrop-blur-xl">
        <p className="text-base">Balance</p>
        <p className="text-4xl">₹ {card.balance}</p>
        <p className="text-base my-3">{card.cardNumber}</p>
        <div className="flex justify-between items-center">
          <div className="gap gap-1">
            <p className="text-sm">Expires</p>
            <p className="text-sm">{card.expiryDate}</p>
          </div>
          <p className="text-3xl font-black">VISA</p>
        </div>
      </div>
    </div>
  );
};
