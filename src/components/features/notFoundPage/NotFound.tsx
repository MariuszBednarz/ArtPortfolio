import { Suspense } from "react";

export default function NotFound() {
  return <Suspense fallback={<div>loading</div>}>NotFound</Suspense>;
}
