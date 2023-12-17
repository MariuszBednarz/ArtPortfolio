import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import clsx from "clsx";

import NavLink from "./layout/Nav/NavLink";
import ContentWrapper from "@/src/components/ContentWrapper";

type artObj = {
  id: string;
  artImage: {
    url: string;
  };
};

const MasonryComponent = ({
  data,
  artPage,
}: {
  data?: artObj[];
  artPage?: boolean;
}) => {
  console.log(data);
  return (
    <ContentWrapper>
      {data?.length === 0 ? (
        "no results"
      ) : (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 480: 2, 768: 3 }}
          className={clsx("py-8", { "py-0": artPage })}
        >
          <Masonry gutter="32px">
            {data?.map((art) => {
              return (
                <div key={art.id}>
                  {artPage ? (
                    <NavLink href={`/art/${art?.id}`}>
                      <img src={art.artImage.url} alt="" className="w-full" />
                    </NavLink>
                  ) : (
                    <img src={art.artImage.url} alt="" className="w-full" />
                  )}
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </ContentWrapper>
  );
};

export default MasonryComponent;
