function Outline() {
  return (
    <>
      <div className="grid place-items-center py-10">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
          <span
            className="text-[90px] max-sm:text-[70px] max-lg:text-[60px] font-bold text-transparent border-[2px] border-none"
            style={{
              WebkitTextStroke: "2px #323232",
              WebkitTextFillColor: "transparent",
            }}
          >
            Create
          </span>

          <span className="text-[90px] max-sm:text-[70px] max-lg:text-[60px] font-bold text-[#323232]">Inspire</span>

          <span
            className="text-[90px] max-sm:text-[70px] max-lg:text-[60px] font-bold text-transparent border-[2px] border-none"
            style={{
              WebkitTextStroke: "2px #323232",
              WebkitTextFillColor: "transparent",
            }}
          >
            Elevate
          </span>
        </div>
      </div>
    </>
  );
}

export default Outline;
