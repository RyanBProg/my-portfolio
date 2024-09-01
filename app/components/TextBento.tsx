import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  bgCol: string;
};

export default function TextBento({ title, children, bgCol }: Props) {
  return (
    <>
      <h2 className="text-white text-[3.5rem] sm:text-[4rem] font-semibold capitalize -mb-9 sm:-mb-12 pl-5 sm:pl-10">
        {title}
      </h2>
      <div className={`${bgCol} rounded-3xl p-6 pt-8 sm:p-10`}>{children}</div>
    </>
  );
}
