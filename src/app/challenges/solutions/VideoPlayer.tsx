"use client";
import {
  RELATED_VIDEOS,
  SKATEBOARD_VIDEO,
} from "@/app/api/challenges/VideoPlayer/data";
import { Avatar } from "@/app/components/Avatar/Avatar";
import { LikeIcon } from "@/app/components/LikeIcon/LikeIcon";
import { formatDistance } from "date-fns";
import Image from "next/image";
import { ListBox, ListBoxItem } from "react-aria-components";
import { BsFillEyeFill } from "react-icons/bs";
import { FaShareNodes, FaThumbsUp } from "react-icons/fa6";

export const VideoPlayer = () => {
  return (
    <div className="flex-1 grid grid-flow-row lg:grid-flow-col lg:grid-cols-3 place-content-center gap-4 md:gap-6 mx-2  | mb-6 relative overflow-clip">
      <div className="flex flex-col col-span-1 lg:col-span-2 gap-4 md:gap-6 text-white ">
        <video controls className="aspect-video rounded-3xl ">
          <source src={SKATEBOARD_VIDEO.source} type="video/mp4" />
        </video>
        <div className="flex gap-4 items-center flex-wrap bg-violet-950 text-white rounded-3xl p-4">
          <div className="flex gap-4 w-full sm:w-auto">
            <Avatar
              src={SKATEBOARD_VIDEO.creator.avatar}
              size="medium"
              alt="creator"
            />
            <div className="flex flex-col justify-center">
              <p className="text-base font-semibold">
                {SKATEBOARD_VIDEO.creator.name}
              </p>
              <p className="text-xs text-white/80">1223 subscribers</p>
            </div>
          </div>
          <div className="flex-1 flex ml-16 sm:ml-0 justify-start items-center gap-4 text-sm text-white/80">
            <p className="flex gap-2 items-center">
              <BsFillEyeFill />
              4523 views
            </p>
            <p className="flex gap-2 items-center">
              <FaThumbsUp />
              748 likes
            </p>
          </div>

          <div className="flex gap-2 justify-start ml-16 sm:ml-0 sm:justify-end items-center w-full sm:w-auto">
            <button
              className="flex gap-2 px-4 py-1 items-center bg-violet-200/60 rounded-lg 
            outline-none
            hover:text-violet-500
            hover:bg-violet-200
            transition-all
            focus:ring-2 ring-offset-2 ring-violet-500
            focus:bg-white focus:text-violet-500
            "
            >
              <FaShareNodes />
              Share
            </button>
            <button
              className="flex gap-2 px-4 py-1 items-center rounded-lg bg-violet-400
            outline-none
            hover:text-violet-500
            hover:bg-violet-200
            transition-all
            focus:ring-2 ring-offset-2 ring-violet-500
            focus:bg-white focus:text-violet-500
            "
            >
              <LikeIcon />
              Like
            </button>
          </div>
        </div>
      </div>
      <div className="grid col-span-1 lg:place-content-start">
        <RelatedVideos />
      </div>
    </div>
  );
};

const RelatedVideos = () => {
  return (
    <div className="grid gap-6 bg-violet-950 rounded-3xl text-white p-6 w-full">
      <h2 className="text-xl font-semibold">Related videos</h2>
      <ListBox
        items={RELATED_VIDEOS}
        aria-label="Related Videos"
        className="space-y-4"
      >
        {(item) => (
          <ListBoxItem
            textValue="Related Videos"
            className="group flex items-center gap-4 p-2
            rounded-xl
              outline-none cursor-default
            hover:bg-violet-200 focus-visible:bg-white
            focus-visible:text-violet-950
            focus-visible:ring-2 ring-offset-2 ring-violet-500
            transition-all
            "
          >
            <Image
              src={item.cover}
              alt={item.description}
              width={100}
              height={100}
              className="h-20 aspect-video object-cover rounded-xl"
            />
            <div className="flex flex-col gap-2 justify-center">
              <p className="text-base font-semibold text-wrap">{item.title}</p>
              <p className="text-xs text-white/80 group-focus-visible:text-violet-500">
                {item.creator.name}
              </p>
              <div className="flex flex-col md:flex-row gap-1 md:items-center">
                <p className="text-xs text-white/80 group-focus-visible:text-violet-500">
                  {item.views} views
                </p>
                <span className="hidden md:block text-xs text-white/80 group-focus-visible:text-violet-500">
                  ·
                </span>
                <p className="text-xs text-white/80 group-focus-visible:text-violet-500">
                  {formatDistance(item.createdAt, Date.now(), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            </div>
          </ListBoxItem>
        )}
      </ListBox>
    </div>
  );
};
