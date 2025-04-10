import { circularProgressClasses } from "@mui/material";
import React from "react";

const EachFeature = (props) => {
  const { element } = props;
  const {head,body,icon,bgClr,bgHover} = element

  return (
    <div
      className={`max-lg:my-3 lg:mx-1 lg:w-1/4 rounded-[8px] hover:rounded-[40px] transition-all duration-200 p-7 text-gray-400 ${bgClr} ${bgHover}`}
    >
      <div className="min-h-16 sm:my-7 my-3 ">
        <img src={icon} alt={head} className="sm:h-14 h-10" />
      </div>
      <h1 className="text-2xl font-semibold mb-4 flex text-start text-white ">
        {head}
      </h1>
      <div className="space-y-4">
        <div className="w-3/4 rounded">
          <p className="text-start">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default EachFeature;
