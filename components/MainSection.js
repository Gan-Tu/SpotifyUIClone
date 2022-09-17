import React from "react";
import Image from "next/image";
import { LeftIcon, RightIcon, PlayIcon } from "./Icons";
import AvatarImg from "../images/avatar.png";

function HorizontalAlbumCard({ img, label }) {
  return (
    <div className="rounded-lg bg-neutral-700 hover:bg-stone-600 shadow-md cursor-pointer hover:shadow-lg flex items-center space-x-5 group">
      <div class="relative flex w-20 h-20 ">
        <Image
          src={img}
          alt=""
          layout="fill"
          objectPosition="center"
          objectFit="contain"
          className="rounded-l-lg"
        />
      </div>
      <div className="flex items-center justify-between flex-1 pr-6">
        <p className="text-white font-medium text-base transparent-selection line-clamp-3">
          {label}
        </p>
        <div className="items-center cursor-pointer rounded-full bg-green-500 p-2 text-center shadow-lg hidden group-hover:inline-flex">
          <PlayIcon className="w-8 h-8" stroke="none" />
        </div>
      </div>
    </div>
  );
}

function VerticalAlbumCard({ img, label, snippet }) {
  return (
    <div className="rounded-lg bg-stone-800 hover:bg-neutral-700 group flex flex-col group cursor-pointer py-4">
      <div class="relative flex w-40 h-40 mx-auto shadow-lg">
        <Image
          src={img}
          alt=""
          layout="fill"
          objectPosition="center"
          objectFit="contain"
          className="rounded-lg"
        />
        <div className="absolute bottom-2 right-2 items-center cursor-pointer rounded-full bg-green-500 p-2 text-center shadow-lg hidden group-hover:inline group-hover:transform-y-12 transition-all transform ease-out duration-300">
          <PlayIcon className="w-8 h-8" stroke="none" />
        </div>
      </div>
      <div className="mx-4 text-white font-medium text-base transparent-selection line-clamp-1 my-2">
        <p>{label}</p>
      </div>
      <div className="mx-4 text-xs transparent-selection font-light text-[#bdb9b9] line-clamp-2">
        <p>{snippet}</p>
      </div>
    </div>
  );
}

export default function MainSection({ highlights, albums }) {
  return (
    <div className="col-span-4 py-5 px-8 bg-gradient-to-b from-[#662043] via-[#181818] to-[#181818] overflow-hidden min-h-screen">
      {/* Top Bar */}
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

      {/* Personal Album */}
      <div className="pt-10">
        <h1 className="text-white font-semibold text-3xl pb-4">
          Good afternoon
        </h1>
        <div className="grid grid-cols-3 gap-8">
          {highlights?.map((item) => (
            <HorizontalAlbumCard
              key={item.img}
              img={item.img}
              label={item.label}
            />
          ))}
        </div>
      </div>

      {albums?.map((section) => (
        <div className="pt-10">
          <h1 className="text-white font-semibold text-xl pb-4">
            {section.title}
          </h1>
          <div className="grid grid-cols-5 gap-8">
            {section.items?.map((item) => (
              <VerticalAlbumCard
                key={item.img}
                img={item.img}
                label={item.label}
                snippet={item.snippet}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
