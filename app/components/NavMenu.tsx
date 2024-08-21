import Image from "next/image";
import menuIcon from "../../public/icons/menu.png";

export default function NavMenu() {
  return (
    <div>
      <button className="bg-white/30 rounded-full p-3 shadow-lg ring-1 ring-black/5 h-fit transition-colors hover:bg-white/40">
        <Image src={menuIcon} alt="" className="size-8" />
      </button>
      <nav></nav>
    </div>
  );
}
