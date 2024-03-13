"use client";
import { NAVIGATION } from "@/app/api/challenges/Dashboard/data";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { LayoutDashboardIcon } from "lucide-react";
import { BiBell, BiLogOut } from "react-icons/bi";
import { BsDatabaseDown } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import {
  FaArrowDown,
  FaArrowUp,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { FcBiotech } from "react-icons/fc";
import { MdUpgrade } from "react-icons/md";

export const Dashboard = () => {
  return (
    <div className="flex-1 flex gap-8  | mb-6 | text-white   ">
      <aside className="bg-neutral-800 w-80 rounded-2xl p-4 flex flex-col gap-10">
        <div className="flex items-center gap-4">
          <FcBiotech className="size-10" />
          <h1 className="text-3xl font-bold">Initech</h1>
        </div>
        <NavigationMenu orientation="vertical" className="flex-1">
          <NavigationMenuList className="flex flex-col gap-2">
            {NAVIGATION.map((nav) => {
              const Icon = nav.icon;
              const active = nav.id === "dashboard";
              return (
                <NavigationMenuItem key={nav.id}>
                  <Button
                    className={cn(
                      "flex justify-start gap-2 w-full hover:bg-neutral-600/80 hover:text-white",
                      active && "bg-[#F600D0]"
                    )}
                    variant="ghost"
                  >
                    {Icon && <Icon />} {nav.label}
                  </Button>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <Button
          className={cn(
            "mt-auto flex justify-start gap-2  hover:bg-neutral-600/80 hover:text-white"
          )}
          variant="ghost"
        >
          <BiLogOut size={16} /> Logout
        </Button>
      </aside>
      <main className="flex flex-col gap-8 grid-cols-auto flex-1">
        <header className="flex items-center justify-between p-4 bg-neutral-800 rounded-2xl">
          <h2 className="text-xl text-semibold">Dashboard</h2>
          <div className="flex items-center gap-2 justify-center">
            <Button className="rounded-full bg-neutral-600/80 p-1 size-10">
              <BiBell className="size-6" />
            </Button>
            <Avatar>
              <AvatarImage src="/assets/avatar.jpeg" alt="user" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <section className="bg-neutral-800 col-span-9 rounded-2xl p-4 flex flex-col gap-6">
          <h1 className="text-3xl font-medium">Welcome Jason</h1>
          <div>
            <Tabs defaultValue="overview">
              <TabsList className="bg-transparent gap-4 text-white">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-neutral-500/40 data-[state=active]:text-white"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="partner_network"
                  className="data-[state=active]:bg-neutral-500/40 data-[state=active]:text-white"
                >
                  Partner Network
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <div className="flex items-center gap-4 ">
                  <Card className="bg-neutral-700 border-none text-white flex-1">
                    <CardContent className="p-3 flex flex-col gap-4">
                      <div className="bg-neutral-500/80 py-4 rounded-xl flex flex-col gap-1 items-center justify-center">
                        <div className="flex gap-2 items-center">
                          <p className="text-2xl">763</p>
                          <div className="p-1 rounded-full bg-green-500">
                            <FaArrowUp />
                          </div>
                        </div>
                        <Badge className="bg-green-500">+12%</Badge>
                      </div>
                      <div className="bg-neutral-500/80 py-4 rounded-xl flex  gap-2 items-center p-4">
                        <Badge className="p-2 bg-[#F600D0]">
                          <LayoutDashboardIcon />
                        </Badge>
                        <div className="flex flex-col gap-2">
                          <p className="text-sm font-semibold">
                            Referral traffic
                          </p>
                          <p className="text-xs text-white opacity-60">
                            Last updated on 23rd Feb
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-neutral-700 border-none text-white flex-1">
                    <CardContent className="p-3 flex flex-col gap-4">
                      <div className="bg-neutral-500/80 py-4 rounded-xl flex flex-col gap-1 items-center justify-center">
                        <div className="flex gap-2 items-center">
                          <p className="text-2xl">320</p>
                          <div className="p-1 rounded-full bg-orange-500">
                            <FaArrowDown />
                          </div>
                        </div>
                        <Badge className="bg-orange-500">-4%</Badge>
                      </div>
                      <div className="bg-neutral-500/80 py-4 rounded-xl flex  gap-2 items-center p-4">
                        <Badge className="p-2 bg-[#F600D0]">
                          <CiCircleMore />
                        </Badge>
                        <div className="flex flex-col gap-2">
                          <p className="text-sm font-semibold">Pending</p>
                          <p className="text-xs text-white opacity-60">
                            Last updated on 23rd Feb
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="partner_network">
                <div className="flex items-center gap-4 ">
                  <Card className="bg-neutral-700 border-none text-white flex-1">
                    <CardContent className="p-3 flex flex-col gap-4">
                      <div className="bg-neutral-500/80 py-4 rounded-xl flex flex-col gap-1 items-center justify-center">
                        <div className="flex gap-2 items-center">
                          <p className="text-2xl">909</p>
                          <div className="p-1 rounded-full bg-green-500">
                            <FaArrowUp />
                          </div>
                        </div>
                        <Badge className="bg-green-500">+7%</Badge>
                      </div>
                      <div className="bg-neutral-500/80 py-4 rounded-xl flex  gap-2 items-center p-4">
                        <Badge className="p-2 bg-[#F600D0]">
                          <BsDatabaseDown />
                        </Badge>
                        <div className="flex flex-col gap-2">
                          <p className="text-sm font-semibold">
                            Data base down traffic
                          </p>
                          <p className="text-xs text-white opacity-60">
                            Last updated on 23rd Feb
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-neutral-700 border-none text-white flex-1">
                    <CardContent className="p-3 flex flex-col gap-4">
                      <div className="bg-neutral-500/80 py-4 rounded-xl flex flex-col gap-1 items-center justify-center">
                        <div className="flex gap-2 items-center">
                          <p className="text-2xl">674</p>
                          <div className="p-1 rounded-full bg-orange-500">
                            <FaArrowDown />
                          </div>
                        </div>
                        <Badge className="bg-orange-500">-9%</Badge>
                      </div>
                      <div className="bg-neutral-500/80 py-4 rounded-xl flex  gap-2 items-center p-4">
                        <Badge className="p-2 bg-[#F600D0]">
                          <FaArrowUpRightFromSquare />
                        </Badge>
                        <div className="flex flex-col gap-2">
                          <p className="text-sm font-semibold">Upgrading</p>
                          <p className="text-xs text-white opacity-60">
                            Last updated on 23rd Feb
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  );
};

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";
