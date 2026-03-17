export default function About() {
  return (
    <section className="bg-white py-28 px-6 text-center">

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-light tracking-wide text-gray-700">
        WHO WE ARE
      </h2>

      {/* Orange Divider */}
      <div className="mx-auto mt-6 h-1 w-24 bg-[#c77a2c]"></div>

      {/* Description */}
      <p className="mx-auto mt-12 max-w-6xl text-lg md:text-xl leading-relaxed text-gray-600">
        We are a small team of real estate professionals with over 40 years of
        expertise in design, development, and construction. Our unwavering
        commitment to excellence has enabled us to create exceptional
        communities and neighborhoods where individuals and families can
        flourish and grow.
      </p>

      {/* Button */}
      <button className="mt-16 border-2 border-[#c77a2c] px-10 py-4 text-lg text-gray-700 
      transition duration-300 transform hover:scale-105 hover:bg-[#c77a2c] hover:text-white">
        Learn More
      </button>

    </section>
  );
}