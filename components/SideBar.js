import clsx from "clsx";
import React from "react";
import { HomeIcon, StackIcon, SearchIcon } from "./Icons";

function MenuItem({ Icon, Label, isActive }) {
  return (
    <div
      className={clsx(
        "flex items-center space-x-3 cursor-pointer hover:text-white",
        isActive ? "text-white" : "text-gray-400"
      )}
    >
      {<Icon className="w-6 h-6" />}
      <p>{Label}</p>
    </div>
  );
}

function SideBar() {
  return (
    <div className="col-span-1 bg-black h-screen px-5 py-5 rounded-r-md">
      <div className="text-white flex flex-col space-y-4 p-4">
        <MenuItem Icon={HomeIcon} Label="Home" isActive />
        <MenuItem Icon={SearchIcon} Label="Search" />
        <MenuItem Icon={StackIcon} Label="Your Library" />
      </div>
    </div>
  );
}

export default SideBar;
