import ContentWrapper from "@/src/components/ContentWrapper";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryComponent = ({ data }: { data: never[] }) => {
  return (
    <ContentWrapper>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 480: 2, 768: 3 }}
        className="py-8"
      >
        <Masonry gutter="32px">
          {data.map((art) => {
            return (
              <div key={art.id}>
                <img src={art.artImage.url} alt="" className="w-full" />
              </div>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </ContentWrapper>
  );
};

export default MasonryComponent;
