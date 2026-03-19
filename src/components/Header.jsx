import header from "../assets/header.png";

export default function Hero() {
  return (
    <section
      className="relative flex h-[90vh] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${header})` }}
    >
      {/* Dark overlay */}
      <div className=" absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className=" relative z-10 flex flex-col items-center text-center text-white px-6">
        <div className="animate-fadeInUp">
          <h1 className=" text-2xl md:text-4xl lg:text-5xl font-light tracking-wide">
          WE BUILD OUTSTANDING COMMUNITIES
        </h1>

        <p className="mt-6 text-2xl md:text-2xl text-gray-200">
          Real estate development, investment, and construction.
        </p>

        <a href="#projects" className=" mt-10 inline-block border-2 border-[#d4812e] px-8 py-4 text-md tracking-wider uppercase transition hover:bg-[#d4812e] hover:text-white duration-300 transform hover:scale-110 ">
          VIEW ALL PROJECTS
        </a>
        </div>
        
      </div>
    </section>
  );
}
