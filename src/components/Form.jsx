import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s1u3igq",
        "template_odz2orz",
        e.target,
        "_EfcbALi3u7eVUHG6"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <div
        className="flex items-center justify-center max-md:px-10 py-10"
        style={{
          backgroundImage: "url('/assets/images/Ellipse 3 (1).png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
        }}
      >
        <div className="md:max-w-5xl w-full grid md:grid-cols-2 gap-8 md:p-6">
          {/* Left Section */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-center space-x-2">
              <button className="bg-white text-[#323232] px-4 py-1 rounded-full font-normal text-[16px] shadow-lg flex items-center justify-center">
                <img
                  className="w-5 p-1 pt-2"
                  src="/assets/icons/Background.png"
                />
                Contact Us
                <img
                  className="w-5 p-1 pt-2"
                  src="/assets/icons/Background.png"
                />
              </button>
            </div>
            <h1 className="text-[48px] max-lg:text-[30px] font-extrabold font-bricolage text-[#151718] w-72 max-sm:w-52 leading-[1] !mb-4">
              Let’s Work Together.
            </h1>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 border border-[#F5F5F5] rounded-lg py-8 px-5 w-96 max-lg:w-[100%]">
                <div>
                  <img src="/assets/icons/location.png" alt="" />
                </div>
                <p className="text-[16px] text-[#151718] font-normal">
                  40-L Johar Town Lahore
                </p>
              </div>
              <div className="flex items-center space-x-3 border border-[#F5F5F5] rounded-lg py-8 px-5 w-96 max-lg:w-[100%]">
                <div>
                  <img src="/assets/icons/Chat.svg" alt="" />
                </div>
                <p className="text-[16px] text-[#151718] font-normal">
                  info@nexenlabz.com
                </p>
              </div>
              <div className="flex items-center space-x-3 border border-[#F5F5F5] rounded-lg py-8 px-5 w-96 max-lg:w-[100%]">
                <div>
                  <img src="/assets/icons/phone-number.png" alt="" />
                </div>
                <a
                  href="tel:+923154693104"
                  className="text-[16px] text-[#151718] font-normal"
                >
                  +92 315 4693104
                </a>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="rounded-lg md:p-8 space-y-6">
            <h2 className="text-[24px] font-extrabold font-bricolage text-[#151718] flex items-center space-x-2">
              <div>
                <img src="/assets/icons/form-fill.svg" alt="" />
              </div>
              <span>Fill the form</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-7">
              <input
                type="text"
                name="companyName"
                placeholder="Company name"
                className="w-full p-3 border border-[#F7F7F7] bg-[#F7F7F7] rounded-lg focus:outline-none text-[#747474] text-[16px] font-normal"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your mail"
                className="w-full p-3 border border-[#F7F7F7] bg-[#F7F7F7] rounded-lg focus:outline-none text-[#747474] text-[16px] font-normal"
                required
              />
              <textarea
                type="message"
                name="message"
                rows="8"
                placeholder="Enter your message"
                className="w-full p-3 border border-[#F7F7F7] bg-[#F7F7F7] rounded-lg focus:outline-none text-[#747474] text-[16px] font-normal"
                required
              ></textarea>
              <div>
                <button
                  type="submit"
                  className="bg-[#3C71FF] text-white py-3 px-5 rounded-full transition-colors flex justify-start align-top"
                >
                   Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Form;
