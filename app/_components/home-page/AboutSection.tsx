import Image from "next/image";
import typescriptIcon from "../../../public/icons/typescript.png";
import reactIcon from "../../../public/icons/atom.png";
import cssIcon from "../../../public/icons/css.png";
import nodeIcon from "../../../public/icons/node-js.png";
import jsIcon from "../../../public/icons/js.png";
import bootstrapIcon from "../../../public/icons/bootstrap.png";
import pythonIcon from "../../../public/icons/python.png";
import postgresIcon from "../../../public/icons/postgresql.png";
import databaseIcon from "../../../public/icons/database.png";
import gitIcon from "../../../public/icons/git.png";
import mobileIcon from "../../../public/icons/phone.png";
import testingIcon from "../../../public/icons/settings.png";
import TextBento from "../TextBento";
import TitleBento from "../TitleBento";

export default function AboutSection() {
  return (
    <section className="mb-64">
      <div className="mb-10">
        <h2 className="sectionTitle">About Me</h2>
        <p className="text-neutral-400 mb-4">
          My programming journey{" "}
          <span className="text-white font-semibold">started in 2022</span>,
          when I began writing small scripts for our CAD software, I discovered
          how much I enjoyed coding and I&apos;ve been hooked ever since. What
          started as a few small scripts turned into a whole suite of tools that
          helped streamline our work, and that&apos;s when I realized it was
          time for a career change.
        </p>
        <p className="text-neutral-400 mb-4">
          I dove headfirst into web development, spending my evenings (and
          plenty of late nights!) learning everything I could. Fast forward to
          today, and I&apos;ve earned a few web development qualifications and{" "}
          <span className="text-white font-semibold">
            built several projects
          </span>{" "}
          that I&apos;m really proud of. For the previous 10 years, I worked as
          a mechanical design engineer in the world of special-purpose machinery
          and food processing.
        </p>
        <p className="text-neutral-400">
          Now, I get to combine my{" "}
          <span className="text-white font-semibold">engineering mindset</span>{" "}
          with my passion for coding to build responsive, scalable apps that
          solve real-world problems. Whether it&apos;s crafting a sleek
          front-end or getting into the nitty-gritty of the back-end, I love
          what I do—and I&apos;m always up for the next challenge.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <TextBento bgCol="bg-neutral-800">
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
        </TextBento>
        <TextBento bgCol="bg-neutral-800">
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
        </TextBento>
        <TextBento bgCol="bg-neutral-800">
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
        </TextBento>
      </div>
    </section>
  );
}
