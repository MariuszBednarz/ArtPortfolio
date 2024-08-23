import { Suspense } from "react";

const NotFound = (): JSX.Element => {
  return <Suspense fallback={<div>loading</div>}>NotFound</Suspense>;
};

export default NotFound;
