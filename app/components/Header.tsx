import NavMenu from "./NavMenu";
import homeIcon from "../../public/icons/home.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full p-3 flex justify-between bg-gradient-header rounded-3xl shadow-sm">
      <button className="bg-white/30 rounded-full p-3 shadow-lg ring-1 ring-black/5 h-fit transition-colors hover:bg-white/40">
        <Image src={homeIcon} alt="" className="size-8" />
      </button>
      <NavMenu />
    </header>
  );
}
