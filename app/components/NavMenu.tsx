"use client";

import Image from "next/image";
import menuIcon from "../../public/icons/menu.png";
import closeIcon from "../../public/icons/close.png";
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
        className="bg-white/30 rounded-full p-4 shadow-lg ring-1 ring-black/5 h-fit transition-colors hover:bg-white/40">
        <Image src={menuIcon} alt="" className="size-6" />
      </button>
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute bg-black/50 -top-5 -right-5 h-[1000px] w-screen -z-10`}></div>
      <nav
        ref={navRef}
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute w-full p-6 pt-24 rounded-3xl bg-gradient-header top-0 right-0`}>
        <button
          onClick={() => setMenuOpen(false)}
          ref={closeMenuBtn}
          className="absolute top-3 right-3 bg-white/30 rounded-full p-4 shadow-lg ring-1 ring-black/5 h-fit transition-colors hover:bg-white/40">
          <Image src={closeIcon} alt="" className="size-6" />
        </button>
        <ul className="flex flex-col gap-4">
          <li className="font-bold text-4xl text-right transition-colors text-teal-400 hover:text-white/75">
            <Link href="/">Home</Link>
          </li>
          <li className="font-bold text-4xl text-right transition-colors text-yellow-400 hover:text-white/75">
            <Link href="/about">About Me</Link>
          </li>
          <li className="font-bold text-4xl text-right transition-colors text-red-400 hover:text-white/75">
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className="font-bold text-4xl text-right transition-colors text-white hover:text-white/75">
            <Link href="/contact">Get in Touch</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
