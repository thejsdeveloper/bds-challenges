import { PhotoDropZone } from "@/app/components/PhotoDropZone/PhotoDropZone";
import { EdgeStoreProvider, useEdgeStore } from "@/lib/edgestore";
import React from "react";

export const PhotoUpload = () => {
  return (
    <EdgeStoreProvider>
      <div className="flex-1 flex items-center justify-center | my-4 p-2 sm:p-20 |  bg-sky-100 | md:rounded-lg">
        <PhotoDropZone />
      </div>
    </EdgeStoreProvider>
  );
};
