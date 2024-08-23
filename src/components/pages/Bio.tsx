"use client";
import { Suspense } from "react";

import { ContentWrapper } from "@/components/reusable";

import { BioProps } from "@/types/components";

export default function Bio({ bio }: BioProps) {
  return (
    <ContentWrapper>
      <Suspense fallback={<div>loading</div>}>
        {bio.map((el) => {
          return <div key={el.id}>{JSON.stringify(el.expo)}</div>;
        })}
      </Suspense>
    </ContentWrapper>
  );
}
