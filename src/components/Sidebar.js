import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const toggle = useSelector((store) => store.app.isMenuOpen);

  if (!toggle) return null;

  return (
    <div className="mt-14  bg-white absolute z-30">
      <ul className="w-[150%] pt-4 bg-white  h-screen m-1 ">
        <li className="m-1 p-2 rounded-lg text-center cursor-pointer hover:bg-gray-300">
          {" "}
         <Link to={"/"}> Home </Link>{" "}
        </li>
        <li className="m-1 p-2 rounded-lg text-center cursor-pointer hover:bg-gray-300">
          {" "}
          Shorts
        </li>
        <li className="m-1 p-2 rounded-lg text-center cursor-pointer hover:bg-gray-300">
          Subscriptions
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default Sidebar;
