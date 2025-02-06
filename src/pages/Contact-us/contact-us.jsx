import Breadcrumb from "../../components/breadcrumb";
import ContactUS from "../../components/contact-us";
import Footer from "../../components/footer";
import Form from "../../components/Form";
import StatsSection from "../../components/statssection";

function ContactPage() {
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
          Contact Us
        </h2>
        <Breadcrumb />
      </div>
      <Form />
      <StatsSection />
      <ContactUS />
      <Footer />
    </>
  );
}

export default ContactPage;
