import { Link } from "react-router-dom";
import history from "../assets/history.png";
import vision from "../assets/vision.png";
import about from "../assets/about.png";
import whatwedo from "../assets/whatwedo.png";
import values from "../assets/values.png";

export default function AboutPage() {
  return (
    <main  className="w-full bg-white text-[#222]">
      {/* Hero */}
      <section 
        className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-cover bg-center px-6 text-center text-white "
        style={{ backgroundImage: `url(${about})` }}
      >
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 animate-fadeInUp">
          <h1 className="text-5xl font-light tracking-wide md:text-6xl">
            About
          </h1>
          <p className="mt-4 text-2xl text-[#d8832e]">Metropole Group</p>
        </div>
      </section>

      {/* Our History */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2 md:px-10 lg:px-16">
        <div className="animate-fadeIn">
          <img
            src={history}
            alt="Our history"
            className="w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center animate-fadeIn">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Who we are
          </p>
          <h2 className="mt-3 text-4xl font-light text-[#1f1f1f]">
            Our History
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The board of directors consists of installation and building
            professionals with 30 years of experience in various fields of
            construction such as architecture planning and the installations of
            residential, commercial, and industrial buildings. With its unique
            designs, dedication to quality, devotion to detail, and special
            customer care, Metropole Group adds long-term value to neighborhoods
            by generating a sense of community through its developments.
          </p>
        </div>
      </section>

      {/* We Do Real Estate */}
      <section
        className="bg-cover bg-center px-6 py-20 text-center "
        style={{ backgroundImage: `url(${whatwedo})` }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="animate-fadeIn">
            <h2 className="text-3xl text-white font-light tracking-wide md:text-4xl">
              WE DO REAL ESTATE
            </h2>
            <div className="mx-auto mt-5 h-[1px] w-28 bg-gray-400" />
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
            <div className="animate-fadeIn">
              <h3 className="text-6xl font-light text-[#d8832e]">1.</h3>
              <p className="mt-4 text-xl text-white">Development</p>
            </div>

            <div className="animate-fadeIn">
              <h3 className="text-6xl font-light text-[#d8832e]">2.</h3>
              <p className="mt-4 text-xl text-white">Investment</p>
            </div>

            <div className="animate-fadeIn">
              <h3 className="text-6xl font-light text-[#d8832e]">3.</h3>
              <p className="mt-4 text-xl text-white">Construction</p>
            </div>

            <div className="animate-fadeIn">
              <h3 className="text-6xl font-light text-[#d8832e]">4.</h3>
              <p className="mt-4 text-xl text-white">
                HVAC, Mechanical & Building Maintenance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2 md:px-10 lg:px-16">
        <div className="flex flex-col justify-center animate-fadeIn">
          <h2 className="text-3xl font-light tracking-wide md:text-4xl">
            OUR VALUES &amp; MISSION
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Metropole Group, our mission is to build communities with
            excellence, affordability, and quality; where luxury meets comfort
            and value. We believe in excellence and integrity in every project
            we pursue. We work hard to make sure that we create a space unique
            for each and every client and home buyer to proudly call home.
          </p>
        </div>

        <div className="animate-fadeIn">
          <img
            src={values}
            alt="Our values and mission"
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* Vision */}
      <section
        className="bg-cover bg-center px-6 py-24"
        style={{ backgroundImage: `url(${vision})` }}
      >
        <div className="bg-white/60 backdrop-blur-5xsm mx-auto max-w-2xl animate-fadeInUp p-8 shadow-sm md:p-14">
          <h2 className="text-3xl font-light text-[#1f1f1f] md:text-4xl">
            Our Vision
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Metropole Group is a company comprised of experienced professionals
            who are committed and passionate about delivering communities with
            innovation, sustainability, and exceptional experience for our
            customers to invest or live in. Metropole Group not only cares for
            its clients but strives to create picturesque communities and
            developments that become future landmarks, adding significant value
            to the community.
          </p>
        </div>
      </section>

      {/* Projects CTA */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl animate-fadeInUp">
          <h2 className="text-3xl font-light tracking-wide md:text-4xl">
            OUR PROJECTS!
          </h2>
          <div className="mx-auto mt-5 h-[1px] w-28 bg-gray-400" />
          <p className="mt-8 text-lg leading-8 text-gray-600">
            View more information about our projects by clicking the button
            below.
          </p>

          <Link
            to="/projects"
            className="mt-10 inline-block border border-[#c87532] px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-[#1f1f1f] transition hover:bg-[#c87532] hover:text-white"
          >
            View Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
