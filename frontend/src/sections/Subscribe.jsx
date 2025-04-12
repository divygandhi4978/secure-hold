import React, { useState } from "react";
import bgImg from "../assets/images/subsBg.jpg";

export default function Subscribe() {
  const submitCheck = () => {
    //Add isEmpty email value ; then throw error instead of response store.
    if (1) {
      setStatus("Recorded Successfully.");
      setStatusCode(1);
    } else {
      setStatus("⚠️ Try again..!");
      setStatusCode(1);
    }
  };

  const [status, setStatus] = useState("");
  const [statusCode, setStatusCode] = useState(-1);

  return (
    <div
      className="bg-cover bg-center max-sm:h-[min(50vh,400px)] sm:h-[min(40vh,400px)] mt-16 rounded-xl flex justify-center items-end bg-fixed "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className=" w-4/5 h-4/5 md:h-4/6 text-[#0d1321] rounded-xl flex-col m-3 justify-center items-center">
        <h1 className="text-2xl font-bold sm:text-[40px]">
          Subscribe to our Newsletter
        </h1>
        <p className="mt-5 font-semibold text-gray-800">
          Get exclusive updates & offers directly in your inbox.
        </p>
        <div className="mx-auto max-w-xs sm:max-w-md flex flex-col mt-5 items-center">
          {statusCode != 1 && (
            <div className="flex w-full max-w-xs sm:max-w-md">
              <input
                type="text"
                className="p-3 w-full bg-[#191a1f] rounded-l-md text-white placeholder-white focus:outline-none"
                placeholder="info@acme.com"
              />
              <button
                type="button"
                onClick={submitCheck}
                className="p-3 bg-[#3662e3] text-white font-semibold rounded-r-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          )}

          {statusCode == 1 && (
            <h4 className="text-green-800 font-bold mt-2 text-3xl">
              {status}{" "}
            </h4>
          )}
          {statusCode == 0 && (
            <h4 className="text-gray-900 font-bold mt-2"> {status}</h4>
          )}
        </div>
      </div>
    </div>
  );
}
