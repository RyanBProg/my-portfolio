"use client";

import linkedinIcon from "../../public/icons/linkedin.png";
import instaIcon from "../../public/icons/instagram.png";
import webIcon from "../../public/icons/web.png";
import githubIcon from "../../public/icons/github.png";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";

type TFormInputs = {
  name: string;
  email: string;
  number: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormInputs>();

  const onSubmit: SubmitHandler<TFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex lg:items-center my-20 lg:my-40 gap-4 lg:gap-10 flex-col lg:flex-row">
        <div className="flex-1 mb-20 lg:mb-0">
          <h1 className="sectionTitle">Let&apos;s Collaborate!</h1>
          <p className="text-neutral-400 max-w-[600px]">
            I&apos;m always excited to connect with others who are as passionate
            about technology and building new projects as I am. If you think we
            can{" "}
            <span className="text-white font-semibold">
              build something great together
            </span>
            , don&apos;t hesitate to reach out.
          </p>
        </div>
        <div className="flex-1">
          <form
            noValidate
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name" className="grid gap-2 text-white relative">
              Name
              <input
                id="name"
                type="text"
                className="px-4 py-3 rounded-lg bg-neutral-800 text-neutral-200 placeholder:text-neutral-500"
                placeholder="Joe Bloggs"
                {...register("name", { required: "Name Required" })}
              />
              {errors.name && (
                <span className="text-red-400 absolute top-0 right-0">
                  {errors.name.message}
                </span>
              )}
            </label>
            <label htmlFor="email" className="grid gap-2 text-white relative">
              Email
              <input
                id="email"
                type="text"
                className="px-4 py-3 rounded-lg bg-neutral-800 text-neutral-200 placeholder:text-neutral-500"
                placeholder="joebloggs@gmail.com"
                {...register("email", {
                  required: "Email Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid Email Address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-400 absolute top-0 right-0">
                  {errors.email.message}
                </span>
              )}
            </label>
            <label htmlFor="number" className="grid gap-2 text-white relative">
              Phone Number
              <input
                id="number"
                type="text"
                className="px-4 py-3 rounded-lg bg-neutral-800 text-neutral-200 placeholder:text-neutral-500"
                placeholder="12345678910"
                {...register("number", {
                  required: "Number Required",
                })}
              />
              {errors.number && (
                <span className="text-red-400 absolute top-0 right-0">
                  {errors.number.message}
                </span>
              )}
            </label>
            <label htmlFor="message" className="grid gap-2 text-white relative">
              Message
              <textarea
                id="message"
                rows={3}
                className="px-4 py-3 rounded-lg bg-neutral-800 text-neutral-200 placeholder:text-neutral-500"
                placeholder="Hi, I'm Joe Bloggs..."
                {...register("message", {
                  required: "Message Required",
                })}></textarea>
              {errors.message && (
                <span className="text-red-400 absolute top-0 right-0">
                  {errors.message.message}
                </span>
              )}
            </label>
            <button
              type="submit"
              className="mt-4 rounded-lg text-white bg-neutral-800 font-semibold py-4 uppercase transition-colors hover:bg-neutral-700">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="bg-blue-400 mb-4 flex flex-col sm:flex-row justify-between items-start gap-4 sm:items-center rounded-3xl p-4 sm:p-6">
        <h2 className="text-black text-3xl sm:text-5xl font-bold">Socials</h2>
        <div className="flex gap-4">
          <button className="bg-white/30 rounded-full max-w-12 max-h-12 shadow-lg transition-all hover:-translate-y-1 hover:bg-white/75">
            <Image src={githubIcon} alt="" />
          </button>
          <button className="bg-white/30 rounded-full max-w-12 max-h-12 shadow-lg transition-all hover:-translate-y-1 hover:bg-white/75">
            <Image src={linkedinIcon} alt="" />
          </button>
          <button className="bg-white/30 rounded-full max-w-12 max-h-12 shadow-lg transition-all hover:-translate-y-1 hover:bg-white/75">
            <Image src={webIcon} alt="" />
          </button>
          <button className="bg-white/30 rounded-full max-w-12 max-h-12 shadow-lg transition-all hover:-translate-y-1 hover:bg-white/75">
            <Image src={instaIcon} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
