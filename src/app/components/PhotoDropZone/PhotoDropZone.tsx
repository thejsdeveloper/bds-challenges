"use client";
import { useUploadFile } from "@/app/hooks/useUploadFile/useUploadFile";
import { cn } from "@/app/utils/cn";
import { useEdgeStore } from "@/lib/edgestore";
import { formatFileSize } from "@edgestore/react/utils";
import Image from "next/image";
import React from "react";
import { DropEvent } from "react-aria";
import {
  Button,
  ButtonProps,
  DialogTrigger,
  DropZone,
  FileDropItem,
  FileTrigger,
  ProgressBar,
  ProgressBarProps,
} from "react-aria-components";
import { FaCheck } from "react-icons/fa6";
import { IoClose, IoImages, IoPause } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { ConfirmModal } from "../ConfirmModal/ConfirmModal";

export const PhotoDropZone = () => {
  const [file, setFile] = React.useState<File | null>(null);
  const { edgestore } = useEdgeStore();

  const {
    loading: uploadInProgress,
    uploadFile,
    uploadProgress,
    data: uploadedFile,
  } = useUploadFile();

  const handleDeletePhoto = async () => {
    if (uploadedFile) {
      try {
        await edgestore.publicFiles.delete({
          url: uploadedFile?.url,
        });
        setFile(null);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getFIleUrl = (file: File) => {
    return URL.createObjectURL(file);
  };

  const handleDrop = async (e: DropEvent) => {
    let item = e.items.find(
      (item) => item.kind === "file" && item.type.includes("image")
    ) as FileDropItem;
    if (item) {
      const file = await item.getFile();
      setFile(file);
      uploadFile(file);
    }
  };

  const handleFileSelect = async (e: FileList | null) => {
    if (!e) return;
    let files = Array.from(e);
    const file = files[0];
    setFile(file);
    uploadFile(file);
  };

  return (
    <div className="bg-white text-black text-base p-4 rounded-lg w-full max-w-lg grid gap-4">
      <h2 className="text-2xl text-black font-semibold">Upload Photo</h2>
      <DropZone
        aria-label="Photo Upload area"
        className="
          flex flex-col justify-center items-center
          border-2 border-dashed border-gray-400
          rounded-lg p-6 drop-target:border-solid drop-target:border-violet-500 drop-target:bg-violet-100
          focus:border-solid focus:border-violet-500 focus:bg-violet-100
          transition-all
        "
        onDrop={handleDrop}
      >
        <IoImages className="fill-violet-700 size-20 my-6" />
        <FileTrigger aria-label="File upload" onSelect={handleFileSelect}>
          <div className="flex justify-center items-center gap-1">
            <p>Drop your image here or</p>
            {"  "}
            <Button
              aria-label="Click here to upload your image"
              type="button"
              className="text-violet-700 outline-none px-1 rounded focus:ring-1 hover:ring-1 hover:bg-violet-100 ring-violet-700 transition-all"
              isDisabled={!!file}
            >
              browse
            </Button>
          </div>
          <p className="text-xs text-gray-500">Png, JPG, JPEG</p>
        </FileTrigger>
      </DropZone>

      {file && (
        <div className="flex gap-2 border border-gray-400 rounded-lg p-2 w-full items-center">
          <Image
            src={getFIleUrl(file)}
            alt={file.name}
            className="w-24 rounded-lg object-cover aspect-square border border-violet-300 shadow-sm shadow-violet-100"
            width={200}
            height={200}
          />
          <div className="flex flex-col gap-2 justify-center flex-1">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-base text-black">{file.name}</p>
                <p className="text-sm text-gray-500">
                  {formatFileSize(file.size)}
                </p>
              </div>
              <div className="flex gap-2">
                {uploadInProgress && (
                  <>
                    <ActionButton aria-label="Pause" className="bg-gray-200">
                      <IoPause className="fill-gray-500" />
                    </ActionButton>
                    <ActionButton aria-label="Cancel" className="bg-red-200">
                      <IoClose className="fill-red-500" />
                    </ActionButton>
                  </>
                )}
                {!uploadInProgress && (
                  <>
                    <span
                      aria-label="Success"
                      className="bg-green-200 rounded-full size-6 flex justify-center items-center"
                    >
                      <FaCheck className="fill-green-500" />
                    </span>
                    <DialogTrigger>
                      <ActionButton aria-label="Delete" className="bg-red-200">
                        <MdDelete className="fill-red-500" />
                      </ActionButton>
                      <ConfirmModal
                        message="Are you sure you want to delete this picture?"
                        onConfirm={handleDeletePhoto}
                      />
                    </DialogTrigger>
                  </>
                )}
              </div>
            </div>
            <FileProgressBar
              maxValue={100}
              minValue={0}
              value={uploadProgress}
              aria-label={`Uploading ${uploadProgress}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const ActionButton = ({ children, className, ...props }: {} & ButtonProps) => {
  return (
    <Button
      {...props}
      className={cn(
        "outline-none rounded-full p-1 flex justify-center items-center size-6",
        className
      )}
    >
      {children}
    </Button>
  );
};

const FileProgressBar = (props: ProgressBarProps) => {
  return (
    <div className="flex items-center gap-2 justify-center flex-1">
      <ProgressBar
        {...props}
        className="flex flex-row items-center gap-3 text-white flex-1"
      >
        {({ percentage, valueText }) => (
          <>
            <div className="h-3 w-full bg-gray-300 relative rounded">
              <div
                className="absolute h-3 top-[50%] transform translate-y-[-50%] rounded bg-violet-600"
                style={{ width: percentage + "%" }}
              />
            </div>
            <p className="text-sm text-gray-500 font-medium">{valueText}</p>
          </>
        )}
      </ProgressBar>
    </div>
  );
};
