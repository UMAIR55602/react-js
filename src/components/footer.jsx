import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import { servicesData } from "./helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const formRef = useRef();
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (id) => {
    setActiveTab(id);
    setIsOpen(false);
  };
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s1u3igq",
        "template_bw7zwfv",
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
      <footer className="bg-[#323232] text-white py-12 pt-32 lg:px-44 max-lg:px-20 max-sm:px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div>
            <h2 className="mb-4">
              <img src="/assets/images/footer-logo.svg" alt="footer-logo" />
            </h2>
            <p className="text-[#BBBBBB] text-base font-normal 2xl:pr-40">
              Your Digital Partner Graphic Design | Web Development | UI/UX |
              Digital Marketing | SEO Transforming ideas into impactful digital
              solutions. Globally available.
            </p>
            <p className="mt-8 text-[#BBBBBB] text-base font-normal max-sm:hidden">
              ©2024, Nexen Labz, All Rights are Reserved!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4 text-lg font-medium">About</h3>
              <ul className="text-[#BBBBBB] text-base font-normal space-y-6">
                <li>
                  <Link
                    to="/about-us"
                    onClick={() => handleTabClick("About Us")}
                    className={`block transition-colors duration-300 ${
                      activeTab === "About Us"
                        ? "text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#A101FF] to-[#18B3F7]"
                        : "hover:text-white"
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    onClick={() => handleTabClick("Portfolio")}
                    className={`block transition-colors duration-300 ${
                      activeTab === "Portfolio"
                        ? "text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#A101FF] to-[#18B3F7]"
                        : "hover:text-white"
                    }`}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Contact-us"
                    onClick={() => handleTabClick("Contact Us")}
                    className={`block transition-colors duration-300 ${
                      activeTab === "Contact Us"
                        ? "text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#A101FF] to-[#18B3F7]"
                        : "hover:text-white"
                    }`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Services</h3>
              <ul className="text-[#BBBBBB] text-base font-normal space-y-6">
                {servicesData.map((service) => (
                  <li key={service.id}>
                    <Link to={`/ourServicesDetail/${service.slug}`}>
                      <div className="flex items-center max-sm:text-left">
                        <button
                          className={`text-[#BBBBBB] hover:text-white text-justify ${
                            activeTab === service.id
                              ? "text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#A101FF] to-[#18B3F7]"
                              : ""
                          }`}
                          onClick={() => handleClick(service.id)}
                        >
                          {service.servicebuttonfooter}
                        </button>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="xl:pr-20">
            <h3 className="mb-4 text-lg font-medium">Get in touch.</h3>
            <p className="text-[#BBBBBB] text-base font-normal mb-4">
              Questions or feedback? We’d love to hear from you.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-full text-[#BBBBBB] mb-4 outline-none"
                required
              />
              <button
                type="submit"
                className="bg-[#3C71FF] text-lg text-white w-full py-2 rounded-full font-medium"
              >
                Send Now
              </button>
            </form>
          </div>
          <div>
            <p className="mt-4 text-[#BBBBBB] text-center text-base font-normal sm:hidden">
              ©2024, Nexen Labz, All Rights are Reserved!
            </p>
          </div>
        </div>
      </footer>
      <ToastContainer />
    </>
  );
}

export default Footer;
