"use client";
import { DATA } from "@/app/api/challenges/Messages/data";
import { Conversation, User } from "@/app/api/challenges/Messages/types";
import { Avatar } from "@/app/components/Avatar/Avatar";
import { MobileSkeleton } from "@/app/components/MobileSkeleton/MobileSkeleton";
import { cn } from "@/app/utils/cn";
import { formatTime } from "@/app/utils/dateFormat";
import React, { HTMLAttributes } from "react";
import { GridList, GridListItem, Key } from "react-aria-components";
import { BiPlus } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa6";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";

export const Messages = () => {
  const [data] = React.useState(DATA);

  const [selectedConversation, setSelectedConversation] = React.useState<
    Key | undefined
  >();
  const conversation = data.loggedInUser?.conversations.find(
    (conversation) => conversation.id === selectedConversation
  );
  const conversationUser = data.others.find(
    (other) => other.id === conversation?.userId
  );

  return (
    <div className="flex-1 flex flex-col  items-center gap-10 bg-rose-50 p-10 | rounded-xl | mb-6 relative overflow-clip">
      <MobileSkeleton className="relative">
        <AnimatePresence mode="sync" initial={false}>
          {conversation && conversationUser ? (
            <DetailsPage
              key={conversation.id}
              conversation={conversation}
              user={conversationUser}
              goBack={() => setSelectedConversation(undefined)}
            />
          ) : (
            <HomePage
              data={data}
              key={data?.loggedInUser?.id || "login"}
              onConversationSelection={setSelectedConversation}
            />
          )}
        </AnimatePresence>
      </MobileSkeleton>
    </div>
  );
};

const DetailsPage = ({
  conversation,
  user,
  goBack,
}: {
  conversation: Conversation;
  user: User;
  goBack: () => void;
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: {
          opacity: 0,
          x: 1000,
        },
        animate: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.2,
          },
        },
        exit: {
          x: 1000,
          opacity: 0,
          transition: {
            duration: 0.1,
          },
        },
      }}
      className="flex flex-col  relative flex-1 mb-4"
    >
      <header
        aria-label={`conversation of ${conversation.id}`}
        className="flex w-full items-center p-6 border-b border-gray-800"
      >
        <button className="outline-none cursor-pointer" onClick={goBack}>
          <BsArrowLeft className="size-6 hover:fill-orange-600" />
        </button>
        <div className="flex-1 flex flex-col gap-2 justify-center items-center">
          <div className="relative">
            <Avatar
              src={user.avatar}
              alt={user.name}
              size="medium"
              className="border border-gray-400  rounded-full object-cover"
            />
            {user.online && (
              <div className="size-2 rounded-full bg-green-500 absolute bottom-0 right-0 ring-1 ring-offset-1 ring-white" />
            )}
          </div>
          <p>{user.name}</p>
        </div>
      </header>
      <main className="flex flex-col w-full px-6 gap-4 py-4 mb-10">
        {conversation.messages.map((message) => {
          return (
            <div key={message.id}>
              <p className="text-xs text-gray-500 flex-1 flex justify-center  gap-2">
                {formatTime(message.timestamp)}
              </p>
              <div className="flex gap-2 items-center">
                {message.sender === user.name && (
                  <div className="relative">
                    <Avatar
                      src={user.avatar}
                      alt={user.name}
                      size="small"
                      className="border border-gray-400  rounded-full object-cover"
                    />
                    {user.online && (
                      <div className="size-2 rounded-full bg-green-500 absolute bottom-0 right-0 ring-1 ring-offset-1 ring-white" />
                    )}
                  </div>
                )}
                <Message
                  message={message.text}
                  className={cn(
                    message.sender === user.name && "bg-gray-400",
                    message.sender !== user.name &&
                      "bg-orange-400 text-white ml-auto"
                  )}
                />
              </div>
            </div>
          );
        })}
      </main>
      <div className="px-4 absolute bottom-0 w-full">
        <input
          className="w-full rounded-full px-2  py-1 border border-gray-600 bg-gray-200"
          placeholder="Message"
        />
      </div>
    </motion.div>
  );
};

