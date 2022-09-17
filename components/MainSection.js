import clsx from "clsx";
import React from "react";
import Image from "next/image";
import { LeftIcon, RightIcon } from "./Icons";
import AvatarImg from "../images/avatar.png";

export default function MainSection() {
  return (
    <div className="col-span-4 py-5 px-8">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <div className="flex items-center text-gray-400 hover:text-white cursor-pointer bg-black opacity-80 rounded-full p-2 transparent-selection">
            <LeftIcon className="w-5 h-5" />
          </div>
          <div className="flex items-center text-gray-400 hover:text-white cursor-pointer bg-black opacity-80 rounded-full p-2 transparent-selection">
            <RightIcon className="w-5 h-5" />
          </div>
        </div>
        <div className="flex items-center jsutify-center space-x-2 bg-black hover:bg-neutral-800 rounded-full pr-3 pl-1 py-1 cursor-pointer">
          <div class="relative flex w-7 h-7">
            <Image
              src={AvatarImg}
              alt=""
              layout="fill"
              objectPosition="center"
              objectFit="contain"
              className="rounded-full"
            />
          </div>
          <p className="text-gray-200 text-xs font-medium transparent-selection">
            Gan Tu
          </p>
          <div className="flex items-center text-gray-200 hover:text-white cursor-pointer bg-transparent opacity-80 rounded-full transparent-selection">
            <RightIcon className="w-4 h-4 rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
}
