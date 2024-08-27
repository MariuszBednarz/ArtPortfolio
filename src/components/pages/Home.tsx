import { ImageCarousel } from "@/components/reusable";
import { Hero } from "@/components/sections";

import { HomeProps } from "@/types/components";

const Home = ({ images }: HomeProps): JSX.Element => {
  return (
    <div className="w-full relative h-page flex justify-center flex-col">
      <div className="relative h-full w-full brightness-50">
        <ImageCarousel images={images} />
      </div>
      <Hero />
    </div>
  );
};

export default Home;
