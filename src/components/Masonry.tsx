import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import clsx from "clsx";
import Image from "next/image";

import NavLink from "./layout/Nav/NavLink";
import ContentWrapper from "@/src/components/ContentWrapper";
import { GlassIcon } from "./icons";

type artObj = {
  id: string;
  artImage: {
    url: string;
    width: number;
    height: number;
  };
};

const MasonryComponent = ({
  loading,
  data,
  artPage,
}: {
  loading: boolean;
  data?: artObj[];
  artPage?: boolean;
}) => {
  return (
    <ContentWrapper>
      {loading ? (
        <h1>Loading</h1>
      ) : data?.length === 0 ? (
        "no results"
      ) : (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 480: 2, 768: 3 }}
          className={clsx("py-8", { "py-0": artPage })}
        >
          <Masonry gutter="32px">
            {data?.map((art) => (
              <div key={art.id}>
                {artPage ? (
                  // @ts-ignore
                  <NavLink href={`/art/${art?.id}`}>
                    <GlassIcon />
                    <Image
                      src={art.artImage.url}
                      sizes="100vw"
                      alt=""
                      className="w-full"
                      height={art.artImage.height}
                      width={art.artImage.width}
                    />
                  </NavLink>
                ) : (
                  <Image
                    src={art.artImage.url}
                    alt=""
                    className="w-full"
                    height={art.artImage.height}
                    width={art.artImage.width}
                  />
                )}
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </ContentWrapper>
  );
};

export default MasonryComponent;
