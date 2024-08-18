import { Suspense } from "react";

export default function Bio({ bio }: any) {
  return (
    <Suspense fallback={<div>loading</div>}>
      Bio
      {JSON.stringify(bio)}
    </Suspense>
  );
}
