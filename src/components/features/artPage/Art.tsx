import { Suspense } from "react";

export default function Art({ data }: any) {
  return (
    <Suspense fallback={<div>loading</div>}>
      Art {JSON.stringify(data)}
    </Suspense>
  );
}
