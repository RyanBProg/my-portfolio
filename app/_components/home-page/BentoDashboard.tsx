import Image from "next/image";
import linkedinIcon from "../../../public/icons/linkedin.png";
import instaIcon from "../../../public/icons/instagram.png";
import webIcon from "../../../public/icons/web.png";
import githubIcon from "../../../public/icons/github.png";
import typescriptIcon from "../../../public/icons/typescript.png";
import reactIcon from "../../../public/icons/atom.png";
import cssIcon from "../../../public/icons/css.png";
import nodeIcon from "../../../public/icons/node-js.png";
import ryanImg from "../../../public/images/me-skate.jpg";
import TextBento from "../TextBento";

export default function BentoDashboard() {
  return (
    <section className="grid gap-4 mb-64">
      <div className="grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 gap-4">
        <div className="bg-red-300 rounded-3xl p-6 bentoSlide">
          <p className="text-center text-black text-lg font-medium">
            <span className="block text-5xl font-bold mb-2">3+</span>
            Years Coding Experience
          </p>
        </div>
        <div className="bg-red-400 rounded-3xl p-6 bentoSlide">
          <p className="text-center text-white text-lg font-medium">
            <span className="block text-5xl font-bold mb-2">10+</span>Years in
            Engineering
          </p>
        </div>
        <div className="bg-pink-500 rounded-3xl p-6 bentoSlide">
          <p className="text-center text-white text-lg font-medium">
            <span className="block text-5xl font-bold mb-2">5+</span>
            Projects Completed
          </p>
        </div>
      </div>
      <div className="dashboardBento">
        <div className="rounded-3xl bentoSlide h-full bg-neutral-800 sm:row-span-2 overflow-clip">
          <Image src={ryanImg} alt="" className="object-cover h-full" />
        </div>
        <div className="rounded-3xl p-4 sm:p-6 bentoSlide bg-neutral-500 flex justify-center items-center gap-2 sm:gap-4">
          <button className="bg-neutral-400 rounded-full shadow-lg transition-all hover:-translate-y-1 hover:bg-neutral-200">
            <Image src={githubIcon} className="size-12" alt="" />
          </button>
          <button className="bg-neutral-400 rounded-full shadow-lg transition-all hover:-translate-y-1 hover:bg-neutral-200">
            <Image src={linkedinIcon} className="size-12" alt="" />
          </button>
          <button className="bg-neutral-400 rounded-full shadow-lg transition-all hover:-translate-y-1 hover:bg-neutral-200">
            <Image src={webIcon} className="size-12" alt="" />
          </button>
          <button className="bg-neutral-400 rounded-full shadow-lg transition-all hover:-translate-y-1 hover:bg-neutral-200">
            <Image src={instaIcon} className="size-12" alt="" />
          </button>
        </div>
        <TextBento bgCol="bg-neutral-800">
          <h3 className="text-2xl font-bold text-white mb-4">Core Skills</h3>
          <ul className="text-neutral-300 font-medium flex flex-col gap-3 text-[1.1rem]">
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
              React / Next js
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
        </TextBento>
      </div>
    </section>
  );
}
