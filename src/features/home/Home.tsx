"use client";
import { MasonryComponent } from "@/src/components";
import Banner from "./Banner";

import useDataLogic from "@/src/hooks/useDataLogic";

const Home = () => {
  const { overview, loading } = useDataLogic(true);

  return (
    <div>
      <Banner />
      <MasonryComponent loading={loading} data={overview} />
    </div>
  );
};

export default Home;