const Message = ({
  message,
  className,
  ...props
}: { message: string } & HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn(
        "text-base text-black w-2/3 bg-gray-300 p-2 rounded-lg",
        className
      )}
      {...props}
    >
      {message}
    </p>
  );
};

const HomePage = ({
  data,
  onConversationSelection,
}: {
  data: typeof DATA;
  onConversationSelection: (id: Key) => void;
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
          x: -1000,
        },
        animate: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.2,
          },
        },
        exit: {
          x: -1000,
          opacity: 0,
          transition: {
            duration: 0.1,
          },
        },
      }}
    >
      <header className="flex justify-between items-center p-6">
        <h1 className="text-2xl text-black font-bold">Messages</h1>
        <div className="flex gap-4">
          <button
            className="relative outline-none p-1 
            ring-orange-500 ring-offset-1 
            focus:bg-orange-200
            hover:bg-orange-200 
              rounded-full 
              hover:ring-1
              focus:ring-1 transition-all focus:animate-wiggle hover:animate-wiggle"
          >
            <FaRegBell />
            <div className="size-2 rounded-full bg-red-500 absolute bottom-1 right-0 ring-1 ring-offset-1 ring-white" />
          </button>
          <button className="outline-none ring-orange-500 ring-offset-2  focus:bg-orange-200 hover:bg-orange-200 rounded hover:ring-1 focus:ring-1 transition-all">
            <PiDotsThreeOutlineVerticalFill />
          </button>
        </div>
      </header>
      <Users users={data.others} />
      <ConversationList
        data={data}
        onConversationSelection={onConversationSelection}
      />
      <button
        aria-label="Start new Conversation"
        className="flex justify-center items-center p-2 bg-orange-400 rounded-full
            absolute bottom-4 right-4 outline-none 
            focus:ring-1
            hover:ring-1 ring-offset-1 ring-orange-500 
            focus:bg-orange-600
            hover:bg-orange-600 transition-all"
      >
        <BiPlus className="size-6 fill-white" />
      </button>
    </motion.div>
  );
};

const ConversationList = <T extends Conversation>({
  data,
  onConversationSelection,
}: {
  data: typeof DATA;
  onConversationSelection: (id: Key) => void;
}) => {
  const conversations = data.loggedInUser?.conversations;

  return (
    <GridList
      className="flex flex-col divide-y divide-gray-300 overflow-y-auto mt-6"
      aria-label="Conversation List"
      items={conversations}
      onAction={(key) => {
        onConversationSelection(key);
      }}
    >
      {(item) => {
        const user = data.others.find((user) => user.id === item.userId);
        const lastMessage = item.messages.at(-1)?.text;
        const timestamp = item.messages.at(-1)?.timestamp;

        if (!user || !lastMessage || !timestamp) return null;

        return (
          <GridListItem
            textValue="Conversation Message"
            {...item}
            className="flex gap-2 w-full px-6 items-center py-2 last-of-type:mb-6 cursor-pointer"
          >
            <div className="relative cursor-pointer">
              <Avatar
                src={user.avatar}
                alt={user.name}
                size="medium"
                className="border border-gray-400  rounded-full object-cover"
              />
              {user.online && (
                <div className="size-3 rounded-full bg-green-500 absolute bottom-0 right-0 ring-1 ring-offset-1 ring-white" />
              )}
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-500">{formatTime(timestamp)}</p>
              </div>
              <p className="text-sm text-gray-500">{lastMessage}</p>
            </div>
          </GridListItem>
        );
      }}
    </GridList>
  );
};

const Users = ({ users }: { users: User[] }) => {
  return (
    <div className="flex gap-4 pl-6 flex-nowrap shrink-0 overflow-x-auto ">
      {users.map((user) => {
        return (
          <div className="flex flex-col justify-center items-center gap-2 last-of-type:mr-6">
            <div className="relative">
              <Avatar
                src={user.avatar}
                alt={user.name}
                size="medium"
                className="border border-gray-400  rounded-full object-cover"
              />
              {user.online && (
                <div className="size-3 rounded-full bg-green-500 absolute bottom-0 right-0 ring-1 ring-offset-1 ring-white" />
              )}
            </div>
            <p className="text-xs text-gray-500 text-ellipsis">{user.name}</p>
          </div>
        );
      })}
    </div>
  );
};
