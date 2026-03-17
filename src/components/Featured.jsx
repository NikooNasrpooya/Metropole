import { ChevronLeft, ChevronRight } from "lucide-react";
import kitchen from "../assets/kitchen.png";
import livingroom from "../assets/livingroom.png";

export default function Featured() {
  return (
    <section className="bg-[#f4f4f4] px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src={livingroom}
            className="h-[500px] w-full object-cover rounded-md"
          />

          {/* Arrows */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white">
            <ChevronLeft size={32} />
          </button>

          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white">
            <ChevronRight size={32} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            <div className="h-2 w-2 rounded-full bg-white/50"></div>
            <div className="h-2 w-2 rounded-full bg-[#c77a2c]"></div>
            <div className="h-2 w-2 rounded-full bg-white/50"></div>
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div>
          <p className="text-sm tracking-widest text-gray-500">
            FEATURED PROJECT
          </p>

          <h2 className="mt-2 text-4xl font-light tracking-wide text-gray-800">
            HARRIS GATE
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Featured Project / Harris Gate: Centrally located at Jefferson Side
            Road and Yonge Street, Harris Gate in Richmond Hill is a new
            prestigious enclave of 49 luxury townhomes in the heart of the
            Jefferson community. Designed with modern, contemporary
            architecture, each home features open concept living areas, perfect
            for multi-generation living, with large bedrooms, a spacious kitchen
            and a sunlit ground floor area ideal for a home office with access
            to the beautiful backyard.
          </p>

          {/* Bullet Points */}
          <ul className="mt-6 space-y-3 text-gray-600">
            <li>• Remarkable architecture with modern exterior elevations</li>
            <li>• Large private backyards with walkout deck</li>
            <li>• Exceptional 10’ ceilings on main floor</li>
            <li>• Open concept living spaces</li>
            <li>• Wide selection of high-quality flooring</li>
          </ul>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="border-2 border-[#c77a2c] px-6 py-3 text-gray-700 hover:bg-[#c77a2c] hover:text-white transition">
              Learn More
            </button>

            <button className="bg-[#c77a2c] px-6 py-3 text-white hover:opacity-90 transition">
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
