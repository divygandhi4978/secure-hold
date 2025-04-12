import React from "react";
import { Ripples } from "ldrs/react";
import "ldrs/react/Ripples.css";

export default function Loader() {
  return (
    <div className="h-[500px] w-auto flex justify-center items-center">
      <div className="">
        <Ripples size="45" speed="2" color="black" />
      </div>
    </div>
  );
}
