import Banner from "@/components/reusable/Banner";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Banner />
    </Suspense>
  );
}
