"use client";
import Resizer from "react-image-file-resizer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import React, { FormEvent, useEffect, useState } from "react";

export const ExportFile = () => {
  const {
    format,
    quality,
    size,
    handleExport,
    setFormat,
    setQuality,
    setSize,
  } = useImageConverter("/assets/player.jpeg");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleExport();
  };
  return (
    <div
      className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 | mb-6 relative overflow-clip overflow-y-auto"
      // @ts-ignore
      style={YELLOW_THEME}
    >
      <div className="relative h-fit rounded-lg overflow-clip bg-gradient-to-r from-black/80 to-gray-500">
        <Image
          src="/assets/player.jpeg"
          alt="download-image"
          width={1000}
          height={1000}
          className="object-cover h-1/2 md:h-full"
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="bg-black/90 rounded-lg px-4 py-6">
          <h1 className="font-bold text-lg text-white">Export file</h1>
          <Separator className="my-2 h-0.5" />
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <p className="text-base font-medium text-white">Format</p>
              <RadioGroup
                defaultValue="PNG"
                value={format}
                className="gap-4"
                onValueChange={(e) => {
                  setFormat(e);
                }}
              >
                {FORMAT.map((option) => {
                  return (
                    <div
                      className="flex items-center justify-between"
                      key={option}
                    >
                      <Label htmlFor={option}>
                        <Badge className="rounded">{option}</Badge>
                      </Label>
                      <RadioGroupItem value={option} id={option} />
                    </div>
                  );
                })}
              </RadioGroup>
            </div>
            <Separator className="h-0.5" />
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="text-base font-medium text-white">
                  Photo Quality
                </p>
                <Badge className="rounded w-22">{quality}%</Badge>
              </div>
              <Slider
                min={20}
                max={100}
                step={10}
                value={[quality]}
                onValueChange={(e) => setQuality(e[0])}
              />
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="text-base font-medium text-white">Size</p>
                <Select
                  onValueChange={(e) => setSize(Number(e))}
                  value={size.toString()}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="1">1x</SelectItem>
                      <SelectItem value="2">2x</SelectItem>
                      <SelectItem value="3">3x</SelectItem>
                      <SelectItem value="4">4x</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button>Export file</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

const useImageConverter = (imagePath: string) => {
  const [file, setFile] = useState<File | null>(null);
  const [format, setFormat] = useState("PNG");
  const [quality, setQuality] = useState(100);
  const [size, setSize] = useState(1);

  useEffect(() => {
    const getFile = async (filePath: string) => {
      const response = await fetch(filePath);
      const blob = await response.blob();
      const file = new File([blob], "filename", { type: blob.type });
      setFile(file);
    };
    getFile(imagePath);
  }, [imagePath]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.files && setFile(event.target.files[0]);
  };

  const handleExport = () => {
    if (file) {
      Resizer.imageFileResizer(
        file,
        1000 * size, // max width
        1000 * size, // max height
        format, // compress format
        quality, // quality
        0, // rotation
        (uri) => {
          // Convert base64 to blob
          const byteCharacters = atob((uri as string).split(",")[1]);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], {
            type: "image/" + format.toLowerCase(),
          });

          // Create a link element
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "image." + format.toLowerCase();

          // Append link to the body
          document.body.appendChild(link);

          // Programmatically click the link to trigger the download
          link.click();

          // Remove the link when done
          document.body.removeChild(link);
        },
        "base64" // output type
      );
    }
  };

  return {
    file,
    format,
    quality,
    size,
    handleImageUpload,
    handleExport,
    setFormat,
    setQuality,
    setSize,
  };
};

const FORMAT = ["JPG", "PNG", "WEBP"];
const YELLOW_THEME = {
  "--background": "0 0% 100%",
  "--foreground": "20 14.3% 4.1%",
  "--card": "0 0% 100%",
  "--card-foreground": "20 14.3% 4.1%",
  "--popover": "0 0% 100%",
  "--popover-foreground": "20 14.3% 4.1%",
  "--primary": "47.9 95.8% 53.1%",
  "--primary-foreground": "26 83.3% 14.1%",
  "--secondary": "60 4.8% 95.9%",
  "--secondary-foreground": "24 9.8% 10%",
  "--muted": "60 4.8% 95.9%",
  "--muted-foreground": "25 5.3% 44.7%",
  "--accent": "60 4.8% 95.9%",
  "--accent-foreground": "24 9.8% 10%",
  "--destructive": "0 84.2% 60.2%",
  "--destructive-foreground": "60 9.1% 97.8%",
  "--border": "20 5.9% 90%",
  "--input": "20 5.9% 90%",
  "--ring": "20 14.3% 4.1%",
  "--radius": "0.5rem",
};
