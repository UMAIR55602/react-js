function PortfolioTwo() {
  return (
    <>
      <div className="md:flex md:justify-center max-lg:grid grid-cols-2 md:grid-cols-4 gap-8 md:items-center px-10 max-lg:px-20">
        <div className="flex flex-col items-center space-y-4">
          <img src="/assets/images/graphices.svg" alt="" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img src="/assets/images/developer.svg" alt="" />
          <img
            src="/assets/images/s-media.svg"
            alt=""
            className="max-sm:hidden"
          />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img src="/assets/images/ui-ux.svg" alt="" />
          <img src="/assets/images/sqa.svg" alt="" className="max-sm:hidden" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img src="/assets/images/seo-long.svg" alt="" />
        </div>
        <div className="sm:hidden">
          <img src="/assets/images/sqa.svg" alt="" />
        </div>
        <div className="sm:hidden">
          <img src="/assets/images/s-media.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default PortfolioTwo;
