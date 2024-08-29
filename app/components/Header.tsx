import NavMenu from "./NavMenu";
import homeIcon from "../../public/icons/home.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative w-full p-3 flex justify-between bg-neutral-950 rounded-3xl shadow-sm z-50">
      <Link className="-z-10" href="/">
        <div className="bg-neutral-700 rounded-full p-4 h-fit transition-all hover:-translate-y-1 hover:bg-neutral-600">
          <Image src={homeIcon} alt="" className="size-6" />
        </div>
      </Link>
      <NavMenu />
    </header>
  );
}
