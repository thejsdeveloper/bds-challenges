"use client";
import { MobileSkeleton } from "@/app/components/MobileSkeleton/MobileSkeleton";
import { formatDate } from "@/app/utils/dateFormat";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Camera, Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  BsCamera2,
  BsCameraFill,
  BsDot,
  BsPatchCheckFill,
  BsTwitterX,
} from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";

export const PlayerProfile = () => {
  return (
    <div className="flex-1 grid place-items-center p-8 |  rounded-xl | mb-6 relative overflow-clip">
      <MobileSkeleton className="gap-0">
        <Banner />
        <PlayerInformation />
      </MobileSkeleton>
    </div>
  );
};

export const Banner = () => {
  return (
    <div className="overflow-hidden shrink-0 relative h-36 bg-gradient-to-r from-sky-300 to-fuchsia-300">
      <Image
        src="/assets/cycling.jpeg"
        alt="bg"
        width={500}
        height={200}
        className="object-cover w-full aspect-video"
      />
      <div className="absolute top-4 right-4 rounded-full bg-white p-2">
        <BsCameraFill className="fill-sky-500" />
      </div>
    </div>
  );
};

const PlayerInformation = () => {
  return (
    <div className="relative px-6 flex flex-col gap-2  overflow-y-auto scroll">
      <div className="fixed top-40">
        <Avatar className="size-16 absolute -bottom-2">
          <AvatarImage src="/assets/player.jpeg" />
          <AvatarFallback>Dave</AvatarFallback>
        </Avatar>
        <div className="-bottom-2 left-12 absolute rounded-full p-0.5 bg-white">
          <BsPatchCheckFill className="size-4" />
        </div>
      </div>
      <Button
        variant="secondary"
        className="mt-4 rounded-full p-2 h-auto ml-auto"
      >
        <MdEdit className="size-4" />
      </Button>
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-bold flex-1">Dennis Olivarria</h1>
        <Button variant="ghost" className="rounded-full p-2 h-auto">
          <BsTwitterX className="size-4" />
        </Button>
        <Button variant="ghost" className="rounded-full p-2 h-auto">
          <FaInstagram className="size-4" />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Badge>Cycling</Badge>
        <Badge>Tour de France</Badge>
      </div>
      <div className="flex items-center gap-2">
        <p>Arizona Cardinals</p>
        <BsDot />
        <p>#2</p>
      </div>
      <PlayerAccordion />
      <Articles />
    </div>
  );
};

const Articles = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-md font-medium uppercase">Liked Articles</h2>
      <div className="divide-y divide-gray-300">
        {ARTICLES.map((article) => {
          return (
            <div className="mb-2">
              <p className="text-sm text-muted-foreground mt-2">
                {formatDate(article.publishedOn)}
              </p>
              <div className="flex justify-between items-center">
                <p className="font-semibold">{article.title}</p>
                <Image
                  src={article.image}
                  alt={article.id}
                  width={200}
                  height={200}
                  className="size-16 rounded-md aspect-square"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PlayerAccordion = () => {
  const [selectedId, setSelectedId] = React.useState(0);

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="info" className="border-none">
        <AccordionTrigger>
          <p>INFO</p>
        </AccordionTrigger>
        <AccordionContent className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">College</p>
            <p className="font-semibold">University of Delhi</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Position</p>
            <p className="font-semibold">Forward</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">HT / WT</p>
            <p className="font-semibold">1.78 m / 94kg</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Birthplace</p>
            <p className="font-semibold">Lucknow</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Status</p>
            <Badge className="bg-green-100 text-green-600">Active</Badge>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="history" className="border-none">
        <AccordionTrigger>
          <p className="uppercase">Career History</p>
        </AccordionTrigger>
        <AccordionContent className="space-y-2">
          {HISTORY.map((history) => {
            return (
              <div key={history.id} className="flex items-center gap-2">
                <Image
                  src={history.logo}
                  alt={history.name}
                  width={100}
                  height={100}
                  className="size-6 rounded-full"
                />
                <div>
                  <p className="font-semibold">{history.name}</p>
                  <p className="text-muted-foreground">{history.period}</p>
                </div>
              </div>
            );
          })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const HISTORY: {
  id: string;
  name: string;
  period: string;
  logo: string;
}[] = [
  {
    id: "1",
    name: "Arizona Cardinals",
    period: "2021 - current",
    logo: "/assets/arizona.png",
  },
  {
    id: "2",
    name: "Chicago Bears",
    period: "2017 - 2021",
    logo: "/assets/bear.png",
  },
  {
    id: "3",
    name: "Jacksonville Jaguars",
    period: "2015 - 2017",
    logo: "/assets/jaguar.jpeg",
  },
];

type Article = {
  id: string;
  title: string;
  publishedOn: Date;
  image: string;
};
const ARTICLES: Article[] = [
  {
    id: "1",
    image: "/assets/soccer1.jpeg",
    title: "Hollywood heads to the Midwest and patrick Manhomes",
    publishedOn: new Date(),
  },
  {
    id: "2",
    image: "/assets/soccer2.jpeg",
    title: "Cardinals trade for Desmond Rider to back Up Kyler Murray",
    publishedOn: new Date(),
  },
];
