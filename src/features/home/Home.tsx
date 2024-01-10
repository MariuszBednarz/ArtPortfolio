"use client";
import { MasonryComponent } from "@/src/components";
import Banner from "./Banner";

import useDataFetch from "@/src/hooks/useLogic";

const Home = () => {
  const { overview, loading } = useDataFetch(true);

  return (
    <div>
      <Banner />
      <MasonryComponent loading={loading} data={overview} />
    </div>
  );
};

export default Home;
