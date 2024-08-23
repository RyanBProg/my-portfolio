import Image from "next/image";
import Link from "next/link";
import airplaneIcon from "../public/icons/paper-airplane.png";
import typescriptIcon from "../public/icons/typescript.png";
import reactIcon from "../public/icons/atom.png";
import cssIcon from "../public/icons/css.png";
import nodeIcon from "../public/icons/node-js.png";
import portrait from "../public/images/demo-portrait.png";
import portfolio1 from "../public/images/shoe-junky.png";
import portfolio2 from "../public/images/url-shorty.png";
import portfolio3 from "../public/images/bookmarker.png";
import portfolio4 from "../public/images/taste-oasis.png";
import linkedinIcon from "../public/icons/linkedin.png";
import instaIcon from "../public/icons/instagram.png";
import webIcon from "../public/icons/web.png";
import githubIcon from "../public/icons/github.png";
import BentoLarge from "./components/BentoLarge";

export default function Home() {
  return (
    <main className="py-4">
      <section className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <div className="grid grid-cols-3 grid-rows-5 gap-4 h-[500px] xs:h-[450px]">
          <BentoLarge className="bentoSlide bg-white/10 col-span-3 row-span-3 relative flex flex-col justify-between items-end">
            <h1 className="text-white text-4xl xs:text-5xl font-bold w-full">
              Full-Stack Web <br />
              Developer
            </h1>
            <button className="w-fit bg-red-400 text-white font-semibold rounded-full py-3 px-4 shadow-lg ring-1 ring-black/5 h-fit transition-[filter] hover:brightness-110">
              Download CV
              <Image
                src={airplaneIcon}
                alt=""
                className="size-4 inline-block ml-2"
              />
            </button>
          </BentoLarge>
          <BentoLarge className="bentoSlide row-span-2 flex justify-center items-center bg-teal-400">
            <p className="text-center text-white text-sm xs:text-lg font-medium">
              <span className="block text-4xl xs:text-5xl font-bold mb-2">
                3+
              </span>
              Years Coding Experience
            </p>
          </BentoLarge>
          <BentoLarge className="bentoSlide row-span-2 flex justify-center items-center bg-yellow-400">
            <p className="text-center text-black text-lg font-medium">
              <span className="block text-5xl font-bold mb-2">10+</span>Years in
              Engineering
            </p>
          </BentoLarge>
          <BentoLarge className="bentoSlide row-span-2 flex justify-center items-center bg-blue-400">
            <p className="text-center text-white text-lg font-medium">
              <span className="block text-5xl font-bold mb-2">15+</span>
              Projects Completed
            </p>
          </BentoLarge>
        </div>
        <div className="grid grid-cols-2 grid-rows-5 gap-4 h-[500px] xs:h-[450px]">
          <BentoLarge className="bentoSlide bg-white/10 col-span-2 flex items-center">
            <p className="text-white text-2xl xs:text-4xl font-bold">
              &#128075; Ryan Bowler
            </p>
          </BentoLarge>
          <BentoLarge className="bentoSlide bg-teal-400 row-start-2 row-span-4 col-start-1 relative overflow-clip">
            <Image
              src={portrait}
              alt=""
              className="absolute -bottom-[200px] left-0 scale-150"
            />
          </BentoLarge>
          <BentoLarge className="bentoSlide bg-yellow-400 col-start-2 flex justify-center items-center gap-2 sm:gap-6 lg:gap-3 xl:gap-6">
            <button className="bg-white/30 rounded-full shadow-lg transition-colors hover:bg-white/75">
              <Image src={githubIcon} alt="" />
            </button>
            <button className="bg-white/30 rounded-full shadow-lg transition-colors hover:bg-white/75">
              <Image src={linkedinIcon} alt="" />
            </button>
            <button className="bg-white/30 rounded-full shadow-lg transition-colors hover:bg-white/75">
              <Image src={webIcon} alt="" />
            </button>
            <button className="bg-white/30 rounded-full shadow-lg transition-colors hover:bg-white/75">
              <Image src={instaIcon} alt="" />
            </button>
          </BentoLarge>
          <BentoLarge className="bentoSlide bg-white/10 col-start-2 row-span-3 text-white">
            <h2 className="text-2xl font-bold mb-4">Core Skills</h2>
            <ul className="text-white/80 font-medium flex flex-col gap-3 text-[1.1rem]">
              <li>
                <Image
                  src={typescriptIcon}
                  alt=""
                  className="inline-block mr-2 size-7"
                />
                Typescript
              </li>
              <li>
                <Image
                  src={reactIcon}
                  alt=""
                  className="inline-block mr-2 size-7"
                />
                React
              </li>
              <li>
                <Image
                  src={cssIcon}
                  alt=""
                  className="inline-block mr-2 size-7"
                />
                SCSS / Tailwind
              </li>
              <li>
                <Image
                  src={nodeIcon}
                  alt=""
                  className="inline-block mr-2 size-7"
                />
                Node js
              </li>
            </ul>
          </BentoLarge>
        </div>
      </section>
      <section className="grid grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-4 h-[450px] lg:h-[250px] mt-4">
        <BentoLarge className="bentoSlide bg-white/10 col-span-12 lg:col-span-7 row-span-1 flex flex-col gap-6">
          <div className="flex justify-between">
            <h2 className="text-white font-bold text-3xl">Portfolio</h2>
            <Link href="/portfolio">
              <button className="text-white/80 font-normal text-xl transition-colors hover:text-white">
                See More
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-3 xs:grid-cols-4 grid-rows-1 flex-grow gap-4">
            <div className="bg-amber-600 rounded-xl overflow-clip">
              <Image src={portfolio1} alt="" className="object-cover h-full" />
            </div>
            <div className="bg-slate-600 rounded-xl overflow-clip">
              <Image src={portfolio2} alt="" className="object-cover h-full" />
            </div>
            <div className="bg-green-600 rounded-xl overflow-clip">
              <Image src={portfolio3} alt="" className="object-cover h-full" />
            </div>
            <div className="bg-purple-600 rounded-xl overflow-clip hidden xs:block">
              <Image src={portfolio4} alt="" className="object-cover h-full" />
            </div>
          </div>
        </BentoLarge>
        <BentoLarge className="bentoSlide bg-white/10 col-span-12 lg:col-span-5 row-span-1">
          <div className="flex justify-between mb-6">
            <h2 className="text-white font-bold text-3xl">About</h2>
            <Link href="/about">
              <button className="text-white/80 font-normal text-xl transition-colors hover:text-white">
                See More
              </button>
            </Link>
          </div>
          <p className="text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel
            quasi quis laboriosam magni fugiat debitis, adipisci voluptas,
            quaerat saepe odio harum fuga earum nesciunt temporibus pariatur
            ratione. Rem, esse.
          </p>
        </BentoLarge>
      </section>
    </main>
  );
}
