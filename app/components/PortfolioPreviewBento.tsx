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
      className={`${bgCol} bentoSlide mb-4 flex flex-col sm:flex-row justify-between items-start gap-4 sm:items-center rounded-3xl p-3 xs:p-10`}>
      <div className="portfolioPreviewBento">
        <div className="rounded-xl overflow-clip max-w-[350px] lg:row-span-3">
          <Image src={image} alt="" className="object-cover h-full" />
        </div>
        <div className="flex gap-1 h-min mt-5 lg:mt-0">
          {tech.map((name) => {
            return (
              <span className="bg-black/30 drop-shadow-lg px-2 py-1 text-sm rounded-full text-white">
                {name}
              </span>
            );
          })}
        </div>
        {children}
        <Link href={link}>
          <span className="bg-black text-white font-semibold px-6 py-3 w-fit rounded-full">
            View Project
          </span>
        </Link>
      </div>
    </div>
  );
}
