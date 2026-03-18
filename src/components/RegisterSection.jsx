import React, { useState } from "react";

export default function RegisterSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    postalCode: "",
    participationType: "Investor",
    projectInterest: "Harris Gate",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted form:", formData);
  };

  return (
    <section className="w-full bg-white">
      {/* Top heading */}
      <div className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-light tracking-wide text-gray-900 md:text-5xl">
              Register
            </h1>
            <p className="mt-4 text-base text-gray-600 md:text-lg">
              Register for a project
            </p>
          </div>

          {/* Form card */}
          <div className="mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* First Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-800">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Ex: Steve"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-800">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Ex: Johnson"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="info@MetropoleGroup.ca"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-800">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                />
              </div>

              {/* City */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-800">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Ex: Ontario"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                />
              </div>

              {/* Postal Code */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-800">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                />
              </div>

              {/* Participation Type */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-800">
                  Participation Type
                </label>
                <select
                  name="participationType"
                  value={formData.participationType}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-black"
                >
                  <option>Investor</option>
                  <option>Home Buyers</option>
                  <option>Consultants/Contractors</option>
                  <option>Lenders</option>
                </select>
              </div>

              {/* Project Interest */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-800">
                  Project Of Your Interest
                </label>
                <select
                  name="projectInterest"
                  value={formData.projectInterest}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-black"
                >
                  <option>Harris Gate</option>
                  <option>Prince Parque</option>
                  <option>Observatory Lane</option>
                  <option>Rouge View</option>
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-800">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                />
              </div>

              {/* Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#c87532] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}