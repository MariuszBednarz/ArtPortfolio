"use client";

import { useState } from "react";
import Image from "next/image";

import { CustomImageProps } from "@/types/components";

const CustomImage = ({ alt, ...props }: CustomImageProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <div>loading</div>}
      <Image {...props} alt={alt} onLoad={() => setIsLoading(false)} />
    </>
  );
};

export default CustomImage;
