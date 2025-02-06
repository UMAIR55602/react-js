import React from "react";
import { Link } from "react-router-dom";

function Herosection() {
  return (
    <div
      className="bg-white font-sans text-gray-800 responsive-background"
      style={{
        backgroundImage: "url('/assets/images/Ellipse 2 (1).png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center left",
      }}
    >
      <section className="text-center py-16 px-4 md:px-20 lg:px-40">
        <h1 className="lg:text-[64px] md:text-5xl max-sm:text-2xl font-extrabold font-famliy text-[#323232] mb-4">
          <span className="block md:mb-4">Innovate,</span>
          <span className="block md:mb-4">Create, Dominate</span>
          <span className="block md:mb-4">
            & Succeed<span className="text-[#18B3F7]">.</span>
          </span>
        </h1>

        <p className="text-base font-normal md:text-xl text-[#323232] mb-8">
          <span className="block">
            Crafting Digital Dreams into Reality. Your Vision,
          </span>
          <span className="block">Our Expertise, Together.</span>
        </p>
        <div className="flex justify-center items-center">
          <Link to={`/Contact-us`}>
            <button className="bg-[#3C71FF] flex items-center gap-3 text-white px-8 py-4 rounded-full text-base font-[Rubik] font-normal">
              Let's get started!
              <img src="/assets/icons/arrow.svg" alt="arrow" />
            </button>
          </Link>
        </div>
        <div className="flex justify-center space-x-8 mt-12">
          <div className="relative p-4 max-sm:p-0 ">
            <img
              src="/assets/images/Component-1.png"
              alt="Icon 1"
              className="w-52 heartbeat bg-transparent rounded-full hover:shadow-lg hover:shadow-[#3C71FF]"
            />
            <img
              src="/assets/icons/star.svg"
              alt="Star Icon"
              className="absolute -bottom-20 max-sm:left-10 left-0 w-auto max-sm:w-10"
            />
          </div>
          <div className="relative p-4 max-sm:p-0  -bottom-24">
            <img
              src="/assets/icons/Component-2.svg"
              alt="Icon 2"
              className="w-52 heartbeat bg-transparent hover:shadow-[#3C71FF] rounded-full hover:shadow-lg"
            />
            <img
              src="/assets/icons/star.svg"
              alt="Star Icon"
              className="absolute -top-14 max-sm:right-0 -right-6 w-auto max-sm:w-10"
            />
          </div>
          <div className="relative p-4 max-sm:p-0 -top-10">
            <img
              src="/assets/icons/Component-3.svg"
              alt="Icon 3"
              className="w-52 heartbeat bg-transparent hover:shadow-[#3C71FF] rounded-full hover:shadow-lg"
            />
            <img
              src="/assets/icons/star.svg"
              alt="Star Icon"
              className="absolute -bottom-14 -right-10 max-sm:right-16 max-sm:-bottom-20 w-auto max-sm:w-10"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Herosection;
