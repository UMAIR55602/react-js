import Breadcrumb from "../../components/breadcrumb";
import ContactUS from "../../components/contact-us";
import Footer from "../../components/footer";
import Form from "../../components/Form";
import GalleryComponent from "../../components/gallery";
import Outline from "../../components/outline";
import TestimonialSection from "../../components/testimonialsection";

function Portfolio() {
  return (
    <>
      <div
        className="text-center py-20 bg-repeat-none"
        style={{
          backgroundImage: "url('/assets/images/bg-single-page.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="leading-[1] font-extrabold font-bricolage text-[48px] mb-4 text-[#323232]">
          Projects Showcase
        </h2>
        <Breadcrumb />
      </div>
      <GalleryComponent/>
      <Outline />
      <Form />
      <TestimonialSection />
      <ContactUS />
      <Footer />
    </>
  );
}

export default Portfolio;
