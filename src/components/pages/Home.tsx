import { Suspense } from "react";

import Banner from "@/components/sections/Banner";
import ContentWrapper from "@/components/reusable/ContentWrapper";

export default function Home() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Banner />
      <ContentWrapper>
        <div>home content</div>
      </ContentWrapper>
    </Suspense>
  );
}
