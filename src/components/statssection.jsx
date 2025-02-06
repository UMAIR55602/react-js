import { useLocation } from "react-router-dom";

function StatsSection() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const stats = [
    {
      value: "3000+",
      label: "Happy Clients",
      icon: "/assets/images/Happy.svg",
    },
    {
      value: "500+",
      label: "Finished Projects",
      icon: "/assets/images/project.svg",
    },
    {
      value: "200+",
      label: "Skilled Experts",
      icon: "/assets/images/skilled.svg",
    },
    {
      value: "6+",
      label: "Awards in the Place",
      icon: "/assets/images/Fast.svg",
    },
  ];

  return (
    <section
      className={`pt-16 pb-16 xl:relative${
        isHomePage ? "pt-16" : ""
      }`}
    >
      <div
        className={`grid max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:max-w-6xl md:max-w-2xl max-sm:max-w-xs mx-auto rounded-lg shadow z-50 ${
          isHomePage ? "xl:absolute xl:left-0 xl:right-0" : ""
        }`}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-10 shadow flex items-center gap-x-4 border justify-center"
          >
            <div className="bg-white shadow-md  shadow-[#18B3F7] p-2 rounded-md">
              <img src={stat.icon} alt={stat.label} className="" />
            </div>
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#A101FF] to-[#18B3F7] bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-[#323232] text-xs font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
