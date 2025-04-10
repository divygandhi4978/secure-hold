import React from "react";
import img from "../assets/images/heroImg.avif";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function Hero1() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="text-gray-600 body-font mt-0">
        <div className="container mx-auto flex sm:px-36 py-18 pt-14 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-slate-900">
              Secure and intuitive password manager
            </h1>
            <p className="mb-8 leading-relaxed text-[#595452]">
              Organize your complex passwords and keep them securely in a single
              place - the NordPass password manager.
            </p>
            <div className="flex justify-center">
              <motion.div
                className="inline-flex text-white bg-[#232725] border-0 py-2 px-6 focus:outline-none hover:bg-[#333c38] rounded text-lg"
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Get Registered.
              </motion.div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={img}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
