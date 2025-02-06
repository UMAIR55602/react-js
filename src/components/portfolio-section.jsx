import { useState } from "react";
import PortfolioTwo from "./portfolio-two-section";
import { Link } from "react-router-dom";

function Portfoliosection() {
  const [isPortfolioVisible, setPortfolioVisible] = useState(false);

  const togglePortfolio = () => {
    setPortfolioVisible(!isPortfolioVisible);
  };

  return (
    <section className="text-center py-16 bg-gradient-to-b from-white to-gray-100">
      <h2 className="text-base text-[#3C71FF] font-normal font-[Bricolage Grotesque]">
        Our Finest
      </h2>
      <div className="text-3xl text-[#323232] md:text-5xl max-sm:text-2xl font-extrabold my-2 font-famliy mb-4">
        Explore
        <p>Our Project Portfolio</p>
      </div>
      <div className="flex justify-center items-center mt-6">
        <Link to={`/Contact-us`}>
          <button
            onClick={togglePortfolio}
            className="border border-[#3C71FF] flex items-center gap-3 text-[#3C71FF] px-8 py-4 rounded-full text-base font-normal hover:shadow-md hover:shadow-[#3C71FF] font-sans"
          >
            Explore Now
            <img
              src="/assets/icons/portfolio-arrow.svg"
              alt="portfolio-arrow"
            />
          </button>
        </Link>
      </div>

      <div className="mt-10 h-[500px] mx-auto rounded-lg max-lg:hidden overflow-hidden relative flex justify-center items-center">
        {!isPortfolioVisible ? (
          <div
            className="relative h-full group max-lg:hidden cursor-pointer"
            onClick={togglePortfolio}
          >
            <img
              src="/assets/images/Frame 34.png"
              alt="Web/App Development"
              className="w-full h-full group-hover:-translate-x-[100px] scale-95 shadow-lg transition-transform duration-500 pointer-events-none rounded-full"
            />
            <img
              src="/assets/images/Frame 35.png"
              alt="Web/App Development"
              className="w-full h-full absolute top-0 left-0 opacity-0 transform scale-95 group-hover:opacity-100 group-hover:-translate-x-[50px] transition-all duration-500 pointer-events-none"
            />
            <img
              src="/assets/images/Frame 38.png"
              alt="Web/App Development"
              className="w-full h-full absolute top-0 left-0 opacity-0 transform scale-95 group-hover:opacity-100 group-hover:translate-x-[0px] transition-all duration-500 pointer-events-none"
            />
            <img
              src="/assets/images/Frame 37.png"
              alt="Web/App Development"
              className="w-full h-full absolute top-0 left-0 opacity-0 transform scale-95 group-hover:opacity-100 group-hover:translate-x-[50px] transition-all duration-500 pointer-events-none"
            />
            <img
              src="/assets/images/Frame 34.png"
              alt="Web/App Development"
              className="w-full h-full absolute top-0 left-0 opacity-0 transform scale-95 group-hover:opacity-100 group-hover:translate-x-[100px] transition-all duration-500 pointer-events-none"
            />
          </div>
        ) : (
          <div
            onClick={togglePortfolio}
            className="w-full h-full cursor-pointer flex justify-center items-center"
          >
            <PortfolioTwo />
          </div>
        )}
      </div>
      <div className="max-md:block lg:hidden max-lg:py-10">
        <PortfolioTwo />
      </div>
    </section>
  );
}

export default Portfoliosection;
