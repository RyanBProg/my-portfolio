import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  bgCol: string;
};

export default function TextBento({ title, children, bgCol }: Props) {
  return (
    <div>
      <h2 className="text-white text-[2.5rem] sm:text-[4rem] font-bold capitalize">
        {title}
      </h2>
      <div className={`${bgCol} bentoSlide rounded-3xl p-4 sm:p-6`}>
        {children}
      </div>
    </div>
  );
}
