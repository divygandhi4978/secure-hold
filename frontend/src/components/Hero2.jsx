import React from "react";
import img from "../assets/images/Hero2Icon.avif";

export default function Hero2() {
  return (
    <section class="text-black-900 sm:p-5 pt-10 sm:pt-20">
      <div class="flex flex-col w-full">
        <h1 class="sm:text-3xl text-[20px] font-bold mb-4 text-gray-900">
          What is a password manager?
        </h1>
        <p class="lg:w-2/3 mx-auto font-medium text-[#595452]">
          A password manager is a digital safe that encrypts and stores your
          login credentials, passkeys and personal details, and sensitive
          informations. With it, you can generate strong passwords.
        </p>
      </div>

      <div className="flex justify-center ">
        <div class="sm:w-4/5 max-sm:flex-col sm:flex mt-10 bg-[#15362f] sm:p-10 p-4 rounded-lg justify-center items-center sm:h-[160px]">
          <img src={img} width={150} className="mx-auto max-sm:mt-4 hover:scale-105 transition-all duration-75" />
          <p class="lg:w-2/3 font-medium text-[#ced9d5] max-sm:mt-5">
            A password manager app remembers your passwords, so you don’t need
            to. It also helps you organize them, fill in login forms with a
            click, and autosave new passwords when you visit new websites.
          </p>
        </div>
      </div>
    </section>
  );
}
