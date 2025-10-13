"use client";

import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";

import Loader from "./Loader";

import { CustomImageProps } from "@/types/components";

const CustomImage = ({ alt, width, height, ...props }: CustomImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader />}
      <div>
        <Image
          {...props}
          height={height}
          width={width}
          alt={alt}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </>
  );
};

export default CustomImage;
