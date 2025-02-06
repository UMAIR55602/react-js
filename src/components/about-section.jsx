import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <div
      className="grid grid-cols-1 px-4 md:p-10 md:px-40 xl:pb-12 max-sm:pt-10"
      style={{
        backgroundImage: "url('/assets/images/Ellipse 2 (1).png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center left",
      }}
    >
      <div className="grid lg:grid-cols-2 max-md:grid-cols-1 gap-x-24 justify-center">
        <div>
          <img
            src="/assets/icons/about-us.svg"
            alt="about-us"
            className="mb-6"
          />
          <h2 className="text-base font-normal text-[#3C71FF]">About Us !</h2>
          <h3 className="text-5xl text-[#323232] font-extrabold font-famliy mt-6 max-sm:text-2xl">
            Who we are?
          </h3>
          <p className="text-[#323232] mt-4 max-w-3xl mx-auto md:mx-0">
            At Nexen Labz, we specialize in crafting innovative digital
            solutions that propel businesses to success. With a passion for
            creativity and a dedication to excellence, we are your trusted
            digital partner.
          </p>
          <div className="flex justify-start items-center mt-6">
            <Link to={`/Contact-us`}>
              <button className="border border-[#3C71FF] flex items-center gap-3 text-[#3C71FF] px-6 py-3 rounded-full text-base font-normal hover:shadow-sm hover:shadow-[#3C71FF] font-sans">
                Chat Now
                <img src="/assets/icons/Chat.svg" alt="portfolio-arrow" />
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-10">
          <div className="flex items-start space-x-4">
            <div className="py-2 rounded-full">
              <img
                src="/assets/icons/expertes.svg"
                alt="expertes"
                className="w-12"
              />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-[#323232]">
                Expertise
              </h4>
              <p className="text-[#323232]">
                Our seasoned team brings extensive experience and expertise,
                ensuring unparalleled quality and innovation in every project.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="py-2 rounded-full">
              <img
                src="/assets/icons/collaboration.svg"
                alt="expertes"
                className="w-12"
              />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-[#323232]">
                Collaboration
              </h4>
              <p className="text-[#323232]">
                We collaborate closely with clients, ensuring a deep
                understanding of their unique needs and objectives.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="py-2 rounded-full">
              <img
                src="/assets/icons/results.svg"
                alt="expertes"
                className="w-12"
              />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-[#323232]">Results</h4>
              <p className="text-[#323232]">
                Our extensive track record underscores our unwavering commitment
                to delivering excellence and outstanding results consistently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
