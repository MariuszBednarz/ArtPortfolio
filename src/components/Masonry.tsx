import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import clsx from "clsx";
import Image from "next/image";

import { ContentWrapper, Loading, NoResult } from "@/src/components";

import NavLink from "./layout/Nav/NavLink";
import { GlassIcon } from "./icons";

import { artObj } from "../hooks/useDataLogic";

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
        <Loading />
      ) : data?.length === 0 ? (
        <NoResult />
      ) : (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 480: 2, 768: 3 }}
          className={clsx({ "py-0": artPage }, { "py-8": !artPage })}
        >
          <Masonry gutter="16px">
            {data?.map(
              (art) =>
                art && (
                  <div key={art.id}>
                    {artPage ? (
                      // @ts-ignore
                      <NavLink href={`/art/${art?.id}`}>
                        <GlassIcon />
                        <Image
                          src={art.artImage?.url}
                          sizes="100vw"
                          alt=""
                          className="w-full"
                          height={art.artImage?.height}
                          width={art.artImage?.width}
                        />
                      </NavLink>
                    ) : (
                      <Image
                        src={art.artImage?.url}
                        alt=""
                        className="w-full"
                        height={art.artImage?.height}
                        width={art.artImage?.width}
                      />
                    )}
                  </div>
                )
            )}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </ContentWrapper>
  );
};

export default MasonryComponent;
