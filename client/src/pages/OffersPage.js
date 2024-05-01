import React from "react";
import TruckIcon from "../TruckIcon";
import { FREE_SHIPPING } from "../constants";

const OffersPage = () => {
  return (
    <div>
      <div className="mx-11 h-56 grid grid-cols-4 gap-2">
        <div>
          <div className="flex">
            <TruckIcon />
            <p className=" font-inter font-semibold text-2xl p-auto">
              {FREE_SHIPPING}
            </p>
          </div>
        </div>
        <div className="flex">
          <TruckIcon />
          <p className=" font-inter font-semibold text-2xl">{FREE_SHIPPING}</p>
        </div>
        <div className="flex">
          <TruckIcon />
          <p className=" font-inter font-semibold text-2xl">{FREE_SHIPPING}</p>
        </div>
        <div className="flex">
          <TruckIcon />
          <p className=" font-inter font-semibold text-2xl">{FREE_SHIPPING}</p>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
