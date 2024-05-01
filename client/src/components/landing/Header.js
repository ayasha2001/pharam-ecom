import React from "react";
import PharmacyLogo from "../../assets/PharmacyLogo";

const Header = () => {
  return (
    <div className="h-36 flex items-center justify-between ">
      <div className="flex item-start ml-44">
        <PharmacyLogo />
        <div className="ml-4">
          <p className="text-xl font-semibold font-inter text-blue-700 my-0">Pharmacy</p>
          <h4
            className="text-gray-400 relative bottom-2 font-inter text-sm font-sans text-start
           "
          >
            store
          </h4>
        </div>
      </div>

      <ul className="flex text-gray-500 text-l">
        <li className="mr-4">
          {/* <NavLink >Home</NavLink> */}
          Home
        </li>
        <li className="mr-4 ml-1">
          About us
          {/* <Link to="/about">About us</Link> */}
        </li>
        <li className="mr-4 ml-1">
          Products
          {/* <Link to="/services">Products</Link> */}
        </li>
        <li className="mr-4 ml-1">
          Contact
          {/* <Link to="/contact">Contact</Link> */}
        </li>
        <li>
          <label className="text-l text-white bg-blue-700 p-2 rounded-full mr-8 ml-4">
            {"+91-7999361232 ->"}
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Header;
