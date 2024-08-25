"use client";

import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";

import Loader from "./Loader";

import { CustomImageProps } from "@/types/components";

const CustomImage = ({
  alt,
  width,
  height,
  ...props
}: CustomImageProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader />}
      <div
        className={clsx(
          { "opacity-1": !isLoading },
          { "opacity-0": isLoading }
        )}
      >
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
