import React from "react";
import { HUNDRED, SATISFIED_CUST, SLOGAN, YOUR_TRUSTED_STORE } from "../../constants";

const Slogan = () => {
  return (
    <div className="flex justify-between pb-32">
      <div className=" ml-44">
        <h3 className="text-start font-inter font-bold text-xl text-red-600">
          Pharmachy Store
        </h3>
        <h4 className="text-6xl mt-10 mb-11 font-inter font-semibold w-[560px] text-start">
          {YOUR_TRUSTED_STORE}
        </h4>
        <p className="text-l mt-10 text-gray-500 w-[430px] text-start">
          {SLOGAN}
        </p>
        <div className="flex mt-11">
          <span className="rounded-full border-r-2 border-solid border-white absolute bg-black h-14 w-14 z-30"></span>
          <span className="rounded-full relative left-12 border-r-2 border-solid  border-white bg-black h-14 w-14 z-20"></span>
          <span className="rounded-full relative left-8 border-r-2 border-solid border-white bg-black h-14 w-14 z-10"></span>
          <span className="rounded-full relative left-4 border-r-2 border-solid border-white bg-black h-14 w-14 z-0"></span>

          <div className="ml-20">
            <h4 className="text-red-600 h-7 text-start">{HUNDRED}</h4>
            <p className="font-inter font-medium text-sm">{SATISFIED_CUST}</p>
          </div>
        </div>
      </div>
      <div>
        <img src="" />
      </div>
    </div>
  );
};

export default Slogan;
