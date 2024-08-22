"use client";

import BentoLarge from "../components/BentoLarge";
import Image from "next/image";
import Link from "next/link";
import { TPortfolioData } from "../utils/types";
import { portfolioData } from "../utils/portfolioData";

export default function Home() {
  return (
    <>
      <BentoLarge className="bg-white/10 col-span-2 flex items-center mt-4">
        <h1 className="text-white text-2xl xs:text-4xl font-bold">
          My Portfolio
        </h1>
      </BentoLarge>
      {portfolioData.map((data) => (
        <PortfolioBento data={data} />
      ))}
    </>
  );
}

type PortfolioBentoProps = {
  data: TPortfolioData;
};

function PortfolioBento({ data }: PortfolioBentoProps) {
  return (
    <section className="my-4 porfolioBento">
      <BentoLarge
        className={`max-h-[400px] lg:max-h-full lg:row-span-2 bg-${data.color}-400 flex flex-col gap-4`}>
        <div className="flex justify-between">
          <p className="text-2xl xs:text-3xl font-bold">{data.title}</p>
          <Link href={data.link}>
            <div className="bg-white/75 rounded-full w-full px-4 py-2 font-semibold shadow-lg ring-1 ring-black/5 h-fit transition-colors hover:bg-white/40">
              <p>Visit</p>
            </div>
          </Link>
        </div>
        <div className="flex overflow-x-scroll gap-4 pb-4">
          {data.images.map((image) => (
            <Image
              src={image}
              alt=""
              className="object-cover rounded-xl w-[280px] lg:w-[380px]"
            />
          ))}
        </div>
      </BentoLarge>
      <BentoLarge className="bg-white/10 text-white">
        <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
        <ul className="text-white/80 font-medium grid xs:grid-cols-2 xs:grid-rows-3 md:grid-cols-1 md:grid-rows-6 lg:grid-cols-2 lg:grid-rows-3 gap-3 text-[1.1rem]">
          {data.stack.map((badge) => (
            <li>
              <Image
                src={badge.icon}
                alt=""
                className="inline-block mr-2 size-7"
              />
              {badge.title}
            </li>
          ))}
        </ul>
      </BentoLarge>
      <BentoLarge
        className={`md:col-span-2 lg:col-span-1 bg-${data.color}-400 relative`}>
        <p>{data.description}</p>
      </BentoLarge>
    </section>
  );
}
