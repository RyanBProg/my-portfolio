"use client";

import Image from "next/image";
import Link from "next/link";
import TextBento from "../_components/TextBento";
import typescriptIcon from "../../public/icons/typescript.png";
import reactIcon from "../../public/icons/atom.png";
import cssIcon from "../../public/icons/css.png";
import nodeIcon from "../../public/icons/node-js.png";
import urlShorty from "../../public/images/url-shorty.png";

const imageList = [urlShorty, urlShorty, urlShorty, urlShorty];
const stackList = [
  { title: "React", icon: reactIcon },
  { title: "Typescript", icon: typescriptIcon },
  { title: "Tailwind", icon: cssIcon },
  { title: "Node js", icon: nodeIcon },
  { title: "Tailwind", icon: cssIcon },
  { title: "Node js", icon: nodeIcon },
];

export default function Portfolio() {
  return (
    <>
      <div className="mt-20 mb-4 flex justify-between items-center">
        <h1 className="sectionTitle">URL Shorty</h1>
        <Link href="/">
          <span className="inline-block bg-red-400 rounded-full w-full px-4 py-2 text-lg font-semibold shadow-lg ring-1 ring-black/5 h-fit transition-all hover:-translate-y-1 hover:brightness-110">
            Visit
          </span>
        </Link>
      </div>

      <PortfolioBento />
    </>
  );
}

function PortfolioBento() {
  return (
    <section className="porfolioBento mb-20">
      <div className="max-h-[400px] md:col-span-2 flex flex-col gap-4">
        <div className="flex overflow-x-scroll scroll-container gap-4 pb-4">
          {imageList.map((image) => (
            <Image
              src={image}
              alt=""
              className="object-cover rounded-xl w-[255px] xs:w-[380px] lg:w-[450px]"
            />
          ))}
        </div>
      </div>
      <TextBento bgCol="bg-neutral-800">
        <h2 className="text-2xl font-bold mb-4 text-white">Tech Stack</h2>
        <ul className="text-neutral-300 font-medium grid xs:grid-cols-2 xs:grid-rows-3 md:grid-cols-1 md:grid-rows-6 lg:grid-cols-2 lg:grid-rows-3 gap-y-4 gap-x-6 text-[1.1rem]">
          {stackList.map((badge) => (
            <li key={badge.title}>
              <Image
                src={badge.icon}
                alt=""
                className="inline-block mr-2 size-7"
              />
              {badge.title}
            </li>
          ))}
        </ul>
      </TextBento>
      <div className="text-neutral-400 relative">
        <p className="mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          libero ea recusandae, maxime distinctio, consectetur illo nemo
          aliquam, vel facilis aliquid atque cumque debitis quod quo ut eveniet.
          Ipsa nemo laborum vitae amet! Quaerat deleniti, nemo perspiciatis
          mollitia doloribus quia eos quos aut soluta quis nihil. Consequuntur
          iste quasi earum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          praesentium eveniet ratione ullam nemo perspiciatis architecto sit
          cupiditate corporis, laborum mollitia, fugiat eos nam numquam sapiente
          vitae, obcaecati facere ab!
        </p>
      </div>
    </section>
  );
}
