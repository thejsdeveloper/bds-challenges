"use client";
import { DATA } from "@/app/api/challenges/FurFriends/data";
import { Friend } from "@/app/api/challenges/FurFriends/types";
import Card from "@/app/components/Card/Card";
import { LikeIcon } from "@/app/components/LikeIcon/LikeIcon";
import { Search } from "@/app/components/Search/Search";
import { cn } from "@/app/utils/cn";
import Image from "next/image";
import { HTMLAttributes, PropsWithChildren, useState } from "react";
import { GridList, GridListItem, Key } from "react-aria-components";
import { BiArrowBack } from "react-icons/bi";
import { FaIndianRupeeSign, FaPaw, FaShieldDog } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { MdFemale, MdMale } from "react-icons/md";

export const FurFriends = () => {
  const [friends, setFriends] = useState(() => DATA);
  const [selectedIndex, setSelectedIndex] = useState<Key>(1);
  const selectedFriend = friends.find((friend) => friend.id === selectedIndex);

  return (
    <div className="flex-1 flex justify-center items-center gap-20 bg-blue-50 | rounded-xl | mb-6 relative overflow-clip">
      <ListingPage
        friends={friends}
        onSelection={(idx) => {
          setSelectedIndex(idx);
        }}
        onLike={(selectedIndex) => {
          setFriends(
            friends.map((friend) => {
              if (friend.id === selectedIndex) {
                return {
                  ...friend,
                  like: !friend.like,
                };
              }
              return friend;
            })
          );
        }}
        onSearch={(term) => {
          if (term.length === 0 || term.trim() === "") {
            setFriends(DATA);
            return;
          }
          const filtered = friends.filter((friend) =>
            friend.name.toLowerCase().includes(term.toLowerCase())
          );
          setFriends(filtered);
        }}
      />
      {selectedFriend && <DetailsPage friend={selectedFriend} />}
    </div>
  );
};

const DetailsPage = ({ friend }: { friend: Friend }) => {
  return (
    <Container className="px-0 pt-0 overflow-clip relative">
      <div className="flex justify-between items-center absolute top-0 p-4 text-white z-10 bg-gradient-to-b from-black/10 from-60% to-transparent w-full">
        <BiArrowBack className="size-6 fill-white" />
        <LikeIcon filled={friend.like} className="fill-[#FF1C7B] size-6" />
      </div>
      <div className="h-1/2 relative">
        <Image
          src={friend.image}
          alt={friend.name}
          fill
          sizes="100%"
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-4 p-4 h-1/2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold flex items-center">
              {friend.name}
              {friend.gender === "Male" ? (
                <MdMale className="size-6 text-black" />
              ) : (
                <MdFemale className="size-6 text-black" />
              )}
            </h1>
            <p className="text-gray-600 font-sm">{friend.breed}</p>
          </div>
          <div className="flex gap-1 items-center">
            <HiLocationMarker className="fill-pink-500" />
            <p className="text-base text-black">{friend.distance} kms</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col justify-center items-center py-2 px-3 bg-neutral-200 rounded-md">
            <h3 className="text-base font-semibold text-center">Age</h3>
            <p className="text-sm text-black text-center">{friend.age} yr</p>
          </div>
          <div className="flex flex-col justify-center items-center py-2 px-3 bg-neutral-200 rounded-md">
            <h3 className="text-base font-semibold text-center">Height</h3>
            <p className="text-sm text-black text-center">
              {friend.height} inch
            </p>
          </div>
          <div className="flex flex-col justify-center items-center py-2 px-3 bg-neutral-200 rounded-md">
            <h3 className="text-base font-semibold text-center">Weight</h3>
            <p className="text-sm text-black text-center">{friend.weight} lb</p>
          </div>
        </div>
        <div className="relative">
          <p className="text-base text-gray-800 line-clamp-3  w-10/12">
            {friend.description}
          </p>
          <button className="outline-none uppercase text-xs text-pink-600 font-medium absolute right-0 bottom-0 bg-white">
            See More
          </button>
        </div>
        <div className="flex w-full gap-2 mt-auto">
          <button className="flex gap-2 justify-center items-center font-bold py-2 hover:bg-neutral-300  bg-neutral-200 text-black flex-1 rounded-lg transition-all outline-none hover:ring-2 focus:ring-1 ring-offset-2 ring-black">
            Donate
            <FaIndianRupeeSign />
          </button>
          <button className="flex gap-2 justify-center items-center font-bold py-2 bg-[#FF1C7B] text-white flex-[2]  rounded-lg transition-all outline-none hover:ring-2 focus:ring-1 ring-offset-2 ring-black">
            Adopt
            <FaPaw className="fill-white" />
          </button>
        </div>
      </div>
    </Container>
  );
};

const ListingPage = ({
  friends,
  onSelection,
  onLike,
  onSearch,
}: {
  friends: Friend[];
  onSelection: (idx: Key) => void;
  onLike: (selectedIndex: number) => void;
  onSearch?: (searchTerm: string) => void;
}) => {
  return (
    <Container className="flex flex-col gap-4 bg-neutral-50">
      <header className="flex items-center gap-4">
        <FaShieldDog size={36} />
        <h1 className="text-2xl font-bold text-black">FurEver Friends</h1>
      </header>
      <Search
        placeholder="Search for a friend"
        aria-label="Search a friend"
        onChange={(e) => {
          e.preventDefault();
          onSearch?.(e.target.value);
        }}
      />
      <GridList
        className="grid gap-4 overflow-y-scroll p-2"
        items={friends}
        onAction={(key) => onSelection(key)}
        aria-label="FurEver Friends List"
        renderEmptyState={() => {
          return (
            <div className="text-lg text-black font-bold p-10">
              <p>No items found with that term</p>
            </div>
          );
        }}
      >
        {(item) => (
          <GridListItem
            textValue={item.name}
            className="outline-none transition-all focus:ring-2 ring-pink-500 ring-offset-2 rounded-lg"
          >
            <FriendCard friend={item} onLike={() => onLike(item.id)} />
          </GridListItem>
        )}
      </GridList>
    </Container>
  );
};

const FriendCard = ({
  friend,
  onLike,
}: {
  friend: Friend;
  onLike: () => void;
}) => {
  return (
    <Card className="py-0 m-1 pl-0 overflow-clip drop-shadow">
      <Card.Body className="flex gap-4  relative">
        <Card.Image
          src={friend.image}
          alt={friend.name}
          width={100}
          height={100}
          className="rounded-xl object-cover aspect-square"
        />
        <div className="grid flex-1 items-center">
          <div className="flex items-center gap-1">
            <Card.Title>{friend.name}</Card.Title>
            {friend.gender === "Male" ? (
              <MdMale className="size-5 text-black" />
            ) : (
              <MdFemale className="size-5 text-black" />
            )}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-base text-black">{friend.breed}</p>
            <button
              onClick={onLike}
              className="outline-none rounded-full p-1 focus:ring-1 hover:ring-1 ring-offset-1 ring-pink-500 transition-all"
            >
              <LikeIcon
                filled={friend.like}
                className="fill-[#FF1C7B] size-6 cursor-pointer"
              />
            </button>
          </div>
          <div className="flex gap-1 items-center">
            <HiLocationMarker className="fill-pink-500" />
            <p className="text-base text-black">{friend.distance} kms</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

type ContainerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div
      {...props}
      className={cn(
        "bg-white px-4 pt-4 h-[700px] w-1/4 rounded-xl drop-shadow-2xl",
        className
      )}
    />
  );
};
