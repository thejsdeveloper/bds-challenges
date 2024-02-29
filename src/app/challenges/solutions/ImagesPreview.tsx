"use client";
import { IMAGES } from "@/app/api/challenges/ImagesPreview/data";
import { Gallery } from "@/app/api/challenges/ImagesPreview/types";
import { cn } from "@/app/utils/cn";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
  ModalOverlayProps,
  Separator,
} from "react-aria-components";
import { FaList } from "react-icons/fa6";
import { LuGalleryThumbnails, LuLayoutGrid } from "react-icons/lu";

export const ImagesPreview = () => {
  const [layout, setLayout] = useState<"grid" | "list" | "carousel">("grid");

  return (
    <div className="flex-1 max-h-[55rem] bg-black mb-6 rounded-lg overflow-clip flex flex-col">
      <header
        aria-label="Gallery Header"
        className="flex justify-between items-center text-white py-4 px-10 bg-stone-800"
      >
        <h2 className="text-lg font-semibold">Images</h2>
        <div className="flex gap-2">
          <Button
            aria-label="View in Grid Layout"
            onPress={() => setLayout("grid")}
            className={cn(
              "outline-none  focus:bg-white focus:text-black rounded p-1 transition-all",
              layout === "grid" && "bg-white text-black"
            )}
          >
            <LuLayoutGrid />
          </Button>
          <Separator orientation="vertical" className="bg-gray-400 w-[2px]" />
          <Button
            aria-label="View in List Layout"
            onPress={() => setLayout("list")}
            className={cn(
              "outline-none  focus:bg-white focus:text-black rounded p-1 transition-all",
              layout === "list" && "bg-white text-black"
            )}
          >
            <FaList />
          </Button>
          <Separator orientation="vertical" className="bg-gray-400 w-[2px]" />
          <Button
            aria-label="View in Carousel layout"
            onPress={() => setLayout("carousel")}
            className={cn(
              "outline-none  focus:bg-white focus:text-black rounded p-1 transition-all",
              layout === "carousel" && "bg-white text-black"
            )}
          >
            <LuGalleryThumbnails />
          </Button>
        </div>
      </header>
      {layout === "grid" && <GridLayout images={IMAGES} />}
      {layout === "list" && <ListLayout images={IMAGES} />}
      {layout === "carousel" && <CarouselLayout images={IMAGES} />}
    </div>
  );
};

