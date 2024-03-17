"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import React from "react";

const emojiList = [
  {
    name: "Terrible",
    emoji: "😵",
  },
  {
    name: "Bad",
    emoji: "🙁",
  },
  {
    name: "Okay",
    emoji: "😊",
  },
  {
    name: "Good",
    emoji: "😆",
  },
  {
    name: "Great",
    emoji: "😎",
  },
] as const;

type Feedback = (typeof emojiList)[number]["name"];

export const RateUs = () => {
  const [feedback, setFeedback] = React.useState<Feedback>("Okay");
  const { toast } = useToast();

  return (
    <div className="flex-1 grid place-items-center | mb-6 ">
      <Card>
        <CardHeader className="flex flex-col items-center justify-center">
          <CardTitle>Rate Us!</CardTitle>
          <CardDescription>Tell us about your experience</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-between items-center gap-2">
            {emojiList.map((item) => {
              const selected = feedback === item.name;
              return (
                <button
                  key={item.name}
                  className="px-4 flex flex-col justify-start items-center"
                  onClick={() => {
                    setFeedback(item.name);
                    toast({
                      variant: "default",
                      title: "Thank you for your feedback",
                      description: `Your feedback is: ${item.emoji}`,
                    });
                  }}
                >
                  <Emoji emoji={item.emoji} selected={selected} />
                  {item.name}
                </button>
              );
            })}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            variant="ghost"
            className="text-red-400 hover:bg-red-500 hover:text-white"
            onClick={() => {
              toast({
                variant: "destructive",
                description: "You chose to skip the feedback",
              });
            }}
          >
            Skip
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

const Emoji = ({ selected, emoji }: { selected: boolean; emoji: string }) => {
  return (
    <span className={cn("text-3xl", selected ? "grayscale-0" : "grayscale")}>
      {emoji}
    </span>
  );
};
