import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="container flex justify-between items-center p-6 mx-auto">
        <button className="xl:hidden focus:outline-none" onClick={handleToggle}>
          <img src="/assets/icons/toggle-mobile.png" alt="toggle-mobile" />
        </button>
        <div className="text-right">
          <Link to={`/`}>
            <img
              src="/assets/images/nexexLogo.png"
              alt="nexexLogo"
              className=""
            />
          </Link>
        </div>
        <nav
          className={`max-xl:!hidden lg:flex space-x-8 text-lg font-medium ${
            isOpen ? "block" : "hidden"
          } max-lg:block`}
        >
          <Link
            to="/"
            onClick={() => handleTabClick("Home")}
            className={`px-4 py-2 transition-colors text-base font-normal font-[Bricolage Grotesque] duration-300 ${
              activeTab === "Home"
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#A101FF] to-[#18B3F7]"
                : "hover:text-purple-500 text-black"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about-ussssss"
            onClick={() => handleTabClick("About Us")}
            className={`px-4 py-2 transition-colors text-base font-normal font-[Bricolage Grotesque] duration-300 ${
              activeTab === "About Us"
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#A101FF] to-[#18B3F7]"
                : "hover:text-purple-500 text-black"
            }`}
          >
            About Us
          </Link>
          <Link
            to="/ourServices"
            onClick={() => handleTabClick("Our Services")}
            className={`px-4 py-2 transition-colors text-base font-normal font-[Bricolage Grotesque] duration-300 ${
              activeTab === "Our Services"
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#A101FF] to-[#18B3F7]"
                : "hover:text-purple-500 text-black"
            }`}
          >
            Our Services
          </Link>
          <Link
            to="/portfolio"
            onClick={() => handleTabClick("Portfolio")}
            className={`px-4 py-2 transition-colors text-base font-normal font-[Bricolage Grotesque] duration-300 ${
              activeTab === "Portfolio"
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#A101FF] to-[#18B3F7]"
                : "hover:text-purple-500 text-black"
            }`}
          >
            Portfolio
          </Link>
          <Link
            to="/Contact-us"
            onClick={() => handleTabClick("Contact-us")}
            className={`px-4 py-2 transition-colors text-base font-normal font-[Bricolage Grotesque] duration-300 ${
              activeTab === "Contact-us"
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#A101FF] to-[#18B3F7]"
                : "hover:text-purple-500 text-black"
            }`}
          >
            Contact Us
          </Link>
        </nav>
        <Link
          to={`/Contact-us`}
          className="hidden text-base font-normal font-[Rubik] md:flex bg-[#3C71FF] items-center text-white px-14 py-3 gap-3 rounded-full hover:bg-[#3C71FF]"
        >
          Let's Talk
          <img src="/assets/icons/phone.svg" alt="phone" className="w-6 h-6" />
        </Link>
      </header>
      <nav
        className={`xl:hidden fixed left-0 top-0 w-60 h-full bg-black z-50 inset-0 transition-transform duration-1000 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end items-center p-4">
          <button
            className="text-3xl text-white focus:outline-none text-end"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col p-4 absolute top-1">
          <Link
            to="/"
            onClick={() => handleTabClick("Home")}
            className={`block px-4 py-2 transition-colors duration-300 ${
              activeTab === "Home"
                ? "text-transparent bg-clip-text font-black text-xl bg-gradient-to-r from-[#A101FF] to-[#18B3F7]"
                : "hover:text-purple-500 text-white"
            }`}
          >
            Home
          </Link>

          <Link
            to="/about-us"
            onClick={() => handleTabClick("About Us")}
            className={`block px-4 py-2 transition-colors duration-300 ${
              activeTab === "About Us"
                ? "text-transparent bg-clip-text font-black text-xl bg-gradient-to-r from-[#A101FF] to-[#18B3F7]"
                : "hover:text-purple-500 text-white"
            }`}
          >
            About Us
          </Link>
          <Link
            to="/ourServices"
            onClick={() => handleTabClick("Our Services")}
            className={`block px-4 py-2 transition-colors duration-300 ${
              activeTab === "Our Services"
                ? "text-transparent bg-clip-text font-black text-xl bg-gradient-to-r from-[#A101FF] to-[#18B3F7]"
                : "hover:text-purple-500 text-white"
            }`}
          >
            Our Services
          </Link>
          <Link
            to="/portfolio"
            onClick={() => handleTabClick("Portfolio")}
            className={`block px-4 py-2 transition-colors duration-300 ${
              activeTab === "Portfolio"
                ? "text-transparent bg-clip-text font-black text-xl bg-gradient-to-r from-[#A101FF] to-[#18B3F7]"
                : "hover:text-purple-500 text-white"
            }`}
          >
            Portfolio
          </Link>
          <Link
            to="/Contact-us"
            onClick={() => handleTabClick("Contact-us")}
            className={`px-4 py-2 transition-colors text-base font-normal font-[Bricolage Grotesque] duration-300 ${
              activeTab === "Contact-us"
                ? "text-transparent bg-clip-text font-black text-xl bg-gradient-to-r from-[#A101FF] to-[#18B3F7]"
                : "hover:text-purple-500 text-white"
            }`}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
