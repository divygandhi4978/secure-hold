import React from "react";
import ele, { main } from "../constants/Features";
import EachFeature from "../components/EachFeature";

export default function Features() {
  return (
    <>
      <div className="mt-20">
        <h1 className="sm:text-3xl font-bold mb-4 p-1 ">{main.head}</h1>
        <div className="text-lg lg:w-2/3 mx-auto">{main.body}</div>
      </div>
      <div className="md:flex sm:p-10 mt-3">
        {ele?.map((element) => {
          return <EachFeature element={element} />;
        })}
      </div>
    </>
  );
}
