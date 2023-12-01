import ContentWrapper from "@/src/components/ContentWrapper";

const ArtLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContentWrapper>
      filters
      {children}
      load more
    </ContentWrapper>
  );
};

export default ArtLayout;
