import { Link } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb";
import ContactUS from "../../components/contact-us";
import Footer from "../../components/footer";
import Nexenlovesection from "../../components/nexezlove-section";
import StatsSection from "../../components/statssection";
import TestimonialSection from "../../components/testimonialsection";
import { servicesData } from "../../components/helper";
function OurServices() {
  return (
    <>
      <section
        className="text-center py-20"
        style={{
          backgroundImage: "url('/assets/images/bg-single-page.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-[64px] md:text-5xl max-sm:text-2xl font-extrabold font-bricolage text-[#323232] mb-4">
          <span className="block mb-4">
            Our Services<span className="text-[#18B3F7]">.</span>
          </span>
        </h1>
        <Breadcrumb />
      </section>
      {servicesData.slice(0, 2).map((service, index) => (
        <section
          className="max-lg:py-10 py-8 px-4 xl:px-40 bg-white"
          key={service.id}
        >
          <div class="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-y-12 justify-center items-center mx-auto">
            <div
              className={`mx-auto ${
                index % 2 != 0 && "lg:order-1"
              } max-md:text-center`}
            >
              <h2 className="leading-[1] font-extrabold font-bricolage text-[48px] mb-8 w-[24rem] max-sm:w-[20rem]">
                <span className="block">{service.title}</span>
              </h2>
              <p className="max-sm:w-[20rem] sm:w-[34rem] lg:w-[28rem] mb-10">
                {service.description}
              </p>
              <Link to={`/ourservicesdetail/${service.slug}`}>
                <div className="flex items-center max-md:justify-center">
                  <button className="bg-[#3C71FF] flex items-center gap-3 text-white px-6 py-3 rounded-full text-base font-[Rubik] font-normal">
                    {service.buttonText}
                  </button>
                </div>
              </Link>
            </div>
            <div
              className={`flex ${index % 2 == 0 && "order-2"} justify-center`}
            >
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        </section>
      ))}
      <StatsSection />
      {servicesData.slice(2, 4).map((service, index) => (
        <section
          className="max-lg:py-10 py-8 px-4 xl:px-40 bg-white"
          key={service.id}
        >
          <div class="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-y-12 justify-center items-center mx-auto">
            <div
              className={`mx-auto ${
                index % 2 != 0 && "lg:order-1"
              } max-md:text-center`}
            >
              <h2 className="leading-[1] font-extrabold font-bricolage text-[48px] mb-8 w-[24rem] max-sm:w-[20rem]">
                <span className="block">{service.title}</span>
              </h2>
              <p className="max-sm:w-[20rem] sm:w-[34rem] lg:w-[28rem] mb-10">
                {service.description}
              </p>
              <Link to={`/ourservicesdetail/${service.slug}`}>
                <div className="flex items-center max-md:justify-center">
                  <button className="bg-[#3C71FF] flex items-center gap-3 text-white px-6 py-3 rounded-full text-base font-[Rubik] font-normal">
                    {service.buttonText}
                  </button>
                </div>
              </Link>
            </div>
            <div
              className={`flex ${index % 2 == 0 && "order-2"} justify-center`}
            >
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        </section>
      ))}
      <Nexenlovesection />
      {servicesData.slice(4, 6).map((service, index) => (
        <section
          className="max-lg:py-10 py-8 px-4 xl:px-40 bg-white"
          key={service.id}
        >
          <div class="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-y-12 justify-center items-center mx-auto">
            <div
              className={`mx-auto ${
                index % 2 != 0 && "lg:order-1"
              } max-md:text-center`}
            >
              <h2 className="leading-[1] font-extrabold font-bricolage text-[48px] mb-8 w-[24rem] max-sm:w-[20rem]">
                <span className="block">{service.title}</span>
              </h2>
              <p className="max-sm:w-[20rem] sm:w-[34rem] lg:w-[28rem] mb-10">
                {service.description}
              </p>
              <Link to={`/ourservicesdetail/${service.slug}`}>
                <div className="flex items-center max-md:justify-center">
                  <button className="bg-[#3C71FF] flex items-center gap-3 text-white px-6 py-3 rounded-full text-base font-[Rubik] font-normal">
                    {service.buttonText}
                  </button>
                </div>
              </Link>
            </div>
            <div
              className={`flex ${index % 2 == 0 && "order-2"} justify-center`}
            >
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        </section>
      ))}
      <TestimonialSection />
      <ContactUS />
      <Footer />
    </>
  );
}

export default OurServices;
