import contact from "../assets/contact.png";
import {
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "Investment Opportunities",
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
    console.log("Contact form submitted:", formData);
  };

  return (
    <main className="w-full bg-white text-[#222]">
      {/* Hero */}
      <section
        className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-cover bg-center px-6 text-center text-white"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 animate-fadeInUp">
          <h1 className="text-5xl font-light tracking-wide md:text-6xl">
            Contact
          </h1>
          <p className="mt-4 text-lg text-gray-200">Metropole Group</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <a
            href="tel:+16474767212"
            className="animate-fadeIn rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#c87532]/30">
              <Phone className="h-9 w-9 text-[#c87532]" strokeWidth={1.8} />
            </div>
            <h3 className="mt-6 text-2xl font-light text-[#1f1f1f]">Phone</h3>
            <p className="mt-3 text-base text-gray-600">+1-647-476-7212</p>
          </a>

          <div className="animate-fadeIn rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#c87532]/30">
              <MapPin className="h-9 w-9 text-[#c87532]" strokeWidth={1.8} />
            </div>
            <h3 className="mt-6 text-2xl font-light text-[#1f1f1f]">
              Location
            </h3>
            <p className="mt-3 text-base leading-7 text-gray-600">
              Suite 203 - 1595 16th Avenue
              <br />
              L4B 3N9, Richmond Hill, Ontario
            </p>
          </div>

          <a
            href="mailto:info@metropolegroup.ca"
            className="animate-fadeIn rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#c87532]/30">
              <Mail className="h-9 w-9 text-[#c87532]" strokeWidth={1.8} />
            </div>
            <h3 className="mt-6 text-2xl font-light text-[#1f1f1f]">Email</h3>
            <p className="mt-3 text-base text-gray-600">
              info@metropolegroup.ca
            </p>
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#f8f8f8] px-6 py-20">
        <div className="mx-auto max-w-4xl animate-fadeIn rounded-2xl bg-white p-8 shadow-sm md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-light tracking-wide text-[#1f1f1f] md:text-4xl">
              Get in touch
            </h2>
            <div className="mx-auto mt-5 h-[1px] w-24 bg-gray-400" />
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-[#c87532]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-[#c87532]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Your Inquiry
              </label>
              <select
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[#c87532]"
              >
                <option>Investment Opportunities</option>
                <option>Upcoming Projects</option>
                <option>Customer Service</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                name="message"
                rows="6"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-[#c87532]"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block rounded-md border border-[#c87532] px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-[#1f1f1f] transition hover:bg-[#c87532] hover:text-white"
              >
                Leave Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}