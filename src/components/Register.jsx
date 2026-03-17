import kitchen from "../assets/kitchen.png"; // add your image

export default function Register() {
  return (
    <section>
      {/* 🔹 TOP IMAGE BANNER */}
      <div
        className=" h-200 flex items-center justify-start bg-cover bg-center pl-80"
        style={{ backgroundImage: `url(${kitchen})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 "></div>

        {/* White content box */}
        <div className="z-10 max-w-xl bg-white/60 backdrop-blur-5xsm p-10 md:p-12">
          <p className="text-md tracking-widest text-gray-700">
            METROPOLE GROUP’S
          </p>

          <h2 className="mt-2 text-3xl md:text-5xl font-light text-gray-800">
            PROMISE OF EXCELLENCE
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Metropole Group has always delivered exceptional projects and
            surpassed customers’ expectations. At Metropole we are dedicated to
            create innovative, premium, and sustainable communities with global
            perspective. We create detailed projects that are tailored to your
            lifestyle and have a proud history of building one-of-a-kind
            all-inclusive communities.
          </p>
        </div>
      </div>

      {/* 🔹 CTA SECTION */}
      <div className="bg-[#f4f4f4] px-6 py-24 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-light tracking-wide text-gray-800">
          REGISTER FOR OUR PROJECTS!
        </h2>

        {/* Orange line */}
        <div className="mx-auto mt-6 h-[4px] w-24 bg-[#c77a2c]"></div>

        {/* Description */}
        <p className="mx-auto mt-10 max-w-3xl text-lg text-gray-600 leading-relaxed">
          Find out more about our projects and investment opportunities by
          getting in touch with us or signing up for our projects.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <button
            className="border-2 border-[#c77a2c] px-10 py-4 text-lg text-gray-700 
          transition duration-300 hover:bg-[#c77a2c] hover:text-white"
          >
            Learn More
          </button>

          <button
            className="bg-[#c77a2c] px-10 py-4 text-lg text-white 
          transition duration-300 hover:opacity-90"
          >
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
}
