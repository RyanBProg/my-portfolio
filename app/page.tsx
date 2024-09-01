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
import jsIcon from "../public/icons/js.png";
import bootstrapIcon from "../public/icons/bootstrap.png";
import pythonIcon from "../public/icons/python.png";
import postgresIcon from "../public/icons/postgresql.png";
import databaseIcon from "../public/icons/database.png";

import gitIcon from "../public/icons/git.png";
import mobileIcon from "../public/icons/phone.png";
import testingIcon from "../public/icons/settings.png";
import TextBento from "./components/TextBento";
import PortfolioPreviewBento from "./components/PortfolioPreviewBento";

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
              &#128075; Hi, I'm Ryan
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

      {/* About section */}

      <section className="my-20">
        <div className="bentoSlide">
          <TextBento title="about me" bgCol="bg-white/20">
            <p className="text-white">
              I'm a passionate Full Stack Developer and professional problem
              solver who loves to build things. I specialize in creating
              responsive and scalable applications, driven by my curiosity and
              commitment to delivering a solution. For the last 10+ years I have
              been working as a mechanical design engineer/draftsperson mainly
              in special purpose machinary and food processing. My programming
              journey started in 2022, when I was working as a design engineer
              and started playing around with writing small scripts for our CAD
              software. Well from then on i was hooked, spending my evenings
              researching and leanring as much as possible. A few scripts turned
              into a suite of tools and i knew then that i wanted to make the
              career change. Jump to today and I now have serval Qualifications
              in web development and a handful of great project that have taught
              me a lot and that i am very proud of.
            </p>
          </TextBento>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <BentoLarge className="bentoSlide bg-white/10">
            <h3 className="text-white text-3xl font-bold mb-2">Frontend</h3>
            <ul className="grid gap-1 text-white/75 font-semibold">
              <li className="flex gap-2 items-center">
                <Image src={reactIcon} alt="" className="size-4" />
                React
              </li>
              <li className="flex gap-2 items-center">
                <Image src={cssIcon} alt="" className="size-4" />
                Tailwind
              </li>
              <li className="flex gap-2 items-center">
                <Image src={cssIcon} alt="" className="size-4" />
                CSS / SCSS
              </li>
              <li className="flex gap-2 items-center">
                <Image src={jsIcon} alt="" className="size-4" />
                Next js
              </li>
              <li className="flex gap-2 items-center">
                <Image src={bootstrapIcon} alt="" className="size-4" />
                Bootstrap
              </li>
            </ul>
          </BentoLarge>
          <BentoLarge className="bentoSlide bg-white/10">
            <h3 className="text-white text-3xl font-bold mb-2">Backend</h3>
            <ul className="grid gap-1 text-white/75 font-semibold">
              <li className="flex gap-2 items-center">
                <Image src={nodeIcon} alt="" className="size-4" />
                Node js
              </li>
              <li className="flex gap-2 items-center">
                <Image src={pythonIcon} alt="" className="size-4" />
                Django
              </li>
              <li className="flex gap-2 items-center">
                <Image src={postgresIcon} alt="" className="size-4" />
                PostgreSQL
              </li>
              <li className="flex gap-2 items-center">
                <Image src={databaseIcon} alt="" className="size-4" />
                MongoDB
              </li>
            </ul>
          </BentoLarge>
          <BentoLarge className="bentoSlide bg-white/10">
            <h3 className="text-white text-3xl font-bold mb-2">Other</h3>
            <ul className="grid gap-1 text-white/75 font-semibold">
              <li className="flex gap-2 items-center">
                <Image src={typescriptIcon} alt="" className="size-4" />
                Typescript
              </li>
              <li className="flex gap-2 items-center">
                <Image src={gitIcon} alt="" className="size-4" />
                Git
              </li>
              <li className="flex gap-2 items-center">
                <Image src={mobileIcon} alt="" className="size-4" />
                Responsive Design
              </li>
              <li className="flex gap-2 items-center">
                <Image src={testingIcon} alt="" className="size-4" />
                Testing
              </li>
            </ul>
          </BentoLarge>
        </div>
      </section>

      {/* Portfolio section */}

      <section className="my-20">
        <h2 className="text-white text-[4rem] font-semibold mb-5 pl-5 bentoSlide">
          Portfolio
        </h2>
        <div className="grid gap-4 grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2">
          <PortfolioPreviewBento
            title="shoe junky"
            image={portfolio1}
            tech={["Next.js", "Tailwind", "Node.js"]}
            link="/shoe-junky"
            bgCol="bg-blue-400">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos animi fuga optio eligendi ratione aspernatur voluptate
              doloremque doloribus, vero quas facilis excepturi?
            </p>
          </PortfolioPreviewBento>
          <PortfolioPreviewBento
            title="url shorty"
            image={portfolio2}
            tech={["Next.js", "Tailwind", "Node.js"]}
            link="/url-shorty"
            bgCol="bg-white/10">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos animi fuga optio eligendi ratione aspernatur voluptate
              doloremque doloribus, vero quas facilis excepturi?
            </p>
          </PortfolioPreviewBento>
          <PortfolioPreviewBento
            title="bookmarker"
            image={portfolio3}
            tech={["Next.js", "Tailwind", "Node.js"]}
            link="/bookmarker"
            bgCol="bg-white/10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos animi fuga optio eligendi ratione aspernatur voluptate
              doloremque doloribus, vero quas facilis excepturi?
            </p>
          </PortfolioPreviewBento>
          <PortfolioPreviewBento
            title="taste oasis"
            image={portfolio4}
            tech={["Next.js", "Tailwind", "Node.js"]}
            link="/taste-oasis"
            bgCol="bg-teal-400">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos animi fuga optio eligendi ratione aspernatur voluptate
              doloremque doloribus, vero quas facilis excepturi?
            </p>
          </PortfolioPreviewBento>
        </div>
      </section>

      {/* Travel section */}

      <section className="my-20 bentoSlide">
        <TextBento title="travel" bgCol="bg-yellow-400">
          <p>
            Travelling is a very important part of my life and something i
            really love. I am fortunate to have been able to travel to many
            different parts of the world, and this is something I intend on
            continuing. They say travel broudens the mind and I couldn't agree
            more, i have gained so much more knowledge about life that i
            wouldn't of otherwise. Currently i've been to 29 different countries
            and 6 out of the 7 continents.
          </p>
        </TextBento>
      </section>

      {/* Hobbies section */}

      <section className="my-20 bentoSlide">
        <TextBento title="hobbies" bgCol="bg-blue-400">
          <p>
            Most days you can find me out skateboarding or at the gym, I love to
            be outside and active as much as possible. When im too broken to be
            active i'm also known to grow different varities of chilli and
            strange vegetables, my rule is if i can buy it in the shops, im not
            growing it! Me and my partner also enjoy cooking together, my
            specialty dish is a caribbean goat curry.
          </p>
        </TextBento>
      </section>
    </main>
  );
}
