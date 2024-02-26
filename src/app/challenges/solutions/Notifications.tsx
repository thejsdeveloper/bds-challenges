"use client";
import { notifications } from "@/app/api/challenges/Notifications/data";
import { Avatar } from "@/app/components/Avatar/Avatar";
import Image from "next/image";
import React, { useState } from "react";
import {
  Button,
  Group,
  Menu,
  MenuItem,
  MenuItemProps,
  MenuProps,
  MenuTrigger,
  Popover,
} from "react-aria-components";
import { RiNotificationLine } from "react-icons/ri";
import { MenuTriggerProps } from "react-stately";

const notification = notifications[0];

export const Notifications = () => {
  const { sender } = notification;

  return (
    <div className="flex-1 px-32 flex justify-around | rounded-xl | p-6 mb-6 relative overflow-clip bg-violet-50">
      <NotificationMenu defaultOpen>
        <NotificationMenuItem>
          <div className="w-full flex justify-center items-center text-center p-6">
            <p className="text-base text-gray-500">
              You do not have any notifications yet
            </p>
          </div>
        </NotificationMenuItem>
      </NotificationMenu>
      <NotificationMenu
        showAllNotificationButton
        haveUnreadNotifications
        defaultOpen
      >
        {/* <NotificationMenuItem>
          <Avatar size="medium" src={sender.avatar} alt={sender.name} />
        </NotificationMenuItem> */}

        <NotificationMenuItem>
          <div className="flex items-center px-2 gap-4">
            <Avatar size="medium" src={sender.avatar} alt={sender.name} />
            <div className="flex flex-col">
              <p className="text-base text-gray-600">
                <strong className="text-black">{sender.name} </strong>
                joined to <strong className="text-black">"Design"</strong> group
              </p>
              <p className="text-sm">2 mins ago</p>
            </div>
          </div>
        </NotificationMenuItem>
        <NotificationMenuItem>
          <div className="flex items-center px-2 gap-4">
            <Avatar size="medium" src={sender.avatar} alt={sender.name} />
            <div className="flex flex-col">
              <p className="text-base text-gray-600">
                <strong className="text-black">{sender.name} </strong>
                mentioned you in <strong className="text-black">comment</strong>
              </p>
              <p className="text-sm">2 mins ago</p>
            </div>
          </div>
        </NotificationMenuItem>
        <NotificationMenuItem>
          <div className="flex items-center px-2 gap-4">
            <Avatar size="medium" src={sender.avatar} alt={sender.name} />
            <div className="flex flex-col">
              <p className="text-base text-gray-600">
                <strong className="text-black">{sender.name} </strong>
                sent you a{" "}
                <strong className="text-black">friend request</strong>
              </p>
              <p className="text-sm">2 mins ago</p>
              <div className="flex gap-3 mt-2">
                <Button
                  className="bg-violet-500 py-1 flex-1 rounded-lg text-white 
                  outline-none
                  focus:ring-1 ring-black ring-offset-2 
                  hover:ring-1
                  hover:bg-violet-600
                  "
                  aria-label="Accept"
                >
                  Accept
                </Button>
                <Button
                  className="bg-stone-300 py-1 flex-1 rounded-lg
                  outline-none
                  focus:ring-1 ring-black ring-offset-2 
                  hover:ring-1
                  hover:bg-stone-400
                  "
                  aria-label="Delete"
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </NotificationMenuItem>

        <NotificationMenuItem>
          <div className="flex px-2 gap-4">
            <Avatar size="medium" src={sender.avatar} alt={sender.name} />
            <div className="flex flex-col flex-1">
              <p className="text-base text-gray-600">
                <strong className="text-black">{sender.name} </strong>
                uploaded 2 attachments to
                <strong className="text-black"> "Source" </strong>
                channel
              </p>
              <p className="text-sm">2 days ago</p>
              <Group className="flex flex-col gap-3 mt-2">
                <div className="border border-gray-600 p-2 rounded-lg bg-stone-100">
                  <div className="flex gap-4">
                    <Image
                      src={sender.avatar}
                      alt="attachment 1"
                      className="rounded-md size-14"
                      width={50}
                      height={50}
                    />
                    <div className="flex flex-col justify-center">
                      <p className="text-sm text-gray-500">TechTalk me</p>
                      <h2 className="text-base text-violet-500 font-bold">
                        App Generator - The technological way
                      </h2>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-2 mt-2">
                    Two years r&D is done and this is the result. What do you
                    think about it. Let me know in comments
                  </p>
                </div>
                <div className="border border-black p-2 rounded-lg bg-stone-100">
                  <div className="flex gap-4">
                    <Image
                      src={sender.avatar}
                      alt="attachment 1"
                      className="rounded-md size-14"
                      width={50}
                      height={50}
                    />
                    <div className="flex flex-col justify-center">
                      <h2 className="text-base text-violet-500 font-bold">
                        Background Image
                      </h2>
                      <p className="text-sm text-gray-500">Zip- 1.4MB</p>
                    </div>
                  </div>
                </div>
              </Group>
            </div>
          </div>
        </NotificationMenuItem>
      </NotificationMenu>
    </div>
  );
};

interface NotificationMenuProps<T>
  extends MenuProps<T>,
    Omit<MenuTriggerProps, "children"> {
  label?: string;
  showAllNotificationButton?: boolean;
  haveUnreadNotifications?: boolean;
}

const NotificationMenu = <T extends Object>({
  haveUnreadNotifications = false,
  showAllNotificationButton = false,
  ...props
}: NotificationMenuProps<T>) => {
  return (
    <MenuTrigger {...props}>
      <Button
        aria-label="Menu"
        className="relative size-12 outline-none bg-white rounded-full p-2 flex justify-center items-center drop-shadow-lg"
      >
        {haveUnreadNotifications && (
          <div className="size-2 bg-red-500 rounded-full absolute right-[25%] top-[30%]" />
        )}
        <RiNotificationLine size={24} />
      </Button>
      <Popover
        placement="bottom right"
        className="w-96 p-1 overflow-auto rounded-md bg-white drop-shadow-2xl ring-1 ring-black ring-opacity-5 entering:animate-in entering:fade-in entering:zoom-in-95 exiting:animate-out exiting:fade-out exiting:zoom-out-95 fill-mode-forwards"
      >
        <div className="flex justify-between p-4">
          <h1 className="text-xl font-semibold">Notifications</h1>
          <Button
            aria-label="Mark as read"
            className="outline-none text-gray-500 hover:ring-1 focus:ring-1 ring-black ring-offset-2 p-1 rounded-sm focus:bg-stone-200 focus:text-black hover:text-black hover:bg-violet-200 transition-all"
          >
            Mark as read
          </Button>
        </div>
        <Menu className="outline-none divide-y" {...props} />
        {showAllNotificationButton && (
          <div className="px-6 py-8 border-t">
            <Button
              aria-label="See all Notifications"
              className="w-full py-2 outline-none bg-violet-500 text-white hover:ring-1 focus:ring-1 ring-black ring-offset-2 p-1 rounded-sm focus:bg-stone-200 focus:text-black hover:text-black hover:bg-violet-200 transition-all"
            >
              Mark all as read
            </Button>
          </div>
        )}
      </Popover>
    </MenuTrigger>
  );
};

const NotificationMenuItem = (props: MenuItemProps) => {
  return (
    <MenuItem
      className="flex w-full items-center  py-2 box-border outline-none cursor-default text-gray-900"
      {...props}
    />
  );
};
