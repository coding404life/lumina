/** biome-ignore-all assist/source/organizeImports: false */
"use client";

import {
  ImageKitProvider,
  Image as IKImage,
  upload,
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
} from "@imagekit/next";
import config from "@/lib/config";
import { useRef, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
    apiEndpoint,
  },
} = config;

const authenticator = async () => {
  try {
    const response = await fetch(`${apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`,
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;

    return { signature, expire, token };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

interface Props {
  onFileChange: (filePath: string) => void;
  defaultValue?: string;
}

const ImageUpload = ({ onFileChange, defaultValue }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<{ filePath: string } | null>(
    defaultValue ? { filePath: defaultValue } : null,
  );
  const [progress, setProgress] = useState(0);

  const handleUpload = async (selectedFile: File) => {
    setProgress(0);
    const abortController = new AbortController();

    try {
      const authParams = await authenticator();

      const uploadResponse = await upload({
        ...authParams,
        publicKey: publicKey as string,
        file: selectedFile,
        fileName: selectedFile.name,
        onProgress: (event: { loaded: number; total: number }) => {
          setProgress(Math.round((event.loaded / event.total) * 100));
        },
        abortSignal: abortController.signal,
      });

      if (uploadResponse.filePath) {
        toast.success("Image uploaded successfully", {
          position: "top-right",
        });
        setFile({ filePath: uploadResponse.filePath });
        onFileChange(uploadResponse.filePath);
      }
    } catch (error) {
      if (error instanceof ImageKitAbortError) {
        console.error("Upload aborted:", error.reason);
      } else if (error instanceof ImageKitInvalidRequestError) {
        console.error("Invalid request:", error.message);
      } else if (error instanceof ImageKitUploadNetworkError) {
        console.error("Network error:", error.message);
      } else if (error instanceof ImageKitServerError) {
        console.error("Server error:", error.message);
      } else {
        console.error("Upload error:", error);
      }
    }
  };

  return (
    <ImageKitProvider urlEndpoint={urlEndpoint}>
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={(e) => {
          const selectedFile = e.target.files?.[0];
          if (selectedFile) handleUpload(selectedFile);
        }}
      />

      <button
        type="button"
        className="upload-btn bg-dark-300 cursor-pointer p-2 rounded-xl"
        onClick={(e) => {
          e.preventDefault();
          fileInputRef.current?.click();
        }}
      >
        <Image
          src="/icons/upload.svg"
          alt="upload-icon"
          width={20}
          height={20}
          className="object-contain"
        />
        <p className="text-base text-light-100">Upload a File</p>
      </button>

      {progress > 0 && progress < 100 && (
        <div className="mt-2 h-1.5 w-full rounded-full bg-dark-300">
          <div
            className="h-1.5 rounded-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {file?.filePath && (
        <IKImage
          alt={file.filePath}
          src={file.filePath}
          width={500}
          height={300}
          className="mt-4 rounded-xl object-contain"
        />
      )}
    </ImageKitProvider>
  );
};

export default ImageUpload;
