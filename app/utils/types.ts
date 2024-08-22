import { StaticImageData } from "next/image";

type TBadgeType = {
  title: string;
  icon: StaticImageData;
};

export type TPortfolioData = {
  title: string;
  description: string;
  stack: Array<TBadgeType>;
  link: string;
  color: string;
  images: Array<StaticImageData>;
};
