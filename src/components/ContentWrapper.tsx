const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-white dark:bg-darker ">
      <div className="max-w-page w-full">{children}</div>
    </div>
  );
};

export default ContentWrapper;
