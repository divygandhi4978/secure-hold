import React from "react";
import { Ripples } from "ldrs/react";
import "ldrs/react/Ripples.css";

export default function Loader() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-1/2">
        <Ripples size="45" speed="2" color="black" />
      </div>
    </div>
  );
}
