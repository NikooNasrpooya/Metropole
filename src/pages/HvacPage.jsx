// import your gallery images
import hvac1 from "../assets/hvac1.jpg";
import hvac17 from "../assets/hvac17.jpg";
import hvac24 from "../assets/hvac24.jpg";
import hvac23 from "../assets/hvac23.jpg";
import hvac14 from "../assets/hvac14.jpg";
import hvac3 from "../assets/hvac3.jpg";
import hvac19 from "../assets/hvac19.jpg";
import hvac27 from "../assets/hvac27.jpg";

export default function HvacPage() {
  const galleryImages = [
    { src: hvac1, alt: "Central boiler plant" },
    { src: hvac17, alt: "Large horizontal boiler plant" },
    { src: hvac24, alt: "Integrated mechanical hall with piping" },
    { src: hvac23, alt: "Mechanical distribution piping and valves" },
    { src: hvac14, alt: "Pump room and mechanical distribution" },
    { src: hvac3, alt: "Rooftop HVAC units" },
    { src: hvac19, alt: "Exterior HVAC and mechanical equipment" },
    { src: hvac27, alt: "Electrical control panels supporting building systems" },
  ];

  return (
    <main className="w-full bg-white text-[#222]">
      {/* Hero */}
      <section
        className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-cover bg-center px-6 text-center text-white"
        style={{ backgroundImage: `url(${hvac1})` }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-4xl animate-fadeInUp">
          <h1 className="text-4xl font-light tracking-wide md:text-6xl">
            HVAC, Mechanical &amp; Building Maintenance
          </h1>
          <p className="mt-4 text-lg text-gray-200 md:text-xl">
            Metropole Group
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-16">
        <div className="animate-fadeIn">
          <p className="text-lg leading-8 text-gray-700">
            <strong>Metropole Group</strong> brings practical experience with
            construction and building systems that support the reliable
            operation of complex properties. Alongside our land development
            work, this background forms the foundation for our planned
            expansion into HVAC, mechanical, and broader building maintenance
            services.
          </p>
        </div>

        <div className="mt-14 animate-fadeIn">
          <h2 className="text-3xl font-light text-[#1f1f1f]">
            Building Systems Experience
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            Our experience includes HVAC and mechanical systems commonly found
            in large residential and commercial buildings, such as central
            plants, rooftop equipment, and distribution systems. This work
            reflects a hands-on understanding of system performance,
            serviceability, and long-term operation.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-md bg-white shadow-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm text-gray-500">
          Images shown are selected from completed projects and illustrate the
          scale, complexity, and technical nature of this experience.
        </p>

        {/* Service Direction */}
        <div className="mt-16 animate-fadeIn">
          <h2 className="text-3xl font-light text-[#1f1f1f]">
            A Service-Focused Direction
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            As Metropole Group develops its HVAC, mechanical, and building
            maintenance capabilities, our focus is on a practical, responsive,
            and lifecycle-oriented approach to building systems care —
            supporting reliability, continuity of service, and long-term asset
            performance.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-sm leading-7 text-gray-500">
          <strong>Disclaimer:</strong>
          <br />
          Images and descriptions shown on this page are provided for
          illustrative purposes only and reflect prior project experience.
          They are intended to demonstrate general technical background and do
          not represent current service offerings or constitute a contractual
          commitment.
        </div>
      </section>
    </main>
  );
}