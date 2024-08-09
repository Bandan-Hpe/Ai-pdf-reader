"use client";

import { CircleArrowDown, DivideCircle, RocketIcon } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
function FileUploader() {
  const onDropZone = useCallback((acceptedFiles: File[]) => {}, []);
  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } =
    useDropzone({
      onDrop: onDropZone,
    });
  return (
    <div className="flex flex-col gap-4 items-center w-6/12 mx-auto">
      <div
        {...getRootProps()}
        className={`p-10 border-2 border-dashed border-indigo-600 text-indigo-600 rounded-lg h-96 flex items-center justify-center w-full ${
          isFocused || isDragAccept ? "bg-indigo-300" : "bg-indigo-100"
        }`}
      >
        <input {...getInputProps()} />
        <div className="text-center flex flex-col items-center justify-center">
          {isDragActive ? (
            <>
              <RocketIcon className="h-20 w-20 animate-ping" />
              <p>Drop the files here ...</p>
            </>
          ) : (
            <>
              <CircleArrowDown className="h-20 w-20 animate-bounce" />
              <p>
                Drag &apos;n&apos; drop some files here, or click to select
                files
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FileUploader;
