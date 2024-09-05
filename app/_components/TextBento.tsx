import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  bgCol: string;
};

export default function TextBento({ children, bgCol }: Props) {
  return (
    <div className={`${bgCol} bentoSlide rounded-3xl p-4 sm:p-6`}>
      {children}
    </div>
  );
}
