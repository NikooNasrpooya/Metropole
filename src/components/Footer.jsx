import logo from "../assets/logo.png";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-[#1c3425] via-[#203826] to-[#162d22] text-white">

      {/* Main Footer */}
      <div className="mx-auto grid grid-cols-1 gap-12 px-12 py-20 md:grid-cols-3">

        {/* Left Navigation */}
        <div className="space-y-6 text-lg">
          <a href="#" className="block hover:text-[#d4812e]">HOME</a>
          <a href="#" className="block hover:text-[#d4812e]">ABOUT</a>
        </div>

        {/* Center Address */}
        <div className="space-y-6 text-gray-200">
          <p className="font-semibold text-white">Head Office:</p>

          <p>Unit 203 – 1595 16th Avenue</p>
          <p>L4B 3N9, Richmond Hill, Ontario</p>
          <p>T. 647 476 7212</p>
        </div>

        {/* Right Logo + Social */}
        <div className="flex flex-col items-start md:items-end gap-6">

          <img
            src={logo}
            alt="Metropole Development"
            className="h-20 w-auto"
          />

          <p className="text-sm tracking-wide text-gray-200 text-left md:text-right">
            METROPOLE <br />
            DEVELOPMENT INC
          </p>

          <div className="flex gap-6">
            <Instagram className="cursor-pointer hover:text-[#d4812e]" />
            <Facebook className="cursor-pointer hover:text-[#d4812e]" />
            <Linkedin className="cursor-pointer hover:text-[#d4812e]" />
          </div>

        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-300">
        © 2023 Metropole Development Inc. | All Rights Reserved.
      </div>

    </footer>
  );
}