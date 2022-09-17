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

function VerticalAlbumCard({ img, label }) {
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
        <p>
          Nulla faucibus congue purus ac pretium. Ut eleifend, risus nec
          sollicitudin suscipit, erat augue rhoncus elit
        </p>
      </div>
    </div>
  );
}

export default function MainSection() {
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
          <HorizontalAlbumCard
            img="https://i.scdn.co/image/ab67706f00000002d90725e204c8baf1d8042fc5"
            label="Discover Weekly"
          />
          <HorizontalAlbumCard
            img="https://i.scdn.co/image/ab67706c0000da844b0b8124f985c9d89ae0fd1c"
            label="Lofi Fruits Music"
          />
          <HorizontalAlbumCard
            img="https://i.scdn.co/image/ab67616d0000b2736d1ae09f3ba9aadf91fdb0e7"
            label="Questions (Remix Pack)"
          />
          <HorizontalAlbumCard
            img="https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36"
            label="Justin Bieber"
          />
          <HorizontalAlbumCard
            img="https://i.scdn.co/image/ab67706f00000002d5f2eb7b9d2c5af9c97884da"
            label="Hot Hits USA"
          />
          <HorizontalAlbumCard
            img="https://i.scdn.co/image/ab67706f00000002a0fef2076efa27870e02f958"
            label="Today's Top Hits"
          />
        </div>
      </div>

      {/* Jump Back In */}
      <div className="pt-10">
        <h1 className="text-white font-semibold text-xl pb-4">Jump Back In</h1>
        <div className="grid grid-cols-5 gap-8">
          <VerticalAlbumCard
            img="https://i.scdn.co/image/ab67706f00000002d90725e204c8baf1d8042fc5"
            label="Discover Weekly"
          />
          <VerticalAlbumCard
            img="https://i.scdn.co/image/ab67706c0000da844b0b8124f985c9d89ae0fd1c"
            label="Lofi Fruits Music"
          />
          <VerticalAlbumCard
            img="https://i.scdn.co/image/ab67616d0000b2736d1ae09f3ba9aadf91fdb0e7"
            label="Questions (Remix Pack)"
          />
          <VerticalAlbumCard
            img="https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36"
            label="Justin Bieber"
          />
          <VerticalAlbumCard
            img="https://i.scdn.co/image/ab67706f00000002d5f2eb7b9d2c5af9c97884da"
            label="Hot Hits USA"
          />
          <VerticalAlbumCard
            img="https://i.scdn.co/image/ab67706f00000002d90725e204c8baf1d8042fc5"
            label="Discover Weekly"
          />
          <VerticalAlbumCard
            img="https://i.scdn.co/image/ab67706c0000da844b0b8124f985c9d89ae0fd1c"
            label="Lofi Fruits Music"
          />
          <VerticalAlbumCard
            img="https://i.scdn.co/image/ab67616d0000b2736d1ae09f3ba9aadf91fdb0e7"
            label="Questions (Remix Pack)"
          />
          <VerticalAlbumCard
            img="https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36"
            label="Justin Bieber"
          />
          <VerticalAlbumCard
            img="https://i.scdn.co/image/ab67706f00000002d5f2eb7b9d2c5af9c97884da"
            label="Hot Hits USA"
          />
          <VerticalAlbumCard
            img="https://i.scdn.co/image/ab67706f00000002d90725e204c8baf1d8042fc5"
            label="Discover Weekly"
          />
          <VerticalAlbumCard
            img="https://i.scdn.co/image/ab67706c0000da844b0b8124f985c9d89ae0fd1c"
            label="Lofi Fruits Music"
          />
          <VerticalAlbumCard
            img="https://i.scdn.co/image/ab67616d0000b2736d1ae09f3ba9aadf91fdb0e7"
            label="Questions (Remix Pack)"
          />
          <VerticalAlbumCard
            img="https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36"
            label="Justin Bieber"
          />
          <VerticalAlbumCard
            img="https://i.scdn.co/image/ab67706f00000002d5f2eb7b9d2c5af9c97884da"
            label="Hot Hits USA"
          />
          <VerticalAlbumCard
            img="https://i.scdn.co/image/ab67706f00000002d90725e204c8baf1d8042fc5"
            label="Discover Weekly"
          />
          <VerticalAlbumCard
            img="https://i.scdn.co/image/ab67706c0000da844b0b8124f985c9d89ae0fd1c"
            label="Lofi Fruits Music"
          />
          <VerticalAlbumCard
            img="https://i.scdn.co/image/ab67616d0000b2736d1ae09f3ba9aadf91fdb0e7"
            label="Questions (Remix Pack)"
          />
          <VerticalAlbumCard
            img="https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36"
            label="Justin Bieber"
          />
          <VerticalAlbumCard
            img="https://i.scdn.co/image/ab67706f00000002d5f2eb7b9d2c5af9c97884da"
            label="Hot Hits USA"
          />
        </div>
      </div>
    </div>
  );
}
