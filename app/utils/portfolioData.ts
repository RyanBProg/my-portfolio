import typescriptIcon from "../../public/icons/typescript.png";
import reactIcon from "../../public/icons/atom.png";
import cssIcon from "../../public/icons/css.png";
import nodeIcon from "../../public/icons/node-js.png";
import urlShorty from "../../public/images/url-shorty.png";
import shoeJunky from "../../public/images/shoe-junky.png";
import bookmarker from "../../public/images/bookmarker.png";

const typescriptBadge = {
  title: "Typescript",
  icon: typescriptIcon,
};

const reactBadge = {
  title: "React",
  icon: reactIcon,
};

const cssBadge = {
  title: "CSS",
  icon: cssIcon,
};

const nodeBadge = {
  title: "Node",
  icon: nodeIcon,
};

export const portfolioData = [
  {
    title: "URL Shorty",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum iure blanditiis aliquam repudiandae ullam, quibusdam in soluta, incidunt provident vitae error itaque exercitationem porro labore dolor deserunt quas debitis illo numquam? Pariatur minima dignissimos recusandae similique ullam. Nam, nobis cupiditate.",
    stack: [
      typescriptBadge,
      reactBadge,
      cssBadge,
      nodeBadge,
      typescriptBadge,
      reactBadge,
    ],
    link: "/",
    color: "red",
    images: [urlShorty, urlShorty, urlShorty, urlShorty],
  },
  {
    title: "Shoe Junky",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum iure blanditiis aliquam repudiandae ullam, quibusdam in soluta, incidunt provident vitae error itaque exercitationem porro labore dolor deserunt quas debitis illo numquam? Pariatur minima dignissimos recusandae similique ullam. Nam, nobis cupiditate.",
    stack: [
      typescriptBadge,
      reactBadge,
      cssBadge,
      nodeBadge,
      typescriptBadge,
      reactBadge,
    ],
    link: "/",
    color: "teal",
    images: [shoeJunky, shoeJunky, shoeJunky, shoeJunky],
  },
  {
    title: "Bookmarker",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum iure blanditiis aliquam repudiandae ullam, quibusdam in soluta, incidunt provident vitae error itaque exercitationem porro labore dolor deserunt quas debitis illo numquam? Pariatur minima dignissimos recusandae similique ullam. Nam, nobis cupiditate.",
    stack: [
      typescriptBadge,
      reactBadge,
      cssBadge,
      nodeBadge,
      typescriptBadge,
      reactBadge,
    ],
    link: "/",
    color: "blue",
    images: [bookmarker, bookmarker, bookmarker, bookmarker],
  },
];
