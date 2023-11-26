const ArtLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-page w-full">
      filters
      {children}
      load more
    </div>
  );
};

export default ArtLayout;
