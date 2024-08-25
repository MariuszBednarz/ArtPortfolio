const Loader = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center p-10">
      <div className="animate-spin rounded-full h-32 w-32 border-4 border-dark border-t-trans border-r-trans dark:border-bright dark:border-t-trans dark:border-r-trans "></div>
    </div>
  );
};

export default Loader;
