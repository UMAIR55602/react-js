import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useLocation } from "react-router-dom";

function TestimonialSection() {
  const location = useLocation();
  const isOurservicePage = location.pathname === "/ourServices";
  const testimonials = [
    {
      icon: "/assets/icons/Left quote.svg",
      Name: "Michael D",
      image: "/assets/images/user1.jfif",
      feedback:
        "Nexen Labz brought my ideas to life with their exceptional graphic design skills. The social media graphics they created have significantly increased engagement on my platforms. Their creativity and attention to detail are unmatched!",
    },
    {
      icon: "/assets/icons/Left quote.svg",
      Name: "Arvind H",
      image: "/assets/images/user2.jpg",
      feedback:
        "The team at Nexen Labz is truly professional and reliable. From the first consultation to the final delivery, they exceeded my expectations.",
    },
    {
      icon: "/assets/icons/Left quote.svg",
      Name: "Nadia K",
      image: "https://pagedone.io/asset/uploads/1696229969.png",
      feedback:
        "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.",
    },
  ];

  return (
    <section
      className={`py-24 relative ${isOurservicePage ? "mt-20" : ""}`}
      style={{
        backgroundImage: "url('/assets/images/bg-test.svg')",
      }}
    >
      <div class="absolute inset-0 bg-blue-600 opacity-5"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
          <div className="w-full lg:w-2/5 lg:hidden max-md:block">
            <div className="text-yellow-500 text-4xl mb-1">
              <img src="/assets/icons/Rating.svg" alt="Rating" />
            </div>
            <h2 className="text-5xl font-extrabold font-bricolage text-[#323232] mb-2 max-sm:text-2xl">
              Praise for Nexen Labz's Exceptional Services
            </h2>
            <span className="text-[#3C71FF] font-normal mb-8 block">
              Testimonial
            </span>
            <div className="relative right-[3%]">
              <button className="swiper-button-prev flex justify-center items-center"></button>
              <button className="swiper-button-next flex justify-center items-center"></button>
            </div>
          </div>
          <div className="w-full lg:w-3/5 mt-20">
            <Swiper
              className="mySwiper"
              slidesPerView={2}
              spaceBetween={28}
              centeredSlides={false}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 28,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 32,
                },
              }}
              modules={[Navigation]}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="group max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-indigo-600">
                    <div className="mb-4">
                      <img src={item.icon} alt={item.Name} />
                    </div>
                    <p className="text-[#323232] text-base font-normal mb-4 ">
                      {item.feedback || "Sample testimonial text goes here..."}
                    </p>
                    <div className="">
                      <img
                        className="w-16 h-16 bg-gray-300 rounded-full mb-2  object-cover"
                        src={item.image}
                        alt={item.Name}
                      />
                      <div className="grid gap-1">
                        <h5 className="font-bold text-2xl text-[#323232]">
                          {item.Name}
                        </h5>
                        <span className="text-sm leading-6 text-gray-500">
                          {item.value}
                        </span>
                        <div className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-500 transition-all duration-500">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5"
                              viewBox="0 0 18 17"
                              fill="none"
                            >
                              <path
                                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full lg:w-2/5 max-lg:hidden">
            <div className="text-yellow-500 text-4xl mb-1">
              <img src="/assets/icons/Rating.svg" alt="Rating" />
            </div>
            <h2 className="text-5xl font-extrabold font-bricolage text-[#323232] mb-2">
              Praise for Nexen Labz's Exceptional Services
            </h2>
            <span className="text-[#3C71FF] font-normal mb-8 block">
              Testimonial
            </span>
            <div className="relative right-[3%]">
              <button className="swiper-button-prev flex justify-center items-center"></button>
              <button className="swiper-button-next flex justify-center items-center"></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
