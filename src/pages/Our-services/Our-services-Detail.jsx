import { useLocation, useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb";
import { servicesData } from "../../components/helper";
import Form from "../../components/Form";
import Outline from "../../components/outline";
import TestimonialSection from "../../components/testimonialsection";
import Footer from "../../components/footer";
import ContactUS from "../../components/contact-us";
function OurServicesDetail() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const ids = pathnames[pathnames.length - 1];
  // const { id } = useParams();
  // const service = servicesData.find((service) => service.id === ids);
  const { slug } = useParams(); // Get slug from URL
  const service = servicesData.find((service) => service.slug === slug);
  console.log(ids, "sss");
  return (
    <>
      <div
        className="text-center py-20"
        style={{
          backgroundImage: "url('/assets/images/bg-single-page.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="leading-[1] font-extrabold font-bricolage text-[48px] mb-4 text-[#323232]">
          {service.title}
        </h2>
        <Breadcrumb />
      </div>
      <section
        className=" max-sm:px-10 "
        style={{
          backgroundImage: "url('/assets/images/Ellipse 2 (1).png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left",
        }}
      >
        <div className="flex justify-center py-20 max-sm:py-5">
          <img
            className="w-[1110px] lg:h-[550px] rounded-lg object-cover"
            src={service.image}
            alt={service.title}
          />
        </div>
        <div className="xl:px-64">
          <div>
            <h2 className="leading-[1] font-extrabold font-bricolage text-[48px] max-sm:text-[25px] mb-8 text-[#323232]">
              {service.singletitle}
            </h2>
          </div>
          <div className="text-left leading-3">
            <p className="leading-10 text-[#323232] text-[16px]">
              {service.singdescriptionshort.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
          <div>
            <h2 className="leading-[1] lg:w-[52rem] font-extrabold font-bricolage text-[48px] max-sm:text-[25px] my-8 text-[#323232]">
              {service.singletitle1}
            </h2>
          </div>
          <div className="text-left leading-3">
            <p className="leading-10 text-[#323232] text-[16px]">
              {service.singdescription.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
        <Outline />
        <Form />
      </section>
      <TestimonialSection />
      <ContactUS />
      <Footer />
    </>
  );
}

export default OurServicesDetail;
