import { Suspense } from "react";

const NotFound = () => {
  return <Suspense fallback={<div>loading</div>}>NotFound</Suspense>;
};

export default NotFound;