const GridLayout = ({
  images,
  className,
}: {
  images: Gallery[];
  className?: string;
}) => {
  const [selectedImage, setSelectedImage] = useState<Gallery | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.floor(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      ref={gridRef}
      className={cn(
        "h-[55rem] items-start overflow-y-auto w-full max-w-8xl",
        className
      )}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  gap-10 py-20 px-10">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => {
            return (
              <DialogTrigger
                key={`grid-1-${idx}`}
                onOpenChange={(isOpen) => {
                  !isOpen && setSelectedImage(null);
                }}
              >
                <Button className="outline-none">
                  <motion.div
                    layoutId={el.title}
                    onClick={() => setSelectedImage(el)}
                    style={{
                      y: translateFirst,
                    }}
                    whileHover={{
                      scale: 1.025,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
                    <Image
                      src={el.src}
                      alt={el.alt}
                      width="600"
                      height="400"
                      className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                    />
                  </motion.div>
                </Button>
                <ImageModal image={selectedImage} />
              </DialogTrigger>
            );
          })}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => {
            return (
              <DialogTrigger
                key={`grid-1-${idx}`}
                onOpenChange={(isOpen) => {
                  !isOpen && setSelectedImage(null);
                }}
              >
                <Button className="outline-none">
                  <motion.div
                    layoutId={el.title}
                    onClick={() => setSelectedImage(el)}
                    style={{
                      y: translateSecond,
                    }}
                    whileHover={{
                      scale: 1.025,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
                    <Image
                      src={el.src}
                      alt={el.alt}
                      width="600"
                      height="400"
                      className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                    />
                  </motion.div>
                </Button>
                <ImageModal image={selectedImage} />
              </DialogTrigger>
            );
          })}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => {
            return (
              <DialogTrigger
                key={`grid-1-${idx}`}
                onOpenChange={(isOpen) => {
                  !isOpen && setSelectedImage(null);
                }}
              >
                <Button className="outline-none">
                  <motion.div
                    layoutId={el.title}
                    onClick={() => setSelectedImage(el)}
                    style={{
                      y: translateThird,
                    }}
                    whileHover={{
                      scale: 1.025,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
                    <Image
                      src={el.src}
                      alt={el.alt}
                      width="600"
                      height="400"
                      className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                    />
                  </motion.div>
                </Button>
                <ImageModal image={selectedImage} />
              </DialogTrigger>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ListLayout = ({
  images,
  className,
}: {
  images: Gallery[];
  className?: string;
}) => {
  const [selectedImage, setSelectedImage] = useState<Gallery | null>(null);

  return (
    <div
      className={cn(
        "h-[55rem] items-start overflow-y-auto w-full max-w-8xl",
        className
      )}
    >
      <div className="w-full grid items-start  py-10 ">
        {images.map((el, idx) => {
          return (
            <div
              key={`grid-${idx}`}
              className={cn(
                "flex gap-10 items-center py-5 px-10",
                idx % 2 === 0 ? "bg-black" : "bg-stone-800 "
              )}
            >
              <DialogTrigger
                onOpenChange={(isOpen) => {
                  !isOpen && setSelectedImage(null);
                }}
              >
                <Button
                  className="outline-none"
                  onPress={() => setSelectedImage(el)}
                >
                  <motion.div layoutId={el.title} key={`div-${idx}`}>
                    <Image
                      src={el.src}
                      alt={el.alt}
                      width="200"
                      height="100"
                      className="h-28 object-cover  rounded-lg"
                    />
                  </motion.div>
                </Button>
                <ImageModal image={selectedImage} />
              </DialogTrigger>
              <h3 className="text-base font-medium text-white flex-1">
                {el.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CarouselLayout = ({
  images,
  className,
}: {
  images: Gallery[];
  className?: string;
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectedImage = images[selectedImageIndex];

  return (
    <div
      className={cn(
        "h-[55rem] flex flex-col overflow-y-auto w-full max-w-8xl relative",
        className
      )}
    >
      <div className="w-full flex-1 flex p-10">
        <AnimatePresence mode="wait">
          <motion.div
            className="flex-1 relative"
            key={selectedImage ? selectedImage.title : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              y: -10,
              opacity: 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              className=" object-cover rounded-lg transition-all"
              sizes="100%"
              fill
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="overflow-x-auto flex shrink-0 gap-5 p-5 h-[10rem]">
        {images.map((el, idx) => {
          return (
            <Button
              key={`image-${idx}`}
              className={cn(
                "outline-none focus:ring-4 ring-offset-1 ring-emerald-400 rounded-lg aspect-video transition-all",
                selectedImageIndex === idx && "ring-4"
              )}
              onPress={() => setSelectedImageIndex(idx)}
            >
              <motion.div layoutId={el.title} key={`div-${idx}`}>
                <Image
                  src={el.src}
                  alt={el.alt}
                  width="200"
                  height="100"
                  className="object-cover rounded-lg aspect-video"
                  priority
                />
              </motion.div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

const ImageModal = ({
  image,
}: { image: Gallery | null } & ModalOverlayProps) => {
  if (!image) {
    return null;
  }

  return (
    <ModalOverlay
      className={`
          fixed inset-0 z-10 overflow-y-auto bg-black/25 flex min-h-full items-center justify-center backdrop-blur
        `}
      isDismissable
      isKeyboardDismissDisabled
    >
      <motion.div
        layoutId={image.title}
        className={`
            w-full max-w-4xl h-[40rem] overflow-hidden rounded-2xl  align-middle shadow-xl relative
          `}
      >
        <Modal>
          <Image src={image.src} alt={image.alt} fill />
        </Modal>
      </motion.div>
    </ModalOverlay>
  );
};
