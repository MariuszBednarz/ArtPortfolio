import { Suspense } from "react";

import { ContentWrapper } from "@/components/reusable";

import { ArtProps } from "@/types/components";

const Art = ({ data }: ArtProps): JSX.Element => {
  return (
    <ContentWrapper>
      <Suspense fallback={<div>loading</div>}>
        Art {JSON.stringify(data)}
      </Suspense>
    </ContentWrapper>
  );
};

export default Art;
