"use client";

import airplaneIcon from "../../../public/icons/paper-airplane.png";
import Image from "next/image";

export default function HomeJumbotron() {
  return (
    <div className="my-64">
      <p className="text-white text-4xl sm:text-5xl font-semibold mb-4 tracking-wide">
        <span className="mr-2">&#128075;</span> Hi, I'm Ryan
      </p>
      <h1 className="text-neutral-400 text-xl mb-6">
        A passionate{" "}
        <span className="font-semibold text-white">Full Stack Developer</span>{" "}
        and <br /> professional problem solver who loves to build things!
      </h1>
      <button
        onClick={() => alert("Feature no ready!")}
        className="w-fit bg-red-400 text-white text-lg font-semibold rounded-full py-3 px-4 shadow-lg ring-1 ring-black/5 h-fit transition-all hover:-translate-y-1 hover:brightness-110">
        See Resume
        <Image src={airplaneIcon} alt="" className="size-4 inline-block ml-2" />
      </button>
    </div>
  );
}
