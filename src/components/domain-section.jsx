import { useLocation } from "react-router-dom";

function Domainsection() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <section
        className="text-center py-20 px-4 md:px-20 lg:px-40 bg-white"
        style={{
          backgroundImage: "url('/assets/images/Ellipse 3 (1).png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
        }}
      >
        <div className={`hidden ${isHomePage ? "!block" : ""}`}>
          <h2 className="text-base font-normal mb-3 text-[#3C71FF]">
            What we do
          </h2>
          <h1 className="lg:text-[64px] max-sm:text-2xl md:text-5xl font-extrabold font-bricolage text-[#323232] mb-16">
            <span className="block md:mb-4">Commitment</span>
            <span className="block md:mb-4">With Excellence<span className="text-[#18B3F7]">.</span></span>
          </h1>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8">
          <div className="text-center">
            <img
              src="/assets/icons/Graphic.svg"
              alt="Graphic Design Icon"
              className="mx-auto mb-4 transform transition-transform duration-300 hover:scale-125"
            />
            <p className="text-base font-normal mb-3 text-[#3C71FF]">
              Visual Mastery
            </p>
            <h3 className="text-2xl font-extrabold font-bricolage text-[#323232]">
              Graphic Design
            </h3>
            <p className="text-base font-normal text-[#323232] py-2 max-2xl:px-4 lg:px-4 md:px-12 max-sm:px-20 px-12 font-[Bricolage Grotesque]">
              Crafting stunning visuals that captivate and inspire your
              audience.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/assets/icons/UIUX.svg"
              alt="UI/UX Icon"
              className="mx-auto mb-4 transform transition-transform duration-300 hover:scale-125"
            />
            <p className="text-base font-normal mb-3 text-[#3C71FF]">
              Intuitive Experiences
            </p>
            <h3 className="text-2xl font-extrabold font-bricolage text-[#323232]">
              Web/App UI/UX
            </h3>
            <p className="text-base font-normal text-[#323232] py-2 max-2xl:px-4 lg:px-4 md:px-12 max-sm:px-20 px-12 font-[Bricolage Grotesque]">
              Designs user-centric interfaces that engage and delight your
              users.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/assets/icons/Development.svg"
              alt="Web Development Icon"
              className="mx-auto mb-4 transform transition-transform duration-300 hover:scale-125"
            />
            <p className="text-base font-normal mb-3 text-[#3C71FF]">
              Code Wizardry
            </p>
            <h3 className="text-2xl font-extrabold font-bricolage text-[#323232] px-10 max-sm:px-16">
              Web/App Development
            </h3>
            <p className="text-base font-normal text-[#323232] py-2 max-2xl:px-4 lg:px-4 md:px-12 max-sm:px-20 px-12 font-[Bricolage Grotesque]">
              Transforming ideas into functional and dynamic digital
              experiences.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/assets/icons/SEO.svg"
              alt="SEO Icon"
              className="mx-auto mb-4 transform transition-transform duration-300 hover:scale-125"
            />
            <p className="text-base font-normal mb-3 text-[#3C71FF]">
              Online Visibility
            </p>
            <h3 className="text-2xl font-extrabold font-bricolage text-[#323232]">
              SEO
            </h3>
            <p className="text-base font-normal text-[#323232] py-2 max-2xl:px-4 lg:px-4 md:px-12 max-sm:px-20 px-12 font-[Bricolage Grotesque]">
              Optimizing your online presence for maximum visibility and impact.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Domainsection;
