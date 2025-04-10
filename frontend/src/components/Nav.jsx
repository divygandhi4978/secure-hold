import React, { useRef, useState } from "react";
import { webicon } from "../assets/icons";
import PopOver from "./PopOver";
import { NavLink } from "react-router";

export default function Nav() {
  const toggle = () => {
    if (menu == 1) {
      setTimeout(() => {
        setMenu(0);
      }, 150);
    } else {
      setTimeout(() => {
        setMenu(1);
      }, 150);
    }
  };

  const [menu, setMenu] = useState(0);

  return (
    <div className=" justify-center flex z-1000 ">
      <header className="bg-white rounded-xl shadow-md md:w-3/6 max-sm:w-full m-1">
        <div>
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="md:flex md:items-center md:gap-12">
                <NavLink className="block text-teal-600" to="/home">
                  <img src={webicon} alt="icon"/>
                </NavLink>
              </div>

              <div className="hidden md:block">
                <nav aria-label="Global">
                  <ul className="flex items-center gap-6 text-sm">
                    <li>
                      <NavLink
                        to="/home"
                        className="text-[#222725] transition hover:text-gray-700/75"
                      >
                        Home
                      </NavLink>

                   
                    </li>

                    <li>
                      <NavLink
                        className="text-[#222725] transition hover:text-gray-700/75"
                        to="/features"
                      >
                        {" "}
                        Features{" "}
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className="text-[#222725] transition hover:text-gray-700/75"
                        to="/faqs"
                      >
                        {" "}
                        FAQs{" "}
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <NavLink
                    className="rounded-lg bg-[#222725] hover:bg-[#2f2f2c] px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                    to="/login"
                  >
                    Login
                  </NavLink>

                  <div className="hidden sm:flex">
                    <NavLink
                      className="rounded-lg bg-gray-100 hover:bg-[#d1d5db] px-5 py-2.5 text-sm font-medium text-[#222725]"
                      to="/signup"
                    >
                      Register
                    </NavLink>
                  </div>
                </div>

                <div className="block md:hidden" onClick={() => toggle()}>
                  <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
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
            </div>
          </div>
        </div>

        {menu == 1 && <PopOver className="absolute top-9 left-2 sm:hidden" />}
      </header>
    </div>
  );
}
