import Banner from "@/components/sections/Banner";
import ContentWrapper from "@/components/reusable/ContentWrapper";

const Home = (): JSX.Element => {
  return (
    <>
      <Banner />
      <ContentWrapper>
        <div>home content</div>
      </ContentWrapper>
    </>
  );
};

export default Home;
