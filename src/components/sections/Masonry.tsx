"use client";
import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { CustomImage, NavLink } from "@/components/reusable";

import { FilterArt } from "@/types/components";
import { GlassIcon } from "@/components/reusable/icons";
import NoResult from "../reusable/NoResult";

const MasonryComponent = ({
  data,
}: {
  data?: FilterArt[];
}): JSX.Element | null => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      {data?.length === 0 && <NoResult />}
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 480: 2, 768: 3 }}
        className="py-0"
      >
        <Masonry gutter="16px">
          {data?.map((art: FilterArt) => (
            <NavLink key={art.id} href={`/art/${art.id}`}>
              <GlassIcon />
              <CustomImage
                src={art.artImage?.url}
                sizes="100vw"
                alt=""
                className="w-full"
                height={art.artImage?.height}
                width={art.artImage?.width}
                quality={10}
              />
            </NavLink>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MasonryComponent;
