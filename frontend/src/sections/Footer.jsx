import React from "react";
import i1 from "../assets/images/footIcon.avif";

export default function Footer() {
  return (
    <div className="p-5 lg:ml-48 sm:mr-36 md:ml-0 mt-10">
      <div className="sm:flex max-sm:flex-col justify-around items-center">
        <div class="p-2 md:mr-4 text-4xl cursor-pointer relative before:absolute before:bg-[#5eccb7] before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
          <span class="relative font-bold font-mono text-4xl md:text-3xl lg:text-5xl">
            <a href="#">SecureHold</a>
          </span>
        </div>
        <img src={i1} width={300} className="max-sm:ml-4 max-sm:mt-7 hover:scale-105 transition-all duration-200"/>
      </div>
    </div>
  );
}
