"use client";

import Link from "next/link";
import Image from "next/image";
import upArrow from "../../public/icons/up-arrow.png";

export default function Footer() {
  return (
    <footer className="relative w-full p-6 flex justify-between bg-gradient-header rounded-3xl shadow-sm">
      <div className="flex flex-col gap-4">
        <ul className="text-white/80 font-medium flex flex-col gap-3 text-[1.1rem]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact Me</Link>
          </li>
        </ul>
        <p className="text-white">
          &#169; Copyright 2024 | All Rights Reserved |
        </p>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute top-6 right-6 bg-white/30 rounded-full p-4 shadow-lg ring-1 ring-black/5 h-fit transition-colors hover:bg-white/40">
        <Image src={upArrow} alt="" className="size-6" />
      </button>
    </footer>
  );
}
