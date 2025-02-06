import AboutSection from "../../components/about-section";
import Breadcrumb from "../../components/breadcrumb";
import ContactUS from "../../components/contact-us";
import Domainsection from "../../components/domain-section";
import Footer from "../../components/footer";
import StatsSection from "../../components/statssection";
import TestimonialSection from "../../components/testimonialsection";

function AboutUs() {
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
          Who we are?
        </h2>
        <Breadcrumb />
      </div>
      <AboutSection />
      <StatsSection />
      <Domainsection />
      <TestimonialSection />
      <ContactUS />
      <Footer />
    </>
  );
}

export default AboutUs;
