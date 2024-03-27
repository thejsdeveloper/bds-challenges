"use client";
import { cn } from "@/app/utils/cn";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import React from "react";
import { IconType } from "react-icons";
import { BsFillMouse3Fill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaHardDrive, FaServer } from "react-icons/fa6";
import { MdDescription } from "react-icons/md";
import { SiTorbrowser } from "react-icons/si";

export const HostingFeatures = () => {
  const [selected, setSelected] = React.useState("1");
  return (
    <div className=" flex-1 flex flex-col gap-8 justify-evenly p-8 | bg-white rounded-xl | mb-6 relative overflow-clip">
      <div className="space-y-3">
        <p className="text-3xl text-violet-500 text-center font-semibold">
          Features
        </p>
        <h1 className="text-5xl text-black font-bold text-center">
          Our Web hosting features
        </h1>
      </div>
      <ToggleGroup
        type="single"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        value={selected}
        onValueChange={(value) => {
          setSelected(value);
        }}
      >
        {webHostingFeatures.map((data, i) => {
          const Icon = data.icon as IconType;
          return (
            <ToggleGroupItem
              className={cn(
                "relative h-auto p-0 text-left  transition-all focus:ring-0 ring-offset-0"
              )}
              key={data.id}
              value={data.id}
            >
              <Card
                className={cn(
                  selected === data.id &&
                    `ring-2 ring-offset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600`
                )}
              >
                <CardHeader>
                  <div className="p-4 border-2 border-secondary w-fit rounded-lg mb-6 bg-white">
                    <Icon size={50} />
                  </div>
                  <CardTitle
                    className={cn(selected === data.id && `text-white`)}
                  >
                    {data.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription
                    className={cn(
                      "line-clamp-3",
                      selected === data.id && `text-white/50`
                    )}
                  >
                    {data.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="link"
                    className={cn(
                      "px-0",
                      selected === data.id && `text-white/90`
                    )}
                  >
                    Learn more
                  </Button>
                </CardFooter>
              </Card>
            </ToggleGroupItem>
          );
        })}
      </ToggleGroup>
    </div>
  );
};

type WebHostingFeature = {
  id: string;
  title: string;
  description: string;
  icon: IconType;
};

const webHostingFeatures: WebHostingFeature[] = [
  {
    id: "1",
    title: "E-commerce Features",
    icon: FaShoppingCart,
    description:
      "Support for online transactions, shopping carts, and secure payment gateways if you plan to run an online store.",
  },
  {
    id: "2",
    title: "Disk Space",
    icon: FaHardDrive,
    description:
      "The amount of storage space provided for your website files, emails, databases, etc.",
  },
  {
    id: "3",
    title: "Server Location",
    icon: FaServer,
    description:
      "The physical location of the server hosting your website, which can affect page load times and SEO.",
  },
  {
    id: "4",
    title: "One-Click Installers",
    icon: BsFillMouse3Fill,
    description:
      "Tools like Softaculous or Fantastico that simplify the installation of popular web applications like WordPress, Joomla, or Drupal.",
  },
  {
    id: "5",
    title: "Script Support",
    icon: MdDescription,
    description:
      "Support for programming languages and scripts such as PHP, Python, Perl, and Ruby on Rails.",
  },
  {
    id: "6",
    title: "Domain Hosting",
    icon: SiTorbrowser,
    description:
      "The ability to host one or more domain names on the same hosting account.",
  },
] as const;
