import React from "react";
import image2 from "../assets/images/body2.png";

export default function Body() {
  return (
    <div className="sm:px-8 md:px-16 flex justify-center">
      <div>
        <div className="pt-16 sm:px-10 md:px-16 flex justify-start">
          <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">
            Passwords
          </span>
        </div>

        <div className="sm:px-10 md:px-16 flex justify-start mt-5">
          <h1 className="text-4xl max-sm:text-2xl max-sm:text-start md:text-3xl font-bold text-gray-800 mb-4">
            Manage Passwords with ease.
          </h1>
        </div>

        <div className=" bg-blue-100 p-5 sm:mx-10 rounded-lg hover:bg-blue-200 transition-all duration-500 w-full ">
          <div className="justify-center flex  transition-all duration-500">
            <img src={image2} className="sm:pl-10 sm:h-[225px] top-0 " />
          </div>
          <h3 className="max-sm:text-md max-sm:text-start font-bold text-blue-800  pt-3 sm:mx-10 sm:text-2xl">
            Everything properly sorted instead of mashing together on a single
            page.
          </h3>
          <h3 className="sm:text-2xl font-bold text-blue-950 max-sm:text-start pt-3 sm:mx-10 ">
            Your all passwords in one secure place.{" "}
          </h3>
        </div>
      </div>
    </div>
  );
}
