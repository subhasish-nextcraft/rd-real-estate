'use client';

import {
  Dispatch, SetStateAction, useRef, useState,
} from 'react';
import { useDropzone } from 'react-dropzone';
import Button from 'ui/Button';

type DragViewProps = {
  isDragActive: boolean;
  file: File | null;
  uploadAnother: () => void;
};

function DragView({ file, isDragActive, uploadAnother }: DragViewProps) {
  return (
    <div className="flex items-center justify-center cursor-pointer px-4 py-3">
      <div
        className={`flex items-center ${
          file ? 'min-h-[30rem]' : 'min-h-[20rem]'
        } w-full`}
      >
        {file ? (
          <div className="w-full">
            <p className="text-center font-medium mb-3">You have selected</p>
            <iframe
              src={URL.createObjectURL(file)}
              title="File Viewer"
              className="w-full h-[30rem] ring rounded-xl"
            />
            <p className="text-center font-medium mt-3">
              select Another?
              {' '}
              <Button onClick={uploadAnother}>
                select
              </Button>
            </p>
          </div>
        ) : (
          <div className="w-full">
            {isDragActive ? (
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-12 h-12 mx-auto animate-bounce text-pry-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                />
              </svg>
            ) : (
              <svg
                className="w-12 h-12 mx-auto text-pry-700"
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                />
              </svg>
            )}
            {isDragActive ? (
              <p className="font-medium text-center text-pry-700 mt-4">
                Yes Drop here
              </p>
            ) : (
              <p className="font-medium text-center text-pry-700 mt-4 max-w-sm mx-auto">
                Please drag and drop your resume here or click to select your
                resume
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

type Props = {
  uploadedUrl: null | string;
  setUploadedUrl: Dispatch<SetStateAction<null | string>>;
};

function Dropzone({ uploadedUrl, setUploadedUrl }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  console.log('file', file);
  console.log('uploadedUrl', uploadedUrl);

  const onDrop = async (files: File[]) => {
    setFile(files[0]);
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'unsigned-preset');
    const uploadedStrm = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    const uploadedResponse = await uploadedStrm.json();
    console.log('uploadedResponse', uploadedResponse);

    setUploadedUrl(uploadedResponse?.url);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
    },
    maxFiles: 1,
    multiple: false,
    noClick: !!file,
  });

  const uploadAnother = () => {
    if (fileInputRef.current) {
      fileInputRef.current?.click();
    }
  };

  return (
    <div className="">
      <div
        {...getRootProps()}
        className="w-full h-full border border-pry-500 border-dashed rounded-2xl bg-white max-w-xl xl:max-w-full"
      >
        <input {...getInputProps()} ref={fileInputRef} />
        <DragView
          uploadAnother={uploadAnother}
          isDragActive={isDragActive}
          file={file}
        />
      </div>
    </div>
  );
}

export default Dropzone;
