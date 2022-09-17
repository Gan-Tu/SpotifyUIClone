import clsx from "clsx";
import React from "react";
import Image from "next/image";
import {
  HeartCircleIcon,
  MinusCircleIcon,
  PlayIcon,
  BackwardIcon,
  ForwardIcon
} from "./Icons";

export default function BottomControl() {
  return (
    <div className="sticky bottom-0 bg-[#181818] px-3 py-9 text-white">
      <div className="grid grid-cols-5">
        <div className="flex space-x-8 col-span-1">
          <div>
            <p className="text-sm font-base transparent-selection">
              Meet Me At Our Spot
            </p>
            <p className="text-xs text-gray-300 transparent-selection">
              The Mayries
            </p>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center text-gray-400 hover:text-white cursor-pointer">
              <HeartCircleIcon className="w-5 h-5" />
            </div>
            <div className="flex items-center text-gray-400 hover:text-white cursor-pointer">
              <MinusCircleIcon className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="col-span-3 mx-auto">
          <div>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-400 hover:text-white cursor-pointer">
                <BackwardIcon className="w-6 h-6" />
              </div>
              <div className="flex items-center cursor-pointer rounded-full bg-white p-1 text-center">
                <PlayIcon className="w-6 h-6" />
              </div>
              <div className="flex items-center text-gray-400 hover:text-white cursor-pointer">
                <ForwardIcon className="w-6 h-6" />
              </div>
            </div>
            {/* <div className="">
              <div className="border-b border-t m-2 border-white-700 w-96" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
