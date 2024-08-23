import BentoLarge from "../components/BentoLarge";
import Image from "next/image";
import portrait from "../../public/images/demo-portrait.png";
import reactIcon from "../../public/icons/atom.png";
import cssIcon from "../../public/icons/css.png";
import jsIcon from "../../public/icons/js.png";
import bootstrapIcon from "../../public/icons/bootstrap.png";
import nodeIcon from "../../public/icons/node-js.png";
import pythonIcon from "../../public/icons/python.png";
import postgresIcon from "../../public/icons/postgresql.png";
import databaseIcon from "../../public/icons/database.png";
import typescriptIcon from "../../public/icons/typescript.png";
import gitIcon from "../../public/icons/git.png";
import mobileIcon from "../../public/icons/phone.png";
import testingIcon from "../../public/icons/settings.png";

export default function Home() {
  return (
    <div className="aboutBento my-4">
      <BentoLarge className="bentoSlide bg-white/10 md:col-span-6">
        <h1 className="text-white text-5xl font-bold mb-4">Hi, I'm Ryan!</h1>
        <p className="text-white/80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          aliquid voluptatibus amet repellat? Beatae voluptatem nostrum
          perspiciatis, officiis aspernatur optio.
        </p>
      </BentoLarge>
      <BentoLarge className="bentoSlide bg-teal-400 md:col-span-3 relative overflow-clip">
        <Image
          src={portrait}
          alt=""
          className="absolute -bottom-[200px] left-0 scale-150"
        />
      </BentoLarge>
      <BentoLarge className="bentoSlide bg-yellow-400 md:col-span-3">
        <h2 className="text-black text-5xl font-bold mb-4">About</h2>
        <p className="text-black/60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          aliquid voluptatibus amet repellat? Beatae voluptatem nostrum
          perspiciatis, officiis aspernatur optio.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugiat aliquid voluptatibus amet
          repellat? Beatae voluptatem nostrum perspiciatis, officiis aspernatur
          optio.
        </p>
      </BentoLarge>
      <BentoLarge className="bentoSlide bg-white/10 md:col-span-2">
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
      <BentoLarge className="bentoSlide bg-white/10 md:col-span-2">
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
      <BentoLarge className="bentoSlide bg-white/10 md:col-span-2">
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
      <BentoLarge className="bentoSlide bg-red-400 md:col-span-5">
        <h3 className="text-white text-3xl font-bold mb-2">Qualifications</h3>
        <ul className="grid gap-1 text-white/75 font-semibold">
          <li>Level 4 IT Diploma (Backend Development)</li>
          <li>Meta Frontend Developer Certificate</li>
        </ul>
      </BentoLarge>
      <BentoLarge className="bentoSlide bg-white/10 md:col-span-1">
        <h1 className="text-white text-5xl font-bold mb-4">Link</h1>
      </BentoLarge>
      <BentoLarge className="bentoSlide bg-yellow-400 md:col-span-4">
        <h3 className="text-white text-3xl font-bold mb-2">Travel</h3>
        <p className="text-black/60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          aliquid voluptatibus amet repellat? Beatae voluptatem nostrum
          perspiciatis, officiis aspernatur optio.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugiat aliquid voluptatibus amet
          repellat? Beatae voluptatem nostrum perspiciatis, officiis aspernatur
          optio. Fugiat aliquid voluptatibus amet repellat? Beatae voluptatem
          nostrum perspiciatis, officiis aspernatur optio.
        </p>
      </BentoLarge>
      <BentoLarge className="bentoSlide bg-blue-400 md:col-span-2">
        <h3 className="text-white text-3xl font-bold mb-2">Hobbies</h3>
        <p className="text-black/60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          aliquid voluptatibus amet repellat? Beatae voluptatem nostrum
          perspiciatis, officiis aspernatur optio.Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </BentoLarge>
    </div>
  );
}
