import AccSec from "@/sections/AccSec";
import Body from "@/sections/Body";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Subscribe from "@/sections/Subscribe";
import React from "react";

export default function Home() {
  document.title = "SecureHold : Password Manger";
  const scrollTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div>
      <Hero />
      <Body />
      <Features />
      <Subscribe />
      <AccSec/>
      <Footer />
      <div
        className=" fixed sm:right-5 sm:bottom-5 right-3 bottom-3 bg-zinc-900 rounded-md text-white w-10 h-10 flex items-center justify-center text-2xl font-extrabold"
        onClick={() => {
          scrollTop();
        }}
      >
        ↑
      </div>
    </div>
  );
}
