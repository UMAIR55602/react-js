import { Link } from "react-router-dom";

function ContactUS() {
  return (
    <div className="lg:mx-44 max-lg:mx-20 max-sm:mx-4 pt-6 pb-16 relative">
      <div
        class="py-6 px-10 xl:rounded-lg grid grid-cols-12 items-center justify-between absolute left-0 right-0 z-50 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/contact-bg.svg')",
        }}
      >
        <div class="col-span-2 flex justify-center relative -top-12 max-xl:hidden">
          <div class="bg-black p-4 rounded-full">
            <img
              src="/assets/icons/contactus.svg"
              alt="contactus"
              className="w-12"
            />
          </div>
        </div>
        <div class="col-span-8 text-left lg:pl-4">
          <p class="text-white text-lg font-medium max-sm:pr-4">
            Always here to assist you: Our Customer support team awaits!
          </p>
        </div>
        <div class="col-span-2 max-xl:col-span-4 flex justify-center lg:justify-end">
          <Link to={`/Contact-us`}>
            <button class="bg-white text-[#323232] text-base px-6 max-sm:px-1 py-2 font-normal rounded-full max-sm:rounded-md shadow-md">
              Contact us!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
