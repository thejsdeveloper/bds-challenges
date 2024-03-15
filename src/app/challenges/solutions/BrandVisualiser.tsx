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
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";
import { CgClose } from "react-icons/cg";
import {
  SketchPicker,
  BlockPicker,
  ColorResult,
  ChromePicker,
  Color,
} from "react-color";

export const BrandVisualizer = () => {
  const [brandColor, setBrandColor] = React.useState<ColorResult>({
    hsl: { h: 167.8125, s: 0.5594541910331384, l: 0.4424625, a: 1 },
    hex: "#32b096",
    rgb: { r: 50, g: 176, b: 150, a: 1 },
  });

  return (
    <div className="flex-1 grid grid-flow-row md:grid-flow-col gap-6 | mb-6 rounded-xl |  bg-gradient-to-r from-sky-300 to-violet-500">
      <div className=" flex items-center justify-center md:justify-end">
        <SketchPicker
          color={brandColor.rgb}
          onChange={(color) => {
            setBrandColor(color);
          }}
        />
      </div>
      <div className="flex items-center justify-center md:justify-start">
        <Visualizer brandColor={brandColor.hex} />
      </div>
    </div>
  );
};

const Visualizer = ({ brandColor }: { brandColor: string }) => {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="px-6 py-4">
        <CardTitle>Brand Color</CardTitle>
      </CardHeader>
      <Separator className="mb-4  bg-black/40" />
      <CardContent className="p-0">
        <CardDescription className="px-8">
          Set up your brand color to customize
        </CardDescription>
        <div className="px-8 flex items-center justify-start gap-4 my-6">
          <div className={cn("relative size-12")}>
            <div
              className="absolute inset-0 rounded-full blur"
              style={{
                backgroundColor: brandColor,
              }}
            />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                backgroundColor: brandColor,
              }}
            />
          </div>
          <Input
            value={brandColor}
            className={cn(`bg-gray-200 flex-1 max-w-fit`)}
            style={{
              outlineColor: `${brandColor}`,
            }}
          />
        </div>
        <div className="flex-1 flex flex-col md:flex-row items-center  gap-4 bg-neutral-100 p-10">
          <BrandCard1 brandColor={brandColor} />
          <BrandCard2 brandColor={brandColor} />
        </div>
      </CardContent>
    </Card>
  );
};

const BrandCard1 = ({ brandColor }: { brandColor: string }) => {
  return (
    <Card className="flex-1 flex flex-col !min-h-80 w-full">
      <CardHeader className="p-4">
        <div className="flex flex-row items-center gap-2">
          <div className="size-4 rounded-full ring-1 ring-gray-200 bg-white" />
          <div className="w-1/3 h-3 bg-black rounded-sm" />
          <CgClose className="ml-auto size-3" />
        </div>
      </CardHeader>
      <Separator className="mb-4" />
      <CardContent className="!flex-1 ">
        <div className="flex flex-col justify-center rounded-md ring-1 ring-gray-200 ">
          <div className="p-2">
            <div className="w-2/3 h-3 bg-gray-300 rounded" />
          </div>
          <Separator />
          <div className="p-2 space-y-2">
            <div className="w-1/2 h-3 bg-black rounded-sm" />
            <Input
              style={{
                outlineColor: `${brandColor}`,
              }}
              className="p-0 h-6 rounded-sm !ring-0 !ring-offset-0 "
            />
          </div>
        </div>
      </CardContent>
      <Separator className="my-6" />
      <CardFooter className="mt-auto  !items-end">
        <Button
          className="bg-black w-full h-6 rounded-sm"
          style={{
            backgroundColor: brandColor,
          }}
        />
      </CardFooter>
    </Card>
  );
};

const BrandCard2 = ({ brandColor }: { brandColor: string }) => {
  return (
    <Card className="flex-1 flex flex-col !min-h-80 w-full">
      <CardHeader className="p-4">
        <div className="flex flex-row items-center gap-2">
          <div className="size-4 rounded-full ring-1 ring-gray-200 bg-white" />
          <div className="w-1/3 h-3 bg-black rounded-sm" />
          <CgClose className="ml-auto size-3" />
        </div>
      </CardHeader>
      <Separator className="mb-4" />
      <CardContent className="flex-1 gap-4  flex flex-col justify-center items-center">
        <div
          className="p-2 rounded-full ring-2 ring-gray-300 ring-offset-4 flex items-center justify-center"
          style={{
            backgroundColor: brandColor,
          }}
        >
          <Check size={20} className="stroke-white" />
        </div>
        <div className="h-2 w-10 bg-black rounded" />
        <div className="h-2 w-20 bg-gray-200 rounded" />
      </CardContent>
      <Separator className="my-6" />
      <CardFooter className="gap-4">
        <Button className="w-full h-6 rounded-sm bg-gray-300 hover:bg-gray-400" />
        <Button
          className={cn(`w-full h-6 rounded-sm`)}
          style={{
            backgroundColor: brandColor,
          }}
        />
      </CardFooter>
    </Card>
  );
};
