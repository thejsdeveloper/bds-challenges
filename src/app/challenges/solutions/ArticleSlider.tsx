"use client";

import { ARTICLES } from "@/app/api/challenges/ArticleSlider/data";
import { Avatar } from "@/app/components/Avatar/Avatar";
import { InfiniteMovingCards } from "@/app/components/InfiniteMovingCards/InfiniteMovingCards";
import { formatDate } from "@/app/utils/dateFormat";
import Image from "next/image";
import React from "react";
import {
  Button,
  OverlayArrow,
  Tooltip,
  TooltipTrigger,
} from "react-aria-components";
import { AiFillInstagram } from "react-icons/ai";
import { FaShare } from "react-icons/fa6";
import { MdOutlineFacebook } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";

export const ArticleSlider = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="h-[30rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards direction="left" speed="slow" className="h-full">
          {ARTICLES.map((article) => (
            <li
              key={article.id}
              className=" bg-white border drop-shadow-lg w-[550px]  md:w-[60rem]  max-w-full h-full  relative  rounded-2xl overflow-clip flex-shrink-0   flex gap-4"
            >
              <Image
                src={article.image}
                alt={article.title}
                className="w-1/2 h-full object-cover"
              />
              <div className="z-20 flex flex-col gap-4 p-6">
                <h1 className="z-20 text-3xl font-designer">{article.title}</h1>
                <p className="z-20 text-xl font-medium">
                  {article.frontmatter}
                </p>
                <div className="z-20 flex items-center gap-2 mt-auto">
                  <Avatar
                    size="medium"
                    src={article.user.avatar}
                    alt={article.user.name}
                    className="object-cover border-2 border-yellow-500 rounded-full"
                  />
                  <div className="z-20 space-y-1">
                    <p className="text-base text-blue-500 font-bold">
                      {article.user.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {formatDate(article.publishDate)}
                    </p>
                  </div>
                  <div className="ml-auto mr-2">
                    <TooltipTrigger delay={0}>
                      <Button
                        aria-label="Share"
                        className="outline-none bg-neutral-200 p-2 rounded hover:ring-1 hover:bg-neutral-400 focus:ring-1 ring-yellow-500 ring-offset-2"
                      >
                        <FaShare />
                      </Button>
                      <Tooltip
                        placement="top"
                        offset={10}
                        className="flex gap-2 bg-black text-white p-2 rounded-lg border"
                      >
                        <OverlayArrow>
                          <svg width={8} height={8} viewBox="0 0 8 8">
                            <path d="M0 0 L4 4 L8 0" />
                          </svg>
                        </OverlayArrow>
                        <MdOutlineFacebook />
                        <AiFillInstagram />
                        <RiTwitterXFill />
                      </Tooltip>
                    </TooltipTrigger>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </InfiniteMovingCards>
      </div>
    </div>
  );
};
