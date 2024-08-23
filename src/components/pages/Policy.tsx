import { Suspense } from "react";

const Policy = (): JSX.Element => {
  return <Suspense fallback={<div>loading</div>}>Policy</Suspense>;
};

export default Policy;
