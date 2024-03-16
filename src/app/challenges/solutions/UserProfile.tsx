"use client";

import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AvatarImage } from "@radix-ui/react-avatar";
import {
  ArrowUpRightSquareIcon,
  HelpCircle,
  MoreHorizontal,
  Wallet,
} from "lucide-react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";
import { MdUpgrade } from "react-icons/md";
import {
  PiRowsFill,
  PiSignOut,
  PiSignOutBold,
  PiSignOutLight,
} from "react-icons/pi";
import { RiProfileLine } from "react-icons/ri";

export const UserProfile = () => {
  return (
    <div className="flex-1 grid place-items-start justify-center | mb-6 p-6 |  rounded-3xl ">
      <UserProfileDropdown />
    </div>
  );
};

const UserProfileDropdown = () => {
  return (
    <DropdownMenu defaultOpen>
      <DropdownMenuTrigger asChild>
        <button className="flex gap-2 items-center outline-violet-500 bg-white px-4 py-2 rounded-md w-80">
          <Avatar>
            <AvatarImage src="/assets/avatar.jpeg" />
          </Avatar>
          <h1 className="text-black font-semibold">David</h1>
          <Badge className="bg-violet-400/60 text-black rounded-sm">Pro</Badge>
          <MoreHorizontal className="ml-auto" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        <div className="flex gap-2 items-center outline-violet-500 bg-white px-4 py-2 rounded-md ">
          <Avatar>
            <AvatarImage src="/assets/avatar.jpeg" />
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center">
              <DropdownMenuLabel className="pl-0">David</DropdownMenuLabel>
              <Badge className="bg-violet-400/60 text-black rounded-sm">
                Pro
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">david@gmail.com</p>
          </div>
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex items-center gap-2 text-lg py-2">
            <RiProfileLine /> Profile Settings
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center gap-2 text-lg py-2">
            <HelpCircle /> Help center
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center gap-2 text-lg py-2">
            <Wallet /> Billings
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center gap-2 text-lg py-2">
            <ArrowUpRightSquareIcon /> Upgrade Plan
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex items-center gap-2 text-lg py-2">
            <PiSignOutBold /> Sign out
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
