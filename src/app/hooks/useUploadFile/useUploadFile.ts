import { useEdgeStore } from "@/lib/edgestore";
import { EdgeStoreApiClientError } from "@edgestore/react/shared";
import { formatFileSize } from "@edgestore/react/utils";
import { useState } from "react";

type UploadResponse = {
  url: string;
  thumbnailUrl: string | null;
  size: number;
  uploadedAt: Date;
  metadata: Record<string, never>;
  path: Record<string, never>;
  pathOrder: string[];
};
type UseUploadFileHook = {
  loading: boolean;
  uploadProgress: number;
  uploadFile: (file: File) => Promise<void>;
  data: UploadResponse | null;
};

export const useUploadFile = (): UseUploadFileHook => {
  const [uploadInProgress, setUploadInProgress] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number>(20);
  const [uploadResponse, setUploadResponse] = useState<UploadResponse | null>(
    null
  );
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    try {
      if (file) {
        setUploadInProgress(true);
        const res = await edgestore.publicFiles.upload({
          file,
          onProgressChange: (progress) => {
            console.log({ progress });
            setUploadProgress(progress);
          },
          options: {
            temporary: true,
          },
        });
        setUploadResponse(res);
        setUploadInProgress(false);
      }
    } catch (error) {
      setUploadInProgress(false);
      if (error instanceof EdgeStoreApiClientError) {
        if (error.data.code === "FILE_TOO_LARGE") {
          alert(
            `File too large. Max size is ${formatFileSize(
              error.data.details.maxFileSize
            )}`
          );
        }
        if (error.data.code === "MIME_TYPE_NOT_ALLOWED") {
          alert(
            `File type not allowed. Allowed types are ${error.data.details.allowedMimeTypes.join(
              ", "
            )}`
          );
        }
        if (error.data.code === "UPLOAD_NOT_ALLOWED") {
          alert("You don't have permission to upload files here.");
        }
      }
    }
  };

  return {
    loading: uploadInProgress,
    uploadProgress,
    uploadFile: handleUpload,
    data: uploadResponse,
  };
};
