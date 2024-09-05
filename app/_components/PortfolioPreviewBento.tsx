import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  image: StaticImageData;
  title: string;
  children: ReactNode;
  link: string;
  tech: string[];
  bgCol: string;
};

export default function PortfolioPreviewBento({
  image,
  title,
  children,
  link,
  tech,
  bgCol,
}: Props) {
  return (
    <div
      className={`${bgCol} w-[240px] sm:w-[300px] inline-block bentoSlide rounded-3xl p-3 sm:p-6`}>
      <div className="portfolioPreviewBento">
        <div className="rounded-xl overflow-clip">
          <Image src={image} alt="" className="object-cover w-full" />
        </div>
        <div className="flex flex-wrap gap-1">
          {tech.map((name) => {
            return (
              <span
                key={name}
                className="bg-black drop-shadow-lg px-2 py-1 text-sm rounded-full text-white">
                {name}
              </span>
            );
          })}
        </div>
        {children}
        <Link className="mt-4" href={link}>
          <span className="bg-black text-white inline-block font-semibold px-6 py-3 w-fit rounded-full transition-all hover:-translate-y-1 hover:bg-neutral-900">
            View Project
          </span>
        </Link>
      </div>
    </div>
  );
}
