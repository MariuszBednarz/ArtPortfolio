"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { HomeProps, HomeImage } from "@/types/components";

const ImageCarousel = ({ images }: HomeProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full min-h-page overflow-hidden">
      {images.map(({ id, url }: HomeImage, index: number) => (
        <div
          key={id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out
            ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={url}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
