"use client";

import Link from "next/link";
import Image from "next/image";
import upArrow from "../../../public/icons/up-arrow.png";

export default function Footer() {
  return (
    <footer className="relative w-full p-6 flex justify-between bg-neutral-800 rounded-3xl shadow-sm">
      <div className="flex flex-col gap-4">
        <ul className="flex flex-col gap-3 text-[1.1rem] font-semibold text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact Me</Link>
          </li>
        </ul>
        <p className="text-neutral-300 max-w-[900px] mt-4">
          This site was coded in{" "}
          <span className="text-pink-300 font-semibold">
            Visual Studio Code
          </span>
          , using <span className="text-pink-300 font-semibold">Next js</span>,{" "}
          <span className="text-pink-300 font-semibold">Typescript</span> and{" "}
          <span className="text-pink-300 font-semibold">Tailwind CSS</span>.
          Deployed on{" "}
          <span className="text-pink-300 font-semibold">Vercel</span> using{" "}
          <span className="text-pink-300 font-semibold">Nodemailer</span> for
          the contact form.
        </p>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute top-6 right-6 bg-white/30 rounded-full p-4 shadow-lg ring-1 ring-black/5 h-fit transition-all hover:-translate-y-1 hover:bg-white/40">
        <Image src={upArrow} alt="" className="size-6" />
      </button>
    </footer>
  );
}
