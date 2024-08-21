import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className: string;
};

export default function BentoLarge({ children, className }: Props) {
  return (
    <div
      className={`rounded-3xl p-3 xs:p-6 transition-transform hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
}
