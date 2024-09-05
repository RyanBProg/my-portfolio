"use client";

import Image from "next/image";
import menuIcon from "../../../public/icons/menu.png";
import closeIcon from "../../../public/icons/close.png";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);
  const closeMenuBtn = useRef(null);

  // auto focus first item in nav menu
  useEffect(() => {
    if (menuOpen) {
      const firstChild = navRef.current?.querySelector("a");
      firstChild?.focus();
    }
  }, [menuOpen]);

  // closes nav menu when clicking outside
  const handleClickOutsideMenu = (event: MouseEvent) => {
    if (
      closeMenuBtn.current &&
      (closeMenuBtn.current as HTMLElement).contains(event.target as Node)
    ) {
      return;
    }
    if (
      navRef.current &&
      !(navRef.current as HTMLElement).contains(event.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutsideMenu);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [menuOpen]);

  // hide menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        onClick={() => setMenuOpen(true)}
        className="bg-neutral-700 rounded-full p-4 h-fit transition-all hover:-translate-y-1 -z-10 hover:bg-neutral-600">
        <Image src={menuIcon} alt="" className="size-6" />
      </button>
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } fixed bg-black/95 top-0 right-0 bottom-0 w-screen -z-10`}></div>
      <nav
        ref={navRef}
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute w-full p-6 pt-24 rounded-3xl bg-grey-500 top-0 right-0`}>
        <button
          onClick={() => setMenuOpen(false)}
          ref={closeMenuBtn}
          className="absolute top-3 right-3 bg-neutral-700 rounded-full p-4 shadow-lg ring-1 ring-black/5 h-fit transition-all hover:-translate-y-1 hover:bg-neutral-600">
          <Image src={closeIcon} alt="" className="size-6" />
        </button>
        <ul className="flex flex-col gap-4 items-end">
          <li className="font-bold text-4xl text-right transition-all hover:-translate-y-1 text-neutral-300 bg-neutral-800 p-2 rounded-2xl w-fit hover:brightness-110">
            <Link href="/">Home</Link>
          </li>
          <li className="font-bold text-4xl text-right transition-all hover:-translate-y-1 text-neutral-300 bg-neutral-800 p-2 rounded-2xl w-fit hover:brightness-110">
            <Link href="/contact">Get in Touch</Link>
          </li>
          <span className="text-neutral-600 text-xl font-bold boreder-none mt-10 -mb-3">
            Portfolio Projects
          </span>
          <hr className="bg-neutral-600 w-full h-[2px] border-none mb-4" />
          <li className="font-bold text-4xl text-right transition-all hover:-translate-y-1 bg-red-300 p-2 rounded-2xl w-fit hover:brightness-110">
            <Link href="/portfolio">Project 1</Link>
          </li>
          <li className="font-bold text-4xl text-right transition-all hover:-translate-y-1 text-neutral-300 bg-neutral-800 p-2 rounded-2xl w-fit hover:brightness-110">
            <Link href="/portfolio">Project 2</Link>
          </li>
          <li className="font-bold text-4xl text-right transition-all hover:-translate-y-1 bg-red-400 p-2 rounded-2xl w-fit hover:brightness-110">
            <Link href="/portfolio">Project 3</Link>
          </li>
          <li className="font-bold text-4xl text-right transition-all hover:-translate-y-1 bg-pink-500 p-2 rounded-2xl w-fit hover:brightness-110">
            <Link href="/portfolio">Project 4</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
