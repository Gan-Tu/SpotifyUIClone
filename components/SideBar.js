import clsx from "clsx";
import React from "react";
import { HomeIcon, StackIcon, SearchIcon, PlusIcon, HeartIcon } from "./Icons";

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
        <MenuItem
          Icon={() => <StackIcon className="w-6 h-6 -rotate-90" />}
          Label="Your Library"
        />
        <br />
        <MenuItem
          Icon={() => (
            <PlusIcon className="w-6 h-6 bg-gray-400 max-w-fit text-gray-900 p-1 rounded-sm" />
          )}
          Label="Create Playlist"
        />
        <MenuItem
          Icon={() => (
            <HeartIcon className="w-6 h-6 bg-gradient-to-br from-indigo-500 via-indigo-600 to-blue-300 fill-gray-400 max-w-fit text-gray-900 p-1 rounded-sm" />
          )}
          Label="Liked Songs"
        />
      </div>
    </div>
  );
}

export default SideBar;
