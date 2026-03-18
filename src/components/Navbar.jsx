import { ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full bg-linear-to-r from-[#1c3425] via-[#203826] to-[#162d22] text-white">
      <div>
        <div className="flex items-center gap-4 px-20">
          <img
            src={logo}
            alt="Metropole Development Inc."
            className="h-16 w-auto object-contain"
          />

          <div className="mx-auto flex h-24 items-center justify-between px-8 lg:px-12">
            {/* Left: Logo + Brand */}
          </div>

          {/* Right: Nav */}
          <nav className="z-50 hidden items-center gap-12 lg:flex">
            <Link
              to="/"
              className="text-[18px] font-semibold uppercase tracking-wide text-[#d8832e] transition hover:text-[#d8832e]"
            >
              Home
            </Link>

            <a
              href="#about"
              className="text-[18px] font-semibold uppercase tracking-wide text-white transition hover:text-[#d8832e]"
            >
              About
            </a>

            <a
              href="#projects"
              className="flex items-center gap-1 text-[18px] font-semibold uppercase tracking-wide text-white transition hover:text-[#d8832e]"
            >
              Projects
              <ChevronDown size={16} strokeWidth={2.5} />
            </a>

            <a
              href="#contact"
              className="text-[18px] font-semibold uppercase tracking-wide text-white transition hover:text-[#d8832e]"
            >
              Contact
            </a>

            <Link
              to="/register"
              className="rounded-2xl border-2 border-[#d8832e] px-6 py-3 text-[18px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#d8832e] hover:text-white"
            >
              Register
            </Link>
          </nav>

          {/* Mobile button */}
          <button className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
    );
}
  
