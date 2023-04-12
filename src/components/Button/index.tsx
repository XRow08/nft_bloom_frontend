"use client";
import classNames from "classnames";

type Props = {
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
  onClick?: any;
};

export function Button({
  type = "button",
  className,
  children,
  onClick,
}: Props) {
  return (
    <button
      onClick={() => onClick}
      type={type}
      className={classNames(
        "font-mplus bg-brand-secundary text-white rounded-lg transition-all ease-in-out duration-200 no-underline drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] hover:scale-[1.02]",
        className
      )}
    >
      {children}
    </button>
  );
}
